import { capabilities } from "@/content";
import Section from "./Section";

export default function WhatIDo() {
  return (
    <Section id="services" chip="What I do" gray="I’ll Help Your" white="Pipeline Grow">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((c, i) => (
          <article key={c.group} className="reveal card p-7 text-left">
            <span className="text-sm text-dim">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="display mt-5 text-lg text-ink">{c.group}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-mut">{c.line}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
