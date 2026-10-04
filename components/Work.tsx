import { projects, type Project } from "@/content";
import Section from "./Section";

function Card({ project }: { project: Project }) {
  const heading = (
    <h3 className="display text-xl text-ink sm:text-2xl">
      {project.title}
      {project.href && <span className="ml-2 text-dim">↗</span>}
    </h3>
  );

  return (
    <article className="reveal card flex flex-col p-7 text-left sm:p-9">
      <div className="flex items-baseline justify-between gap-6">
        {project.href ? (
          <a href={project.href} target="_blank" rel="noreferrer">
            {heading}
          </a>
        ) : (
          heading
        )}
        <span className="shrink-0 text-sm text-dim">{project.year}</span>
      </div>

      <p className="mt-4 leading-relaxed text-mut">{project.summary}</p>

      <ul className="mt-6 space-y-2 border-t border-line pt-5">
        {project.outcomes.map((o) => (
          <li key={o} className="flex gap-3 text-sm leading-relaxed text-mut">
            <span aria-hidden className="mt-2.5 h-px w-4 shrink-0 bg-dim" />
            {o}
          </li>
        ))}
      </ul>

      <ul className="mt-auto flex flex-wrap gap-2 pt-6">
        {project.tags.map((t) => (
          <li key={t} className="chip !px-3 !py-1 !text-xs">
            {t}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Work() {
  return (
    <Section id="work" chip="Portfolio" gray="My Latest" white="Work">
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((p) => (
          <Card key={p.title} project={p} />
        ))}
      </div>
    </Section>
  );
}
