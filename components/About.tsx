import { about, stats } from "@/content";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" chip="About" gray="A Marketer Who" white="Ships the Whole Funnel">
      <div className="mx-auto grid max-w-5xl gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-20 lg:text-left">
        <div className="space-y-6 text-left">
          {about.map((para, i) => (
            <p key={i} className="reveal leading-relaxed text-mut">
              {para}
            </p>
          ))}
        </div>

        <div className="reveal grid content-start gap-10 text-left sm:grid-cols-1">
          {stats.map((s) => (
            <div key={s.label} className="border-t border-line pt-5 first:border-t-0 first:pt-0">
              <p className="text-sm text-dim">{s.label}</p>
              <p className="display mt-1 text-5xl text-ink">
                <span
                  className="stat-num"
                  style={{ "--target": s.target } as React.CSSProperties}
                />
                {s.suffix}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
