/* eslint-disable @next/next/no-img-element */
import type { Service } from "@/content";

/** Themed illustration per service — pure CSS/SVG, no JS. */
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
          <span className="absolute -top-7 left-0 rounded px-1.5 py-0.5 text-[0.6rem] font-semibold text-white" style={{ background: accent }}>Flow / Hero</span>
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
      <div className="card w-full p-6 shadow-[6px_6px_0_var(--acc)]">
        <p className="text-xs font-semibold uppercase tracking-wider text-dim">Launch plan — Q4</p>
        <ul className="mt-4 space-y-3">
          {[
            { t: "Research & positioning", done: true },
            { t: "Messaging locked with sales", done: true },
            { t: "SEO + PPC teams briefed", done: true },
            { t: "Landing page live", done: true },
            { t: "Product Hunt launch", done: false },
          ].map((it) => (
            <li key={it.t} className="flex items-center gap-3 text-sm">
              <span
                className="grid size-5 shrink-0 place-items-center rounded-md border text-[0.6rem] font-bold text-white"
                style={{ background: it.done ? accent : "transparent", borderColor: it.done ? accent : "var(--border)" }}
              >
                {it.done ? "✓" : ""}
              </span>
              <span className={it.done ? "text-ink" : "text-dim"}>{it.t}</span>
              {!it.done && <span className="ml-auto rounded px-1.5 py-0.5 text-[0.6rem] font-bold text-white" style={{ background: accent }}>NEXT</span>}
            </li>
          ))}
        </ul>
      </div>
    );

  if (kind === "ads")
    return (
      <div className="card w-full p-6 shadow-[6px_6px_0_var(--acc)]">
        <div className="flex items-baseline justify-between">
          <p className="text-xs font-semibold uppercase tracking-wider text-dim">Campaign — ABM / Decision makers</p>
          <span className="text-xs font-bold" style={{ color: accent }}>Active</span>
        </div>
        <div className="mt-5 flex h-28 items-end gap-2">
          {[35, 55, 42, 70, 62, 88, 100].map((h, i) => (
            <span key={i} className="flex-1 rounded-t-md" style={{ height: `${h}%`, background: accent, opacity: 0.25 + (i / 7) * 0.75 }} />
          ))}
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3 border-t border-line pt-4 text-center">
          {[["CTR", "1.9%"], ["CPL", "−38%"], ["Meetings", "+14"]].map(([k, v]) => (
            <div key={k}><p className="text-[0.65rem] uppercase text-dim">{k}</p><p className="display text-lg text-ink">{v}</p></div>
          ))}
        </div>
      </div>
    );

  if (kind === "content")
    return (
      <div className="card w-full p-6 shadow-[6px_6px_0_var(--acc)]">
        <p className="text-xs font-semibold uppercase tracking-wider text-dim">Content calendar — week 42</p>
        <div className="mt-4 grid grid-cols-5 gap-2 text-center text-[0.6rem] font-semibold text-dim">
          {["Mon", "Tue", "Wed", "Thu", "Fri"].map((d) => <span key={d}>{d}</span>)}
          {[
            { l: "Industry post", on: true }, { l: "—", on: false }, { l: "Product post", on: true },
            { l: "Newsletter", on: true }, { l: "Carousel", on: true },
          ].map((c, i) => (
            <span key={i} className="rounded-md border px-1 py-2 text-[0.58rem] leading-tight" style={c.on ? { background: accent, color: "#fff", borderColor: accent } : { borderColor: "var(--border)", color: "var(--dim)" }}>
              {c.l}
            </span>
          ))}
        </div>
        <p className="mt-4 border-t border-line pt-3 text-xs text-mut">Every slot backed by topic research — nothing posted “just to post”.</p>
      </div>
    );

  if (kind === "research")
    return (
      <div className="card w-full p-6 shadow-[6px_6px_0_var(--acc)]">
        <p className="text-xs font-semibold uppercase tracking-wider text-dim">Competitor teardown — pricing page</p>
        <ul className="mt-4 space-y-2.5">
          {[
            ["Gap", "No one owns “compliance speed” messaging"],
            ["Risk", "Competitor X undercut entry tier by 30%"],
            ["Move", "Lead with time-to-value proof on the page"],
          ].map(([k, v]) => (
            <li key={k} className="flex gap-3 text-sm">
              <span className="w-10 shrink-0 rounded px-1.5 py-0.5 text-center text-[0.6rem] font-bold text-white" style={{ background: accent }}>{k}</span>
              <span className="leading-snug text-mut">{v}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 border-t border-line pt-3 text-xs text-dim">→ shipped to roadmap, copy and campaign briefs</p>
      </div>
    );

  // community — real platform logos orbiting
  const sats = [
    { r: "7rem", d: "18s", delay: "0s", src: "/tools/reddit.svg" },
    { r: "7rem", d: "18s", delay: "-9s", src: "/tools/discord.svg" },
    { r: "4.5rem", d: "11s", delay: "0s", src: "/tools/producthunt.svg" },
    { r: "4.5rem", d: "11s", delay: "-3.7s", src: "/tools/substack.svg" },
    { r: "4.5rem", d: "11s", delay: "-7.4s", src: "/tools/linkedin.svg" },
  ];
  return (
    <div className="card relative mx-auto grid aspect-square w-full max-w-[300px] place-items-center overflow-hidden rounded-full p-6">
      <span className="absolute inset-8 rounded-full border border-dashed border-line" />
      <span className="absolute inset-20 rounded-full border border-dashed border-line" />
      <span className="display grid size-16 place-items-center rounded-full text-xl text-white" style={{ background: accent }}>H</span>
      {sats.map((sat, i) => (
        <span
          key={i}
          className="orbit absolute grid size-10 place-items-center rounded-full border border-line bg-surface shadow-sm"
          style={{ "--r": sat.r, "--d": sat.d, animationDelay: sat.delay } as React.CSSProperties}
        >
          <img src={sat.src} alt="" className="size-5" />
        </span>
      ))}
    </div>
  );
}
