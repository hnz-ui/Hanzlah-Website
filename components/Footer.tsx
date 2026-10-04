import { site, socials } from "@/content";
import Logo from "./Logo";

const nav = [
  { label: "Portfolio", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:px-8 md:grid-cols-[1.6fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <Logo size={30} />
            <span className="display text-lg text-ink">{site.name}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-mut">
            {site.role} — {site.location}
          </p>
          <p className="mt-3 text-sm text-dim">{site.email}</p>
        </div>
        <ul className="space-y-2.5 text-sm">
          {nav.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="link-underline text-mut hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <ul className="space-y-2.5 text-sm">
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
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-6 text-sm text-dim sm:px-8">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <a href="#top" className="link-underline hover:text-ink">Back to top</a>
        </div>
      </div>
    </footer>
  );
}
