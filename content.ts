// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE — everything on the site reads from here.
//  Nothing else needs touching to change the copy.
// ─────────────────────────────────────────────────────────────

export const site = {
  // Your CV says "Muhammad Hanzlah Malik" — using the short form you go by.
  name: "Hanzlah Malik",
  role: "Product Marketer",
  // One sentence. What you do, for whom, and the outcome.
  tagline:
    "Product marketing across RegTech, FinTech, KYC/AML, healthcare and a standalone AI product — outbound and ABM, LinkedIn ads, and the research that shapes the roadmap. I design and build the websites too.",
  location: "Lahore, Pakistan",
  email: "hanzlah.malik@outlook.com",
  // Not shown on the site. Uncomment the entry in `socials` below to publish it.
  phone: "+92 302 4178095",
  // Used for <title>, Open Graph, and the browser tab.
  seoTitle: "Hanzlah Malik — Product Marketer",
  seoDescription:
    "Product marketing for B2B SaaS — outbound and ABM, LinkedIn ads, product research and websites. Currently at Market Pro across RegTech, KYC/AML, healthcare and AI products.",
  // Set this once you connect your domain, e.g. "https://hanzlahmalik.com"
  url: "https://example.com",
};

export const about = [
  "I'm a product marketer at Market Pro, working across a portfolio of SaaS products — RegTech, FinTech, KYC/AML, healthcare, and a standalone LLM-based AI tool. The common thread is stakeholder communication: keeping product, content, SEO and PPC pointed at the same thing.",
  "Most of my day sits where research, outreach and paid meet the website. On the KYC/AML and AI products that means cold email out of Apollo and Instantly alongside LinkedIn ads on the same accounts, so outreach and paid reach the same buyers together. Product research feeds the roadmap and the positioning, and what I learn there goes straight into the pages.",
  "The part people don't expect is that I build the pages too. I design website enhancements in Figma, turn research into user flows and layouts, manage the updates end to end, and then watch what actually happens in GA4. For my final-year project I took a SaaS platform from research all the way to a deployed, working product — and this site is a Next.js app I wrote and deployed myself.",
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
    title: "Outbound and ads as one ABM motion",
    year: "Current",
    summary:
      "For the KYC/AML and AI products, the cold email and the LinkedIn ads run against the same account lists — so the sequence and the paid impressions reach the same buying committee together rather than as two disconnected campaigns.",
    outcomes: [
      "Pull and clean prospect and company data from Apollo, Instantly and LinkedIn Sales Navigator, then segment by industry, region and role",
      "Write the email copy and sequences, run the campaigns and handle the follow-ups",
      "Build matching LinkedIn audiences from the same lists and run ads alongside the email sequence",
      "Track response, engagement and campaign performance, then adjust the lists, copy and targeting",
    ],
    tags: ["ABM", "Outbound", "LinkedIn Ads"],
  },
  {
    title: "Product research into roadmap and positioning",
    year: "Current",
    summary:
      "Research that has somewhere to go. Market, competitor and platform research informs what gets built and how it's described — then the same insight lands in the site's user flows and page layouts rather than sitting in a deck.",
    outcomes: [
      "Lead product research feeding roadmap and positioning decisions across the portfolio",
      "Manage stakeholder communication across RegTech, FinTech, KYC/AML, healthcare and AI products",
      "Identify blog topics and align with the content, SEO and PPC teams on campaign strategy",
      "Positioning, feature communication and launch messaging",
    ],
    tags: ["Product Marketing", "Research", "Positioning"],
  },
  {
    title: "Websites — design, build and measure",
    year: "Current",
    summary:
      "I build the pages, not just the brief for them. Design in Figma, translate research into user flows and layouts, manage the updates end to end, then track behaviour in GA4 and act on it.",
    outcomes: [
      "Design website enhancements in Figma and turn research insight into improved user flows and page layouts",
      "Manage website updates end-to-end — pages, product sections, CTAs and landing pages",
      "Track performance and user behaviour in GA4, and review for content, UX and SEO gaps",
      "Build in Next.js and Tailwind and deploy on Vercel — this site is one of them",
    ],
    tags: ["Web", "Figma", "GA4", "Next.js"],
  },
  {
    title: "Community, influencer and launch campaigns",
    year: "Current",
    summary:
      "Audience growth for products whose buyers live in communities rather than ad platforms — particularly the standalone AI product, where Reddit and Discord do more than paid ever could.",
    outcomes: [
      "Run community engagement for the AI product across Reddit, Discord and other platforms, driving audience growth and product visibility",
      "Run influencer marketing initiatives end to end, from finding creators through to follow-up",
      "Managed the Barie 2.0 relaunch campaign on Product Hunt and the other launch platforms",
      "Plan and publish social content, and manage the calendar and boost budget behind it",
    ],
    tags: ["Community", "Influencer", "Launch"],
  },
];

export type SideProject = {
  title: string;
  note?: string;
  summary: string;
  tags: string[];
};

