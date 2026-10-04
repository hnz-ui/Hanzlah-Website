import { about, stats } from "@/content";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" chip="About" gray="One Marketer," white="Whole Funnel">
      <p className="reveal mx-auto max-w-2xl text-center text-lg leading-relaxed text-mut">
        {about}
      </p>

      <div className="reveal mx-auto mt-16 grid max-w-4xl gap-10 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="display text-6xl text-ink">
              <span
                className="stat-num"
                style={{ "--target": s.target } as React.CSSProperties}
              />
              {s.suffix}
            </p>
            <p className="mt-3 text-sm text-dim">{s.label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
