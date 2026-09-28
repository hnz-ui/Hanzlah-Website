// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE — everything on the site reads from here.
//  Nothing else needs touching to change the copy.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Hanzlah Malik",
  role: "Product Marketing Executive",
  // One sentence. What you do, for whom, and the outcome.
  tagline:
    "I run product marketing for B2B software — outbound and ABM, LinkedIn ads, launches and positioning. I also build the websites and landing pages the campaigns point at.",
  // TODO: confirm — I inferred this. Change or delete it.
  location: "Lahore, Pakistan",
  email: "marketing@amlwatcher.com",
  // Used for <title>, Open Graph, and the browser tab.
  seoTitle: "Hanzlah Malik — Product Marketing Executive",
  seoDescription:
    "Product marketing, outbound and ABM, LinkedIn ads, and websites for B2B SaaS. Currently at MPro, working on AML Watcher and Notiro.",
  // Set this once you connect your domain, e.g. "https://hanzlahmalik.com"
  url: "https://example.com",
};

export const about = [
  "I'm a product marketing executive at MPro, where I work across AML Watcher and Notiro. Most of what I do sits at the point where research, outreach and paid meet the website — the list, the sequence, the ad audience and the landing page are all built from the same brief, by the same person.",
  "On AML Watcher that means running cold email out of Apollo and Salesforce while running LinkedIn ads against the same account lists, so outreach and paid land on the same buyers at the same time. On Notiro it means the social and community side, Sales Navigator outreach into healthcare, and the product marketing and website work behind it.",
  "The part people don't expect is that I build the pages too. Not just the brief and the copy — the structure, the design and the front end. This site is a Next.js app I wrote and deployed myself, and it's the same way I approach landing pages and product sections at work.",
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
    title: "AML Watcher — outbound and ads as one ABM motion",
    year: "Current",
    summary:
      "Compliance and AML screening software sold into regulated financial institutions. I run the outbound side and the LinkedIn ads against the same account lists, so the cold email and the paid impressions reach the same buying committee together rather than as two separate campaigns.",
    outcomes: [
      "Pull and clean prospect and company data from Apollo, Salesforce and LinkedIn Sales Navigator, then segment by industry, region and role",
      "Write the email copy and sequences, run the campaigns and handle the follow-ups",
      "Build matching LinkedIn audiences from the same lists and run ads alongside the email sequence",
      "Track response, engagement and campaign performance, then adjust the lists, copy and targeting",
    ],
    tags: ["ABM", "Outbound", "LinkedIn Ads"],
  },
  {
    title: "Notiro — product marketing, community and web",
    year: "Current",
    summary:
      "A healthcare product where the audience lives in communities rather than ad platforms. I own the social and community side, the outreach, and the product marketing and website work that sits behind it.",
    outcomes: [
      "Positioning, feature communication and launches",
      "Community engagement on LinkedIn and healthcare-focused communities, plus Sales Navigator outreach to decision makers who fit the ICP",
      "Plan, create and publish the social content — product, educational, feature and brand posts",
      "Build and maintain website pages, CTAs and feature sections, and review them for content, UX and SEO gaps",
      "Work with the Content and SEO teams, and keep the external Notiro team aligned on the work assigned to them",
    ],
    tags: ["Product Marketing", "Community", "Web"],
  },
  {
    title: "Websites and landing pages",
    year: "Ongoing",
    summary:
      "I build the pages, not just the brief for them. Structure, copy, design and the front-end build — across AML Watcher, Notiro and Barie, and including this site.",
    outcomes: [
      "Create, update and manage website pages, product sections, CTAs and landing pages",
      "Write the page copy and design the supporting assets",
      "Review live sites to find improvements in content, UX, CTAs and SEO",
      "Build in Next.js and Tailwind and deploy on Vercel — this site is one of them",
    ],
    tags: ["Web", "Design", "Next.js"],
  },
  {
    title: "Barie 2.0 — relaunch campaign",
    year: "Earlier",
    summary:
      "Ran the launch campaign for the Barie 2.0 relaunch on Product Hunt and the other launch platforms, with the social, community and influencer push around it.",
    outcomes: [
      "Owned the Product Hunt launch and the surrounding platform pushes",
      "Ran the content calendar and posting schedule, boosted posts on Instagram and managed the boost budget",
      "Placed posts through community leaders on Reddit, Discord, Quora, Medium, LinkedIn and Facebook groups",
      "Handled directory and listing registrations, and influencer outreach with the follow-up",
    ],
    tags: ["Launch", "Community", "Social"],
  },
];

export type Role = {
  company: string;
  title: string;
  period: string;
  detail: string;
};

// TODO: swap the `period` values for real dates (e.g. "2024 — Present").
// I don't have your start dates, so these are phase labels for now.
export const experience: Role[] = [
  {
    company: "MPro",
    title: "Product Marketing Executive",
    period: "Present",
    detail:
      "Own the outbound and ABM motion on AML Watcher — cold email out of Apollo and Salesforce, LinkedIn ads on the same accounts — plus the product marketing, community, outreach and website work on Notiro. Research runs underneath all of it: accounts, competitors and platforms get checked before a list, campaign or page is built. I also manage the interns across the products, setting their priorities and reviewing the work through to close.",
  },
  {
    company: "Barie, AML Watcher & Media Watcher",
    title: "Earlier scope at MPro",
    period: "Earlier",
    detail:
      "The same kind of work across three more products: social media and the content calendar, community engagement and influencer outreach, LinkedIn ads and audience lists, cold email, and HubSpot automation — workflows, email flows, sequences and newsletters. On the product side, website builds and page copy, design, GTM support, monthly reporting, client communication, agency coordination, and sales enablement collateral including pitch decks, flyers and case studies.",
  },
  {
    company: "Before MPro",
    title: "Business Development & Client Success",
    period: "Earlier",
    detail:
      "A mix of sales and customer success — client communication on live projects and onboarding, cold email campaigns run end to end with the prospect lists behind them, LinkedIn and Sales Navigator outreach to service providers, social account management, and business development through Upwork and other freelance profiles, writing the proposals and handling what followed. Also edited and managed video in CapCut Pro.",
  },
];

export type Capability = { group: string; items: string[] };

export const capabilities: Capability[] = [
  {
    group: "Outbound & ABM",
    items: [
      "Cold email campaigns end to end",
      "Lead research & list building",
      "ICP segmentation",
      "Sales Navigator outreach",
    ],
  },
  {
    group: "Paid & social",
    items: [
      "LinkedIn ads & audience building",
      "Campaign performance tracking",
      "Social content & calendars",
      "Community engagement",
    ],
  },
  {
    group: "Product marketing",
    items: [
      "Positioning & feature communication",
      "Launches & launch platforms",
      "Sales enablement collateral",
      "Case studies & reporting",
    ],
  },
  {
    group: "Websites & content",
    items: [
      "Landing pages & product sections",
      "Page copy & design",
      "CRO, UX & SEO review",
      "Next.js & Tailwind builds",
    ],
  },
];

export const tools = [
  "Apollo",
  "Salesforce",
  "HubSpot",
  "LinkedIn Sales Navigator",
  "LinkedIn Ads",
  "Product Hunt",
  "Next.js",
  "Figma",
  "CapCut Pro",
];

export const socials = [
  { label: "Email", href: "mailto:marketing@amlwatcher.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/your-handle" },
  { label: "GitHub", href: "https://github.com/your-handle" },
  { label: "X", href: "https://x.com/your-handle" },
];

// Drop a PDF at public/resume.pdf to make this work, or set to null to hide.
export const resumeHref: string | null = "/resume.pdf";
