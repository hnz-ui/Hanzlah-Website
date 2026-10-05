import { hero } from "@/content";
import ShaderBg from "./ShaderBg";
import LocalTime from "./LocalTime";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <ShaderBg />
      {/* melt the shader into the page background at the bottom */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-bg"
      />

      <div className="relative mx-auto flex min-h-[calc(100svh-62px)] max-w-7xl flex-col border-x border-line px-6 pb-10 pt-6 sm:px-10">
        {/* meta row */}
        <div className="rise flex items-baseline justify-between border-b border-line pb-5 text-sm text-mut">
          <span>{hero.status}</span>
          <span className="hidden uppercase tracking-widest sm:block">
            {hero.location}
          </span>
          <LocalTime />
        </div>

        {/* headline block */}
        <div className="flex flex-1 flex-col justify-center py-16">
          <h1
            className="display rise max-w-4xl text-[clamp(2.4rem,5.5vw,4.6rem)] text-ink"
            style={{ animationDelay: "120ms" }}
          >
            {hero.headline}
          </h1>
          <a
            href="#contact"
            className="display rise mt-12 inline-block w-fit border-b border-line-strong pb-2 text-2xl text-ink transition-colors hover:border-ink sm:text-3xl"
            style={{ animationDelay: "240ms" }}
          >
            {hero.cta}
          </a>
        </div>

        {/* bottom-right paragraph */}
        <div className="rise flex justify-end" style={{ animationDelay: "320ms" }}>
          <p className="max-w-sm text-right text-sm leading-relaxed text-mut">
            {hero.sub}
          </p>
        </div>
      </div>
    </section>
  );
}
