// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE — everything on the site reads from here.
//  Nothing else needs touching to change the copy.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Hanzlah Malik",
  role: "Marketing & Growth",
  // One sentence. What you do, for whom, and the outcome.
  tagline:
    "I build demand systems for B2B software — positioning, paid acquisition, and the automation that makes both compound.",
  location: "Lahore, Pakistan",
  email: "marketing@amlwatcher.com",
  // Used for <title>, Open Graph, and the browser tab.
  seoTitle: "Hanzlah Malik — Marketing & Growth",
  seoDescription:
    "Portfolio of Hanzlah Malik — B2B marketing, paid acquisition, and growth systems.",
  // Set this once you connect your domain, e.g. "https://hanzlahmalik.com"
  url: "https://example.com",
};

export const about = [
  "I work at the seam between positioning and distribution. Most teams have one or the other; the compounding happens when the story and the channel are built from the same brief.",
  "Over the last few years I've run acquisition for B2B SaaS — LinkedIn and paid social, lifecycle, and the measurement underneath it — and built the internal tooling that made those programs repeatable rather than heroic.",
  "Right now I'm most interested in what happens when AI stops being a feature and starts being the operating layer of a go-to-market team.",
];

export type Project = {
  title: string;
  year: string;
  summary: string;
  // Two or three concrete outcomes. Numbers if you have them.
  outcomes: string[];
  tags: string[];
  href?: string; // optional link — omit for private work
};

export const projects: Project[] = [
  {
    title: "ABM Copilot",
    year: "2026",
    summary:
      "An account-based intelligence layer for LinkedIn Ads — creative fatigue detection, rotation, and frequency capping surfaced as decisions rather than dashboards.",
    outcomes: [
      "Positioning, messaging, and the full 30-page marketing site",
      "Interactive lead magnets that turned cold traffic into qualified demos",
      "Design system carried end-to-end from brief to shipped pages",
    ],
    tags: ["Positioning", "Web", "Demand Gen"],
    href: "https://abmcopilot.com",
  },
  {
    title: "AML Watcher",
    year: "2025",
    summary:
      "Compliance screening software sold into regulated financial institutions — a long, evidence-heavy sales cycle where content does the qualifying.",
    outcomes: [
      "Built the organic engine: comparison, regulation, and use-case content",
      "Paid programs aimed at compliance officers, not generic finance titles",
    ],
    tags: ["SEO", "Paid", "RegTech"],
  },
  {
    title: "Add your third project",
    year: "2024",
    summary:
      "Replace this block in content.ts. Keep the shape: what it was, who it was for, and what changed because you worked on it.",
    outcomes: ["Outcome one", "Outcome two"],
    tags: ["Tag", "Tag"],
  },
];

export type Role = {
  company: string;
  title: string;
  period: string;
  detail: string;
};

export const experience: Role[] = [
  {
    company: "AML Watcher",
    title: "Marketing Lead",
    period: "2024 — Present",
    detail:
      "Own demand generation end to end: positioning, content, paid acquisition, and the reporting that ties spend to pipeline.",
  },
  {
    company: "Previous Company",
    title: "Your Title",
    period: "2022 — 2024",
    detail:
      "One or two lines on scope and the thing you're proudest of. Edit in content.ts.",
  },
  {
    company: "Earlier Company",
    title: "Your Title",
    period: "2020 — 2022",
    detail: "Where you started and what it taught you.",
  },
];

export const skills = [
  "Positioning & messaging",
  "LinkedIn & paid social",
  "SEO and content strategy",
  "Lifecycle & email",
  "Marketing analytics",
  "Landing pages & CRO",
  "AI-assisted workflows",
  "Next.js (enough to ship)",
];

export const socials = [
  { label: "Email", href: "mailto:marketing@amlwatcher.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/your-handle" },
  { label: "GitHub", href: "https://github.com/your-handle" },
  { label: "X", href: "https://x.com/your-handle" },
];

// Drop a PDF at public/resume.pdf to make this work, or set to null to hide.
export const resumeHref: string | null = "/resume.pdf";
