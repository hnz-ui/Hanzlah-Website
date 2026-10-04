import { sideProjects } from "@/content";
import Section from "./Section";

export default function Projects() {
  return (
    <Section id="projects" chip="Built & shipped" gray="Side" white="Projects">
      <div className="grid gap-5 sm:grid-cols-2">
        {sideProjects.map((p) => (
          <article key={p.title} className="reveal card p-7 text-left sm:p-9">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
              <h3 className="display text-xl text-ink sm:text-2xl">{p.title}</h3>
              {p.note && <span className="text-xs text-dim">{p.note}</span>}
            </div>
            <p className="mt-4 leading-relaxed text-mut">{p.summary}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
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
