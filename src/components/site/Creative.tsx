import { Film, PenTool, Sparkles, Video } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const DISCIPLINES = [
  {
    icon: Video,
    title: "Video editing",
    body: "Short-form and long-form editing for YouTube and TikTok, produced mobile-first in CapCut with a consistent pace and visual grammar.",
  },
  {
    icon: Film,
    title: "Direction & storytelling",
    body: "Educational content and short films — concept, structure and direction handled before a single clip is cut.",
  },
  {
    icon: PenTool,
    title: "Graphic design",
    body: "Thumbnails, intros, channel graphics and marketing visuals designed in Canva and Adobe Photoshop.",
  },
  {
    icon: Sparkles,
    title: "Content strategy",
    body: "Publishing rhythm, digital promotion and audience engagement across channels — treating content as a system, not one-off posts.",
  },
];

export function Creative() {
  return (
    <section id="creative" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Creative work"
          title="Visual communication as a professional discipline"
          lead="Two channels, MJ THOUGHTs on TikTok and Blacktrue on YouTube, run end to end by me since 2025."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {DISCIPLINES.map((d, i) => (
            <Reveal key={d.title} delay={i * 70}>
              <article className="group h-full rounded-3xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <span className="grid size-11 place-items-center rounded-2xl border border-border bg-secondary text-primary transition-transform duration-300 group-hover:scale-110">
                  <d.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-8 rounded-2xl border border-dashed border-border p-5 text-sm leading-relaxed text-muted-foreground">
            Channel links and a reel are available on request — share your email in the contact form
            below and I will send the current showreel.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
