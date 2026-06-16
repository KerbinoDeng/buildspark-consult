// Shared static content for case studies, insights articles, and service detail pages.

export type CaseStudy = {
  slug: string;
  client: string;
  sector: string;
  region: string;
  duration: string;
  challenge: string;
  approach: string;
  outcomes: string[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "national-ministry-governance-diagnostic",
    client: "A national ministry, South Sudan",
    sector: "Public sector reform",
    region: "Juba",
    duration: "14 weeks",
    challenge:
      "The ministry was preparing to absorb a major donor-funded portfolio but lacked an internal accountability framework that would satisfy oversight institutions and development partners simultaneously.",
    approach:
      "Kerbino Group led a full governance diagnostic across procurement, HR, and programme management; mapped decision rights against statutory mandates; and designed a 9-month accountability roadmap with the senior leadership team.",
    outcomes: [
      "Adopted internal accountability charter signed by the Permanent Secretary",
      "12 specific control gaps closed within the engagement window",
      "Donor partner re-opened budget support discussions within 6 months",
    ],
  },
  {
    slug: "regional-ingo-crisis-leadership",
    client: "A regional INGO operating across East Africa",
    sector: "Humanitarian leadership",
    region: "Nairobi · cross-border",
    duration: "9 months",
    challenge:
      "A sudden change in country leadership combined with a security incident exposed weaknesses in the INGO's decision cadence during fast-moving crises.",
    approach:
      "Kerbino Group ran a cohort programme for 14 country and regional directors built around the Kerbino Crisis Leadership Framework, paired each leader with a one-to-one advisor, and instituted a quarterly scenario-planning rhythm.",
    outcomes: [
      "Average decision-to-action time on critical incidents reduced by 47%",
      "Two formerly stalled country strategies signed off and funded",
      "Cohort retention at 100% twelve months after programme close",
    ],
  },
  {
    slug: "oversight-institution-capacity-build",
    client: "An independent oversight institution",
    sector: "Governance & accountability",
    region: "East Africa",
    duration: "20 weeks",
    challenge:
      "The institution had a strong legal mandate but limited internal capacity to convert investigations into enforceable findings within statutory timelines.",
    approach:
      "Kerbino Group embedded with the investigations directorate, redesigned the case-flow process, and ran an evidence-handling and report-writing training programme for 28 investigators and senior managers.",
    outcomes: [
      "Median time from case opening to published finding cut by 31%",
      "Backlog of pending investigations reduced from 84 to 19 cases",
      "Three flagship reports tabled in parliament within the same year",
    ],
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Kerbino Group helped us name the problem we already knew we had, and gave us a 90-day plan we could actually execute. Six months later, our leadership team is making decisions on a rhythm rather than in reaction.",
    attribution: "Permanent Secretary, line ministry · South Sudan",
  },
  {
    quote:
      "The combination of academic rigour and on-the-ground knowledge of how our institutions actually work is rare. We have used three consultancies on similar mandates — Kerbino Group is the one whose recommendations we still refer back to.",
    attribution: "Country Director, regional INGO · Nairobi",
  },
  {
    quote:
      "Kerbino's framework on crisis leadership isn't theoretical. It's the language my senior team now uses with each other in difficult weeks.",
    attribution: "Director, oversight institution · East Africa",
  },
];

export type Article = {
  slug: string;
  title: string;
  dek: string;
  category: string;
  readTime: string;
  date: string;
  body: string[]; // paragraphs
};

