/* eslint-disable @next/next/no-img-element */
import { toolsKit } from "@/content";
import Section from "./Section";

function Tile({ t }: { t: (typeof toolsKit)[number] }) {
  return (
    <li className="card flex shrink-0 items-center gap-3 !rounded-2xl px-5 py-3.5">
      <span className="grid size-9 shrink-0 place-items-center overflow-hidden rounded-lg bg-[#f4f3f1]">
        {t.src ? (
          <img src={t.src} alt="" className="size-5" loading="lazy" />
        ) : (
          <span
            className="display grid size-full place-items-center text-xs"
            style={{ background: t.mono?.bg, color: t.mono?.fg }}
          >
            {t.mono?.text}
          </span>
        )}
      </span>
      <span className="whitespace-nowrap text-sm text-ink">{t.name}</span>
    </li>
  );
}

export default function ToolsKit() {
  return (
    <Section id="tools" chip="Tools" gray="My" white="Tools Kit">
      <div className="marquee reveal">
        <ul className="marquee-track" aria-hidden={false}>
          {toolsKit.map((t) => (
            <Tile key={t.name} t={t} />
          ))}
          {toolsKit.map((t) => (
            <Tile key={t.name + "-dup"} t={t} />
          ))}
        </ul>
      </div>
    </Section>
  );
}
