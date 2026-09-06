import { createFileRoute, Link } from "@tanstack/react-router";

import heroStudio from "@/assets/hero-studio.jpg";
import showreel from "@/assets/hero-loop.mp4.asset.json";
import { ArrowLink, Label, Section } from "@/components/site/primitives";
import { projects } from "@/lib/work";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AevyronWeb — Custom Web Development & Digital Experiences" },
      {
        name: "description",
        content:
          "AevyronWeb builds custom websites, web applications, e-commerce experiences and digital products for businesses and brands.",
      },
      { property: "og:title", content: "AevyronWeb — Custom Web Development & Digital Experiences" },
      {
        property: "og:description",
        content:
          "An independent development studio building custom websites, web applications and digital products.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const services = [
  { n: "01", title: "Custom Websites", body: "Hand-built marketing and brand websites." },
  { n: "02", title: "Web Applications", body: "Dashboards, portals and internal tools." },
  { n: "03", title: "UI / UX Design", body: "Design systems, page design, user flows." },
  { n: "04", title: "Full-Stack Development", body: "Frontend, backend, databases, deployment." },
  { n: "05", title: "E-commerce", body: "Catalogues, carts, checkout, admin." },
  { n: "06", title: "API & Integrations", body: "Payments, auth, third-party services." },
];

const startingPoints = [
  { name: "Website", price: "From ₹12,999" },
  { name: "Business Website", price: "From ₹29,999" },
  { name: "E-commerce", price: "From ₹69,999" },
  { name: "Web Application", price: "From ₹1,19,999" },
  { name: "SaaS MVP", price: "From ₹3,99,999" },
];

