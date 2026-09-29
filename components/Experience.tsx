import { experience, resumeHref } from "@/content";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Career" heading="Experience">
      <ol className="max-w-4xl">
        {experience.map((role) => (
          <li
            key={role.company + role.period}
            className="reveal border-t border-rule py-8 first:border-t-0 first:pt-0"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
              <h3 className="display text-xl text-ink">
                {role.title}
                <span className="font-sans text-base font-normal text-ink-3">
                  {" "}
                  · {role.company}
                </span>
              </h3>
              <span className="pill !bg-paper-2 !py-1.5 !px-3.5 !text-[0.6rem] !text-ink-2">
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
          className="reveal link-underline mt-6 inline-block text-sm font-semibold text-ink-2 hover:text-ink"
        >
          Download the full résumé ↗
        </a>
      )}
    </Section>
  );
}
