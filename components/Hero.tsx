import Link from "next/link";
import { hero } from "@/content";

/** ==text== spans render in the accent color. */
function Headline({ text }: { text: string }) {
  const parts = text.split("==");
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className="mark-acc">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

const categories = [
  { label: "B2B & B2C", dot: "#2563eb", pos: "-left-4 top-14 rotate-[-4deg]" },
  { label: "SaaS", dot: "#7c3aed", pos: "-right-4 top-28 rotate-[3deg]" },
  { label: "Website Development", dot: "#059669", pos: "-left-5 bottom-32 rotate-[2deg]" },
  { label: "Personal Branding", dot: "#d97706", pos: "-right-3 bottom-14 rotate-[-3deg]" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden className="grid-bg absolute inset-0" />
      <div aria-hidden className="blob left-[6%] top-[10%] size-80 bg-[#bfd3ff]" />
      <div aria-hidden className="blob right-[10%] top-[26%] size-96 bg-[#e6d9ff]" style={{ animationDelay: "-6s" }} />
      <div aria-hidden className="blob bottom-[4%] left-[32%] size-72 bg-[#ffe3d3]" style={{ animationDelay: "-11s" }} />

      <div className="relative mx-auto grid min-h-[86svh] max-w-6xl items-center gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[1.35fr_1fr]">
        <div>
          <p className="display rise text-xl text-mut sm:text-2xl">{hero.intro}</p>
          <h1
            className="display rise mt-3 text-[clamp(2.9rem,6.8vw,5.4rem)] text-ink"
            style={{ animationDelay: "90ms" }}
          >
            <Headline text={hero.headline} />
          </h1>
          <p
            className="rise mt-6 max-w-xl text-lg leading-relaxed text-mut"
            style={{ animationDelay: "180ms" }}
          >
            {hero.sub}
          </p>
          <div
            className="rise mt-9 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "260ms" }}
          >
            <Link href="/services" className="btn">
              See what I do <span aria-hidden>→</span>
            </Link>
            <a href="#contact" className="btn btn--ghost">
              Let’s talk
            </a>
          </div>
        </div>

        <div className="rise relative mx-auto mt-6 w-full max-w-sm lg:mt-0" style={{ animationDelay: "320ms" }}>
          <div className="relative overflow-hidden rounded-t-[10rem] rounded-b-3xl border border-line bg-acc-soft pt-10">
            <div aria-hidden className="grid-bg absolute inset-0 opacity-60" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/me.png"
              alt="Hanzlah Malik, product marketer"
              className="relative mx-auto block w-[86%] drop-shadow-xl"
            />
          </div>
          {categories.map((c) => (
            <span
              key={c.label}
              className={`chip absolute ${c.pos} hidden bg-surface !text-xs shadow-sm sm:inline-flex`}
            >
              <span className="size-1.5 rounded-full" style={{ background: c.dot }} />
              {c.label}
            </span>
          ))}
          <div className="mt-4 flex flex-wrap justify-center gap-2 sm:hidden">
            {categories.map((c) => (
              <span key={c.label} className="chip !text-xs">
                <span className="size-1.5 rounded-full" style={{ background: c.dot }} />
                {c.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
