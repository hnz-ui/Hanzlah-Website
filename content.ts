// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE, everything on the site reads from here.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Hanzlah Malik",
  role: "Product Marketer",
  location: "Lahore, Pakistan",
  email: "hanzlah.malik@outlook.com",
  // Not shown on the site. Add a socials entry to publish it.
  phone: "+92 302 4178095",
  seoTitle: "Hanzlah Malik, Product Marketer",
  seoDescription:
    "Product marketing for B2B SaaS, outbound and ABM, LinkedIn ads, and the websites campaigns land on. Currently at Market Pro.",
  // Set this once you connect your domain, e.g. "https://hanzlahmalik.com"
  url: "https://example.com",
  // GA4 measurement ID, injected on every page via app/layout.tsx.
  gaId: "G-HNS02HZJKQ",
};

export const hero = {
  pill: "Product Marketer",
  headline: "Hey, I\u2019m ==Hanzlah==.",
  sub: "I market products across B2B, B2C and personal brands: research, launches, LinkedIn ads, outbound and content. And I build the websites myself, in React.",
};

export const about =
  "I\u2019m a product marketer working across B2B and B2C SaaS: RegTech, KYC and AML, healthtech, AI and more. I also handle personal brand marketing. Research is where everything starts for me. It shapes the roadmap, the positioning, the ads and the pages people land on.";

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
    line: "Cold email and LinkedIn ads run on the same account lists, one message, every stakeholder.",
    tags: ["ABM", "Outbound", "LinkedIn Ads"],
  },
  {
    title: "Research that ships",
    year: "Now",
    line: "Market and competitor research that lands in the roadmap, the positioning and the page, not a deck.",
    tags: ["Product Marketing", "Positioning"],
  },
  {
    title: "Websites, end to end",
    year: "Now",
    line: "Figma to deployed code to GA4, I own the page from wireframe to what-actually-happened.",
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
  visual: "code" | "design" | "outbound" | "pm" | "community" | "ads" | "content" | "research";
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  h1: string;
  sub: string;
  offerings: { t: string; d: string }[];
  tools: string[];
  steps: { t: string; d: string }[];
  proof: string[];
  faqs: { q: string; a: string }[];
  skillsGroup: string; // matches a skillGroups.group
};

