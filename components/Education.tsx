import { education } from "@/content";
import Section from "./Section";

export default function Education() {
  return (
    <Section id="education" label="Education">
      <ul>
        {education.map((e) => (
          <li key={e.school} className="reveal">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="text-lg text-ink">
                {e.degree}
                <span className="text-ink-3"> · {e.school}</span>
              </h3>
              <span className="text-sm tabular-nums text-ink-3">{e.period}</span>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
