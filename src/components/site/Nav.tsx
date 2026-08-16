import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { NAV, CV_URL } from "@/lib/site-data";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
  }, [light]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-[0_8px_30px_rgba(0,0,0,0.25)]" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="group flex items-center gap-3" aria-label="Asnif Ahamath — home">
          <span className="grid size-9 place-items-center rounded-xl border border-border bg-secondary font-display text-sm font-bold tracking-tight text-primary">
            AA
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:block">Asnif Ahamath</span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setLight((v) => !v)}
            aria-label={light ? "Switch to dark theme" : "Switch to light theme"}
            className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground"
          >
            {light ? <Moon className="size-4" /> : <Sun className="size-4" />}
          </button>
          <a
            href={CV_URL}
            download="Asnif-Ahamath-CV.pdf"
            className="hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:inline-block"
          >
            Download CV
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-10 place-items-center rounded-full border border-border lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-nav" aria-label="Mobile" className="glass border-t border-border lg:hidden">
          <ul className="mx-auto grid max-w-6xl gap-1 px-5 py-4 sm:px-8">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={CV_URL}
                download="Asnif-Ahamath-CV.pdf"
                className="mt-2 block rounded-lg bg-primary px-3 py-3 text-center text-base font-semibold text-primary-foreground"
              >
                Download CV
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
