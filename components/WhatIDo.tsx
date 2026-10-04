import { capabilities } from "@/content";
import Section from "./Section";

export default function WhatIDo() {
  return (
    <Section id="services" chip="What I do" gray="I’ll Help Your" white="Pipeline Grow">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((c, i) => (
          <article key={c.group} className="reveal card p-7 text-left">
            <span className="grid size-11 place-items-center rounded-xl border border-line bg-surface-2 text-sm text-mut">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="display mt-6 text-xl text-ink">{c.group}</h3>
            <ul className="mt-3 space-y-1.5">
              {c.items.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-mut">
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