export const sideProjects: SideProject[] = [
  {
    title: "OPANO",
    note: "Final-year project",
    summary:
      "A SaaS platform streamlining communication, HR management and document storage for SMEs. I ran the research and feasibility study — market trends, competitor products and user needs — to shape its AI-driven features, then built and deployed the full working product, taking it from concept to a functioning platform.",
    tags: ["SaaS", "Research", "Built & deployed"],
  },
  {
    title: "Exconnect",
    note: "Runner-up, All Punjab Innovation Expo",
    summary:
      "A marketplace connecting Pakistani small industries — textile companies first — with international buyers. Covered idea validation, business plan and model analysis, a full business model canvas, and the go-to-market strategy.",
    tags: ["Marketplace", "GTM", "Business model"],
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
    company: "Market Pro",
    title: "Product Marketer",
    period: "Sept 2025 — Present",
    detail:
      "Manage stakeholder communication across multiple SaaS products — RegTech, FinTech, KYC/AML, healthcare and a standalone LLM-based AI tool. Run cold email outreach for the AI and KYC products through Apollo and Instantly, and prospect via LinkedIn Sales Navigator. Lead product research informing roadmap and positioning, design website enhancements in Figma, manage site updates end to end and track behaviour in GA4. Plan and execute LinkedIn Ads, run influencer marketing, and manage community engagement on Reddit and Discord. I also manage the interns across the products.",
  },
  {
    company: "TSoftek",
    title: "Business Development Executive",
    period: "May 2025 — Sept 2025",
    detail:
      "Part-time alongside my degree. Identified high-potential Upwork projects through client research and wrote tailored proposals — 14 meetings and 3 client conversions in a single month. Managed the full engagement process from scheduling through negotiating terms to closing.",
  },
  {
    company: "Accountaxpert",
    title: "Sales Associate",
    period: "Dec 2024 — May 2025",
    detail:
      "Part-time alongside my degree. Handled inbound inquiries from Meta and supported outbound sales, matching client needs to our offering, preparing proposals and closing — $5,350 in sales over six months. Maintained CRM records, worked with marketing on campaign execution, and generated and qualified leads through LinkedIn Sales Navigator, Crunchbase and data-scraping tools for targeted email campaigns.",
  },
  {
    company: "Ningbo Green Light Energy",
    title: "Sales Intern",
    period: "June 2023 — Aug 2023",
    detail:
      "The exclusive importer of Canadian Solar inverters from China. Managed incoming leads from Meta, provided product detail, and prepared and negotiated quotations — roughly Rs 8 million of inverters sold over the internship.",
  },
  {
    company: "Apna House",
    title: "Business Developer Intern",
    period: "May 2022 — Aug 2022",
    detail:
      "Supported client relationship management and architect collaboration, keeping onboarding and communication between clients and the platform running smoothly, and helped expand the client base through sales support and process optimisation.",
  },
];

export type Education = {
  school: string;
  degree: string;
  period: string;
};

export const education: Education[] = [
  {
    school: "Information Technology University, Lahore",
    degree: "BS Management & Technology",
    period: "Sept 2021 — Sept 2025",
  },
];

export type Capability = { group: string; items: string[] };

export const capabilities: Capability[] = [
  {
    group: "Outbound & ABM",
    items: [
      "Cold email campaigns end to end",
      "Lead generation & list building",
      "LinkedIn Sales Navigator prospecting",
      "ICP segmentation",
    ],
  },
  {
    group: "Paid, social & community",
    items: [
      "LinkedIn Ads & audience building",
      "Community engagement (Reddit, Discord)",
      "Influencer marketing",
      "Social content & calendars",
    ],
  },
  {
    group: "Product marketing",
    items: [
      "Product & market research",
      "Positioning & feature communication",
      "Stakeholder management",
      "Launches & launch platforms",
    ],
  },
  {
    group: "Web, design & analytics",
    items: [
      "Figma design & user flows",
      "Landing pages & product sections",
      "GA4 tracking & behaviour analysis",
      "Next.js & Tailwind builds",
    ],
  },
  {
    group: "Sales",
    items: [
      "B2B sales & closing",
      "Proposal writing",
      "Objection handling",
      "Client communication",
    ],
  },
  {
    group: "Content",
    items: [
      "Content strategy",
      "Blog topic research",
      "SEO & PPC alignment",
      "Sales enablement collateral",
    ],
  },
];

export const tools = [
  "Apollo",
  "Instantly",
  "HubSpot CRM",
  "Zoho CRM",
  "LinkedIn Sales Navigator",
  "LinkedIn Ads",
  "GA4",
  "Figma",
  "Power BI",
  "Canva",
  "Next.js",
];

export const socials = [
  { label: "Email", href: "mailto:hanzlah.malik@outlook.com" },
  // TODO: replace with your real LinkedIn URL.
  { label: "LinkedIn", href: "https://linkedin.com/in/your-handle" },
  // Uncomment to publish your phone number on the site:
  // { label: "Phone", href: "tel:+923024178095" },
];

// Drop a PDF at public/resume.pdf to make this work, or set to null to hide.
export const resumeHref: string | null = "/resume.pdf";
