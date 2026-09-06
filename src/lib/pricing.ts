export type Item = { name: string; price: string; note?: string; includes?: string[] };
export type Group = { id: string; title: string; intro?: string; items: Item[]; footnote?: string };

export const uiux: Group = {
  id: "uiux",
  title: "UI/UX Design",
  intro: "Priced per unique page. Includes desktop and mobile layout, typography, spacing, colour system, components, navigation, forms, user flows and responsive thinking.",
  items: [
    { name: "1 Page", price: "₹3,999 – ₹5,999" },
    { name: "2 Pages", price: "₹6,999 – ₹9,999" },
    { name: "3 Pages", price: "₹9,999 – ₹13,999" },
    { name: "4 Pages", price: "₹13,999 – ₹17,999" },
    { name: "5 Pages", price: "₹17,999 – ₹21,999" },
    { name: "6–8 Pages", price: "₹24,999 – ₹31,999" },
    { name: "9–12 Pages", price: "₹34,999 – ₹44,999" },
    { name: "13–20 Pages", price: "₹49,999 – ₹64,999+" },
    { name: "20+ Pages", price: "Custom quote" },
  ],
  footnote:
    "Repeated pages based on an approved template are not automatically treated as separate unique UI designs.",
};

export const perPage: Group = {
  id: "development",
  title: "Website Development — Per Page",
  intro:
    "A page is not priced only by its URL. A simple About page and an interactive dashboard can both be one page while requiring completely different development effort.",
  items: [
    { name: "Basic Static Page", price: "₹3,999 – ₹6,999" },
    { name: "Standard Business Page", price: "₹5,999 – ₹9,999" },
    { name: "Advanced Page", price: "₹8,999 – ₹14,999" },
    { name: "Landing Page", price: "₹9,999 – ₹16,999" },
    { name: "Blog / Article Template", price: "₹4,999 – ₹8,999" },
    { name: "Product Page", price: "₹5,999 – ₹11,999" },
    { name: "Dashboard Screen", price: "₹7,999 – ₹14,999" },
  ],
};

export const packages: Group = {
  id: "packages",
  title: "Website Packages",
  items: [
    {
      name: "Starter Landing",
      price: "₹12,999 – ₹17,999",
      includes: ["1 custom page", "Responsive design", "CTA", "Enquiry form", "WhatsApp integration"],
    },
    {
      name: "Portfolio",
      price: "₹19,999 – ₹34,999",
      includes: ["4–6 pages", "Projects / gallery", "Contact", "Responsive design"],
    },
    {
      name: "Small Business",
      price: "₹29,999 – ₹49,999",
      includes: ["5–8 pages", "Forms", "WhatsApp", "Maps", "Testimonials", "Basic SEO"],
    },
    {
      name: "Business Plus",
      price: "₹49,999 – ₹79,999",
      includes: ["8–12 pages", "CMS / blog", "Integrations", "Stronger animations"],
    },
    {
      name: "Professional",
      price: "₹79,999 – ₹1,29,999",
      includes: ["10–15 pages", "Custom UI", "CMS", "Advanced integrations"],
    },
    {
      name: "Corporate",
      price: "₹1,29,999 – ₹2,49,999+",
      includes: ["15+ pages", "Advanced content", "APIs", "Roles", "Complex integrations"],
    },
  ],
};

export const ecommerce: Group = {
  id: "ecommerce",
  title: "E-commerce",
  items: [
    {
      name: "Mini Store",
      price: "₹49,999 – ₹69,999",
      note: "Up to approximately 20 products.",
      includes: ["Categories", "Product pages", "Cart", "Checkout / enquiry", "Basic admin"],
    },
    {
      name: "Starter E-commerce",
      price: "₹69,999 – ₹99,999",
      includes: ["Products", "Search", "Cart", "Checkout", "Customer details", "Payment gateway"],
    },
    {
      name: "Business Store",
      price: "₹99,999 – ₹1,79,999",
      includes: ["Inventory", "Orders", "Coupons", "Customer accounts", "Wishlist", "Admin"],
    },
    {
      name: "Advanced Store",
      price: "₹1,79,999 – ₹2,99,999",
      includes: ["Advanced filters", "Inventory logic", "APIs", "Notifications", "Analytics"],
    },
    {
      name: "Custom Marketplace",
      price: "₹2,99,999 – ₹5,99,999+",
      includes: ["Multi-vendor", "Seller accounts", "Commissions", "Seller dashboards", "Complex APIs"],
    },
  ],
};

