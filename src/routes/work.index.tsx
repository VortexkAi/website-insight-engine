import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

import { Reveal } from "@/components/motion/Reveal";
import { Tilt } from "@/components/motion/Tilt";
import { ArrowLink, PageHero, Section } from "@/components/site/primitives";
import { projects, workFilters } from "@/lib/work";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Selected Work — AevyronWeb" },
      {
        name: "description",
        content:
          "Selected websites, e-commerce concepts, web applications and design systems built by AevyronWeb.",
      },
      { property: "og:title", content: "Selected Work — AevyronWeb" },
      {
        property: "og:description",
        content: "Editorial case studies of websites, stores and web applications by AevyronWeb.",
      },
      { property: "og:url", content: "/work" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkPage,
});

function WorkPage() {
  const [filter, setFilter] = useState("All");
  const list = filter === "All" ? projects : projects.filter((p) => p.filter === filter);

  return (
    <>
      <PageHero
        label="03 / Selected Work"
        title={
          <>
            Digital experiences
            <br />
            made to matter.
          </>
        }
        intro="A selection of projects and concepts. Demo work is clearly labelled — we never present fictional clients as real ones."
      />

      <Section className="pb-10">
        <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-6">
          {workFilters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={cn(
                "link-underline text-[0.72rem] tracking-[0.2em] uppercase transition-colors",
                filter === f ? "text-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </Section>

      <Section className="pb-28">
        {list.length === 0 ? (
          <p className="border-t border-border py-16 text-sm text-muted-foreground">
            Nothing published in this category yet.
          </p>
        ) : (
          <div className="grid gap-20">
            {list.map((p, i) => (
              <Reveal key={p.slug} delay={0.04}>
                <Link
                  to="/work/$slug"
                  params={{ slug: p.slug }}
                  className={cn(
                    "group grid gap-8 border-t border-border pt-10 md:grid-cols-2 md:items-center md:gap-16",
                    i % 2 === 1 && "md:[&>div:first-child]:order-2",
                  )}
                >
                  <Tilt className="img-zoom sheen" strength={5}>
                    <img
                      src={p.image}
                      alt={`${p.title} — ${p.category}`}
                      loading="lazy"
                      width={1408}
                      height={1008}
                      className="h-full w-full object-cover"
                    />
                  </Tilt>
                  <div>
                    <p className="label-xs">
                      {p.category} — {p.status}
                    </p>
                    <h2 className="mt-5 font-display text-4xl transition-transform duration-500 group-hover:translate-x-1 md:text-6xl">
                      {p.title}
                    </h2>
                    <p className="mt-6 max-w-md text-sm text-muted-foreground">{p.summary}</p>
                    <p className="mt-6 text-[0.68rem] tracking-[0.18em] text-muted-foreground uppercase">
                      {p.tech.join(" · ")}
                    </p>
                    <span className="mt-8 inline-flex items-center gap-2 text-[0.72rem] tracking-[0.2em] uppercase">
                      View project
                      <span className="transition-transform group-hover:translate-x-1">↗</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </Section>

      <Section className="py-24">
        <div className="border-t border-border pt-16">
          <h2 className="text-[2.2rem] md:text-[4.5rem]">Build something similar?</h2>
          <div className="mt-10">
            <ArrowLink to="/enquiries">Start an enquiry</ArrowLink>
          </div>
        </div>
      </Section>
    </>
  );
}
