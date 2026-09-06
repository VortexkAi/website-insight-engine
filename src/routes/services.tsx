import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { ArrowLink, Label, PageHero, Section } from "@/components/site/primitives";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import {
  addons,
  backend,
  changeRequests,
  content,
  ecommerce,
  hostingCosts,
  industries,
  maintenance,
  packages,
  paymentTerms,
  perPage,
  quickQuote,
  seo,
  uiux,
  webapps,
  type Group,
} from "@/lib/pricing";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Pricing — AevyronWeb" },
      {
        name: "description",
        content:
          "UI/UX, website development, e-commerce, web applications, APIs, SEO and maintenance — with transparent Indian-market pricing ranges from AevyronWeb.",
      },
      { property: "og:title", content: "Services & Pricing — AevyronWeb" },
      {
        property: "og:description",
        content: "Transparent pricing ranges for websites, stores, web applications and APIs.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function GroupBlock({ group }: { group: Group }) {
  return (
    <div className="py-16 md:py-24">
      <div className="grid gap-8 md:grid-cols-[1fr_1.6fr]">
        <div>
          <h2 className="font-display text-3xl md:text-5xl">{group.title}</h2>
          {group.intro ? (
            <p className="mt-6 max-w-sm text-sm text-muted-foreground">{group.intro}</p>
          ) : null}
        </div>
        <div>
          {group.items.map((item) => (
            <div key={item.name} className="border-t border-border py-6">
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <p className="text-[0.78rem] tracking-[0.16em] uppercase">{item.name}</p>
                <p className="font-display text-2xl">{item.price}</p>
              </div>
              {item.note ? <p className="mt-2 text-sm text-muted-foreground">{item.note}</p> : null}
              {item.includes ? (
                <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted-foreground">
                  {item.includes.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
          <div className="border-t border-border" />
          {group.footnote ? (
            <p className="mt-6 text-sm text-bronze">{group.footnote}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function ServicesPage() {
  const [industry, setIndustry] = useState(industries[0]!.name);
  const active = industries.find((i) => i.name === industry)!;

  return (
    <>
      <PageHero
        label="02 / Services"
        title={
          <>
            Digital products,
            <br />
            built with purpose.
          </>
        }
        intro="From polished websites to custom web applications, AevyronWeb combines UI/UX, frontend, backend and integrations into complete digital experiences."
      />

      <Section>
        <GroupBlock group={uiux} />
        <GroupBlock group={perPage} />
        <GroupBlock group={packages} />
        <GroupBlock group={ecommerce} />
        <GroupBlock group={webapps} />
        <GroupBlock group={backend} />
      </Section>

      {/* Expandable menus */}
      <Section className="py-16">
        <Label>Expandable menus</Label>
        <Accordion type="single" collapsible className="mt-8">
          {[addons, content, seo, maintenance, changeRequests].map((g) => (
            <AccordionItem key={g.id} value={g.id} className="border-border">
              <AccordionTrigger className="py-8 font-display text-2xl hover:no-underline md:text-4xl">
                {g.title}
              </AccordionTrigger>
              <AccordionContent>
                {g.intro ? (
                  <p className="max-w-2xl pb-6 text-sm text-muted-foreground">{g.intro}</p>
                ) : null}
                {g.items.map((item) => (
                  <div key={item.name} className="border-t border-border py-5">
                    <div className="flex flex-wrap items-baseline justify-between gap-4">
                      <p className="text-[0.76rem] tracking-[0.16em] uppercase">{item.name}</p>
                      <p className="font-display text-xl">{item.price}</p>
                    </div>
                    {item.includes ? (
                      <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted-foreground">
                        {item.includes.map((i) => (
                          <li key={i}>{i}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ))}
                {g.footnote ? <p className="mt-6 text-sm text-bronze">{g.footnote}</p> : null}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      {/* Industry selector */}
      <Section className="py-24">
        <Label>Industry packages</Label>
        <div className="mt-10 grid gap-12 border-t border-border pt-10 md:grid-cols-[1fr_1.4fr]">
          <ul className="space-y-4">
            {industries.map((i) => (
              <li key={i.name}>
                <button
                  type="button"
                  onClick={() => setIndustry(i.name)}
                  className={cn(
                    "link-underline text-left text-[0.78rem] tracking-[0.18em] uppercase transition-colors",
                    i.name === industry ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {i.name}
                </button>
              </li>
            ))}
          </ul>
          <div>
            <h3 className="font-display text-4xl md:text-6xl">{active.name}</h3>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div className="border-t border-border pt-6">
                <p className="label-xs">Starter</p>
                <p className="mt-3 font-display text-3xl">{active.starter}</p>
              </div>
              <div className="border-t border-border pt-6">
                <p className="label-xs">Professional</p>
                <p className="mt-3 font-display text-3xl">{active.pro}</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Hosting */}
      <Section className="py-24">
        <div className="grid gap-10 border-t border-border pt-16 md:grid-cols-[1fr_1.6fr]">
          <h2 className="font-display text-3xl md:text-5xl">Hosting & Domain</h2>
          <div>
            <p className="text-lg">Hosting is not included by default.</p>
            <p className="mt-4 max-w-xl text-sm text-muted-foreground">
              The following are separate client expenses, paid directly at actual provider or
              registrar cost:
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted-foreground">
              {hostingCosts.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <p className="mt-8 text-sm">
              Deployment assistance: <span className="font-display text-xl">₹1,999 – ₹7,999</span>{" "}
              depending on complexity.
            </p>
          </div>
        </div>
      </Section>

      {/* Payment terms */}
      <Section className="py-24">
        <div className="grid gap-10 border-t border-border pt-16 md:grid-cols-[1fr_1.6fr]">
          <h2 className="font-display text-3xl md:text-5xl">Payment Terms</h2>
          <div className="grid gap-12 sm:grid-cols-2">
            {paymentTerms.map((t) => (
              <div key={t.title}>
                <p className="label-xs">{t.title}</p>
                <ul className="mt-6">
                  {t.rows.map(([pct, when]) => (
                    <li key={when} className="flex items-baseline justify-between gap-6 border-t border-border py-4">
                      <span className="font-display text-2xl">{pct}</span>
                      <span className="text-right text-sm text-muted-foreground">{when}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <p className="sm:col-span-2 text-sm text-muted-foreground">
              Larger projects use milestone-based billing. Production credentials and source files
              are handed over once the agreed final payment has cleared.
            </p>
          </div>
        </div>
      </Section>

      {/* Quick quote */}
      <Section className="py-24">
        <Label>Quick quote</Label>
        <div className="mt-10 grid gap-0 md:grid-cols-3">
          {quickQuote.map((q) => (
            <div key={q.name} className="border-t border-border py-8 md:border-r md:px-6 md:[&:nth-child(3n)]:border-r-0">
              <p className="text-[0.72rem] tracking-[0.16em] uppercase">{q.name}</p>
              <p className="mt-4 font-display text-2xl">{q.price}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <ArrowLink to="/enquiries">Need something different? Get a custom quote</ArrowLink>
        </div>
      </Section>

      <Section className="py-20">
        <p className="max-w-3xl border-t border-border pt-10 text-sm text-muted-foreground">
          Prices are starting/range estimates for the Indian market. Final quotations are based on
          confirmed page count, UI complexity, frontend development, backend/database requirements,
          integrations, content, testing, revisions and project requirements.
        </p>
      </Section>
    </>
  );
}
