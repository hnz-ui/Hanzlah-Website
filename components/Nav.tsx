import { site } from "@/content";
import Logo from "./Logo";

const links = [
  { label: "About", href: "#about", wide: true },
  { label: "Work", href: "#work" },
  { label: "Tools", href: "#tools", wide: true },
  { label: "Experience", href: "#experience", wide: true },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3.5 sm:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-2.5 text-ink">
          <Logo size={32} className="shrink-0" />
          <span className="display truncate text-lg">
            {site.name.split(" ")[0]}
          </span>
        </a>

        <p className="hidden text-[0.6rem] font-semibold uppercase leading-relaxed tracking-[0.14em] text-ink-3 md:block">
          Product Marketer
          <br />
          ABM · LinkedIn Ads · Web
        </p>

        <div className="flex shrink-0 items-center gap-4 sm:gap-6">
          <ul className="flex items-center gap-4 text-sm text-ink-2 sm:gap-6">
            {links.map((l) => (
              <li key={l.href} className={l.wide ? "hidden sm:block" : ""}>
                <a href={l.href} className="link-underline hover:text-ink">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="pill !py-2.5 !px-4 sm:!px-5">
            Let’s Talk
          </a>
        </div>
      </nav>
    </header>
  );
}
