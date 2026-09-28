import { sideProjects } from "@/content";
import Section from "./Section";

export default function Projects() {
  return (
    <Section id="projects" label="Projects">
      <div>
        {sideProjects.map((p) => (
          <article
            key={p.title}
            className="reveal border-t border-rule py-9 first:border-t-0 first:pt-0"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
                {p.title}
              </h3>
              {p.note && (
                <span className="shrink-0 text-sm text-ink-3">{p.note}</span>
              )}
            </div>

            <p className="mt-4 max-w-2xl leading-relaxed text-ink-2">
              {p.summary}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <li
                  key={t}
                  className="text-xs uppercase tracking-wider text-ink-3"
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
