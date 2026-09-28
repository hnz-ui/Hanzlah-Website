import { site, resumeHref } from "@/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto max-w-5xl px-6 pb-20 pt-24 sm:px-8 sm:pb-28 sm:pt-36"
    >
      <p className="eyebrow rise">
        {site.role} &nbsp;·&nbsp; {site.location}
      </p>

      <h1
        className="rise mt-6 max-w-3xl font-display text-[clamp(2.75rem,8vw,5.25rem)] leading-[0.98] tracking-[-0.02em] text-ink"
        style={{ animationDelay: "90ms" }}
      >
        {site.name}
      </h1>

      <p
        className="rise mt-8 max-w-2xl text-lg leading-relaxed text-ink-2 sm:text-xl"
        style={{ animationDelay: "180ms" }}
      >
        {site.tagline}
      </p>

      <div
        className="rise mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm"
        style={{ animationDelay: "260ms" }}
      >
        <a
          href="#contact"
          className="rounded-full bg-ink px-5 py-2.5 text-paper transition-opacity hover:opacity-85"
        >
          Get in touch
        </a>
        <a href="#work" className="link-underline text-ink-2 hover:text-ink">
          See the work
        </a>
        {resumeHref && (
          <a
            href={resumeHref}
            className="link-underline text-ink-2 hover:text-ink"
          >
            Résumé ↗
          </a>
        )}
      </div>
    </section>
  );
}
