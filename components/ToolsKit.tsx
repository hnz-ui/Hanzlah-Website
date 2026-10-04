/* eslint-disable @next/next/no-img-element */
import { toolsKit } from "@/content";
import Section from "./Section";

export default function ToolsKit() {
  return (
    <Section id="tools" chip="Tools" gray="My" white="Tools Kit">
      <ul className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3">
        {toolsKit.map((t) => (
          <li key={t.name} className="reveal card flex items-center gap-3.5 p-4 text-left">
            <span className="grid size-11 shrink-0 place-items-center overflow-hidden rounded-xl border border-line bg-[#f4f3f1]">
              {t.src ? (
                <img src={t.src} alt="" className="size-6" loading="lazy" />
              ) : (
                <span
                  className="display grid size-full place-items-center text-sm"
                  style={{ background: t.mono?.bg, color: t.mono?.fg }}
                >
                  {t.mono?.text}
                </span>
              )}
            </span>
            <span className="text-sm text-ink">{t.name}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
