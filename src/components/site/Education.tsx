import { EDUCATION } from "@/lib/site-data";
import { Reveal, SectionHeading } from "./Reveal";

export function Education() {
  return (
    <section id="education" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Education"
          title="Academic background"
          lead="A management degree and an IT diploma read in parallel, on top of a strong secondary record."
        />

        <ol className="mt-14 border-l border-border">
          {EDUCATION.map((item, i) => (
            <Reveal as="li" key={item.program} delay={i * 80} className="relative pb-10 pl-8 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute -left-[6.5px] top-1.5 size-3 rounded-full border-2 border-background bg-primary"
              />
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {item.meta}
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold">{item.program}</h3>
              <p className="mt-1 text-sm font-medium text-accent">{item.school}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.notes}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
