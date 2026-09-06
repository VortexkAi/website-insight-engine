import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("mx-auto w-full max-w-[88rem] px-6 md:px-12", className)}>
      {children}
    </section>
  );
}

export function Label({ children }: { children: ReactNode }) {
  return <p className="label-xs">{children}</p>;
}

export function PageHero({
  label,
  title,
  intro,
  children,
}: {
  label: string;
  title: ReactNode;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <Section className="reveal pt-40 pb-20 md:pt-56 md:pb-28">
      <Label>{label}</Label>
      <h1 className="mt-8 max-w-5xl text-[2.75rem] leading-[1.02] md:text-[5.5rem]">{title}</h1>
      {intro ? <p className="mt-8 max-w-2xl text-base text-muted-foreground">{intro}</p> : null}
      {children}
    </Section>
  );
}

export function ArrowLink({
  to,
  href,
  children,
  className,
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  className?: string;
}) {
  const cls = cn(
    "group inline-flex items-center gap-2 border border-border px-6 py-3 text-[0.8rem] tracking-[0.14em] uppercase transition-colors hover:bg-ivory hover:text-background",
    className,
  );
  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
        <span className="transition-transform group-hover:translate-x-1">↗</span>
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {children}
      <span className="transition-transform group-hover:translate-x-1">↗</span>
    </a>
  );
}

export function PriceRow({
  name,
  price,
  note,
}: {
  name: string;
  price: string;
  note?: string;
}) {
  return (
    <div className="grid grid-cols-1 gap-1 border-t border-border py-5 md:grid-cols-[1fr_auto] md:items-baseline md:gap-8">
      <div>
        <p className="text-[0.82rem] tracking-[0.14em] uppercase">{name}</p>
        {note ? <p className="mt-1 max-w-xl text-sm text-muted-foreground">{note}</p> : null}
      </div>
      <p className="font-display text-2xl text-ivory md:text-right">{price}</p>
    </div>
  );
}
