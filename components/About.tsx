import { about, stats } from "@/content";
import Section from "./Section";
import Logo from "./Logo";

export default function About() {
  return (
    <Section id="about" eyebrow="Get to know me">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
        <div className="space-y-6">
          {about.map((para, i) => (
            <p
              key={i}
              className="reveal text-xl leading-relaxed text-ink first:font-medium sm:text-2xl [&:not(:first-child)]:text-lg [&:not(:first-child)]:text-ink-2 sm:[&:not(:first-child)]:text-xl"
            >
              {para}
            </p>
          ))}
        </div>

        <div
          className="reveal card relative hidden min-h-64 overflow-hidden bg-accent lg:block"
          aria-hidden
        >
          <span className="absolute left-4 top-4 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-accent-ink [writing-mode:vertical-rl]">
            About me
          </span>
          <span className="absolute bottom-6 right-7 text-accent-ink">
            <Logo size={72} />
          </span>
        </div>
      </div>

      <div className="reveal mt-16 grid gap-10 border-t border-rule pt-10 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="display text-6xl text-ink">
              <span
                className="stat-num"
                style={{ "--target": s.target } as React.CSSProperties}
              />
              <span className="text-4xl">{s.suffix}</span>
            </p>
            <p className="mt-2 text-sm font-semibold text-ink-2">{s.label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
