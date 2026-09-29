import { education } from "@/content";
import Section from "./Section";

export default function Education() {
  return (
    <Section id="education" eyebrow="Education">
      <ul className="max-w-4xl">
        {education.map((e) => (
          <li
            key={e.school}
            className="reveal flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2"
          >
            <h3 className="display text-xl text-ink">
              {e.degree}
              <span className="font-sans text-base font-normal text-ink-3">
                {" "}
                · {e.school}
              </span>
            </h3>
            <span className="pill !bg-paper-2 !py-1.5 !px-3.5 !text-[0.6rem] !text-ink-2">
              {e.period}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
