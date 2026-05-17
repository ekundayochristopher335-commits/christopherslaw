import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CASE_RESULTS } from "@/lib/content";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Christopher Segun" },
      {
        name: "description",
        content:
          "Selected case results illustrating the firm's capability across litigation, corporate, regulatory, and white-collar defence work.",
      },
      { property: "og:title", content: "Case Studies — Christopher Segun" },
      { property: "og:description", content: "Selected case results across the firm's practice areas." },
      { property: "og:url", content: "/case-studies" },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title={<>Outcomes that <span className="italic text-gold">matter</span>.</>}
        description="A selection of recent matters. Many of our most significant engagements remain confidential at the client's request."
      />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          {CASE_RESULTS.map((c, i) => (
            <article
              key={c.title}
              className="grid md:grid-cols-12 gap-8 p-10 ring-1 ring-border rounded-sm hover:bg-card/40 transition-colors"
            >
              <div className="md:col-span-2">
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold mb-2">
                  Matter {String(i + 1).padStart(2, "0")}
                </div>
                <div className="font-serif text-3xl text-ink">{c.year}</div>
              </div>
              <div className="md:col-span-10">
                <p className="text-[10px] uppercase tracking-[0.25em] text-ink font-semibold mb-3">{c.practice}</p>
                <h2 className="font-serif text-2xl md:text-3xl text-ink mb-4">{c.title}</h2>
                <p className="text-ink-soft leading-relaxed">{c.result}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}