export const services: Service[] = [
  {
    slug: "product-marketing",
    name: "Product Marketing",
    short: "Positioning, GTM and launches, run with the SEO and PPC teams.",
    accent: "#7c3aed", accentSoft: "#f3eeff", visual: "pm",
    seoTitle: "Product Marketing Services, SaaS Positioning, GTM & Launches | Hanzlah Malik",
    seoDescription: "Product marketing for B2B SaaS: positioning and messaging, go-to-market strategy, launch management, stakeholder communication and campaign coordination with SEO, PPC and content teams.",
    keywords: ["product marketing consultant", "SaaS positioning", "go-to-market strategy", "product launch marketing", "stakeholder management", "sales enablement"],
    h1: "Product marketing that ==ships==, not slides.",
    sub: "I own the path from research to launch: the positioning, the go-to-market plan, the launch itself, and the weekly coordination with SEO, PPC and content teams that keeps every channel telling the same story.",
    offerings: [
      { t: "Positioning & messaging", d: "One sharp story per product and persona, tested against live competitor claims." },
      { t: "Go-to-market & launches", d: "Launch strategy, sequencing and execution, Product Hunt included." },
      { t: "Team coordination", d: "Aligning SEO, PPC and content teams on one campaign strategy." },
      { t: "Stakeholder communication", d: "Keeping product, sales and leadership on the same page across products." },
      { t: "Sales enablement", d: "Decks, one-pagers, battle cards and case studies sales actually uses." },
    ],
    tools: ["HubSpot", "Salesforce", "GA4", "Power BI", "Figma", "LinkedIn"],
    steps: [
      { t: "Research first", d: "Market, competitors and users, evidence before opinions." },
      { t: "Position & plan", d: "Messaging, GTM sequencing, channel owners briefed." },
      { t: "Launch & iterate", d: "Ship the campaign, read the data, sharpen weekly." },
    ],
    proof: [
      "5+ B2B SaaS products marketed across RegTech, KYC/AML, healthcare and AI",
      "Barie 2.0 relaunch on Product Hunt managed end to end",
    ],
    faqs: [
      { q: "Do you work with early products?", a: "Yes. Pre-launch positioning and the first go-to-market are my favorite stage." },
      { q: "Can you work with our existing teams?", a: "That is the normal setup. I align SEO, PPC, content and sales on one plan." },
      { q: "What do you need to start?", a: "Access to the product, any past data, and two weeks for research." },
    ],
    skillsGroup: "Product Marketing",
  },
  {
    slug: "market-research",
    name: "Market & Product Research",
    short: "The thing everything else is built on, accounts, rivals, platforms.",
    accent: "#0d9488", accentSoft: "#e7f7f4", visual: "research",
    seoTitle: "Market Research & Competitor Analysis for B2B SaaS | Hanzlah Malik",
    seoDescription: "Market, competitor and product research for B2B SaaS: ICP and account research, competitor teardowns, platform and channel research, and insight reports that feed roadmaps, positioning and campaigns.",
    keywords: ["market research B2B", "competitor analysis SaaS", "ICP research", "product research", "competitive intelligence", "account research"],
    h1: "Every campaign here starts with ==good research==.",
    sub: "Research is the first thing I do on any product, the accounts, the competitors, the platforms, the gaps. It feeds the roadmap, the positioning, the lists and the pages, instead of dying in a document.",
    offerings: [
      { t: "Competitor teardowns", d: "Claims, pricing, funnels and positioning, mapped and monitored." },
      { t: "ICP & account research", d: "Who actually buys, who decides, and where to find them." },
      { t: "Platform & channel research", d: "Which communities, networks and listings are worth your time." },
      { t: "Product research", d: "User needs and market trends that shape roadmap decisions." },
      { t: "Insight reporting", d: "Findings as decisions, briefs that teams can act on Monday." },
    ],
    tools: ["ChatGPT", "Claude", "Grok", "LinkedIn Sales Navigator", "Crunchbase", "Power BI"],
    steps: [
      { t: "Collect", d: "Primary sources, platforms, data pulls." },
      { t: "Synthesize", d: "Patterns, gaps and angles that matter." },
      { t: "Hand off", d: "Briefs wired into roadmap, copy and campaigns." },
    ],
    proof: [
      "Research runs through every list, campaign and page I ship",
      "Product research informing roadmap and positioning across five products",
    ],
    faqs: [
      { q: "What does a competitor teardown include?", a: "Claims, pricing, funnels, channels and the gaps you can own." },
      { q: "How long does research take?", a: "A first useful brief in one week. Deep dives in two to three." },
      { q: "How is it delivered?", a: "Short briefs with decisions in them, not 60-page decks." },
    ],
    skillsGroup: "Product Marketing",
  },
  {
    slug: "linkedin-ads",
    name: "LinkedIn Ads",
    short: "Campaigns aimed at the same accounts the outbound hits.",
    accent: "#0a66c2", accentSoft: "#e9f1fb", visual: "ads",
    seoTitle: "LinkedIn Ads Management for B2B SaaS, ABM Campaigns | Hanzlah Malik",
    seoDescription: "LinkedIn Ads management: campaign setup, ABM audience building from real account lists, creative briefs, budget management and performance tracking, coordinated with SEO and PPC teams for one campaign strategy.",
    keywords: ["LinkedIn Ads management", "LinkedIn ABM campaigns", "B2B LinkedIn advertising", "LinkedIn audience targeting", "LinkedIn ads agency alternative"],
    h1: "LinkedIn ads that know ==exactly who== they are for.",
    sub: "Audiences built from the same account lists the cold email hits, so the buying committee sees one message everywhere. Setup, creative briefs, budgets and the weekly read of what\u2019s working.",
    offerings: [
      { t: "Campaign setup & structure", d: "Objectives, formats and naming that keep accounts manageable." },
      { t: "ABM audience building", d: "Matched audiences from outbound lists, not LinkedIn\u2019s guesses." },
      { t: "Creative & copy briefs", d: "Ad angles and design briefs that earn the scroll-stop." },
      { t: "Budget & pacing", d: "Spend watched daily; losers cut, winners fed." },
      { t: "Performance tracking", d: "From impressions to meetings, reported in language execs read." },
    ],
    tools: ["LinkedIn Ads", "LinkedIn Campaign Manager", "LinkedIn Sales Navigator"],
    steps: [
      { t: "Audience", d: "Account lists in, matched audiences out." },
      { t: "Launch", d: "Creative variants live against clear objectives." },
      { t: "Optimize", d: "Weekly cuts and doubles based on the data." },
    ],
    proof: [
      "LinkedIn ads run alongside outbound as one ABM motion",
      "Campaigns coordinated with SEO and PPC teams on shared strategy",
    ],
    faqs: [
      { q: "What budgets do you work with?", a: "From first-campaign tests to always-on ABM programs." },
      { q: "Do you make the creatives?", a: "I write the copy and brief the design, or produce simple creatives myself." },
      { q: "How do you report?", a: "Weekly: spend, CTR, cost per lead and meetings, in plain language." },
    ],
    skillsGroup: "Paid & Social",
  },
  {
    slug: "email-outbound",
    name: "Email & Outbound (ABM)",
    short: "Cold email in Apollo and Instantly, lists, copy, follow-ups.",
    accent: "#2563eb", accentSoft: "#eff4ff", visual: "outbound",
    seoTitle: "Cold Email & Outbound Marketing Services, ABM, Apollo & Instantly | Hanzlah Malik",
    seoDescription: "Outbound lead generation for B2B SaaS: cold email campaigns in Apollo and Instantly, LinkedIn Sales Navigator prospecting, list building, ICP segmentation and ABM with LinkedIn Ads on the same account lists.",
    keywords: ["cold email campaigns", "outbound lead generation", "ABM marketing", "Apollo cold email", "LinkedIn Sales Navigator prospecting", "B2B list building"],
    h1: "Outbound that lands in the ==right inbox==.",
    sub: "Cold email and LinkedIn ads aimed at the same account lists, so every stakeholder hears one message, lists built from a real ICP, sequences written to get replies, follow-ups that don\u2019t let deals die.",
    offerings: [
      { t: "Cold email campaigns", d: "Planning, copy, sequences and follow-ups in Apollo and Instantly." },
      { t: "List building & ICP", d: "Prospect data pulled, cleaned and segmented by industry, region and role." },
      { t: "ABM motions", d: "Matching LinkedIn audiences built from the same lists the emails hit." },
      { t: "LinkedIn prospecting", d: "Sales Navigator outreach to decision makers who fit." },
      { t: "Reporting", d: "Reply, meeting and pipeline tracking, adjust lists, copy, targeting." },
    ],
    tools: ["Apollo", "Instantly", "Salesforce", "LinkedIn Sales Navigator"],
    steps: [
      { t: "Build", d: "ICP, lists and segments from clean data." },
      { t: "Launch", d: "Sequences + matching ad audiences together." },
      { t: "Tune", d: "Read replies and engagement; sharpen weekly." },
    ],
    proof: [
      "14 meetings and 3 client closes booked in a single month",
      "Outbound run daily across KYC/AML and AI SaaS products",
    ],
    faqs: [
      { q: "Is cold email still working?", a: "Yes, when lists are tight and copy is specific. That is the whole craft." },
      { q: "Do you handle deliverability?", a: "Yes. Warmup, volume ramps and domain health are part of setup." },
      { q: "Where do the lists come from?", a: "Apollo and Sales Navigator, cleaned and segmented by hand." },
    ],
    skillsGroup: "Outbound & ABM",
  },
  {
    slug: "content-social",
    name: "Content & Social Media",
    short: "Research-led strategy, calendars and posts that ship weekly.",
    accent: "#db2777", accentSoft: "#fdeef5", visual: "content",
    seoTitle: "Content Strategy & Social Media Marketing for B2B SaaS | Hanzlah Malik",
    seoDescription: "Content and social media marketing for B2B SaaS: keyword and topic research, content strategy, social calendars, industry and product posts, newsletters in HubSpot and Substack, and coordination with SEO teams.",
    keywords: ["B2B content strategy", "social media marketing SaaS", "LinkedIn content strategy", "content calendar management", "B2B newsletters", "topic research"],
    h1: "Content with a ==strategy==, not a streak.",
    sub: "Research decides what gets posted: which keywords and topics are moving, which industry angles earn attention, when to push product and when to teach. Then the calendar runs, posts, newsletters and the SEO team aligned.",
    offerings: [
      { t: "Content strategy", d: "Keyword and topic research turned into a plan with owners and dates." },
      { t: "Social calendars", d: "Industry, product and brand posts, planned, written, scheduled." },
      { t: "Post copy & briefs", d: "Copy plus design briefs for carousels and statics." },
      { t: "Newsletters", d: "HubSpot and Substack, copy, design and sends." },
      { t: "SEO team alignment", d: "Content tracked against gaps the SEO team needs filled." },
    ],
    tools: ["LinkedIn", "Substack", "HubSpot", "Canva", "ChatGPT", "Claude"],
    steps: [
      { t: "Research", d: "Topics, keywords and angles worth the feed." },
      { t: "Plan", d: "Calendar with a reason behind every slot." },
      { t: "Publish", d: "Ship, measure, and feed winners back in." },
    ],
    proof: [
      "Managed socials across multiple products, Barie, AML Watcher, Notiro",
      "Newsletters built and sent in HubSpot for multiple products",
    ],
    faqs: [
      { q: "Which platforms do you focus on?", a: "LinkedIn first for B2B, plus newsletters on HubSpot or Substack." },
      { q: "Do you write everything yourself?", a: "I write the copy and brief the design. AI helps with drafts; I make the calls." },
      { q: "How often should we post?", a: "Three to five good posts a week beat daily noise." },
    ],
    skillsGroup: "Content & Email",
  },
  {
    slug: "web-development",
    name: "Website Development",
    short: "React & Next.js sites, design to copy to deployment.",
    accent: "#059669", accentSoft: "#eafaf3", visual: "code",
    seoTitle: "React & Next.js Website Development, Design to Deployment | Hanzlah Malik",
    seoDescription: "React and Next.js website development for startups and SaaS: landing pages and marketing sites designed in Figma, written for conversion and SEO, built with Tailwind, animated, and deployed on Vercel with GA4 tracking.",
    keywords: ["React website developer", "Next.js landing page", "marketing website development", "website animations", "Vercel deployment", "GA4 setup"],
    h1: "Websites built like products: ==design, copy, code, deploy==.",
    sub: "One person from Figma to production, I design the page, write the copy, build it in React and Next.js with Tailwind, add the animations, deploy on Vercel and wire GA4. This site is one of them.",
    offerings: [
      { t: "Landing pages & marketing sites", d: "Conversion-first pages for products, launches and campaigns." },
      { t: "Design in Figma", d: "User flows and layouts before a line of code." },
      { t: "Copywriting", d: "Clear, SEO-aware copy written with the design, not after it." },
      { t: "React / Next.js build", d: "Fast, responsive, accessible, with tasteful animations." },
      { t: "Deploy & measure", d: "Vercel, domains, GA4 behaviour tracking." },
    ],
    tools: ["Figma", "Next.js", "Tailwind CSS", "Claude Code", "VS Code", "Vercel", "GA4"],
    steps: [
      { t: "Design", d: "Figma flows and layouts from research." },
      { t: "Build", d: "React/Next.js, reviewed at every breakpoint." },
      { t: "Ship", d: "Deployed, indexed and measured in GA4." },
    ],
    proof: [
      "This portfolio: designed, written, built and deployed solo",
      "OPANO (FYP): a working SaaS platform taken from concept to deployed product",
    ],
    faqs: [
      { q: "What stack do you use?", a: "React and Next.js with Tailwind, deployed on Vercel." },
      { q: "Can you redesign an existing site?", a: "Yes. I audit it in GA4 first, then redesign what leaks." },
      { q: "Do you write the copy too?", a: "Always. Copy and design are one job on a good page." },
    ],
    skillsGroup: "Web, Design & Analytics",
  },
  {
    slug: "product-design",
    name: "Product Design Support",
    short: "Figma flows, briefs and AI-accelerated design iteration.",
    accent: "#e11d48", accentSoft: "#ffeef2", visual: "design",
    seoTitle: "Product Design Support, Figma Flows, Briefs & AI Iteration | Hanzlah Malik",
    seoDescription: "Product design support for SaaS teams: user flows and wireframes in Figma, website enhancement designs, design briefs for designers, animation prototyping in Figma Make, and AI-accelerated iteration with Claude and ChatGPT.",
    keywords: ["product design support", "Figma wireframes", "user flow design", "design briefs", "Figma Make animation", "AI design workflow"],
    h1: "Design support that speaks ==marketer and maker==.",
    sub: "I\u2019m not a pixel-perfect designer, I\u2019m the person who turns research into user flows, wireframes and design briefs in Figma, prototypes animations in Figma Make, and iterates fast with Claude and ChatGPT until it\u2019s ready to build.",
    offerings: [
      { t: "User flows & wireframes", d: "From research to flows the team can argue with." },
      { t: "Website enhancement design", d: "Layout and UX improvements designed in Figma, validated in GA4." },
      { t: "Design briefs", d: "Briefs that give designers direction instead of guesswork." },
      { t: "Animation prototyping", d: "Motion explored in Figma Make before engineering time is spent." },
      { t: "AI-accelerated iteration", d: "Claude and ChatGPT in the loop, more directions, faster." },
    ],
    tools: ["Figma", "Figma Make", "Claude", "ChatGPT", "Canva", "GA4"],
    steps: [
      { t: "Map", d: "Flows and intent before any visuals." },
      { t: "Draft", d: "Wireframes and variants, explored fast." },
      { t: "Hand off", d: "Briefs and files ready for design or build." },
    ],
    proof: [
      "Website enhancements designed in Figma across five SaaS products",
      "Research insights translated into user flows and page layouts weekly",
    ],
    faqs: [
      { q: "Are you a full-time designer?", a: "No, and I will not pretend to be. I do flows, wireframes and briefs that designers and developers can run with." },
      { q: "What tools do you use?", a: "Figma and Figma Make, with Claude and ChatGPT for fast iteration." },
      { q: "When should I bring you in?", a: "Before the design starts. Flows first, pixels later." },
    ],
    skillsGroup: "Web, Design & Analytics",
  },
  {
    slug: "community-growth",
    name: "Community & Partnerships",
    short: "Reddit, Discord, Product Hunt, creators, listings and partners.",
    accent: "#d97706", accentSoft: "#fdf3e3", visual: "community",
    seoTitle: "Community Marketing, Influencer Outreach & Partnerships | Hanzlah Malik",
    seoDescription: "Community-led growth for SaaS: Reddit and Discord community building, influencer marketing and outreach, platform partnerships, Product Hunt launches, directory and listing submissions for backlinks, and Substack presence.",
    keywords: ["community marketing", "influencer outreach", "SaaS partnerships", "Product Hunt launch", "directory listings backlinks", "Reddit marketing", "Discord community growth"],
    h1: "Growth where your buyers ==actually hang out==.",
    sub: "Some audiences never click an ad. I build presence in the communities they trust, recruit the creators they already follow, and open partnerships with the platforms they use, plus the listings and directories that quietly stack backlinks.",
    offerings: [
      { t: "Community engagement", d: "Reddit, Discord, Quora, Medium, Facebook groups, placements approved by community leaders." },
      { t: "Influencer marketing", d: "Finding creators, negotiating, managing the follow-through." },
      { t: "Partnerships", d: "Outreach and coordination with platforms and complementary services." },
      { t: "Listings & directories", d: "Products registered across listing platforms, discovery plus backlinks." },
      { t: "Launch pushes", d: "Product Hunt and launch platforms with community momentum behind them." },
    ],
    tools: ["Reddit", "Discord", "Product Hunt", "Substack", "LinkedIn", "HubSpot"],
    steps: [
      { t: "Find", d: "Where the ICP actually spends time." },
      { t: "Join", d: "Contribute first; placements come after trust." },
      { t: "Amplify", d: "Creators, partners and launches on top." },
    ],
    proof: [
      "Community engagement run for an AI product across Reddit and Discord",
      "Influencer, clipping and listing-platform outreach handled end to end",
    ],
    faqs: [
      { q: "Which communities work for SaaS?", a: "Reddit and Discord first, plus the niche groups where your ICP already talks." },
      { q: "Do you run influencer deals?", a: "Yes. Finding creators, negotiating and managing delivery." },
      { q: "What about backlinks?", a: "Listing platforms and directories are part of every engagement." },
    ],
    skillsGroup: "Paid & Social",
  },
];

