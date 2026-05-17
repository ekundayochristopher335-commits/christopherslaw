import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { PRACTICE_AREAS } from "@/lib/content";

export const Route = createFileRoute("/practice-areas")({
  head: () => ({
    meta: [
      { title: "Practice Areas — Christopher Segun" },
      {
        name: "description",
        content:
          "Eight core specializations spanning corporate, dispute resolution, energy, real estate, private client, regulatory, IP, and white-collar defence.",
      },
      { property: "og:title", content: "Practice Areas — Christopher Segun" },
      { property: "og:description", content: "Eight core specializations spanning Nigerian corporate, litigation, and regulatory practice." },
      { property: "og:url", content: "/practice-areas" },
    ],
    links: [{ rel: "canonical", href: "/practice-areas" }],
  }),
  component: PracticeAreasPage,
});

function PracticeAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Practice"
        title={<>Disciplines of <span className="italic text-gold">excellence</span>.</>}
        description="Each practice is partner-led, narrowly focused, and supported by a team selected for the specific demands of the engagement."
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-px bg-border ring-1 ring-border rounded-sm overflow-hidden">
          {PRACTICE_AREAS.map((p, i) => (
            <article
              key={p.slug}
              className="bg-background p-10 md:p-12 hover:bg-card transition-colors group"
            >
              <div className="font-mono text-[10px] text-gold mb-6">
                {String(i + 1).padStart(2, "0")} /
              </div>
              <h2 className="font-serif text-2xl md:text-3xl text-ink mb-4 group-hover:text-gold transition-colors">
                {p.title}
              </h2>
              <p className="text-ink-soft leading-relaxed text-pretty mb-4">
                {p.detail}
              </p>
              <Link
                to="/booking"
                className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-gold border-b border-gold/40 pb-1 hover:text-ink"
              >
                Engage on this matter <ArrowRight className="size-3" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}


