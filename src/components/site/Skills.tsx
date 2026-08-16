import { SKILL_GROUPS, TOOLS, CERTIFICATIONS } from "@/lib/site-data";
import { Reveal, SectionHeading } from "./Reveal";

export function Skills() {
  return (
    <section id="skills" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Capabilities"
          title="Skills, grouped the way I use them"
          lead="No percentages or rating bars — just the areas I work in and the tools I work with."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {SKILL_GROUPS.map((group, i) => (
            <Reveal key={group.title} delay={i * 70}>
              <article className="h-full rounded-3xl border border-border bg-surface p-6 transition-colors hover:bg-surface-2">
                <h3 className="font-display text-lg font-semibold">{group.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground transition-colors hover:border-primary hover:text-primary"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <Reveal>
            <article className="h-full rounded-3xl border border-border bg-surface p-6">
              <h3 className="font-display text-lg font-semibold">Tools</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {TOOLS.map((tool) => (
                  <li key={tool} className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground">
                    {tool}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
          <Reveal delay={80}>
            <article className="h-full rounded-3xl border border-border bg-surface p-6">
              <h3 className="font-display text-lg font-semibold">Certifications</h3>
              <ul className="mt-4 space-y-3">
                {CERTIFICATIONS.map((cert) => (
                  <li key={cert.title} className="border-l-2 border-primary/60 pl-3">
                    <p className="text-sm font-medium">{cert.title}</p>
                    <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
