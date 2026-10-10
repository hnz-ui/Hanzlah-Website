import fs from "node:fs";
import path from "node:path";
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

export default function Hero() {
  const hasPhoto = fs.existsSync(path.join(process.cwd(), "public", "me.jpg"));
  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden className="grid-bg absolute inset-0" />
      <div aria-hidden className="blob left-[8%] top-[12%] size-72 bg-[#bfd3ff]" />
      <div aria-hidden className="blob right-[12%] top-[30%] size-80 bg-[#e6d9ff]" style={{ animationDelay: "-6s" }} />
      <div aria-hidden className="blob bottom-[5%] left-[35%] size-64 bg-[#ffe3d3]" style={{ animationDelay: "-11s" }} />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-24 sm:px-8 sm:pb-32 sm:pt-32 lg:grid-cols-[1.5fr_1fr] lg:items-center">
        <div>
          <span className="chip rise">{hero.pill}</span>
          <h1
            className="display rise mt-7 text-[clamp(2.6rem,6vw,4.6rem)] text-ink"
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
              Explore services <span aria-hidden>→</span>
            </Link>
            <a href="#contact" className="btn btn--ghost">
              Let’s talk
            </a>
          </div>
        </div>

        {hasPhoto && (
          <div className="rise relative hidden lg:block" style={{ animationDelay: "320ms" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/me.jpg"
              alt="Hanzlah Malik, product marketer and website builder"
              className="card w-full max-w-sm rotate-2 !rounded-2xl object-cover transition-transform duration-500 hover:rotate-0"
            />
          </div>
        )}
      </div>
    </section>
  );
}
