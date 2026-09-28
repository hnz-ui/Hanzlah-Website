import { site } from "@/content";

export default function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-6 py-8 text-sm text-ink-3 sm:px-8">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <a href="#top" className="link-underline hover:text-ink">
          Back to top
        </a>
      </div>
    </footer>
  );
}