export const ARTICLES: Article[] = [
  {
    slug: "the-four-pillars-of-crisis-leadership",
    title: "The four pillars of crisis leadership",
    dek: "Why clarity, cadence, coalition, and conscience hold institutions together when conventional management vocabulary stops working.",
    category: "Crisis Leadership",
    readTime: "7 min read",
    date: "March 2026",
    body: [
      "Most leadership frameworks were built for institutions that already work. They assume reliable information flow, broadly aligned incentives, and a stable political environment in which to operate. Crisis settings strip away all three at once — and the leaders who do well are not the ones with the longest CVs, but the ones who have a working model for what to do when the institution itself is part of the problem.",
      "Over a decade of advisory work and doctoral research in South Sudan and the wider East African region, four pillars keep recurring among the leaders and institutions that actually move forward under pressure: clarity, cadence, coalition, and conscience.",
      "Clarity is the discipline of articulating, in plain language, what the institution is trying to accomplish in the next 90 days — short enough that anyone on staff can repeat it back. Cadence is a fixed rhythm of decisions and reviews that absorbs shocks without producing paralysis. Coalition is the explicit mapping of who must be aligned for each decision to land, and how their support will be earned. Conscience is the set of public, written principles that bound what the institution will and will not do when pressure is highest.",
      "None of these are slogans. Each is operationalised by specific practices — and the failure mode for each is recognisable in advance. That's the value of having a framework at all: it lets a leadership team diagnose where the wheel is wobbling before it falls off.",
    ],
  },
  {
    slug: "governance-reform-that-survives-leadership-change",
    title: "Governance reform that survives leadership change",
    dek: "Why the durability of reform depends less on the reformer and more on how legible the new system is to outsiders.",
    category: "Governance",
    readTime: "6 min read",
    date: "February 2026",
    body: [
      "A common pattern across institutional reform programmes in fragile and transitional contexts: a strong reformer arrives, drives meaningful change for two or three years, and then rotates out — and within twelve months, the institution has reverted to roughly the prior baseline. This is not primarily a problem of bad faith successors. It is a problem of reform design.",
      "Reform that is held in place by one leader's energy is borrowed time. Reform that is held in place by externally legible procedure — published rules, scheduled audits, documented decision logs, citizen-facing reporting — is durable.",
      "The implication for reform designers is uncomfortable: spend less of your political capital on signalling change, and more of it on producing the boring, structured artifacts that make it hard for the next leadership team to quietly walk the changes back.",
    ],
  },
  {
    slug: "what-empirical-research-tells-us-about-public-sector-delivery",
    title: "What empirical research tells us about public-sector delivery in fragile states",
    dek: "A short tour of what the evidence base actually says — and where it stays silent — about making public institutions deliver.",
    category: "Research & Policy",
    readTime: "8 min read",
    date: "January 2026",
    body: [
      "The peer-reviewed literature on public-sector delivery in fragile states is larger than it is often given credit for, and more practical than its reputation suggests. Three findings keep showing up across independent studies, conducted across different countries and methodologies.",
      "First: trust in institutions correlates more strongly with predictability of service delivery than with the absolute level of service delivery. Citizens forgive a great deal if the system behaves in ways they can anticipate. Erratic high performance does less for legitimacy than steady moderate performance.",
      "Second: oversight institutions outperform their mandate when their leadership has explicit, scheduled engagement with civil society — not as performance, but as a working channel for case referrals and corroborating information.",
      "Third: leadership development programmes show the largest measurable effect on delivery when they are designed as cohorts that meet repeatedly over 9–12 months, not as one-off training events. The evidence on short, high-intensity training programmes is mixed at best.",
      "What the literature is much less clear on: how to sequence reforms when the political window is short. That remains an area where careful local judgement still beats the published evidence base.",
    ],
  },
];

export type ServiceDetail = {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  outcomes: string[];
  deliverables: string[];
};

