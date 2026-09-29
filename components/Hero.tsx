import { hero, site, resumeHref } from "@/content";

/** Renders **bold** spans of `hero.intro` as emphasised ink. */
function Intro({ text }: { text: string }) {
  const parts = text.split("**");
  return (
    <p className="max-w-xl text-[0.95rem] leading-relaxed text-ink-2">
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold text-ink">
            {part}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </p>
  );
}

/** Display headline line; a lone "&" gets the circled treatment. */
function Line({ text }: { text: string }) {
  if (!text.includes("&")) return <>{text}</>;
  const [before, after] = text.split("&");
  return (
    <>
      {before}
      <span className="amp">&amp;</span>
      {after}
    </>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto max-w-6xl px-6 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-32"
    >
      <p className="eyebrow rise">{hero.availability}</p>

      <h1
        className="display rise mt-8 text-[clamp(3rem,9.5vw,7rem)] text-ink"
        style={{ animationDelay: "90ms" }}
      >
        {hero.headline.map((line) => (
          <span key={line} className="block">
            <Line text={line} />
          </span>
        ))}
      </h1>

      <div
        className="rise mt-12 grid gap-10 sm:grid-cols-[auto_1fr] sm:gap-16"
        style={{ animationDelay: "200ms" }}
      >
        <div>
          <p className="display text-5xl text-ink">{hero.stat.value}</p>
          <p className="mt-2 text-sm font-semibold text-ink-2">
            {hero.stat.label}
          </p>
        </div>
        <div className="max-w-xl">
          <Intro text={hero.intro} />
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a href="#contact" className="pill">
              Let’s Talk
            </a>
            <a href="#work" className="link-underline text-sm text-ink-2 hover:text-ink">
              See the work
            </a>
            {resumeHref && (
              <a
                href={resumeHref}
                className="link-underline text-sm text-ink-2 hover:text-ink"
              >
                Résumé ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
