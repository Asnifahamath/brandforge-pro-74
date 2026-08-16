import { ArrowDown, Download, Mail } from "lucide-react";
import { PORTRAIT_URL, CV_URL, PROFILE } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 size-[42rem] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--primary), transparent 65%)" }}
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal>
            <p className="eyebrow">{PROFILE.role}</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
              Asnif
              <br />
              Ahamath
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 font-display text-lg text-primary sm:text-xl">
              Management <span className="text-muted-foreground">×</span> Technology{" "}
              <span className="text-muted-foreground">×</span> Digital Creativity
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Management &amp; Information Technology undergraduate, certified ICT technician and
              marketing manager at a Sri Lankan software product company. I work where business
              thinking, digital systems and visual storytelling meet.
            </p>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                View My Work <ArrowDown className="size-4" />
              </a>
              <a
                href={CV_URL}
                download="Asnif-Ahamath-CV.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-6 py-3 text-sm font-semibold transition-colors hover:bg-surface-2"
              >
                <Download className="size-4" /> Download CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="size-4" /> Let&apos;s Connect
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute inset-6 rounded-[3rem] opacity-40 blur-2xl"
            style={{ background: "linear-gradient(150deg, var(--primary), var(--accent))" }}
          />
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface">
            <img
              src={PORTRAIT_URL}
              alt="Asnif Ahamath, Management and Information Technology undergraduate and marketing manager, in a corporate office"
              width={612}
              height={800}
              className="h-full w-full object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-32"
              style={{ background: "linear-gradient(to top, var(--background), transparent)" }}
            />
          </div>
          <div className="glass absolute -bottom-5 left-1/2 w-[min(20rem,90%)] -translate-x-1/2 rounded-2xl px-5 py-4 text-center">
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Based in</p>
            <p className="mt-1 font-display text-sm font-semibold">{PROFILE.location}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
