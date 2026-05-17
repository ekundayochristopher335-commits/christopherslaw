import { createFileRoute, Link } from "@tanstack/react-router";
import courtroom from "@/assets/courtroom.jpg";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { FIRM, STATS } from "@/lib/content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Christopher Segun" },
      {
        name: "description",
        content:
          "An independent law firm founded on the conviction that exceptional counsel begins with independence. Founded in Maitama, Abuja.",
      },
      { property: "og:title", content: "About — Christopher Segun" },
      {
        property: "og:description",
        content:
          "An independent law firm founded on the conviction that exceptional counsel begins with independence.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="The Firm"
        title={
          <>
            An independent firm,
            <br />
            <span className="italic text-gold">answerable only to clients.</span>
          </>
        }
        description={`Since ${FIRM.founded}, Christopher Segun has provided sophisticated counsel from chambers in Maitama, Abuja. We are deliberately structured to remain conflict-free, partner-led, and uncompromising.`}
      />

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <img
            src={courtroom}
            alt="Wood-paneled Nigerian courtroom"
            loading="lazy"
            width={1600}
            height={1000}
            className="w-full aspect-[4/3] object-cover rounded-sm ring-1 ring-border"
          />
          <div>
            <SectionHeading eyebrow="Our origin" title="Built for Nigerian complexity." />
            <div className="space-y-6 text-ink-soft leading-relaxed">
              <p>
                The firm was established by counsel who had practiced at the
                most demanding institutions on the continent and concluded
                that a smaller, partner-driven firm was the only structure
                capable of consistently delivering at the highest level.
              </p>
              <p>
                Fifteen years on, that conviction has only deepened. Our
                clients include multinational corporations, Nigerian
                conglomerates, federal agencies, and a select circle of
                private clients whose matters demand absolute discretion.
              </p>
              <p>
                We are headquartered at A46 Mammy, 3 Lungi Barracks, Maitama,
                with active engagements across all 36 states and a
                correspondent network in London, Johannesburg, and Dubai.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card/40">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {STATS.map((s) => (
            <div key={s.label} className="p-12 text-center md:text-left">
              <div className="text-4xl md:text-5xl font-serif text-gold mb-3">
                {s.value}
              </div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-white font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading eyebrow="Values" title="The principles that govern our practice." align="center" />
          <div className="grid md:grid-cols-2 gap-px bg-border ring-1 ring-border rounded-sm overflow-hidden">
            {[
              { t: "Independence", b: "We answer to clients — not to corporate parents, financial sponsors, or referral networks." },
              { t: "Discretion", b: "What is shared with the firm stays within the firm. Permanently." },
              { t: "Excellence", b: "Every document, every appearance, every brief is held to the standard of the Supreme Court of Nigeria." },
              { t: "Stewardship", b: "We measure success in the institutions our clients build, not the matters we close." },
            ].map((v) => (
              <div key={v.t} className="bg-background p-10">
                <h3 className="font-serif text-2xl text-ink mb-4">{v.t}</h3>
                <p className="text-ink-soft leading-relaxed">{v.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}

function CtaStrip() {
  return (
    <section className="border-t border-border bg-burgundy-deep/40">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row justify-between items-center gap-8">
        <h3 className="text-3xl font-serif text-ink text-balance">
          Engage senior counsel today.
        </h3>
        <div className="flex gap-3">
          <Link to="/booking" className="bg-gold text-white py-3 px-6 text-sm font-semibold uppercase tracking-[0.2em] rounded-sm hover:bg-gold/90 transition-colors">Book consultation</Link>
          <Link to="/contact" className="ring-1 ring-border text-ink py-3 px-6 text-sm rounded-sm hover:bg-card transition-colors">Contact</Link>
        </div>
      </div>
    </section>
  );
}


