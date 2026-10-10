/* eslint-disable @next/next/no-img-element */
import { toolWheel } from "@/content";

/**
 * Continuous all-tools marquee. Pure CSS: the track holds the deduped
 * tool list twice and slides exactly half its width per loop, so the
 * restart is invisible. Pauses on hover; static under reduced motion.
 */
export default function ToolsMarquee() {
  const seen = new Set<string>();
  const tools = toolWheel
    .flatMap((c) => c.tools)
    .filter((t) => (seen.has(t.name) ? false : (seen.add(t.name), true)));

  const Row = () => (
    <>
      {tools.map((t) => (
        <li
          key={t.name + Math.random()}
          className="flex shrink-0 items-center gap-2.5 rounded-full border border-line bg-surface px-4 py-2"
        >
          {t.icon ? (
            <img src={t.icon} alt="" className="size-4" loading="lazy" />
          ) : (
            <span className="grid size-4 place-items-center rounded-full bg-ink text-[0.55rem] font-bold text-white">
              {t.name[0]}
            </span>
          )}
          <span className="whitespace-nowrap text-sm font-medium text-ink">
            {t.name}
          </span>
        </li>
      ))}
    </>
  );

  return (
    <div className="marquee mt-6">
      <ul className="marquee-track marquee-track--slow" aria-label="All tools">
        <Row />
        <Row />
      </ul>
    </div>
  );
}
