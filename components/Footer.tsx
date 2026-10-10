import Link from "next/link";
import { site, services, socials } from "@/content";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <span className="display text-lg text-ink">{site.name}</span>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-mut">
            {site.role} — {site.location}. Product marketing, outbound and
            React websites for B2B SaaS.
          </p>
          <p className="mt-3 text-sm text-dim">{site.email}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">Services</p>
          <ul className="mt-3 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="link-underline text-mut hover:text-ink">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">Elsewhere</p>
          <ul className="mt-3 space-y-2.5 text-sm">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="link-underline text-mut hover:text-ink">
                  {s.label}
                </a>
              </li>
            ))}
            <li><Link href="/#experience" className="link-underline text-mut hover:text-ink">Experience</Link></li>
          </ul>
        </div>
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
