import { site, socials } from "@/content";
import Section from "./Section";

export default function Contact() {
  return (
    <Section id="contact" label="Contact">
      <h2 className="reveal max-w-xl font-display text-[clamp(2rem,5vw,3.25rem)] leading-[1.05] tracking-[-0.02em] text-ink">
        Have something you want built, fixed, or grown?
      </h2>

      <a
        href={`mailto:${site.email}`}
        className="link-underline reveal mt-8 inline-block break-all text-xl text-ink-2 hover:text-ink sm:text-2xl"
      >
        {site.email}
      </a>

      <ul className="reveal mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm">
        {socials.map((s) => (
          <li key={s.label}>
            <a
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="link-underline text-ink-2 hover:text-ink"
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
