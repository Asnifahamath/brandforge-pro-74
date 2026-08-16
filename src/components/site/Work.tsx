import { ArrowUpRight } from "lucide-react";
import { WORK } from "@/lib/site-data";
import { Reveal, SectionHeading } from "./Reveal";

export function Work() {
  return (
    <section id="work" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Selected work"
          title="Products and projects I contribute to"
          lead="Company products are credited to the company. What is listed under “My role” is mine."
        />

        <div className="mt-14 space-y-6">
          {WORK.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <article className="group relative overflow-hidden rounded-3xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 sm:p-9">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25"
                  style={{ background: "radial-gradient(circle, var(--primary), transparent 70%)" }}
                />
                <div className="relative grid gap-8 lg:grid-cols-[0.4fr_0.6fr]">
                  <header>
                    <div className="flex items-center gap-3">
                      <span className="font-display text-4xl font-semibold text-muted-foreground/40">
                        {item.index}
                      </span>
                      <span className="rounded-full border border-border px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-primary">
                        {item.status}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-2xl font-semibold sm:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.org}</p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {item.overview}
                    </p>
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
                      >
                        Visit innovibyte.com <ArrowUpRight className="size-4" />
                      </a>
                    ) : null}
                  </header>

                  <dl className="space-y-4 border-t border-border pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                    <div>
                      <dt className="eyebrow">The problem</dt>
                      <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {item.problem}
                      </dd>
                    </div>
                    <div>
                      <dt className="eyebrow">The approach</dt>
                      <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {item.solution}
                      </dd>
                    </div>
                    <div>
                      <dt className="eyebrow">My role</dt>
                      <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {item.role}
                      </dd>
                    </div>
                    <div>
                      <dt className="sr-only">Skills applied</dt>
                      <dd>
                        <ul className="flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <li
                              key={tag}
                              className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                            >
                              {tag}
                            </li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  </dl>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
