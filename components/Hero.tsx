import { hero, resumeHref } from "@/content";

export default function Hero() {
  return (
    <section id="top" className="hero-glow">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 pb-28 pt-28 text-center sm:px-8 sm:pb-36 sm:pt-44">
        <span className="chip rise">{hero.pill}</span>

        <h1
          className="display rise mt-9 max-w-4xl text-[clamp(2.9rem,7.2vw,5.8rem)]"
          style={{ animationDelay: "90ms" }}
        >
          <span className="tw">{hero.headlineWhite}</span>{" "}
          <span className="tg">{hero.headlineGray}</span>
        </h1>

        <div
          className="rise mt-11 flex flex-wrap items-center justify-center gap-6"
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
      </div>
    </section>
  );
}