export const SERVICES: ServiceDetail[] = [
  {
    slug: "strategic-planning",
    number: "01",
    title: "Strategic Planning & Institutional Development",
    tagline:
      "Strategic frameworks and institutional systems that perform, adapt, and deliver — at scale and under pressure.",
    description:
      "We design strategic plans that survive contact with reality. Engagements typically run 8–16 weeks and produce a costed, sequenced strategy plus the internal operating system to deliver it.",
    outcomes: [
      "A credible 3-year strategic direction with a 12-month execution roadmap",
      "Clear decision rights, governance forums, and review cadence",
      "Internal capacity to revise the strategy without external help",
    ],
    deliverables: [
      "Institutional diagnostic report",
      "Strategic plan with sequenced workstreams",
      "Operating manual covering governance forums and decision rights",
      "Senior leadership coaching through the first review cycle",
    ],
  },
  {
    slug: "crisis-leadership",
    number: "02",
    title: "Crisis Leadership Advisory",
    tagline:
      "DBA-level expertise in crisis leadership for fragile and conflict-affected settings — validated through original research.",
    description:
      "Direct, confidential advisory for principals and senior leadership teams operating through institutional, political, or security crises. Delivered as standing advisory or as a focused 60-90 day engagement.",
    outcomes: [
      "A working decision cadence that absorbs shocks without paralysis",
      "Mapped stakeholder coalitions for each critical decision",
      "Documented principles that bound institutional conduct under pressure",
    ],
    deliverables: [
      "Confidential principal-level advisory sessions",
      "Stakeholder and coalition mapping",
      "Tailored application of the Kerbino Crisis Leadership Framework",
      "Post-engagement review with measurable indicators",
    ],
  },
  {
    slug: "executive-leadership-development",
    number: "03",
    title: "Executive Leadership Development",
    tagline:
      "One-to-one and cohort programmes that build leaders capable of delivering with integrity in complexity.",
    description:
      "Structured leadership development for individuals and small cohorts. Cohort programmes typically run 9 months with monthly sessions, individual coaching between sessions, and a capstone delivery commitment.",
    outcomes: [
      "Measurable improvement on agreed leadership competencies",
      "A peer network leaders continue to draw on after the programme",
      "A delivered organisational change directly attributable to the cohort",
    ],
    deliverables: [
      "Individual diagnostic and development plan",
      "Monthly cohort working sessions",
      "Confidential one-to-one coaching",
      "Capstone presentation and 12-month follow-up",
    ],
  },
  {
    slug: "governance-and-accountability",
    number: "04",
    title: "Governance, Accountability & Public Sector Reform",
    tagline:
      "Governance diagnostics, accountability frameworks, oversight capacity, and public financial management advisory.",
    description:
      "Reform programmes that hold up after the reformer rotates out — designed around externally legible procedure, not personality. Typical engagements run 12–24 weeks.",
    outcomes: [
      "An accountability framework that survives leadership transitions",
      "Reduced time from case opening to published finding for oversight bodies",
      "Improved citizen-facing transparency on agreed indicators",
    ],
    deliverables: [
      "Governance and accountability diagnostic",
      "Reform roadmap with sequenced milestones",
      "Capacity build for oversight, audit, or PFM teams",
      "Public reporting framework",
    ],
  },
  {
    slug: "research-and-policy",
    number: "05",
    title: "Research, Policy Analysis & Advisory",
    tagline:
      "Empirically grounded research, institutional evaluations, and policy briefs for governments, multilaterals, and NGOs.",
    description:
      "Independent, peer-review-grade research and policy analysis. We accept commissions only where we believe an honest answer is possible — and we publish methodology alongside findings.",
    outcomes: [
      "Findings the commissioning institution can defend publicly",
      "Recommendations sequenced by feasibility, not just desirability",
      "A methodology trail that holds up to external scrutiny",
    ],
    deliverables: [
      "Research design and protocol",
      "Primary data collection across agreed sites",
      "Full report with methodology appendix",
      "Short-form policy brief for non-specialist audiences",
    ],
  },
  {
    slug: "training-and-facilitation",
    number: "06",
    title: "Training, Facilitation & Workshop Design",
    tagline:
      "Custom workshops and training programmes that build internal capacity rather than create consultant dependency.",
    description:
      "Designed, delivered, and where appropriate handed over to internal trainers. We refuse training engagements that we don't think will change what people actually do on Monday morning.",
    outcomes: [
      "Skills demonstrably applied within 30 days of the programme",
      "Internal facilitators able to run the programme independently",
      "A measurable behaviour change agreed in advance with the sponsor",
    ],
    deliverables: [
      "Custom curriculum and facilitator guide",
      "Delivered workshop series",
      "Train-the-trainer handover",
      "30- and 90-day follow-up reviews",
    ],
  },
];