const process = [
  "Discover",
  "Scope & Quote",
  "UI/UX",
  "Development",
  "Testing",
  "Client Review",
  "Deployment",
  "Handover",
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-end overflow-hidden pb-16">
        <img
          src={heroStudio}
          alt="A minimal design studio workspace with a laptop displaying a typographic website"
          width={1600}
          height={1104}
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.16_0.004_60/85%),oklch(0.16_0.004_60/55%),oklch(0.16_0.004_60))]" />

        <div className="reveal relative mx-auto w-full max-w-[88rem] px-6 md:px-12">
          <Label>Independent digital development studio</Label>
          <h1 className="mt-8 max-w-5xl text-[2.9rem] leading-[1.0] md:text-[6.5rem]">
            We build digital experiences for ambitious ideas.
          </h1>
          <div className="mt-12 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <p className="max-w-xl text-base text-muted-foreground">
              AevyronWeb designs and develops custom websites, web applications and digital products
              with a focus on clarity, performance and thoughtful execution.
            </p>
            <div className="flex flex-wrap gap-3">
              <ArrowLink to="/enquiries">Start a project</ArrowLink>
              <Link
                to="/work"
                className="inline-flex items-center border border-border px-6 py-3 text-[0.8rem] tracking-[0.14em] uppercase transition-colors hover:bg-ivory hover:text-background"
              >
                Explore our work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <Section className="py-28 md:py-40">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
          <Label>01 / The Studio</Label>
          <div>
            <h2 className="text-[2.25rem] md:text-[4rem]">
              Small team.
              <br />
              Serious digital work.
            </h2>
            <p className="mt-8 max-w-xl text-muted-foreground">
              AevyronWeb is a focused development studio combining design and engineering to create
              websites and digital products for businesses, brands and ambitious ideas.
            </p>
            <p className="mt-8 text-[0.72rem] tracking-[0.28em] text-bronze uppercase">
              No templates. No generic designs.
            </p>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section className="py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-end">
          <Label>What we do</Label>
          <h2 className="text-[2rem] md:text-[3.5rem]">
            From simple websites
            <br />
            to complex digital systems.
          </h2>
        </div>

        <div className="mt-16">
          {services.map((s) => (
            <Link
              key={s.n}
              to="/services"
              className="group grid grid-cols-[auto_1fr] items-baseline gap-6 border-t border-border py-8 transition-colors hover:bg-secondary/40 md:grid-cols-[6rem_1.2fr_1fr_auto] md:px-4"
            >
              <span className="label-xs">{s.n}</span>
              <h3 className="font-display text-2xl transition-transform duration-500 group-hover:translate-x-2 md:text-4xl">
                {s.title}
              </h3>
              <p className="col-span-2 text-sm text-muted-foreground md:col-span-1">{s.body}</p>
              <span className="hidden text-muted-foreground transition-transform duration-500 group-hover:translate-x-2 md:block">
                →
              </span>
            </Link>
          ))}
          <div className="border-t border-border" />
        </div>
      </Section>

      {/* Pricing preview */}
      <Section className="py-28 md:py-36">
        <Label>Starting points</Label>
        <div className="mt-12 grid gap-0 md:grid-cols-5">
          {startingPoints.map((p) => (
            <div key={p.name} className="border-t border-border py-8 md:border-r md:px-6 md:last:border-r-0">
              <p className="text-[0.72rem] tracking-[0.18em] uppercase">{p.name}</p>
              <p className="mt-4 font-display text-3xl">{p.price}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 max-w-2xl text-sm text-muted-foreground">
          Final pricing depends on confirmed scope, design complexity, functionality, integrations
          and project requirements.
        </p>
        <div className="mt-10">
          <ArrowLink to="/services">View full pricing</ArrowLink>
        </div>
      </Section>

      {/* Showreel */}
      <Section className="py-20">
        <div className="relative img-zoom">
          <video
            className="h-[52vh] w-full object-cover md:h-[78vh]"
            src={showreel.url}
            poster={heroStudio}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
          />
          <div className="pointer-events-none absolute inset-0 bg-background/45" />
          <div className="pointer-events-none absolute bottom-8 left-8 md:bottom-14 md:left-14">
            <h2 className="font-display text-3xl md:text-6xl">
              From idea
              <br />
              to digital product.
            </h2>
          </div>
        </div>
      </Section>

      {/* Selected work */}
      <Section className="py-28 md:py-36">
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-end">
          <Label>Selected work</Label>
          <h2 className="text-[2rem] md:text-[3.5rem]">
            Digital experiences
            <br />
            made to matter.
          </h2>
        </div>

        <div className="mt-16 grid gap-16 md:grid-cols-2">
          {projects.slice(0, 4).map((p) => (
            <Link key={p.slug} to="/work/$slug" params={{ slug: p.slug }} className="group block">
              <div className="img-zoom">
                <img
                  src={p.image}
                  alt={`${p.title} — ${p.category}`}
                  loading="lazy"
                  width={1408}
                  height={1008}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-6 flex items-baseline justify-between gap-6 border-t border-border pt-5">
                <div>
                  <p className="label-xs">
                    {p.category} — {p.status}
                  </p>
                  <h3 className="mt-3 font-display text-3xl">{p.title}</h3>
                </div>
                <span className="text-muted-foreground transition-transform duration-500 group-hover:translate-x-1">
                  ↗
                </span>
              </div>
              <p className="mt-4 max-w-md text-sm text-muted-foreground">{p.summary}</p>
              <p className="mt-4 text-[0.68rem] tracking-[0.18em] text-muted-foreground uppercase">
                {p.tech.join(" · ")}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section className="py-28 md:py-36">
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-end">
          <Label>Process</Label>
          <h2 className="text-[2rem] md:text-[3.5rem]">
            From first idea
            <br />
            to final product.
          </h2>
        </div>
        <div className="mt-16 grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <div key={p} className="border-t border-border py-8 lg:border-r lg:px-6 lg:last:border-r-0">
              <span className="label-xs">0{i + 1}</span>
              <p className="mt-4 font-display text-2xl">{p}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Link to="/studio" className="link-underline text-[0.75rem] tracking-[0.18em] uppercase">
            See our process →
          </Link>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-32 md:py-48">
        <h2 className="text-[2.6rem] leading-[1.0] md:text-[7rem]">
          Have something
          <br />
          worth building?
        </h2>
        <div className="mt-12 flex flex-wrap items-center gap-8">
          <p className="text-muted-foreground">Tell us what you're working on.</p>
          <ArrowLink to="/enquiries">Start an enquiry</ArrowLink>
        </div>
      </Section>
    </>
  );
}
