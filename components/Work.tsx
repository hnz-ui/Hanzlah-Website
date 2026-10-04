import { projects } from "@/content";
import Section from "./Section";

export default function Work() {
  return (
    <Section id="work" chip="Portfolio" gray="My Latest" white="Work">
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((p, i) => (
          <article
            key={p.title}
            className="reveal card relative overflow-hidden p-8 text-left sm:p-10"
          >
            <span
              aria-hidden
              className="display pointer-events-none absolute -right-2 -top-6 text-[7rem] leading-none text-white/[0.04]"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-sm text-dim">{p.year}</span>
            <h3 className="display mt-3 text-2xl text-ink sm:text-[1.7rem]">
              {p.title}
              {p.href && <span className="ml-2 text-dim">↗</span>}
            </h3>
            <p className="mt-4 max-w-md leading-relaxed text-mut">{p.line}</p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <li key={t} className="chip !px-3 !py-1 !text-xs">
                  {t}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
