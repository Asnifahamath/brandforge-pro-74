import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, Download } from "lucide-react";
import { PROFILE, CV_URL } from "@/lib/site-data";
import { Reveal, SectionHeading } from "./Reveal";

type Errors = Partial<Record<"name" | "email" | "subject" | "message", string>>;

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();

    const next: Errors = {};
    if (name.length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) next.email = "Please enter a valid email address.";
    if (subject.length < 3) next.subject = "Please add a short subject.";
    if (message.length < 20) next.message = "Please write at least 20 characters.";
    setErrors(next);
    if (Object.keys(next).length > 0 || company) return;

    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const fieldClass =
    "mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary";

  return (
    <section id="contact" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk about the role you're hiring for"
          lead="Open to internships, graduate roles, remote work and freelance projects across IT, marketing and creative technology."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="space-y-4">
            <a
              href={`mailto:${PROFILE.email}`}
              className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors hover:bg-surface-2"
            >
              <Mail className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <span>
                <span className="block text-xs uppercase tracking-[0.16em] text-muted-foreground">Email</span>
                <span className="mt-1 block text-sm font-medium break-all">{PROFILE.email}</span>
                <span className="mt-0.5 block text-xs text-muted-foreground break-all">{PROFILE.altEmail}</span>
              </span>
            </a>
            <a
              href={`tel:${PROFILE.phones[0]?.replace(/\s/g, "")}`}
              className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors hover:bg-surface-2"
            >
              <Phone className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <span>
                <span className="block text-xs uppercase tracking-[0.16em] text-muted-foreground">Phone</span>
                {PROFILE.phones.map((p) => (
                  <span key={p} className="mt-1 block text-sm font-medium">
                    {p}
                  </span>
                ))}
              </span>
            </a>
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-5">
              <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <span>
                <span className="block text-xs uppercase tracking-[0.16em] text-muted-foreground">Location</span>
                <span className="mt-1 block text-sm font-medium">{PROFILE.location}</span>
                <span className="mt-0.5 block text-xs text-muted-foreground">
                  Working with Innovibyte, Colombo · open to remote
                </span>
              </span>
            </div>
            <a
              href={CV_URL}
              download="Asnif-Ahamath-CV.pdf"
              className="flex items-center gap-3 rounded-2xl bg-primary px-5 py-4 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <Download className="size-4" aria-hidden="true" /> Download CV (PDF)
            </a>
          </Reveal>

          <Reveal delay={100}>
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-3xl border border-border bg-surface p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    className={fieldClass}
                    placeholder="Your full name"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name ? (
                    <p id="name-error" className="mt-1.5 text-xs text-destructive">
                      {errors.name}
                    </p>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className={fieldClass}
                    placeholder="you@company.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email ? (
                    <p id="email-error" className="mt-1.5 text-xs text-destructive">
                      {errors.email}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  className={fieldClass}
                  placeholder="Internship / role / project enquiry"
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                />
                {errors.subject ? (
                  <p id="subject-error" className="mt-1.5 text-xs text-destructive">
                    {errors.subject}
                  </p>
                ) : null}
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className={`${fieldClass} resize-y`}
                  placeholder="A short note about the opportunity."
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message ? (
                  <p id="message-error" className="mt-1.5 text-xs text-destructive">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                <label htmlFor="company">Company (leave blank)</label>
                <input id="company" name="company" tabIndex={-1} autoComplete="off" />
              </div>

              <button
                type="submit"
                className="mt-7 w-full rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:w-auto sm:px-8"
              >
                Send message
              </button>

              <p aria-live="polite" className="mt-4 text-xs text-muted-foreground">
                {sent
                  ? "Your email client should now be open with the message ready to send."
                  : "This form opens your email client with the message prepared — nothing is stored on this site."}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