export const webapps: Group = {
  id: "applications",
  title: "Web Applications / SaaS",
  items: [
    {
      name: "Basic Web App",
      price: "₹1,19,999 – ₹1,99,999",
      note: "Booking, portal, basic dashboard, membership.",
    },
    {
      name: "Advanced Web App",
      price: "₹1,99,999 – ₹3,49,999",
      note: "CRM module, education platform, healthcare portal.",
    },
    {
      name: "Complex Web App",
      price: "₹3,49,999 – ₹5,99,999+",
      includes: ["Multiple roles", "Dashboards", "APIs", "Complex workflows"],
    },
    {
      name: "SaaS MVP",
      price: "₹3,99,999 – ₹6,99,999+",
      includes: ["Authentication", "Subscription-ready architecture", "Dashboard", "Product architecture"],
    },
    {
      name: "Production SaaS",
      price: "₹6,99,999 – ₹10,00,000+",
      includes: ["Scalable architecture", "Billing", "Roles", "APIs", "Admin", "Monitoring"],
    },
  ],
};

export const backend: Group = {
  id: "backend",
  title: "Backend / API / Integration",
  items: [
    { name: "Simple REST API", price: "From ₹14,999" },
    {
      name: "Authentication",
      price: "₹9,999 – ₹14,999",
      note: "Login, registration, password reset, sessions / tokens.",
    },
    { name: "CRUD Module", price: "₹14,999 – ₹19,999" },
    { name: "Third-Party API", price: "₹5,999 – ₹9,999" },
    { name: "Payment Gateway", price: "₹7,999 – ₹12,999" },
    { name: "Complex API Integration", price: "₹14,999 – ₹29,999+" },
    { name: "Database / Backend Module", price: "₹14,999 – ₹24,999+" },
    { name: "Custom Backend System", price: "₹39,999 – ₹69,999+" },
    { name: "Advanced API Architecture", price: "Custom quote" },
  ],
};

export const addons: Group = {
  id: "addons",
  title: "Add-ons",
  items: [
    { name: "Extra Standard Page", price: "₹3,999 – ₹5,999" },
    { name: "Extra Advanced Page", price: "₹7,999 – ₹12,999" },
    { name: "Custom Animation", price: "₹3,999 – ₹9,999+" },
    { name: "CMS Integration", price: "₹9,999 – ₹14,999+" },
    { name: "Admin Dashboard", price: "₹19,999 – ₹34,999+" },
    { name: "Booking System", price: "₹14,999 – ₹24,999+" },
    { name: "Advanced Search / Filter", price: "₹7,999 – ₹14,999" },
    { name: "CRM Integration", price: "₹7,999 – ₹14,999+" },
    { name: "WhatsApp Integration", price: "₹1,999 – ₹3,999" },
    { name: "Google Maps", price: "₹1,999 – ₹3,999" },
    { name: "Analytics Setup", price: "₹2,999 – ₹4,999" },
    { name: "Advanced SEO", price: "₹7,999 – ₹12,999+" },
    { name: "Multilingual System", price: "₹7,999 – ₹14,999+" },
  ],
};

export const content: Group = {
  id: "content",
  title: "Content / Copywriting",
  items: [
    { name: "Client-provided content formatting", price: "Included within agreed scope" },
    { name: "Basic AI-assisted draft copy", price: "₹1,999 – ₹4,999 / site" },
    { name: "Professional page copy", price: "₹999 – ₹2,499 / page" },
    { name: "Product descriptions", price: "₹150 – ₹400 / product" },
    { name: "Large content entry", price: "Custom quote" },
  ],
};

export const seo: Group = {
  id: "seo",
  title: "SEO / Performance",
  items: [
    {
      name: "Basic SEO-Ready Setup",
      price: "₹2,999 – ₹4,999",
      includes: ["Titles", "Meta descriptions", "Headings", "Clean structure", "Sitemap basics"],
    },
    {
      name: "Advanced SEO",
      price: "₹7,999 – ₹14,999+",
      includes: ["Technical improvements", "On-page optimization", "Schema where appropriate", "Deeper audit"],
    },
    {
      name: "Performance Optimization",
      price: "₹4,999 – ₹14,999+",
      includes: ["Image optimization", "Code optimization", "Loading optimization", "Performance review"],
    },
  ],
  footnote: "SEO services do not guarantee Google rankings.",
};

