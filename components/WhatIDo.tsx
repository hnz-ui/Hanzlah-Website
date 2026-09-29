import { capabilities } from "@/content";
import Section from "./Section";

export default function WhatIDo() {
  return (
    <Section id="services" eyebrow="Services" heading="What I Do ?" center>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((c, i) => (
          <article key={c.group} className="reveal card p-7 text-left">
            <p className="display text-sm text-ink-3">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="display mt-5 text-2xl text-ink">{c.group}</h3>
            <ul className="mt-4 space-y-1.5">
              {c.items.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-ink-2">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
