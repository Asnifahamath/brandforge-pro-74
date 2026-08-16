import { ExternalLink } from "lucide-react";
import { EXPERIENCE } from "@/lib/site-data";
import { Reveal, SectionHeading } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've done the work"
          lead="Roles, responsibilities and the contributions behind them — described the way they actually happened."
        />

        <ol className="mt-14 space-y-4">
          {EXPERIENCE.map((job, i) => (
            <Reveal as="li" key={job.title} delay={i * 90}>
              <article className="relative grid gap-6 rounded-3xl border border-border bg-surface p-6 transition-colors hover:bg-surface-2 sm:p-8 lg:grid-cols-[0.35fr_0.65fr]">
                <header>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    {job.period}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-semibold">{job.title}</h3>
                  {job.orgUrl ? (
                    <a
                      href={job.orgUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                    >
                      {job.org} <ExternalLink className="size-3.5" />
                    </a>
                  ) : (
                    <p className="mt-1 text-sm font-medium text-foreground">{job.org}</p>
                  )}
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{job.meta}</p>
                </header>

                <div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{job.summary}</p>
                  <ul className="mt-4 space-y-2.5">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
