import { experience, education, resumeHref } from "@/content";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" chip="Career" gray="Where I’ve" white="Worked">
      <ol className="mx-auto max-w-5xl">
        {experience.map((role) => (
          <li
            key={role.company + role.period}
            className="reveal grid gap-3 border-t border-line py-8 text-left first:border-t-0 first:pt-0 md:grid-cols-[1.1fr_1.4fr] md:gap-10"
          >
            <div>
              <h3 className="display text-lg text-ink">{role.title}</h3>
              <p className="mt-1 text-sm text-mut">{role.company}</p>
              <p className="mt-1 text-sm text-dim">{role.period}</p>
            </div>
            <p className="leading-relaxed text-mut">{role.detail}</p>
          </li>
        ))}
        {education.map((e) => (
          <li
            key={e.school}
            className="reveal grid gap-3 border-t border-line py-8 text-left md:grid-cols-[1.1fr_1.4fr] md:gap-10"
          >
            <div>
              <h3 className="display text-lg text-ink">{e.degree}</h3>
              <p className="mt-1 text-sm text-mut">{e.school}</p>
              <p className="mt-1 text-sm text-dim">{e.period}</p>
            </div>
            <p className="leading-relaxed text-mut">
              Where the management side met the technology side — the degree
              behind the marketing.
            </p>
          </li>
        ))}
      </ol>

      {resumeHref && (
        <div className="reveal mt-10 text-center">
          <a href={resumeHref} className="btn">
            Download résumé <span aria-hidden>↗</span>
          </a>
        </div>
      )}
    </Section>
  );
}
