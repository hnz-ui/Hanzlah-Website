import { site } from "@/content";
import Logo from "./Logo";

const links = [
  { label: "Portfolio", href: "#work" },
  { label: "About", href: "#about", wide: true },
  { label: "Experience", href: "#experience", wide: true },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/75 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3.5 sm:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-2.5">
          <Logo size={30} />
          <span className="display truncate text-lg text-ink">
            {site.name.split(" ")[0]}
          </span>
        </a>
        <div className="flex shrink-0 items-center gap-4 sm:gap-7">
          <ul className="flex items-center gap-4 text-sm text-mut sm:gap-7">
            {links.map((l) => (
              <li key={l.href} className={l.wide ? "hidden sm:block" : ""}>
                <a href={l.href} className="link-underline hover:text-ink">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn !px-4 !py-2 text-sm sm:!px-5">
            Let’s Talk <span aria-hidden>↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
