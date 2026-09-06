import { createFileRoute } from "@tanstack/react-router";

import { ArrowLink, Label, PageHero, Section } from "@/components/site/primitives";
import { ELLIOT_PHONE, PRINCE_PHONE, TRAXX_PHONE, waLink } from "@/lib/contact";

export const Route = createFileRoute("/studio")({
  head: () => ({
    meta: [
      { title: "The Studio — AevyronWeb" },
      {
        name: "description",
        content:
          "AevyronWeb is an independent development studio. Meet the team, read our eight-step process and the technology we work with.",
      },
      { property: "og:title", content: "The Studio — AevyronWeb" },
      {
        property: "og:description",
        content: "A small studio with a big focus on the details — process, people and technology.",
      },
      { property: "og:url", content: "/studio" },
    ],
    links: [{ rel: "canonical", href: "/studio" }],
  }),
  component: StudioPage,
});

const process = [
  ["01", "Discover", "Understand business goals, audience, pages and requirements."],
  ["02", "Scope & Quote", "Define pages, features, integrations, milestones and pricing."],
  ["03", "UI/UX", "Create the design system and page designs."],
  ["04", "Development", "Build frontend, backend, databases, APIs and integrations."],
  ["05", "Testing", "Test responsiveness, forms, integrations and performance."],
  ["06", "Client Review", "Receive consolidated feedback."],
  ["07", "Deployment", "Deploy to the client's infrastructure."],
  ["08", "Handover", "Transfer agreed files, access and documentation."],
];

const team = [
  {
    name: "PRINCE",
    role: "Founder / Creator",
    phone: PRINCE_PHONE,
    duties: [
      "Business direction",
      "Client communication",
      "Project enquiries",
      "Creative direction",
      "Company coordination",
    ],
  },
  {
    name: "TRAXX",
    role: "Developer / Assistant",
    phone: TRAXX_PHONE,
    duties: ["Development", "Technical assistance", "Project support", "Team coordination"],
  },
  {
    name: "THEREALELLIOT",
    role: "Developer / Organizer",
    phone: ELLIOT_PHONE,
    duties: [
      "Development",
      "Technical implementation",
      "Project organization",
      "Technical coordination",
    ],
  },
];

const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Python",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "PostgreSQL",
  "MongoDB",
  "Git",
  "GitHub",
];

function StudioPage() {
  return (
    <>
      <PageHero
        label="04 / The Studio"
        title={
          <>
            A small studio
            <br />
            with a big focus
            <br />
            on the details.
          </>
        }
        intro="AevyronWeb is an independent development studio focused on creating thoughtful digital experiences through design, development and technology."
      />

      <Section className="py-20 md:py-28">
        <div className="grid gap-12 border-t border-border pt-16 md:grid-cols-[1fr_1.4fr]">
          <Label>Philosophy</Label>
          <div>
            <h2 className="text-[2rem] md:text-[3.5rem]">
              Good digital work
              <br />
              should feel simple.
            </h2>
            <p className="mt-8 max-w-xl text-muted-foreground">
              Behind a simple experience is careful planning, thoughtful design and solid
              engineering.
            </p>
          </div>
        </div>
      </Section>

      <Section className="py-20">
        <Label>Process</Label>
        <div className="mt-12">
          {process.map(([n, title, body]) => (
            <div
              key={n}
              className="grid grid-cols-1 gap-3 border-t border-border py-8 md:grid-cols-[6rem_1fr_1.2fr] md:items-baseline md:gap-10"
            >
              <span className="label-xs">{n}</span>
              <h3 className="font-display text-2xl md:text-3xl">{title}</h3>
              <p className="text-sm text-muted-foreground">{body}</p>
            </div>
          ))}
          <div className="border-t border-border" />
        </div>
      </Section>

      {/* Team — typographic credits */}
      <Section className="py-24 md:py-32">
        <Label>Team</Label>
        <div className="mt-14">
          {team.map((m) => (
            <div key={m.name} className="group border-t border-border py-10 md:py-14">
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <h3 className="font-display text-[2.5rem] leading-none md:text-[6rem]">{m.name}</h3>
                <p className="text-[0.7rem] tracking-[0.2em] text-muted-foreground uppercase">
                  {m.role}
                </p>
              </div>
              <div className="mt-6 grid gap-6 opacity-70 transition-opacity duration-500 group-hover:opacity-100 md:grid-cols-[1.4fr_1fr]">
                <ul className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted-foreground">
                  {m.duties.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
                <a
                  href={waLink(m.phone)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-sm text-muted-foreground hover:text-foreground md:text-right"
                >
                  {m.phone}
                </a>
              </div>
            </div>
          ))}
          <div className="border-t border-border" />
        </div>
      </Section>

      <Section className="py-20">
        <Label>Tools of the trade</Label>
        <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-10">
          {stack.map((t) => (
            <span key={t} className="font-display text-2xl text-muted-foreground md:text-4xl">
              {t}
            </span>
          ))}
        </div>
      </Section>

      <Section className="py-28 md:py-40">
        <div className="border-t border-border pt-16">
          <h2 className="text-[2.4rem] md:text-[5.5rem]">Work with the studio.</h2>
          <div className="mt-10">
            <ArrowLink to="/enquiries">Start an enquiry</ArrowLink>
          </div>
        </div>
      </Section>
    </>
  );
}
