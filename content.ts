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
  pill: "Product Marketer & Website Builder",
  // Words wrapped in == == render in the accent color.
  headline: "Growth for B2B SaaS \u2014 from the first ==cold email== to the ==launched website==.",
  sub: "I\u2019m Hanzlah Malik. I run product marketing, ABM outbound and LinkedIn Ads for SaaS products \u2014 and I design and build React websites that turn those clicks into pipeline.",
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

export type Service = {
  slug: string;
  name: string;
  short: string; // one line for the home services grid
  accent: string;
  accentSoft: string;
  visual: "code" | "design" | "outbound" | "pm" | "community";
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  h1: string;
  sub: string;
  offerings: { t: string; d: string }[];
  tools: string[];
  steps: { t: string; d: string }[];
  proof: string[];
  skillsGroup: string; // matches a skillGroups.group
};

export const services: Service[] = [
  {
    slug: "product-marketing",
    name: "Product Marketing",
    short: "Positioning, launches and research that ships \u2014 not decks.",
    accent: "#7c3aed",
    accentSoft: "#f3eeff",
    visual: "pm",
    seoTitle: "Product Marketing Services \u2014 SaaS Positioning, GTM & Launches | Hanzlah Malik",
    seoDescription:
      "Product marketing for B2B SaaS: positioning and messaging, go-to-market strategy, competitor research, Product Hunt launches and sales enablement. Research that lands in the roadmap, the copy and the page.",
    keywords: ["product marketing consultant", "SaaS positioning", "go-to-market strategy", "product launch marketing", "competitor research", "sales enablement"],
    h1: "Product marketing that ships, not slides.",
    sub: "Positioning, go-to-market and launch execution for B2B SaaS \u2014 grounded in market and competitor research that ends up in the roadmap, the messaging and the landing page.",
    offerings: [
      { t: "Positioning & messaging", d: "A sharp story per product and persona \u2014 tested against real competitor claims." },
      { t: "Go-to-market strategy", d: "Channel, audience and launch sequencing for new products and features." },
      { t: "Market & competitor research", d: "Research that feeds roadmap and pricing decisions, not a folder." },
      { t: "Launches", d: "Product Hunt and launch-platform campaigns, end to end." },
      { t: "Sales enablement", d: "Decks, one-pagers, battle cards and case studies your sales team actually uses." },
    ],
    tools: ["Apollo", "LinkedIn Sales Navigator", "HubSpot", "Power BI", "GA4"],
    steps: [
      { t: "Research", d: "Market, competitors, customers \u2014 the evidence first." },
      { t: "Position", d: "Messaging, pricing input and launch narrative." },
      { t: "Ship", d: "Pages, campaigns and enablement that carry it to buyers." },
    ],
    proof: [
      "5+ B2B SaaS products marketed across RegTech, KYC/AML, healthcare and AI",
      "Managed the Barie 2.0 relaunch on Product Hunt and launch platforms",
    ],
    skillsGroup: "Product Marketing",
  },
  {
    slug: "email-outbound",
    name: "Email & Outbound (ABM)",
    short: "Cold email and LinkedIn ads on the same accounts \u2014 one motion.",
    accent: "#2563eb",
    accentSoft: "#eff4ff",
    visual: "outbound",
    seoTitle: "Cold Email & Outbound Marketing Services \u2014 ABM, Apollo & Instantly | Hanzlah Malik",
    seoDescription:
      "Outbound lead generation for B2B SaaS: cold email campaigns in Apollo and Instantly, LinkedIn Sales Navigator prospecting, list building, ICP segmentation and ABM \u2014 with LinkedIn Ads run on the same account lists.",
    keywords: ["cold email campaigns", "outbound lead generation", "ABM marketing", "Apollo cold email", "LinkedIn Sales Navigator prospecting", "B2B list building"],
    h1: "Outbound that lands in the right inbox.",
    sub: "Cold email and LinkedIn ads aimed at the same account lists, so every stakeholder hears one message \u2014 lists built from a real ICP, sequences written to get replies, follow-ups that don\u2019t let deals die.",
    offerings: [
      { t: "Cold email campaigns", d: "Planning, copy, sequences and follow-ups in Apollo and Instantly." },
      { t: "List building & ICP", d: "Prospect data pulled, cleaned and segmented by industry, region and role." },
      { t: "ABM motions", d: "Matching LinkedIn audiences built from the same lists the emails hit." },
      { t: "LinkedIn prospecting", d: "Sales Navigator outreach to decision makers who fit." },
      { t: "Reporting", d: "Reply, meeting and pipeline tracking \u2014 adjust lists, copy, targeting." },
    ],
    tools: ["Apollo", "Instantly", "Salesforce", "LinkedIn Sales Navigator", "LinkedIn Ads", "HubSpot", "Zoho"],
    steps: [
      { t: "Build", d: "ICP, lists and segments from clean data." },
      { t: "Launch", d: "Sequences + matching ad audiences together." },
      { t: "Tune", d: "Read replies and engagement; sharpen weekly." },
    ],
    proof: [
      "14 meetings and 3 client closes booked in a single month",
      "Outbound run daily across KYC/AML and AI SaaS products",
    ],
    skillsGroup: "Outbound & ABM",
  },
  {
    slug: "web-development",
    name: "Website Development",
    short: "React & Next.js sites \u2014 design to copy to deployment.",
    accent: "#059669",
    accentSoft: "#eafaf3",
    visual: "code",
    seoTitle: "React & Next.js Website Development \u2014 Design to Deployment | Hanzlah Malik",
    seoDescription:
      "React and Next.js website development for startups and SaaS: landing pages and marketing sites designed in Figma, written for conversion and SEO, built in React/Next.js with Tailwind, and deployed on Vercel with GA4 tracking.",
    keywords: ["React website developer", "Next.js landing page", "marketing website development", "Vercel deployment", "website copywriting", "GA4 setup"],
    h1: "Websites built like products: design, copy, code, deploy.",
    sub: "One person from Figma to production \u2014 I design the page, write the copy, build it in React and Next.js with Tailwind, deploy it on Vercel and wire GA4 so you know what happened. This site is one of them.",
    offerings: [
      { t: "Landing pages & marketing sites", d: "Conversion-first pages for products, launches and campaigns." },
      { t: "Design in Figma", d: "User flows and layouts before a line of code." },
      { t: "Copywriting", d: "Clear, SEO-aware copy written with the design, not after it." },
      { t: "React / Next.js build", d: "Fast, responsive, accessible \u2014 Tailwind, App Router, static-first." },
      { t: "Deploy & measure", d: "Vercel deployment, domains, and GA4 behaviour tracking." },
    ],
    tools: ["Figma", "Next.js", "Tailwind CSS", "Vercel", "GA4", "Claude & AI tools"],
    steps: [
      { t: "Design", d: "Figma flows and layouts from research." },
      { t: "Build", d: "React/Next.js, reviewed at every breakpoint." },
      { t: "Ship", d: "Deployed, indexed and measured in GA4." },
    ],
    proof: [
      "This portfolio: designed, written, built and deployed solo",
      "OPANO (FYP): a working SaaS platform taken from concept to deployed product",
    ],
    skillsGroup: "Web, Design & Analytics",
  },
  {
    slug: "ui-ux-design",
    name: "UI/UX Design",
    short: "Figma design and user flows that convert \u2014 AI-accelerated.",
    accent: "#e11d48",
    accentSoft: "#ffeef2",
    visual: "design",
    seoTitle: "UI/UX & Figma Design Services \u2014 Landing Pages That Convert | Hanzlah Malik",
    seoDescription:
      "UI/UX design in Figma for SaaS and startups: landing page design, user flows, website redesigns and conversion-focused layouts \u2014 accelerated with AI design tools like Claude and ChatGPT, informed by GA4 behaviour data.",
    keywords: ["Figma designer", "UI UX design services", "landing page design", "user flow design", "website redesign", "conversion design"],
    h1: "Design that starts with the user flow, not the mood board.",
    sub: "Figma design for pages people actually finish: user flows and layouts built from research and GA4 behaviour, polished with AI design tools, and handed over ready to build \u2014 or built by me.",
    offerings: [
      { t: "Landing page design", d: "Layouts engineered for the scroll, the skim and the click." },
      { t: "User flows", d: "From first visit to converted \u2014 mapped before pixels." },
      { t: "Website redesigns", d: "Audits of real behaviour, then design that fixes what leaks." },
      { t: "Design systems", d: "Tokens, type scales and components that keep pages consistent." },
      { t: "AI-accelerated iteration", d: "Claude and ChatGPT in the loop \u2014 more directions, faster." },
    ],
    tools: ["Figma", "Canva", "Claude", "ChatGPT", "GA4"],
    steps: [
      { t: "Map", d: "Flows and intent before any visuals." },
      { t: "Design", d: "Figma layouts, variants explored fast with AI." },
      { t: "Validate", d: "GA4 and CRO review after it ships." },
    ],
    proof: [
      "Website enhancements designed in Figma across five SaaS products",
      "Research insights translated into user flows and page layouts weekly",
    ],
    skillsGroup: "Web, Design & Analytics",
  },
  {
    slug: "community-growth",
    name: "Community & Influencers",
    short: "Reddit, Discord, Product Hunt and creators \u2014 where ads can\u2019t go.",
    accent: "#d97706",
    accentSoft: "#fdf3e3",
    visual: "community",
    seoTitle: "Community Marketing & Influencer Outreach \u2014 Reddit, Discord, Product Hunt | Hanzlah Malik",
    seoDescription:
      "Community-led growth for SaaS: Reddit and Discord community building, influencer outreach and management, Product Hunt launches, and placements in Facebook groups, Quora and Medium \u2014 for audiences paid ads can\u2019t reach.",
    keywords: ["community marketing", "Reddit marketing", "Discord community growth", "influencer outreach", "Product Hunt launch", "SaaS community building"],
    h1: "Growth where your buyers actually hang out.",
    sub: "Some audiences never click an ad. I build presence in the communities they trust \u2014 Reddit, Discord, Quora, Medium, Facebook groups \u2014 and recruit the creators they already listen to.",
    offerings: [
      { t: "Community engagement", d: "Genuine presence and placements, approved by community leaders." },
      { t: "Influencer outreach", d: "Finding creators, negotiating, managing the follow-through." },
      { t: "Launch pushes", d: "Product Hunt and platform launches with community momentum." },
      { t: "Directories & listings", d: "The long tail of discovery, registered and maintained." },
      { t: "Social content", d: "Calendars, post copy and design briefs that keep channels alive." },
    ],
    tools: ["Reddit", "Discord", "Product Hunt", "LinkedIn", "Canva", "HubSpot"],
    steps: [
      { t: "Find", d: "Where the ICP actually spends time." },
      { t: "Join", d: "Contribute first; placements come after trust." },
      { t: "Amplify", d: "Creators and launches on top of the base." },
    ],
    proof: [
      "Ran community engagement for an AI product across Reddit and Discord",
      "Barie 2.0 Product Hunt relaunch managed end to end",
    ],
    skillsGroup: "Paid & Social",
  },
];

