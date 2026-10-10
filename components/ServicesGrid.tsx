import Link from "next/link";
import { services } from "@/content";
import Section from "./Section";

export default function ServicesGrid() {
  return (
    <Section id="services" chip="Services" gray="What I Can" white="Do for You">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="reveal card card--lift group p-7 text-left"
            style={{ "--acc": s.accent } as React.CSSProperties}
          >
            <span
              className="grid size-10 place-items-center rounded-lg text-sm font-bold text-white"
              style={{ background: s.accent }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="display mt-5 text-xl text-ink">{s.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-mut">{s.short}</p>
            <span className="mt-5 inline-block text-sm font-semibold" style={{ color: s.accent }}>
              Explore <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </span>
          </Link>
        ))}
        <div className="reveal card flex flex-col justify-center bg-surface-2 p-7 text-left">
          <h3 className="display text-xl text-ink">Something else?</h3>
          <p className="mt-2 text-sm leading-relaxed text-mut">
            If it grows pipeline or ships a page, I probably do it.
          </p>
          <a href="#contact" className="link-underline mt-5 w-fit text-sm font-semibold text-ink">
            Ask me →
          </a>
        </div>
      </div>
    </Section>
  );
}
