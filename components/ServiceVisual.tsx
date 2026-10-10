import type { Service } from "@/content";

/** Small themed illustration per service — pure CSS/SVG, no JS. */
export default function ServiceVisual({
  kind,
  accent,
}: {
  kind: Service["visual"];
  accent: string;
}) {
  if (kind === "code")
    return (
      <div className="w-full rounded-xl border border-line-strong bg-[#101014] p-5 font-mono text-[0.78rem] leading-relaxed text-[#d4d4d8] shadow-[6px_6px_0_var(--acc)]">
        <div className="mb-3 flex gap-1.5">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
        </div>
        <p><span className="text-[#7dd3fc]">const</span> <span className="text-[#fbbf24]">site</span> = <span className="text-[#7dd3fc]">await</span> build({"{"}</p>
        <p className="pl-5">design: <span className="text-[#86efac]">"figma"</span>,</p>
        <p className="pl-5">stack: [<span className="text-[#86efac]">"react"</span>, <span className="text-[#86efac]">"next.js"</span>],</p>
        <p className="pl-5">copy: <span className="text-[#86efac]">"included"</span>,</p>
        <p>{"}"});</p>
        <p>deploy(site, <span className="text-[#86efac]">"vercel"</span>);<span className="caret ml-1 inline-block h-4 w-2 translate-y-0.5 bg-[#d4d4d8]" /></p>
      </div>
    );

  if (kind === "design")
    return (
      <div className="relative w-full overflow-hidden rounded-xl border border-line bg-surface p-8 shadow-[6px_6px_0_var(--acc)]" style={{ backgroundImage: "radial-gradient(var(--border) 1px, transparent 1px)", backgroundSize: "18px 18px" }}>
        <span className="absolute left-2 top-2 text-[0.6rem] font-semibold text-dim">Y</span>
        <span className="absolute bottom-2 right-2 text-[0.6rem] font-semibold text-dim">X</span>
        <div className="relative mx-auto h-36 max-w-[220px] rounded-md border-2" style={{ borderColor: accent }}>
          {["-left-1 -top-1","-right-1 -top-1","-left-1 -bottom-1","-right-1 -bottom-1"].map(c => (
            <span key={c} className={`absolute ${c} size-2 border bg-white`} style={{ borderColor: accent }} />
          ))}
          <span className="absolute -top-7 left-0 rounded px-1.5 py-0.5 text-[0.6rem] font-semibold text-white" style={{ background: accent }}>Hero / 1440</span>
          <div className="p-4">
            <div className="h-2.5 w-3/4 rounded-sm bg-surface-2" />
            <div className="mt-2 h-2.5 w-1/2 rounded-sm bg-surface-2" />
            <div className="mt-4 h-6 w-20 rounded-md" style={{ background: accent, opacity: 0.85 }} />
          </div>
        </div>
      </div>
    );

  if (kind === "outbound")
    return (
      <div className="w-full space-y-3">
        {[
          { day: "Day 1", line: "Quick question about {{company}}", s: "Sent" },
          { day: "Day 3", line: "Re: quick question", s: "Opened" },
          { day: "Day 7", line: "Worth 15 minutes?", s: "Replied ✓" },
        ].map((m, i) => (
          <div key={m.day} className="card flex items-center gap-4 p-4" style={{ marginLeft: i * 18, boxShadow: i === 2 ? "6px 6px 0 var(--acc)" : undefined }}>
            <span className="chip !px-2.5 !py-1 !text-[0.65rem]">{m.day}</span>
            <p className="min-w-0 flex-1 truncate text-sm text-ink">{m.line}</p>
            <span className="text-xs font-semibold" style={{ color: i === 2 ? accent : "var(--dim)" }}>{m.s}</span>
          </div>
        ))}
      </div>
    );

  if (kind === "pm")
    return (
      <div className="card relative w-full p-8 shadow-[6px_6px_0_var(--acc)]">
        <div className="relative mx-auto h-44 max-w-[260px]">
          <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-line" />
          <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-line" />
          <span className="absolute left-1/2 top-[-1.4rem] -translate-x-1/2 text-[0.6rem] font-semibold uppercase text-dim">Premium</span>
          <span className="absolute bottom-[-1.4rem] left-1/2 -translate-x-1/2 text-[0.6rem] font-semibold uppercase text-dim">Simple</span>
          {[["18%","30%"],["68%","22%"],["30%","68%"]].map(([l,t],i)=>(
            <span key={i} className="absolute size-3 rounded-full bg-dim/50" style={{ left:l, top:t }} />
          ))}
          <span className="absolute size-5 rounded-full border-2 border-white shadow-md" style={{ left: "62%", top: "58%", background: accent }} />
          <span className="absolute rounded px-1.5 py-0.5 text-[0.6rem] font-bold text-white" style={{ left: "52%", top: "74%", background: accent }}>You are here</span>
        </div>
      </div>
    );

  // community
  const sats: { r: string; d: string; delay: string; e: string }[] = [
    { r: "7rem", d: "16s", delay: "0s", e: "\u{1F680}" },
    { r: "7rem", d: "16s", delay: "-8s", e: "\u{1F4AC}" },
    { r: "4.5rem", d: "10s", delay: "0s", e: "\u2B50" },
    { r: "4.5rem", d: "10s", delay: "-5s", e: "\u{1F464}" },
  ];
  return (
    <div className="card relative mx-auto grid aspect-square w-full max-w-[300px] place-items-center overflow-hidden rounded-full p-6">
      <span className="absolute inset-8 rounded-full border border-dashed border-line" />
      <span className="absolute inset-20 rounded-full border border-dashed border-line" />
      <span
        className="display grid size-16 place-items-center rounded-full text-xl text-white"
        style={{ background: accent }}
      >
        H
      </span>
      {sats.map((sat, i) => (
        <span
          key={i}
          className="orbit absolute grid size-9 place-items-center rounded-full border border-line bg-surface text-sm shadow-sm"
          style={
            {
              "--r": sat.r,
              "--d": sat.d,
              animationDelay: sat.delay,
            } as React.CSSProperties
          }
        >
          {sat.e}
        </span>
      ))}
    </div>
  );
}
