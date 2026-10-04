import { hero, resumeHref } from "@/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-6xl flex-col items-center px-6 pb-24 pt-24 text-center sm:px-8 sm:pb-32 sm:pt-36"
    >
      <span className="chip rise">{hero.pill}</span>

      <h1
        className="display rise mt-8 max-w-4xl text-[clamp(2.8rem,7vw,5.5rem)]"
        style={{ animationDelay: "90ms" }}
      >
        <span className="tw">{hero.headlineWhite}</span>{" "}
        <span className="tg">{hero.headlineGray}</span>
      </h1>

      <div
        className="rise mt-10 flex flex-wrap items-center justify-center gap-5"
        style={{ animationDelay: "200ms" }}
      >
        <a href="#contact" className="btn">
          Let’s Talk <span aria-hidden>↗</span>
        </a>
        {resumeHref && (
          <a
            href={resumeHref}
            className="link-underline text-sm text-mut hover:text-ink"
          >
            View résumé ↗
          </a>
        )}
      </div>
    </section>
  );
}
