import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Search } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { INSIGHTS } from "@/lib/content";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Legal Insights — Christopher Segun" },
      {
        name: "description",
        content:
          "Briefings and analysis from Christopher Segun on Nigerian regulatory, corporate, and litigation developments.",
      },
      { property: "og:title", content: "Legal Insights — Christopher Segun" },
      { property: "og:description", content: "Briefings on Nigerian regulatory, corporate, and litigation developments." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  const [q, setQ] = useState("");
  const filtered = INSIGHTS.filter(
    (i) =>
      i.title.toLowerCase().includes(q.toLowerCase()) ||
      i.excerpt.toLowerCase().includes(q.toLowerCase()) ||
      i.category.toLowerCase().includes(q.toLowerCase()),
  );

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={<>Considered <span className="italic text-gold">legal commentary</span>.</>}
        description="Quarterly briefings written by the partners on the developments shaping Nigerian law and practice."
      >
        <div className="relative max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-ink-soft" />
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value.slice(0, 200))}
            placeholder="Search insights"
            className="w-full bg-card ring-1 ring-border rounded-sm pl-11 pr-4 py-3 text-sm text-ink placeholder:text-ink-soft focus:ring-gold outline-none"
          />
        </div>
      </PageHero>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          {filtered.length === 0 ? (
            <p className="text-center text-ink-soft py-20">No insights match your search.</p>
          ) : (
            <div className="grid md:grid-cols-2 gap-px bg-border ring-1 ring-border rounded-sm overflow-hidden">
              {filtered.map((post) => (
                <article
                  key={post.slug}
                  className="bg-background p-10 hover:bg-card transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-gold mb-6">
                    <span>{post.category}</span>
                    <span className="text-ink-soft">·</span>
                    <span className="text-ink-soft">{post.readTime}</span>
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl text-ink mb-4 group-hover:text-gold transition-colors text-balance">
                    {post.title}
                  </h2>
                  <p className="text-ink-soft leading-relaxed mb-6 text-pretty">{post.excerpt}</p>
                  <time className="text-xs text-ink-soft">
                    {new Date(post.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}


