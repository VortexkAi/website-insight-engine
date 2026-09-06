import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";

import { ArrowLink, Label, PageHero, Section } from "@/components/site/primitives";
import {
  ELLIOT_EMAIL,
  ELLIOT_INSTAGRAM_HANDLE,
  ELLIOT_INSTAGRAM_URL,
  ELLIOT_PHONE,
  EMAIL,
  MAILTO,
  VORTEXKAI_EMAIL,
  VORTEXKAI_INSTAGRAM_HANDLE,
  VORTEXKAI_INSTAGRAM_URL,
  WHATSAPP_URL,
  X_URL,
  mailtoFor,
  waLink,
} from "@/lib/contact";

export const Route = createFileRoute("/enquiries")({
  head: () => ({
    meta: [
      { title: "Start a Project — AevyronWeb Enquiries" },
      {
        name: "description",
        content:
          "Tell AevyronWeb what you're building. Send a project enquiry, or reach the studio directly on WhatsApp, email or Instagram.",
      },
      { property: "og:title", content: "Start a Project — AevyronWeb Enquiries" },
      {
        property: "og:description",
        content: "Send a project enquiry for a website, web application or digital product.",
      },
      { property: "og:url", content: "/enquiries" },
    ],
    links: [{ rel: "canonical", href: "/enquiries" }],
  }),
  component: EnquiriesPage,
});

const projectTypes = [
  "Website",
  "Landing Page",
  "Portfolio",
  "Business Website",
  "E-commerce",
  "Web Application",
  "UI/UX",
  "Full-Stack Development",
  "API / Integration",
  "SaaS",
  "Other",
];

const budgets = [
  "Under ₹10,000",
  "₹10,000–₹25,000",
  "₹25,000–₹50,000",
  "₹50,000–₹1,00,000",
  "₹1,00,000–₹3,00,000",
  "₹3,00,000+",
  "Not sure yet",
];

const timelines = ["ASAP", "1–2 months", "2–3 months", "3+ months", "Not decided"];

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  company: z.string().trim().max(120).optional(),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().min(1, "Please select a budget"),
  timeline: z.string().min(1, "Please select a timeline"),
  detail: z.string().trim().max(200).optional(),
  message: z.string().trim().min(1, "Please tell us about your project").max(1500),
});

const fieldCls =
  "mt-3 w-full border-b border-border bg-transparent py-3 text-base outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-bronze";

function conditionalQuestion(type: string) {
  switch (type) {
    case "E-commerce":
      return "Approximately how many products?";
    case "Web Application":
    case "SaaS":
      return type === "SaaS"
        ? "Do you need authentication, billing and dashboards?"
        : "How many user types / roles?";
    case "UI/UX":
      return "How many unique pages need design?";
    case "Website":
    case "Landing Page":
    case "Portfolio":
    case "Business Website":
      return "Approximately how many pages?";
    default:
      return null;
  }
}

