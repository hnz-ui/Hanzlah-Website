import { about, skills } from "@/content";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" label="About">
      <div className="max-w-2xl space-y-6">
        {about.map((para, i) => (
          <p key={i} className="reveal text-lg leading-relaxed text-ink-2">
            {para}
          </p>
        ))}
      </div>

      <ul className="reveal mt-12 flex flex-wrap gap-x-3 gap-y-2.5">
        {skills.map((s) => (
          <li
            key={s}
            className="rounded-full border border-rule px-3.5 py-1.5 text-sm text-ink-2"
          >
            {s}
          </li>
        ))}
      </ul>
    </Section>
  );
}
