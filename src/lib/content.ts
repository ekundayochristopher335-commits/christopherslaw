import attorney1 from "@/assets/attorney-1.jpg";
import attorney2 from "@/assets/attorney-2.jpg";
import attorney3 from "@/assets/attorney-3.jpg";

export const FIRM = {
  name: "Christopher Segun",
  short: "Christopher Segun",
  phone: "0812 937 4001",
  phoneE164: "+2348129374001",
  whatsapp: "0812 937 4001",
  whatsappE164: "+2348129374001",
  email: "christophersegs30@gmail.com",
  address: {
    street: "46 Olanrewaju Street, Ilupeju Estate",
    city: "Abeokuta",
    region: "Ogun State",
    country: "Nigeria",
  },
  alternateAddress: {
    street: "A46 Mammy, 3 Lungi Barracks",
    city: "Maitama",
    region: "Abuja, FCT",
    country: "Nigeria",
  },
  hours: "Mon–Fri 9:00 – 18:00 · Sat by appointment · Closed Sundays",
  founded: 2009,
};

export const PRACTICE_AREAS = [
  {
    slug: "corporate-commercial",
    title: "Corporate & Commercial",
    summary:
      "Strategic advisory for cross-border transactions, mergers, joint ventures, and regulatory compliance within the FCT and beyond.",
    detail:
      "We structure and negotiate the transactions that shape Nigerian commerce — acquisitions, equity investments, shareholder arrangements, joint ventures, and regulatory filings before the CAC, SEC, and FIRS.",
  },
  {
    slug: "dispute-resolution",
    title: "Dispute Resolution & Litigation",
    summary:
      "High-stakes litigation and arbitration delivering decisive outcomes in the superior courts of record.",
    detail:
      "Trial and appellate practice across the Federal High Court, the Court of Appeal, and the Supreme Court of Nigeria, with parallel arbitration practice under LCA, ICC, and UNCITRAL rules.",
  },
  {
    slug: "energy-infrastructure",
    title: "Energy & Infrastructure",
    summary:
      "Navigating the complexities of power, oil, and gas with deep, localized industry intelligence.",
    detail:
      "Project development, concession agreements, host-community arrangements, NUPRC and NMDPRA regulatory work for upstream, midstream, downstream, and renewable mandates.",
  },
  {
    slug: "real-estate-construction",
    title: "Real Estate & Construction",
    summary:
      "FCT land administration, large-scale development, and construction dispute counsel.",
    detail:
      "Title perfection, AGIS filings, FCDA approvals, FIDIC-form construction contracts, and end-to-end development advisory for investors and developers.",
  },
  {
    slug: "private-client",
    title: "Private Client & Wealth",
    summary:
      "Discreet advisory for high-net-worth families on succession, trusts, and asset protection.",
    detail:
      "Cross-border estate planning, trust structures, family governance, and succession administration handled with absolute confidentiality.",
  },
  {
    slug: "regulatory-compliance",
    title: "Regulatory & Compliance",
    summary:
      "Sector-specific compliance for financial services, telecoms, and data protection regimes.",
    detail:
      "CBN, NCC, NDPC, and SEC engagements; data protection compliance under the NDPA; AML/CFT frameworks; and internal investigations.",
  },
  {
    slug: "intellectual-property",
    title: "Intellectual Property",
    summary:
      "Trademark, copyright, and patent prosecution and enforcement before the Trademarks Registry.",
    detail:
      "Brand protection strategies, licensing, technology transfer agreements, and IP litigation across federal courts.",
  },
  {
    slug: "criminal-defence",
    title: "White-Collar & Criminal Defence",
    summary:
      "Confidential representation in EFCC, ICPC, and complex criminal proceedings.",
    detail:
      "Internal investigations, regulatory enforcement defence, and trial advocacy in white-collar and high-profile criminal matters.",
  },
];

export const ATTORNEYS = [
  {
    slug: "ibrahim-bello",
    name: "Dr. Ibrahim Bello, SAN",
    title: "Principal Partner",
    photo: attorney1,
    bio: "A Senior Advocate of Nigeria with over 24 years of practice. Dr. Bello leads the firm's litigation and arbitration practice and has appeared as lead counsel in landmark constitutional and commercial matters before the Supreme Court.",
    education: ["LL.B (Hons), Ahmadu Bello University", "LL.M, University of Lagos", "Ph.D, University of Cambridge"],
    focus: ["Constitutional Litigation", "Commercial Arbitration", "Energy Disputes"],
  },
  {
    slug: "amina-danjuma",
    name: "Amina Danjuma, Esq.",
    title: "Head of Corporate & Commercial",
    photo: attorney2,
    bio: "Amina advises multinationals and Nigerian conglomerates on cross-border transactions, equity investments, and regulatory matters. She has structured transactions valued in excess of ₦450 billion across telecoms, financial services, and infrastructure.",
    education: ["LL.B (Hons), University of Ibadan", "LL.M, Harvard Law School"],
    focus: ["Mergers & Acquisitions", "Project Finance", "Securities Regulation"],
  },
  {
    slug: "chudi-okoro",
    name: "Chudi Okoro, Esq.",
    title: "Senior Litigation Partner",
    photo: attorney3,
    bio: "Chudi heads the firm's white-collar and regulatory enforcement practice. A trial advocate of distinction, he has defended principals in some of the most-watched EFCC and ICPC proceedings of the past decade.",
    education: ["LL.B (Hons), University of Nigeria, Nsukka", "Barrister-at-Law, Nigerian Law School (First Class)"],
    focus: ["White-Collar Defence", "Regulatory Enforcement", "Appellate Advocacy"],
  },
];

