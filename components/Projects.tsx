import { sideProjects } from "@/content";
import Section from "./Section";

export default function Projects() {
  return (
    <Section id="projects" chip="Built & shipped" gray="Side" white="Projects">
      <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
        {sideProjects.map((p) => (
          <article key={p.title} className="reveal card p-8 text-left">
            <h3 className="display text-xl text-ink">{p.title}</h3>
            {p.note && <p className="mt-1 text-xs text-dim">{p.note}</p>}
            <p className="mt-4 text-sm leading-relaxed text-mut">{p.line}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
