import { experience, resumeHref } from "@/content";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" label="Experience">
      <ol>
        {experience.map((role) => (
          <li
            key={role.company + role.period}
            className="reveal border-t border-rule py-8 first:border-t-0 first:pt-0"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="text-lg text-ink">
                {role.title}
                <span className="text-ink-3"> · {role.company}</span>
              </h3>
              <span className="text-sm tabular-nums text-ink-3">
                {role.period}
              </span>
            </div>
            <p className="mt-3 max-w-2xl leading-relaxed text-ink-2">
              {role.detail}
            </p>
          </li>
        ))}
      </ol>

      {resumeHref && (
        <a
          href={resumeHref}
          className="link-underline reveal mt-8 inline-block text-sm text-ink-2 hover:text-ink"
        >
          Download the full résumé ↗
        </a>
      )}
    </Section>
  );
}