function EnquiriesPage() {
  const [projectType, setProjectType] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const extra = conditionalQuestion(projectType);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }
    setErrors({});
    const v = parsed.data;
    const summary = [
      `New enquiry — AevyronWeb`,
      `Name: ${v.name}`,
      `Email: ${v.email}`,
      v.company ? `Company: ${v.company}` : "",
      `Project type: ${v.projectType}`,
      extra && v.detail ? `${extra} ${v.detail}` : "",
      `Budget: ${v.budget}`,
      `Timeline: ${v.timeline}`,
      `Details: ${v.message}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(waLink(ELLIOT_PHONE, summary), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <>
      <PageHero
        label="05 / Start a Project"
        title={
          <>
            Tell us
            <br />
            what you're building.
          </>
        }
        intro="Have a website, web application or digital product in mind? Send us the details and we'll take it from there."
      />

      <Section className="pb-28">
        <div className="grid gap-20 border-t border-border pt-16 lg:grid-cols-[1.4fr_1fr]">
          {sent ? (
            <div>
              <h2 className="font-display text-4xl md:text-6xl">Thank you.</h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Your enquiry has been received. We'll review the information and get back to you.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <ArrowLink href={WHATSAPP_URL}>WhatsApp the studio</ArrowLink>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="border border-border px-6 py-3 text-[0.8rem] tracking-[0.14em] uppercase transition-colors hover:bg-ivory hover:text-background"
                >
                  Send another
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="grid gap-10">
              <div className="grid gap-10 sm:grid-cols-2">
                <div>
                  <Label>Name</Label>
                  <input name="name" className={fieldCls} placeholder="Your name" maxLength={100} />
                  {errors["name"] ? <p className="mt-2 text-xs text-destructive">{errors["name"]}</p> : null}
                </div>
                <div>
                  <Label>Email</Label>
                  <input name="email" type="email" className={fieldCls} placeholder="you@company.com" maxLength={255} />
                  {errors["email"] ? <p className="mt-2 text-xs text-destructive">{errors["email"]}</p> : null}
                </div>
              </div>

              <div>
                <Label>Company / Brand</Label>
                <input name="company" className={fieldCls} placeholder="Optional" maxLength={120} />
              </div>

              <div className="grid gap-10 sm:grid-cols-2">
                <div>
                  <Label>Project type</Label>
                  <select
                    name="projectType"
                    className={fieldCls}
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                  >
                    <option value="">Select</option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t} className="bg-background">
                        {t}
                      </option>
                    ))}
                  </select>
                  {errors["projectType"] ? (
                    <p className="mt-2 text-xs text-destructive">{errors["projectType"]}</p>
                  ) : null}
                </div>
                <div>
                  <Label>Budget</Label>
                  <select name="budget" className={fieldCls} defaultValue="">
                    <option value="">Select</option>
                    {budgets.map((b) => (
                      <option key={b} value={b} className="bg-background">
                        {b}
                      </option>
                    ))}
                  </select>
                  {errors["budget"] ? <p className="mt-2 text-xs text-destructive">{errors["budget"]}</p> : null}
                </div>
              </div>

              <div>
                <Label>Timeline</Label>
                <select name="timeline" className={fieldCls} defaultValue="">
                  <option value="">Select</option>
                  {timelines.map((t) => (
                    <option key={t} value={t} className="bg-background">
                      {t}
                    </option>
                  ))}
                </select>
                {errors["timeline"] ? <p className="mt-2 text-xs text-destructive">{errors["timeline"]}</p> : null}
              </div>

              {extra ? (
                <div className="reveal">
                  <Label>{extra}</Label>
                  <input name="detail" className={fieldCls} placeholder="Your answer" maxLength={200} />
                </div>
              ) : null}

              <div>
                <Label>Tell us about your project</Label>
                <textarea
                  name="message"
                  rows={5}
                  maxLength={1500}
                  className={fieldCls + " resize-none"}
                  placeholder="Goals, pages, features, references…"
                />
                {errors["message"] ? <p className="mt-2 text-xs text-destructive">{errors["message"]}</p> : null}
              </div>

              <div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 border border-border px-8 py-4 text-[0.8rem] tracking-[0.18em] uppercase transition-colors hover:bg-ivory hover:text-background"
                >
                  Send enquiry <span>↗</span>
                </button>
                <p className="mt-4 text-xs text-muted-foreground">
                  Sending opens WhatsApp with your enquiry summary, ready to send to the studio.
                </p>
              </div>
            </form>
          )}

          <aside>
            <Label>Direct contact</Label>
            <div className="mt-8 border-t border-border py-6">
              <p className="font-display text-3xl">WhatsApp</p>
              <p className="mt-2 text-sm text-muted-foreground">TheRealElliot</p>
              <p className="mt-1 text-sm text-muted-foreground">{ELLIOT_PHONE}</p>
              <p className="mt-2 text-xs tracking-[0.18em] text-bronze uppercase">
                Primary enquiry channel
              </p>
              <div className="mt-6">
                <ArrowLink href={WHATSAPP_URL}>WhatsApp the studio</ArrowLink>
              </div>
            </div>
            <div className="border-t border-border py-6">
              <p className="font-display text-3xl">Email</p>
              <p className="mt-2 text-sm text-muted-foreground">{EMAIL}</p>
              <div className="mt-6">
                <a
                  href={MAILTO}
                  className="inline-flex items-center gap-2 border border-border px-6 py-3 text-[0.8rem] tracking-[0.14em] uppercase transition-colors hover:bg-ivory hover:text-background"
                >
                  Send an Email ↗
                </a>
              </div>
            </div>
            <div className="border-t border-border py-6">
              <p className="font-display text-3xl">TheRealElliot</p>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                <li>
                  <a href={mailtoFor(ELLIOT_EMAIL)} className="link-underline hover:text-foreground">
                    {ELLIOT_EMAIL}
                  </a>
                </li>
                <li>
                  <a
                    href={ELLIOT_INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline hover:text-foreground"
                  >
                    Instagram — @{ELLIOT_INSTAGRAM_HANDLE}
                  </a>
                </li>
              </ul>
            </div>
            <div className="border-t border-border py-6">
              <p className="font-display text-3xl">VortexkAi</p>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                <li>
                  <a href={mailtoFor(VORTEXKAI_EMAIL)} className="link-underline hover:text-foreground">
                    {VORTEXKAI_EMAIL}
                  </a>
                </li>
                <li>
                  <a
                    href={VORTEXKAI_INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline hover:text-foreground"
                  >
                    Instagram — @{VORTEXKAI_INSTAGRAM_HANDLE}
                  </a>
                </li>
              </ul>
            </div>
            <div className="border-t border-border py-6">
              <p className="font-display text-3xl">X</p>
              <p className="mt-2 text-sm text-muted-foreground">@aevyronweb</p>
              <div className="mt-6">
                <ArrowLink href={X_URL}>X</ArrowLink>
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
