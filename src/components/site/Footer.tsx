import { ArrowUp } from "lucide-react";
import { NAV, PROFILE } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-border py-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-xl border border-border bg-secondary font-display text-sm font-bold text-primary">
              AA
            </span>
            <p className="font-display text-lg font-semibold">Asnif Ahamath</p>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            Management &amp; Information Technology undergraduate, ICT technician and marketing
            manager — working where business, technology and digital creativity meet.
          </p>
          <a
            href={`mailto:${PROFILE.email}`}
            className="mt-5 inline-block text-sm font-semibold text-primary hover:underline"
          >
            {PROFILE.email}
          </a>
        </div>

        <nav aria-label="Footer">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Sections
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-border px-5 pt-6 sm:flex-row sm:px-8">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Asnif Ahamath. All rights reserved.
        </p>
        <a
          href="#home"
          className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          Back to top <ArrowUp className="size-3.5" />
        </a>
      </div>
    </footer>
  );
}
