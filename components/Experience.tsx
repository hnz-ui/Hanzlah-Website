import { experience, education, resumeHref } from "@/content";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" chip="Career" gray="Where I’ve" white="Worked">
      <ol className="mx-auto max-w-3xl">
        {experience.map((role) => (
          <li
            key={role.company + role.period}
            className="reveal flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 border-t border-line py-6 text-left first:border-t-0 first:pt-0"
          >
            <div className="min-w-0">
              <h3 className="display text-lg text-ink">
                {role.title}
                <span className="font-sans text-base text-dim"> · {role.company}</span>
              </h3>
              {role.line && <p className="mt-1 text-sm text-mut">{role.line}</p>}
            </div>
            <span className="shrink-0 text-sm tabular-nums text-dim">
              {role.period}
            </span>
          </li>
        ))}
        <li className="reveal flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 border-t border-line py-6 text-left">
          <h3 className="display text-lg text-ink">
            {education.degree}
            <span className="font-sans text-base text-dim"> · {education.school}</span>
          </h3>
          <span className="shrink-0 text-sm tabular-nums text-dim">
            {education.period}
          </span>
        </li>
      </ol>

      {resumeHref && (
        <div className="reveal mt-12 text-center">
          <a href={resumeHref} className="btn">
            Download résumé <span aria-hidden>↗</span>
          </a>
        </div>
      )}
    </Section>
  );
}
