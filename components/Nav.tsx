import Link from "next/link";
import { site } from "@/content";

const links = [
  { label: "Services", href: "/services" },
  { label: "Experience", href: "/#experience", wide: true },
  { label: "Contact", href: "/#contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      {/* top strip: direct contact */}
      <div className="border-b border-line bg-surface">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-1.5 text-xs text-mut sm:px-8">
          <a href={`mailto:${site.email}`} className="link-underline hover:text-ink">
            {site.email}
          </a>
          <a href={`tel:${site.phone.replace(/ /g, "")}`} className="link-underline hover:text-ink">
            {site.phone}
          </a>
        </div>
      </div>
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3.5 sm:px-8">
        <Link href="/" className="display truncate text-xl text-ink">
          Hanzlah
        </Link>
        <div className="flex shrink-0 items-center gap-4 sm:gap-7">
          <ul className="flex items-center gap-4 text-sm text-mut sm:gap-7">
            {links.map((l) => (
              <li key={l.href} className={l.wide ? "hidden sm:block" : ""}>
                <Link href={l.href} className="link-underline hover:text-ink">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <a href="/#contact" className="btn !px-4 !py-2 text-sm sm:!px-5">
            Let’s Talk
          </a>
        </div>
      </nav>
    </header>
  );
}
