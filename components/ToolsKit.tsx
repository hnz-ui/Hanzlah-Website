/* eslint-disable @next/next/no-img-element */
import { toolsKit } from "@/content";
import Section from "./Section";

export default function ToolsKit() {
  return (
    <Section id="tools" eyebrow="Trusted platforms">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <div className="reveal">
          <h2 className="display text-[clamp(2.6rem,6vw,4.5rem)] text-ink">
            My Tools Kit
          </h2>
          <p className="mt-6 text-sm font-semibold text-ink">
            I am very open to learning new things
          </p>
          <p className="mt-2 max-w-md text-[0.95rem] leading-relaxed text-ink-2">
            The stack behind the work — Apollo and Instantly for outbound,
            LinkedIn for ads and prospecting, Figma for design, GA4 for what
            actually happened, and Next.js when the page needs to be built,
            not just briefed.
          </p>
        </div>

        <ul className="grid content-start gap-4 sm:grid-cols-2">
          {toolsKit.map((t) => (
            <li key={t.name} className="reveal card flex items-center gap-4 p-4">
              <span className="grid size-12 shrink-0 place-items-center overflow-hidden rounded-xl border border-card bg-tile">
                {t.src ? (
                  <img src={t.src} alt="" className="size-6" loading="lazy" />
                ) : (
                  <span
                    className="display grid size-full place-items-center text-base"
                    style={{ background: t.mono?.bg, color: t.mono?.fg }}
                  >
                    {t.mono?.text}
                  </span>
                )}
              </span>
              <span className="display text-lg text-ink">{t.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
