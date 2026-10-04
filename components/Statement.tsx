import { hero } from "@/content";

/** Big centered statement; **bold** spans read white, the rest gray. */
export default function Statement() {
  const parts = hero.intro.split("**");
  return (
    <section className="mx-auto max-w-4xl px-6 py-16 text-center sm:px-8 sm:py-24">
      <p className="reveal display text-[clamp(1.4rem,3vw,2.1rem)] leading-snug">
        {parts.map((part, i) =>
          i % 2 === 1 ? (
            <span key={i} className="tw">
              {part}
            </span>
          ) : (
            <span key={i} className="tg">
              {part}
            </span>
          ),
        )}
      </p>
    </section>
  );
}
