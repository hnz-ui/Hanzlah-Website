import { projects, type Project } from "@/content";
import Section from "./Section";

function Card({ project }: { project: Project }) {
  const heading = (
    <h3 className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
      {project.title}
      {project.href && (
        <span className="ml-2 inline-block text-base text-ink-3 transition-transform group-hover:-translate-y-0.5 group-hover:text-accent">
          ↗
        </span>
      )}
    </h3>
  );

  return (
    <article className="group reveal border-t border-rule py-9 first:border-t-0 first:pt-0">
      <div className="flex items-baseline justify-between gap-6">
        {project.href ? (
          <a href={project.href} target="_blank" rel="noreferrer">
            {heading}
          </a>
        ) : (
          heading
        )}
        <span className="shrink-0 text-sm tabular-nums text-ink-3">
          {project.year}
        </span>
      </div>

      <p className="mt-4 max-w-2xl leading-relaxed text-ink-2">
        {project.summary}
      </p>

      <ul className="mt-5 space-y-2">
        {project.outcomes.map((o) => (
          <li key={o} className="flex gap-3 text-sm leading-relaxed text-ink-2">
            <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-rule" />
            {o}
          </li>
        ))}
      </ul>

      <ul className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <li key={t} className="text-xs uppercase tracking-wider text-ink-3">
            {t}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Work() {
  return (
    <Section id="work" label="Selected work">
      <div>
        {projects.map((p) => (
          <Card key={p.title} project={p} />
        ))}
      </div>
    </Section>
  );
}
