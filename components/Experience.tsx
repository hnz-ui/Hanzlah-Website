import fs from "node:fs";
import path from "node:path";
import { experience, education, resumeHref } from "@/content";
import Section from "./Section";

export default function Experience() {
  const hasResume =
    resumeHref && fs.existsSync(path.join(process.cwd(), "public", "resume.pdf"));
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
            <span className="shrink-0 text-sm tabular-nums text-dim">{role.period}</span>
          </li>
        ))}
      </ol>

      <div className="reveal mx-auto mt-10 max-w-3xl">
        <div className="card flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 p-6 text-left">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-dim">Education</p>
            <h3 className="display mt-1 text-lg text-ink">
              {education.degree}
              <span className="font-sans text-base text-dim"> · {education.school}</span>
            </h3>
          </div>
          <span className="shrink-0 text-sm tabular-nums text-dim">{education.period}</span>
        </div>
      </div>

      {hasResume && (
        <div className="reveal mt-10 text-center">
          <a href={resumeHref ?? "#"} className="btn">
            Download résumé <span aria-hidden>→</span>
          </a>
        </div>
      )}
    </Section>
  );
}
