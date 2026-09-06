import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { ArrowLink, Section } from "@/components/site/primitives";
import { projects } from "@/lib/work";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project unavailable — AevyronWeb" }, { name: "robots", content: "noindex" }],
      };
    }
    const { project } = loaderData;
    return {
      meta: [
        { title: `${project.title} — ${project.category} — AevyronWeb` },
        { name: "description", content: project.summary },
        { property: "og:title", content: `${project.title} — AevyronWeb` },
        { property: "og:description", content: project.summary },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/work/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/work/${params.slug}` }],
    };
  },
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData();

  const blocks = [
    { title: "Challenge", body: project.challenge },
    { title: "Approach", body: project.approach },
    { title: "Design", body: project.design },
    { title: "Development", body: project.development },
    { title: "Result", body: project.result },
  ];

  return (
    <>
      <Section className="reveal pt-40 pb-16 md:pt-52">
        <Link to="/work" className="link-underline text-[0.7rem] tracking-[0.2em] uppercase text-muted-foreground">
          ← All work
        </Link>
        <p className="label-xs mt-10">
          {project.category} — {project.status}
        </p>
        <h1 className="mt-6 text-[3rem] md:text-[7rem]">{project.title}</h1>
        <p className="mt-8 max-w-2xl text-muted-foreground">{project.summary}</p>
      </Section>

      <Section className="pb-20">
        <img
          src={project.image}
          alt={`${project.title} project visual`}
          loading="lazy"
          width={1408}
          height={1008}
          className="w-full object-cover"
        />
      </Section>

      <Section className="pb-24">
        <div className="grid gap-16 md:grid-cols-[1.4fr_1fr]">
          <div>
            {blocks.map((b) => (
              <div key={b.title} className="border-t border-border py-10">
                <p className="label-xs">{b.title}</p>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{b.body}</p>
              </div>
            ))}
          </div>
          <aside className="border-t border-border py-10">
            <p className="label-xs">Technology</p>
            <ul className="mt-6 space-y-3">
              {project.tech.map((t) => (
                <li key={t} className="border-b border-border pb-3 text-sm">
                  {t}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Section>

      <Section className="py-24">
        <div className="border-t border-border pt-16">
          <h2 className="text-[2.2rem] md:text-[4.5rem]">Build something similar</h2>
          <div className="mt-10">
            <ArrowLink to="/enquiries">Start an enquiry</ArrowLink>
          </div>
        </div>
      </Section>
    </>
  );
}
