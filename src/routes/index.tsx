import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Experience } from "@/components/site/Experience";
import { Skills } from "@/components/site/Skills";
import { Work } from "@/components/site/Work";
import { Education } from "@/components/site/Education";
import { Creative } from "@/components/site/Creative";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const TITLE = "Asnif Ahamath | Management & IT · Digital Marketing";
const DESCRIPTION =
  "Portfolio of Asnif Ahamath — Management and Information Technology undergraduate, NVQ Level 3 ICT technician and Marketing Manager at Innovibyte, Sri Lanka. Digital marketing, IT and creative media.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Asnif Ahamath",
          alternateName: "Japeer Asnif Ahamath",
          jobTitle: "Marketing Manager",
          email: "mailto:asnifmj@gmail.com",
          address: { "@type": "PostalAddress", addressCountry: "LK", addressLocality: "Trincomalee" },
          worksFor: { "@type": "Organization", name: "Innovibyte Private Limited", url: "https://innovibyte.com/" },
          alumniOf: [
            { "@type": "CollegeOrUniversity", name: "South Eastern University of Sri Lanka" },
            { "@type": "EducationalOrganization", name: "SLIATE — ATI Sammanthurai" },
          ],
          knowsAbout: [
            "Digital Marketing",
            "Information Technology",
            "Management",
            "Video Editing",
            "Graphic Design",
            "Content Strategy",
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-dvh bg-background">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Work />
        <Education />
        <Creative />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
