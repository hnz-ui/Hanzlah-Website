/* eslint-disable @next/next/no-img-element */
import { toolsKit } from "@/content";
import Section from "./Section";

export default function ToolsKit() {
  return (
    <Section id="tools" chip="Toolbox" gray="Tools I Use" white="Every Week">
      <ul className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {toolsKit.map((t) => (
          <li key={t.name} className="reveal card card--lift flex flex-col items-center gap-3 p-6 text-center">
            <span className="grid size-12 place-items-center overflow-hidden rounded-xl border border-line bg-surface-2">
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
            <span className="text-sm font-medium text-ink">{t.name}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
