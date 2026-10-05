"use client";

import { useEffect, useRef } from "react";

/**
 * Flowing-ink background: a WebGL fragment shader doing domain-warped
 * fbm noise in near-black grays — the "liquid smoke" look. Renders at
 * reduced resolution (the look is soft anyway), pauses when the tab is
 * hidden, and draws a single static frame under prefers-reduced-motion.
 * If WebGL is unavailable it simply stays transparent.
 */
const FRAG = `
precision mediump float;
uniform vec2 uRes;
uniform float uTime;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}
float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}
float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p = p * 2.03 + vec2(13.7, 7.1);
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 p = gl_FragCoord.xy / uRes.y * 1.6;
  float t = uTime * 0.045;

  vec2 q = vec2(fbm(p + vec2(0.0, 0.3) + 0.10 * t),
                fbm(p + vec2(5.2, 1.3) - 0.07 * t));
  vec2 r = vec2(fbm(p + 3.5 * q + vec2(1.7, 9.2) + 0.15 * t),
                fbm(p + 3.5 * q + vec2(8.3, 2.8) - 0.12 * t));
  float f = fbm(p + 3.0 * r);

  // near-black ink with soft gray veins and rare pale streaks
  vec3 col = mix(vec3(0.012), vec3(0.075, 0.075, 0.082), smoothstep(0.1, 0.9, f));
  col = mix(col, vec3(0.19, 0.19, 0.20), smoothstep(0.55, 0.95, f * length(r)));
  col += vec3(0.38) * pow(max(f - 0.62, 0.0) * 2.6, 3.0);

  // vignette so edges melt into the page background
  vec2 uv = gl_FragCoord.xy / uRes;
  col *= 0.75 + 0.25 * pow(16.0 * uv.x * uv.y * (1.0 - uv.x) * (1.0 - uv.y), 0.35);

  gl_FragColor = vec4(col, 1.0);
}
`;

const VERT = `
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`;

export default function ShaderBg() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", {
      antialias: false,
      depth: false,
      stencil: false,
      powerPreference: "low-power",
    });
    if (!gl) return;

    const compile = (type: number, src: string) => {
      const sh = gl.createShader(type)!;
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      return gl.getShaderParameter(sh, gl.COMPILE_STATUS) ? sh : null;
    };
    const vs = compile(gl.VERTEX_SHADER, VERT);
    const fs = compile(gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;
    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW,
    );
    const loc = gl.getAttribLocation(prog, "aPos");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "uRes");
    const uTime = gl.getUniformLocation(prog, "uTime");

    // The noise is soft — render at 55% and let CSS stretch it.
    const SCALE = 0.55;
    const resize = () => {
      const w = Math.max(1, Math.floor(canvas.clientWidth * SCALE));
      const h = Math.max(1, Math.floor(canvas.clientHeight * SCALE));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
      gl.uniform2f(uRes, canvas.width, canvas.height);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const start = performance.now();
    const frame = () => {
      if (!document.hidden) {
        gl.uniform1f(uTime, (performance.now() - start) / 1000 + 40);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
      }
      if (!reduced) raf = requestAnimationFrame(frame);
    };
    frame();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="absolute inset-0 h-full w-full"
    />
  );
}
