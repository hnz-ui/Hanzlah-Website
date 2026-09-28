import { about, capabilities, tools } from "@/content";
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

      <div className="reveal mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((c) => (
          <div key={c.group}>
            <h3 className="eyebrow">{c.group}</h3>
            <ul className="mt-3 space-y-1.5">
              {c.items.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-ink-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="reveal mt-14 border-t border-rule pt-6">
        <h3 className="eyebrow">Tools</h3>
        <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-2.5">
          {tools.map((t) => (
            <li
              key={t}
              className="rounded-full border border-rule px-3.5 py-1.5 text-sm text-ink-2"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
