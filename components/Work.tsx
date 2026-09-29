import { projects, type Project } from "@/content";
import Section from "./Section";

function Card({ project }: { project: Project }) {
  const heading = (
    <h3 className="display text-2xl text-ink sm:text-[1.7rem]">
      {project.title}
      {project.href && <span className="ml-2 text-ink-3">↗</span>}
    </h3>
  );

  return (
    <article className="reveal card p-7 sm:p-9">
      <div className="flex items-baseline justify-between gap-6">
        {project.href ? (
          <a href={project.href} target="_blank" rel="noreferrer">
            {heading}
          </a>
        ) : (
          heading
        )}
        <span className="pill !bg-paper-2 !py-1.5 !px-3.5 !text-[0.6rem] !text-ink-2">
          {project.year}
        </span>
      </div>

      <p className="mt-4 max-w-2xl leading-relaxed text-ink-2">
        {project.summary}
      </p>

      <ul className="mt-6 space-y-2 border-t border-rule pt-5">
        {project.outcomes.map((o) => (
          <li key={o} className="flex gap-3 text-sm leading-relaxed text-ink-2">
            <span aria-hidden className="mt-2.5 h-px w-4 shrink-0 bg-ink-3" />
            {o}
          </li>
        ))}
      </ul>

      <ul className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <li
            key={t}
            className="rounded-full border border-card px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-ink-2"
          >
            {t}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Work() {
  return (
    <Section id="work" eyebrow="Selected work" heading="My Work" center>
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((p) => (
          <Card key={p.title} project={p} />
        ))}
      </div>
    </Section>
  );
}
