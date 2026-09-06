import { Link } from "@tanstack/react-router";

import { EMAIL, INSTAGRAM_URL, MAILTO, PRINCE_PHONE, WHATSAPP_PRINCE, X_URL } from "@/lib/contact";

const nav = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Work", to: "/work" },
  { label: "Studio", to: "/studio" },
  { label: "Enquiries", to: "/enquiries" },
];

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border">
      <div className="mx-auto max-w-[88rem] px-6 py-20 md:px-12 md:py-28">
        <div className="grid gap-16 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-5xl md:text-7xl">AEVYRONWEB</p>
            <p className="mt-4 text-[0.72rem] tracking-[0.28em] text-muted-foreground uppercase">
              Design. Develop. Deliver.
            </p>
            <p className="mt-8 max-w-sm text-sm text-muted-foreground">
              No templates. No generic designs. Custom websites, web applications and digital
              products built with intention.
            </p>
          </div>

          <div>
            <p className="label-xs">Navigation</p>
            <ul className="mt-6 space-y-3">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="link-underline text-sm text-muted-foreground hover:text-foreground">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-xs">Contact</p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li>
                <a href={MAILTO} className="link-underline hover:text-foreground">
                  {EMAIL}
                </a>
              </li>
              <li>
                <a href={WHATSAPP_PRINCE} target="_blank" rel="noopener noreferrer" className="link-underline hover:text-foreground">
                  WhatsApp — {PRINCE_PHONE}
                </a>
              </li>
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="link-underline hover:text-foreground">
                  Instagram — @aevyronweb
                </a>
              </li>
              <li>
                <a href={X_URL} target="_blank" rel="noopener noreferrer" className="link-underline hover:text-foreground">
                  X — @aevyronweb
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-3 border-t border-border pt-8 text-[0.7rem] tracking-[0.18em] text-muted-foreground uppercase md:flex-row md:items-center md:justify-between">
          <p>© 2026 AevyronWeb. All rights reserved.</p>
          <p>Custom Websites • Full-Stack • UI/UX • APIs • E-commerce</p>
        </div>
      </div>
    </footer>
  );
}
