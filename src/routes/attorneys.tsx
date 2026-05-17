import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ATTORNEYS } from "@/lib/content";

export const Route = createFileRoute("/attorneys")({
  head: () => ({
    meta: [
      { title: "Attorneys — Christopher Segun" },
      {
        name: "description",
        content:
          "Meet the partners and senior counsel of Christopher Segun, including Senior Advocates of Nigeria practicing in Maitama, Abuja.",
      },
      { property: "og:title", content: "Attorneys — Christopher Segun" },
      { property: "og:description", content: "Partners and senior counsel of Christopher Segun, Maitama, Abuja." },
      { property: "og:url", content: "/attorneys" },
    ],
    links: [{ rel: "canonical", href: "/attorneys" }],
  }),
  component: AttorneysPage,
});

function AttorneysPage() {
  return (
    <>
      <PageHero
        eyebrow="Counsel"
        title={<>The <span className="italic text-gold">partnership</span>.</>}
        description="Each engagement is led by a partner whose career has been spent in the matter at hand."
      />

      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 space-y-24">
          {ATTORNEYS.map((a, i) => (
            <article
              key={a.slug}
              className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="overflow-hidden rounded-sm ring-1 ring-border aspect-[3/4]">
                <img
                  src={a.photo}
                  alt={a.name}
                  loading="lazy"
                  width={800}
                  height={1024}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold mb-3">
                  {a.title}
                </p>
                <h2 className="text-3xl md:text-4xl font-serif text-ink mb-6">
                  {a.name}
                </h2>
                <div className="h-px w-16 bg-burgundy mb-6" />
                <p className="text-ink-soft leading-relaxed mb-8">{a.bio}</p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-[10px] uppercase tracking-[0.25em] text-white font-bold mb-3">Education</h3>
                    <ul className="space-y-1 text-sm text-ink">
                      {a.education.map((e) => <li key={e}>· {e}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-[10px] uppercase tracking-[0.25em] text-white font-bold mb-3">Focus</h3>
                    <div className="flex flex-wrap gap-2">
                      {a.focus.map((f) => (
                        <span key={f} className="text-xs text-ink ring-1 ring-border rounded-sm px-3 py-1.5">{f}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}