export const maintenance: Group = {
  id: "maintenance",
  title: "Maintenance",
  items: [
    {
      name: "Essential",
      price: "₹3,999 / month",
      includes: ["Small websites", "Minor edits", "Basic bug fixes"],
    },
    {
      name: "Business",
      price: "₹7,999 / month",
      includes: ["Business websites", "Monitoring", "Updates", "Priority support"],
    },
    {
      name: "Professional",
      price: "₹14,999 – ₹19,999 / month",
      includes: ["Frequent updates", "Performance work", "Security work", "Priority support"],
    },
  ],
  footnote: "Major new features are quoted separately.",
};

export const changeRequests: Group = {
  id: "change-requests",
  title: "Revisions & Change Requests",
  intro:
    "Default scope includes 2 UI/UX revision rounds before development and 1 consolidated post-development correction round. New pages, features, integrations, changed requirements or redesigns after approval are treated as paid change requests.",
  items: [
    { name: "Small text / image / content change", price: "Included during active scope" },
    { name: "Small layout adjustment", price: "₹500 – ₹1,500" },
    { name: "New section", price: "₹1,500 – ₹3,999" },
    { name: "New standard page", price: "₹3,999 – ₹5,999" },
    { name: "New advanced page", price: "₹7,999 – ₹12,999+" },
    { name: "New feature / integration", price: "Quoted separately" },
    { name: "Post-approval redesign", price: "Quoted separately" },
  ],
};

export const industries = [
  { name: "Restaurant / Cafe", starter: "₹24,999 – ₹39,999", pro: "₹39,999 – ₹69,999" },
  { name: "Gym / Fitness", starter: "₹24,999 – ₹39,999", pro: "₹39,999 – ₹74,999" },
  { name: "Salon / Local Service", starter: "₹19,999 – ₹34,999", pro: "₹34,999 – ₹59,999" },
  { name: "Clinic", starter: "₹34,999 – ₹59,999", pro: "₹59,999 – ₹1,19,999" },
  { name: "Hospital", starter: "₹69,999 – ₹99,999", pro: "₹99,999 – ₹1,99,999+" },
  { name: "School / College", starter: "₹39,999 – ₹69,999", pro: "₹69,999 – ₹1,49,999+" },
  { name: "Corporate", starter: "₹59,999 – ₹99,999", pro: "₹99,999 – ₹2,49,999+" },
  { name: "Startup", starter: "₹49,999 – ₹99,999", pro: "₹1,00,000 – ₹3,00,000+" },
];

export const quickQuote = [
  { name: "1-Page Website", price: "₹12,999 – ₹17,999" },
  { name: "5-Page Business Website", price: "₹29,999 – ₹49,999" },
  { name: "8-Page Professional Website", price: "₹49,999 – ₹69,999" },
  { name: "10–12 Page Business Website", price: "₹59,999 – ₹89,999" },
  { name: "Landing Page", price: "₹9,999 – ₹16,999" },
  { name: "Basic E-commerce", price: "₹69,999 – ₹99,999" },
  { name: "Advanced E-commerce", price: "₹1,50,000 – ₹3,00,000+" },
  { name: "Web Application", price: "₹1,20,000 – ₹3,50,000+" },
  { name: "SaaS MVP", price: "₹4,00,000 – ₹7,00,000+" },
];

export const hostingCosts = [
  "Domain",
  "Hosting",
  "Cloud / server",
  "Database",
  "Storage",
  "CDN",
  "Business email",
  "Payment gateway fees",
  "SMS / WhatsApp usage",
  "Third-party subscriptions",
];

export const paymentTerms = [
  {
    title: "Projects above ₹25,000",
    rows: [
      ["40%", "Project start"],
      ["30%", "Design approval / development milestone"],
      ["20%", "Final testing"],
      ["10%", "Final handover"],
    ],
  },
  {
    title: "Projects ₹10,000 – ₹25,000",
    rows: [
      ["50%", "Upfront"],
      ["50%", "Before final handover"],
    ],
  },
];