export const STATS = [
  { value: "₦450B+", label: "Transaction value advised" },
  { value: "98.4%", label: "Client retention rate" },
  { value: "15", label: "Years in Maitama" },
  { value: "24+", label: "Counsel and associates" },
];

export const TESTIMONIALS = [
  {
    quote:
      "Christopher Segun's command of the regulatory landscape was decisive. Their counsel allowed us to close a complex transaction six weeks ahead of schedule.",
    author: "General Counsel",
    company: "Pan-African Energy Group",
  },
  {
    quote:
      "Calm, exacting, and ferocious in court. We have entrusted Christopher Segun with our most sensitive mandates for over a decade.",
    author: "Chief Executive",
    company: "Tier-1 Nigerian Bank",
  },
  {
    quote:
      "The kind of advisor you call when the matter cannot be allowed to fail. They have not failed us.",
    author: "Family Principal",
    company: "Private Client",
  },
];

export const CASE_RESULTS = [
  {
    title: "Landmark FCT Land Title Recovery",
    practice: "Real Estate Litigation",
    result:
      "Recovered title to ₦12B Maitama development site after eight-year dispute, including a precedent-setting Court of Appeal ruling on AGIS perfection.",
    year: 2024,
  },
  {
    title: "Cross-Border M&A: Telecoms Acquisition",
    practice: "Corporate & Commercial",
    result:
      "Lead Nigerian counsel on the ₦78B acquisition of a regional MNO subsidiary, securing NCC and FCCPC clearance in 11 weeks.",
    year: 2023,
  },
  {
    title: "EFCC Investigation — Public Official",
    practice: "White-Collar Defence",
    result:
      "Secured no-case submission and full discharge for senior public official after 14-month investigation into alleged procurement irregularities.",
    year: 2023,
  },
  {
    title: "Sovereign Arbitration Defence",
    practice: "International Arbitration",
    result:
      "Successfully defended a federal agency in $340M ICC arbitration arising from a terminated infrastructure concession.",
    year: 2022,
  },
];

export const INSIGHTS = [
  {
    slug: "ndpa-compliance-2024",
    title: "The NDPA at One: A Compliance Audit for Nigerian Boards",
    excerpt:
      "Twelve months on from the Nigeria Data Protection Act, what should boards of directors actually have on the agenda?",
    date: "2024-11-12",
    readTime: "8 min read",
    category: "Regulatory",
  },
  {
    slug: "fct-land-administration",
    title: "Perfecting Title in the FCT: A Practitioner's Roadmap",
    excerpt:
      "AGIS, FCDA, and the persistent gap between policy and practice — a candid roadmap for investors.",
    date: "2024-09-30",
    readTime: "12 min read",
    category: "Real Estate",
  },
  {
    slug: "arbitration-act-2023",
    title: "Arbitration & Mediation Act 2023: What Has Actually Changed?",
    excerpt:
      "A close reading of the new statute and what it means for institutional and ad-hoc arbitration in Nigeria.",
    date: "2024-07-18",
    readTime: "10 min read",
    category: "Dispute Resolution",
  },
  {
    slug: "cama-amendments",
    title: "CAMA Reform: Five Provisions Quietly Reshaping Boardrooms",
    excerpt:
      "Beyond the headlines — the technical amendments that will reshape Nigerian corporate governance for the next decade.",
    date: "2024-05-04",
    readTime: "9 min read",
    category: "Corporate",
  },
];

export const FAQS = [
  {
    q: "How do I engage the firm?",
    a: "Contact us by phone at 0812 937 4001 or submit a confidential enquiry through our consultation form. A senior associate will respond within 24 business hours to assess fit and conflicts.",
  },
  {
    q: "Do you accept matters outside Abuja?",
    a: "Yes. While our chambers are in Maitama, we routinely act on matters across all 36 states and represent international clients with Nigerian-touching mandates.",
  },
  {
    q: "What are your fee arrangements?",
    a: "We work to time-based, fixed-fee, capped, and — where appropriate — contingent fee arrangements. Fee structures are agreed in writing at engagement.",
  },
  {
    q: "Is my consultation confidential?",
    a: "Absolutely. All communications are protected by attorney-client privilege from the moment you contact the firm, regardless of whether we ultimately accept the engagement.",
  },
  {
    q: "Do you handle pro-bono matters?",
    a: "The firm dedicates a portion of capacity each year to pro-bono work, with a focus on constitutional and human-rights cases of public importance.",
  },
];


