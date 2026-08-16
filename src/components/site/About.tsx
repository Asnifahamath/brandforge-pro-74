import { Reveal, SectionHeading } from "./Reveal";
import { LANGUAGES, PROFILE } from "@/lib/site-data";

const PILLARS = [
  {
    title: "Management",
    body: "Reading a BSc in Management and Information Technology — business, systems and decision-making, not code alone.",
  },
  {
    title: "Technology",
    body: "Certified NVQ Level 3 ICT Technician who has trained others across databases, spreadsheets and digital tools.",
  },
  {
    title: "Marketing",
    body: "Marketing Manager at a software product company, responsible for positioning, launch messaging and community.",
  },
  {
    title: "Creative",
    body: "Video editor, designer and director running an independent content operation across YouTube and TikTok.",
  },
];

export function About() {
  return (
    <section id="about" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="About"
          title="A multidisciplinary profile, built on purpose"
          lead="I chose a degree that sits between management and information technology because the work I want to do sits there too."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              I am {PROFILE.legalName}, known professionally as Asnif Ahamath. I am reading a BSc in
              Management and Information Technology at South Eastern University of Sri Lanka, and a
              Higher National Diploma in Information Technology at ATI Sammanthurai (SLIATE).
            </p>
            <p>
              Alongside my studies I work as Marketing Manager at Innovibyte Private Limited, a
              Colombo-based software product company building platforms for the Sri Lankan market.
              My responsibility is communication: making the products understandable to the people
              they are built for, and getting the right audiences to hear about the work.
            </p>
            <p>
              Before that, I trained NVQ Level 3 students in ICT modules, graphic design and video
              editing at the Institute of Language and Technological Studies — teaching sharpened
              how I explain technical ideas to non-technical people, which is most of marketing.
            </p>
            <p>
              I keep a creative practice running in parallel: editing, directing and publishing
              content under MJ THOUGHTs and Blacktrue. The direction I am building toward is a role
              that uses all three sides — business understanding, digital capability and visual
              communication.
            </p>
          </Reveal>

          <div className="space-y-4">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 70}>
                <article className="rounded-2xl border border-border bg-surface p-5 transition-colors hover:bg-surface-2">
                  <h3 className="font-display text-base font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </article>
              </Reveal>
            ))}
            <Reveal delay={300}>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <h3 className="font-display text-base font-semibold">Languages</h3>
                <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
                  {LANGUAGES.map((l) => (
                    <li key={l.name} className="text-muted-foreground">
                      <span className="text-foreground">{l.name}</span> · {l.level}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