export type SkillGroup = { group: string; items: string[] };

// The full skill inventory, rendered as grouped chips.
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
  { name: "ChatGPT", src: "/tools/openai.svg" },
  { name: "Claude", src: "/tools/claude.svg" },
  { name: "Grok", mono: { text: "G", bg: "#101014", fg: "#ffffff" } },
  { name: "VS Code", mono: { text: "VS", bg: "#2563eb", fg: "#ffffff" } },
  { name: "Figma Make", src: "/tools/figma.svg" },
  { name: "Substack", src: "/tools/substack.svg" },
  { name: "Reddit", src: "/tools/reddit.svg" },
  { name: "Discord", src: "/tools/discord.svg" },
  { name: "Product Hunt", src: "/tools/producthunt.svg" },
];

export type SideProject = { title: string; note?: string; line: string };

export const sideProjects: SideProject[] = [
  {
    title: "OPANO",
    note: "Final-year project",
    line: "Researched, built and deployed a working SaaS platform for SMEs, concept to live product.",
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
    period: "2025 to Now",
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
    period: "2024 to 2025",
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
  period: "2021, 2025",
};

export const socials = [
  { label: "Email", href: "mailto:hanzlah.malik@outlook.com" },
  // TODO: replace with your real LinkedIn URL.
  { label: "LinkedIn", href: "https://linkedin.com/in/your-handle" },
];

// Drop a PDF at public/resume.pdf to make this work, or set to null to hide.
export const resumeHref: string | null = "/resume.pdf";
