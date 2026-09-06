import work01 from "@/assets/work-01.jpg";
import work02 from "@/assets/work-02.jpg";
import work03 from "@/assets/work-03.jpg";
import work04 from "@/assets/work-04.jpg";

export type Project = {
  slug: string;
  title: string;
  category: string;
  filter: string;
  status: "CONCEPT" | "DEMO PROJECT";
  summary: string;
  tech: string[];
  image: string;
  challenge: string;
  approach: string;
  design: string;
  development: string;
  result: string;
};

export const projects: Project[] = [
  {
    slug: "aurelian-store",
    title: "AURELIAN",
    category: "E-commerce",
    filter: "E-commerce",
    status: "CONCEPT",
    summary:
      "A quiet, product-first storefront concept for a homeware label — built around large imagery, restrained typography and a checkout that stays out of the way.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    image: work01,
    challenge:
      "Retail interfaces usually compete with the product. The concept had to sell objects that rely on texture and stillness.",
    approach:
      "We reduced the interface to type, image and a single accent. Navigation collapses as the customer scrolls into a product.",
    design:
      "Editorial grid, generous margins, one serif display family paired with a neutral interface face.",
    development:
      "Component-driven frontend, cart and checkout flow, product catalogue, admin-ready data model.",
    result:
      "A storefront concept that reads as a brand publication rather than a template store.",
  },
  {
    slug: "velmore-identity",
    title: "VELMORÉ",
    category: "UI/UX & Brand System",
    filter: "UI/UX",
    status: "CONCEPT",
    summary:
      "A complete design system concept: type scale, colour, spacing, components and page templates, documented before a single line of production code.",
    tech: ["Figma", "Design tokens", "Tailwind CSS", "React"],
    image: work02,
    challenge:
      "Design systems fail when they are decorative. This one had to survive contact with real development.",
    approach:
      "Tokens first — spacing, type, colour and elevation defined as variables, then components built on top of them.",
    design: "Ivory paper, warm neutrals, a bronze accent used sparingly for emphasis.",
    development:
      "Tokens exported directly into the frontend theme so design and code share one source of truth.",
    result: "A system that stays consistent as pages multiply.",
  },
  {
    slug: "form-study",
    title: "FORM STUDY",
    category: "Experiment",
    filter: "Experiments",
    status: "DEMO PROJECT",
    summary:
      "An internal experiment in material, light and slow motion — a single sculptural object rendered and used to test scroll-driven composition.",
    tech: ["React", "CSS", "Motion"],
    image: work03,
    challenge: "Test how much motion a page can carry before it becomes noise.",
    approach: "One object. One movement. Everything else static.",
    design: "Frosted glass and brushed steel on charcoal, soft studio lighting, real shadows.",
    development: "Scroll-linked transforms with reduced-motion fallbacks and mobile downgrade.",
    result: "Motion guidelines now used across every AevyronWeb build.",
  },
  {
    slug: "mono-dashboard",
    title: "MONO",
    category: "Web Application",
    filter: "Web Apps",
    status: "CONCEPT",
    summary:
      "A project-operations dashboard concept: roles, tasks, calendars and reporting inside a calm dark interface built for long working sessions.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "REST APIs"],
    image: work04,
    challenge: "Dense data without visual fatigue.",
    approach:
      "A strict four-column grid, one accent colour, and typography doing the hierarchy work instead of borders.",
    design: "Dark neutral surfaces, warm highlight, compact interface type.",
    development:
      "Authentication, role-based access, CRUD modules, API layer and responsive breakpoints down to mobile.",
    result: "A dashboard pattern that scales from four screens to forty.",
  },
];

export const workFilters = ["All", "Websites", "E-commerce", "Web Apps", "UI/UX", "Experiments"];
