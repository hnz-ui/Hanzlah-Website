import { site } from "@/content";

// `wide` links are dropped on narrow screens so the bar never has to scroll.
const links = [
  { label: "About", href: "#about", wide: true },
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience", wide: true },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4 sm:px-8">
        <a
          href="#top"
          className="truncate font-display text-lg tracking-tight text-ink"
        >
          {site.name}
        </a>
        <ul className="flex shrink-0 items-center gap-4 text-sm text-ink-2 sm:gap-6">
          {links.map((l) => (
            <li key={l.href} className={l.wide ? "hidden sm:block" : ""}>
              <a href={l.href} className="link-underline hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
