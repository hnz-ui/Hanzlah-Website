import { statement } from "@/content";

/** One sentence, huge and centered. **bold** spans read white. */
export default function Statement() {
  const parts = statement.split("**");
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 text-center sm:px-8 sm:py-36">
      <p className="reveal display text-[clamp(1.7rem,3.6vw,2.7rem)] leading-snug">
        {parts.map((part, i) => (
          <span key={i} className={i % 2 === 1 ? "tw" : "tg"}>
            {part}
          </span>
        ))}
      </p>
    </section>
  );
}
