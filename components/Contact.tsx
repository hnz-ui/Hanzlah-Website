import { site, socials } from "@/content";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-rule">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <div className="reveal card overflow-hidden bg-accent-soft px-6 py-16 text-center sm:px-12 sm:py-24">
          <p className="eyebrow justify-center">Available for new projects</p>
          <h2 className="display mt-6 text-[clamp(3rem,9vw,6.5rem)] text-ink">
            Let’s Talk
          </h2>
          <p className="mx-auto mt-6 max-w-md text-[0.95rem] leading-relaxed text-ink-2">
            Have something you want marketed, built, or grown? Tell me about
            it — I answer everything sent to this address.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a href={`mailto:${site.email}`} className="pill pill--ink">
              {site.email}
            </a>
          </div>
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="link-underline font-semibold text-ink-2 hover:text-ink"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
