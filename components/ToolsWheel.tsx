"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import { toolWheel } from "@/content";

const STEP = 14; // degrees between wheel items

export default function ToolsWheel() {
  const [active, setActive] = useState(0);
  const hover = useRef(false);

  // Auto-advance, paused on hover and under reduced motion.
  useEffect(() => {
    const id = setInterval(() => {
      if (!hover.current) setActive((a) => (a + 1) % toolWheel.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  const cat = toolWheel[active];

  return (
    <div
      className="rounded-[2rem] bg-[#0d0d0f] p-3 sm:p-4"
      onMouseEnter={() => (hover.current = true)}
      onMouseLeave={() => (hover.current = false)}
    >
      <div className="grid overflow-hidden rounded-3xl bg-surface lg:grid-cols-[1.05fr_1fr]">
        {/* The wheel */}
        <div className="relative hidden h-[480px] overflow-hidden lg:block">
          {toolWheel.map((c, i) => {
            const d = i - active;
            const dist = Math.abs(d);
            return (
              <button
                key={c.category}
                onClick={() => setActive(i)}
                className="display absolute left-8 top-1/2 origin-[-260px_50%] whitespace-nowrap text-left text-3xl font-bold uppercase tracking-tight transition-[transform,color,opacity] duration-300"
                style={{
                  transform: `translateY(-50%) rotate(${d * STEP}deg)`,
                  color: dist === 0 ? "var(--ink)" : "var(--dim)",
                  opacity: dist === 0 ? 1 : dist === 1 ? 0.55 : dist === 2 ? 0.28 : 0.1,
                }}
                aria-current={dist === 0}
              >
                {c.category}
                <sup className="ml-2 text-xs font-semibold text-dim">
                  {String(i + 1).padStart(2, "0")}
                </sup>
              </button>
            );
          })}
        </div>

        {/* Mobile: category pills */}
        <div className="flex gap-2 overflow-x-auto p-5 lg:hidden">
          {toolWheel.map((c, i) => (
            <button
              key={c.category}
              onClick={() => setActive(i)}
              className="chip shrink-0 !text-xs"
              style={
                i === active
                  ? { background: "var(--ink)", color: "#fff", borderColor: "var(--ink)" }
                  : undefined
              }
            >
              {c.category}
            </button>
          ))}
        </div>

        {/* Active category tools */}
        <div className="border-line p-7 sm:p-10 lg:border-l">
          <p className="text-xs font-semibold uppercase tracking-widest text-dim">
            {String(active + 1).padStart(2, "0")} / {String(toolWheel.length).padStart(2, "0")}
          </p>
          <h3 className="display mt-2 text-3xl text-ink">{cat.category}</h3>
          <ul key={active} className="mt-7 flex flex-wrap gap-2.5">
            {cat.tools.map((t, i) => (
              <li
                key={t.name}
                className="pop-in flex items-center gap-2.5 rounded-full border border-line bg-bg px-4 py-2"
                style={{ animationDelay: `${i * 30}ms` }}
              >
                {t.icon ? (
                  <img src={t.icon} alt="" className="size-4" loading="lazy" />
                ) : (
                  <span className="grid size-4 place-items-center rounded-full bg-ink text-[0.55rem] font-bold text-white">
                    {t.name[0]}
                  </span>
                )}
                <span className="text-sm font-medium text-ink">{t.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
