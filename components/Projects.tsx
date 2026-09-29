import { sideProjects } from "@/content";
import Section from "./Section";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Built & shipped" heading="Projects">
      <div className="grid gap-5 sm:grid-cols-2">
        {sideProjects.map((p) => (
          <article key={p.title} className="reveal card bg-accent-soft p-7 sm:p-9">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
              <h3 className="display text-2xl text-ink">{p.title}</h3>
              {p.note && (
                <span className="text-xs font-semibold uppercase tracking-wider text-ink-3">
                  {p.note}
                </span>
              )}
            </div>
            <p className="mt-4 leading-relaxed text-ink-2">{p.summary}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-card px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-ink-2"
                >
                  {t}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
