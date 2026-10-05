// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE — everything on the site reads from here.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Hanzlah Malik",
  role: "Product Marketer",
  location: "Lahore, Pakistan",
  email: "hanzlah.malik@outlook.com",
  // Not shown on the site. Add a socials entry to publish it.
  phone: "+92 302 4178095",
  seoTitle: "Hanzlah Malik — Product Marketer",
  seoDescription:
    "Product marketing for B2B SaaS — outbound and ABM, LinkedIn ads, and the websites campaigns land on. Currently at Market Pro.",
  // Set this once you connect your domain, e.g. "https://hanzlahmalik.com"
  url: "https://example.com",
  // GA4 measurement ID — injected on every page via app/layout.tsx.
  gaId: "G-HNS02HZJKQ",
};

export const hero = {
  pill: "Hello, I’m Hanzlah \u{1F44B}",
  headlineWhite: "Product marketer crafting",
  headlineGray: "growth that compounds",
};

// Big centered statement. **bold** spans render white, the rest gray.
export const statement =
  "The list, the sequence, the ads and the **landing page** — built by **one person**, aimed at the **same buyer**.";

// One short paragraph. That's all the about section gets.
export const about =
  "I run product marketing at Market Pro across five B2B SaaS products — RegTech, KYC/AML, healthcare and AI. Research shapes the roadmap, outbound and LinkedIn ads hit the same accounts, and I design and build the pages they land on.";

export type Stat = { target: number; suffix: string; label: string };

export const stats: Stat[] = [
  { target: 5, suffix: "+", label: "SaaS products marketed" },
  { target: 4, suffix: "+", label: "Years in sales & marketing" },
  { target: 14, suffix: "", label: "Meetings booked in one month" },
];

export type Project = {
  title: string;
  year: string;
  line: string;
  tags: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    title: "One ABM motion",
    year: "Now",
    line: "Cold email and LinkedIn ads run on the same account lists — one message, every stakeholder.",
    tags: ["ABM", "Outbound", "LinkedIn Ads"],
  },
  {
    title: "Research that ships",
    year: "Now",
    line: "Market and competitor research that lands in the roadmap, the positioning and the page — not a deck.",
    tags: ["Product Marketing", "Positioning"],
  },
  {
    title: "Websites, end to end",
    year: "Now",
    line: "Figma to deployed code to GA4 — I own the page from wireframe to what-actually-happened.",
    tags: ["Figma", "Next.js", "GA4"],
  },
  {
    title: "Launch & community",
    year: "Earlier",
    line: "Product Hunt launches, influencer pushes, and Reddit & Discord growth for products ads can’t reach.",
    tags: ["Launch", "Community"],
  },
];

export type Capability = { group: string; line: string };

export const capabilities: Capability[] = [
  { group: "Outbound & ABM", line: "Lists, sequences and follow-ups that open doors." },
  { group: "LinkedIn & Paid", line: "Audiences built from the same lists the emails hit." },
  { group: "Product Marketing", line: "Positioning, launches and research that ships." },
  { group: "Web & Analytics", line: "Pages designed, built and measured by one pair of hands." },
];

export type Tool = {
  name: string;
  src?: string;
  mono?: { text: string; bg: string; fg: string };
};

export const toolsKit: Tool[] = [
  { name: "Apollo", mono: { text: "A", bg: "#101014", fg: "#f2c94c" } },
  { name: "Instantly", mono: { text: "In", bg: "#4f5dff", fg: "#ffffff" } },
  { name: "HubSpot", src: "/tools/hubspot.svg" },
  { name: "Salesforce", src: "/tools/salesforce.svg" },
  { name: "LinkedIn Ads", src: "/tools/linkedin.svg" },
  { name: "GA4", src: "/tools/googleanalytics.svg" },
  { name: "Figma", src: "/tools/figma.svg" },
  { name: "Canva", src: "/tools/canva.svg" },
  { name: "Power BI", src: "/tools/powerbi.svg" },
  { name: "Zoho", src: "/tools/zoho.svg" },
  { name: "Next.js", src: "/tools/nextdotjs.svg" },
];

export type SideProject = { title: string; note?: string; line: string };

export const sideProjects: SideProject[] = [
  {
    title: "OPANO",
    note: "Final-year project",
    line: "Researched, built and deployed a working SaaS platform for SMEs — concept to live product.",
  },
  {
    title: "Exconnect",
    note: "Runner-up, All Punjab Innovation Expo",
    line: "A marketplace GTM connecting Pakistani small industries with international buyers.",
  },
];

export type Role = {
  company: string;
  title: string;
  period: string;
  line?: string;
};

export const experience: Role[] = [
  {
    company: "Market Pro",
    title: "Product Marketer",
    period: "2025 — Now",
    line: "Outbound, LinkedIn ads, research and web across five SaaS products.",
  },
  {
    company: "TSoftek",
    title: "Business Development Executive",
    period: "2025",
    line: "14 meetings and 3 client closes in a single month.",
  },
  {
    company: "Accountaxpert",
    title: "Sales Associate",
    period: "2024 — 25",
    line: "$5,350 closed across inbound and outbound.",
  },
  {
    company: "Ningbo Green Light Energy",
    title: "Sales Intern",
    period: "2023",
    line: "Rs 8M of solar inverters sold over one internship.",
  },
  {
    company: "Apna House",
    title: "Business Developer Intern",
    period: "2022",
  },
];

export const education = {
  degree: "BS Management & Technology",
  school: "Information Technology University, Lahore",
  period: "2021 — 2025",
};

export const socials = [
  { label: "Email", href: "mailto:hanzlah.malik@outlook.com" },
  // TODO: replace with your real LinkedIn URL.
  { label: "LinkedIn", href: "https://linkedin.com/in/your-handle" },
];

// Drop a PDF at public/resume.pdf to make this work, or set to null to hide.
export const resumeHref: string | null = "/resume.pdf";
