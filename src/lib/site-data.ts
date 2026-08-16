import portrait from "@/assets/asnif-portrait.png.asset.json";
import cv from "@/assets/asnif-cv.pdf.asset.json";

export const PORTRAIT_URL = portrait.url;
export const CV_URL = cv.url;

export const PROFILE = {
  name: "Asnif Ahamath",
  legalName: "Japeer Asnif Ahamath",
  headline: "Management × Technology × Digital Creativity",
  role: "Marketing Manager at Innovibyte Private Limited",
  location: "Trincomalee, Sri Lanka",
  email: "asnifmj@gmail.com",
  altEmail: "mjoffitrade@gmail.com",
  phones: ["+94 76 118 9463", "+94 75 260 5486"],
};

export const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Creative", href: "#creative" },
  { label: "Contact", href: "#contact" },
];

export const EXPERIENCE = [
  {
    title: "Marketing Manager",
    org: "Innovibyte Private Limited",
    orgUrl: "https://innovibyte.com/",
    meta: "Colombo, Sri Lanka · Software product company (Reg. No. PV 002362725)",
    period: "Current",
    summary:
      "Part of a three-person founding team building software products for the Sri Lankan market. I own how the work is communicated — positioning, launch messaging and community.",
    points: [
      "Lead marketing communication for the company's product line, including On The Way (peer-to-peer ridesharing) and Softlexa (a freelancer marketplace in planning).",
      "Translate engineering and product decisions into clear, honest messaging for commuters, drivers and freelancers.",
      "Run community and waitlist growth activity, coordinating launch communication route by route.",
      "Maintain a consistent brand voice across the website, social channels and product announcements.",
    ],
    tags: ["Marketing Management", "Brand Communication", "Product Marketing", "Community Growth"],
  },
  {
    title: "Trainer — ICT (NVQ Level 3)",
    org: "Institute of Language and Technological Studies",
    meta: "Trainee & Trainer",
    period: "Recent",
    summary:
      "Delivered practical ICT training to NVQ Level 3 students and supported the academic side of the programme.",
    points: [
      "Trained students across ICT modules: file and folder management, word processing, spreadsheets, presentations, databases, internet and email, and career skills.",
      "Ran hands-on sessions in graphic design with Canva and video editing with CapCut.",
      "Assisted with curriculum development, student assessments and maintaining a productive learning environment.",
    ],
    tags: ["Training & Facilitation", "ICT Fundamentals", "Canva", "CapCut"],
  },
  {
    title: "Content Creator & Video Editor",
    org: "MJ THOUGHTs (TikTok) · Blacktrue (YouTube)",
    meta: "Independent creative work",
    period: "2025 — Present",
    summary:
      "Create and edit educational and short-film content, handling the work end to end from concept to publication.",
    points: [
      "Direct, edit and publish short-form and long-form content for YouTube and TikTok.",
      "Design thumbnails, intros and supporting graphics using Canva and CapCut.",
      "Apply storytelling, video direction and mobile-first editing to grow audience engagement.",
      "Manage digital promotion of published content across channels.",
    ],
    tags: ["Video Editing", "Storytelling", "Direction", "Digital Promotion"],
  },
];

export const SKILL_GROUPS = [
  {
    title: "Technology & Digital",
    items: ["ICT Technician (NVQ L3)", "MS Excel", "MS Word", "Databases", "Internet & Email Systems", "Presentations"],
  },
  {
    title: "Marketing",
    items: ["Digital Marketing", "Social Media Content", "Content Strategy", "Brand Communication", "Audience Engagement", "Marketing Management"],
  },
  {
    title: "Creative & Media",
    items: ["Video Editing", "Graphic Design", "Content Creation", "Direction", "Thumbnail & Visual Design", "Visual Storytelling"],
  },
  {
    title: "Management & Soft Skills",
    items: ["Leadership", "Communication", "Critical Thinking", "Negotiation", "Strategic Planning", "Time Management"],
  },
];

export const TOOLS = [
  "Canva",
  "CapCut",
  "Adobe Photoshop",
  "MS Excel",
  "MS Word",
  "MS PowerPoint",
];

export const WORK = [
  {
    index: "01",
    title: "On The Way",
    status: "In build",
    org: "Innovibyte Private Limited",
    overview:
      "Peer-to-peer ridesharing for Sri Lanka, connecting drivers with empty seats to passengers heading the same direction.",
    problem:
      "Private cars travel Sri Lankan roads with mostly empty seats while buses run past comfort, and drivers carry the full fuel cost of every trip alone.",
    solution:
      "Drivers host a route they were already taking; distance-based pricing splits the cost automatically. No haggling, no taxi meter.",
    role:
      "Marketing Manager — positioning, launch messaging, waitlist and community growth. Engineering and product are led by the founding CTO and CEO.",
    tags: ["Product Marketing", "Launch Strategy", "Community", "Waitlist Growth"],
    link: "https://innovibyte.com/",
  },
  {
    index: "02",
    title: "Softlexa",
    status: "In planning",
    org: "Innovibyte Private Limited",
    overview:
      "A marketplace connecting Sri Lankan freelancers — designers, developers and writers — with businesses locally and abroad.",
    problem:
      "Sri Lanka has strong freelance talent but no marketplace built around how those freelancers actually work and get paid.",
    solution:
      "A locally designed marketplace, currently at the research stage with freelancer interviews underway.",
    role:
      "Marketing Manager — audience research input, positioning groundwork and early community conversations with freelancers.",
    tags: ["Market Research", "Positioning", "Community"],
    link: "https://innovibyte.com/",
  },
  {
    index: "03",
    title: "MJ THOUGHTs & Blacktrue",
    status: "Ongoing",
    org: "Independent",
    overview:
      "A self-run content operation across TikTok and YouTube covering educational content and short films.",
    problem:
      "Building an audience from zero requires consistent output and a recognisable visual and narrative identity.",
    solution:
      "End-to-end production: concept, direction, editing, thumbnail and graphics design, publication and promotion.",
    role: "Creator, editor and director — every stage of the pipeline.",
    tags: ["Video Editing", "Direction", "Canva", "CapCut", "Digital Promotion"],
  },
];

export const EDUCATION = [
  {
    school: "South Eastern University of Sri Lanka",
    program: "BSc in Management and Information Technology (MIT)",
    meta: "Faculty of Management & Commerce · Reading",
    notes: "Management, information systems, business and digital technology.",
  },
  {
    school: "SLIATE — ATI Sammanthurai",
    program: "Higher National Diploma in Information Technology (HNDIT)",
    meta: "Reading",
    notes: "Applied information technology alongside the university degree.",
  },
  {
    school: "Alhamra Central College",
    program: "G.C.E. Advanced Level — Arts Stream",
    meta: "2021 – 2023/2024",
    notes: "District Rank 62 · Z-Score 1.5422",
  },
  {
    school: "D.T.A Institute (Arabic Studies)",
    program: "G.C.E. Ordinary Level",
    meta: "2020/2021",
    notes: "Results: 3A, 2B, 3C, 1S",
  },
];

export const CERTIFICATIONS = [
  { title: "NVQ Level 3 — ICT Technician", issuer: "National Vocational Qualification" },
  { title: "Diploma in English", issuer: "Oxford College" },
  { title: "Artificial Intelligence (Basic Level)", issuer: "Certification programme" },
  { title: "Skills Vista", issuer: "Ministry of Education" },
];

export const LANGUAGES = [
  { name: "Tamil", level: "Fluent" },
  { name: "English", level: "Intermediate" },
  { name: "Arabic", level: "Intermediate" },
  { name: "Sinhala", level: "Intermediate" },
];