export type SkillGroup = { group: string; items: string[] };

// The full skill inventory — rendered as grouped chips.
export const skillGroups: SkillGroup[] = [
  {
    group: "Outbound & ABM",
    items: [
      "Cold Email Campaigns", "Lead Research", "List Building",
      "ICP Segmentation", "Apollo", "Instantly",
      "LinkedIn Sales Navigator", "Follow-up Sequences",
    ],
  },
  {
    group: "Paid & Social",
    items: [
      "LinkedIn Ads", "Audience Building", "Campaign Tracking",
      "Instagram Boosting", "Content Calendars", "Community Engagement",
      "Reddit & Discord", "Influencer Outreach",
    ],
  },
  {
    group: "Product Marketing",
    items: [
      "Positioning & Messaging", "Product Research", "Competitor Research",
      "Market Research", "Product Hunt Launches", "GTM Strategy",
      "Case Studies", "Sales Enablement", "Stakeholder Management",
    ],
  },
  {
    group: "Content & Email",
    items: [
      "Content Strategy", "Blog Topic Research", "SEO Alignment",
      "PPC Coordination", "Newsletters", "HubSpot Automation", "Copywriting",
    ],
  },
  {
    group: "Web, Design & Analytics",
    items: [
      "Landing Pages", "Figma", "User Flows", "Next.js", "Tailwind CSS",
      "GA4", "CRO & UX Review", "Canva", "Power BI",
    ],
  },
  {
    group: "Sales & BD",
    items: [
      "B2B Sales", "Proposal Writing", "Objection Handling",
      "Client Communication", "HubSpot", "Zoho", "Salesforce",
      "Upwork BD", "Client Onboarding",
    ],
  },
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
