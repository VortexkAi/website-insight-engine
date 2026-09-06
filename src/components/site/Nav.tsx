import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const links = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Work", to: "/work" },
  { label: "Studio", to: "/studio" },
  { label: "Enquiries", to: "/enquiries" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-md" : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex h-20 max-w-[88rem] items-center justify-between px-6 md:px-12">
        <Link to="/" className="text-[0.78rem] tracking-[0.34em] uppercase" onClick={() => setOpen(false)}>
          Aevyronweb
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="link-underline text-[0.72rem] tracking-[0.2em] text-muted-foreground uppercase transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/enquiries"
            className="hidden border border-border px-5 py-2.5 text-[0.7rem] tracking-[0.18em] uppercase transition-colors hover:bg-ivory hover:text-background md:inline-flex"
          >
            Start a project ↗
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            className="text-[0.7rem] tracking-[0.2em] uppercase md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-border bg-background px-6 py-6 md:hidden">
          <div className="flex flex-col">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 font-display text-3xl"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
