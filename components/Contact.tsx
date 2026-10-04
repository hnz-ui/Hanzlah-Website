import { site, socials } from "@/content";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <div className="reveal card glow flex flex-col items-center px-6 py-20 text-center sm:py-28">
          <span className="chip">Contact</span>
          <h2 className="display mt-6 text-[clamp(2.4rem,6vw,4.2rem)]">
            <span className="tg">Let’s Get in</span> <span className="tw">Touch</span>
          </h2>
          <p className="mt-4 text-mut">
            Let’s connect and start with your project.
          </p>
          <a href={`mailto:${site.email}`} className="btn btn--solid mt-9">
            Email me <span aria-hidden>↗</span>
          </a>
          <p className="mt-5 text-sm text-dim">
            Or write to{" "}
            <a
              href={`mailto:${site.email}`}
              className="link-underline text-mut hover:text-ink"
            >
              {site.email}
            </a>
          </p>
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="link-underline text-mut hover:text-ink"
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
