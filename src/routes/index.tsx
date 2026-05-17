import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Scale,
  Gavel,
  Building2,
  ShieldCheck,
  Briefcase,
  FileSearch,
  ArrowRight,
  ArrowUpRight,
  Quote,
} from "lucide-react";
import { useEffect, useState } from "react";

import heroChambers from "@/assets/hero-chambers.jpg";
import abujaSkyline from "@/assets/abuja-skyline.jpg";
import {
  ATTORNEYS,
  CASE_RESULTS,
  FAQS,
  PRACTICE_AREAS,
  STATS,
  TESTIMONIALS,
  FIRM,
} from "@/lib/content";
import { SectionHeading } from "@/components/site/PageHero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Christopher Segun — Premier Law Firm in Maitama, Abuja",
      },
      {
        name: "description",
        content:
          "Sophisticated legal counsel from Maitama, Abuja. Corporate, litigation, energy, and private client practice serving Nigeria's most demanding clients.",
      },
      {
        property: "og:title",
        content: "Christopher Segun — Premier Law Firm in Maitama, Abuja",
      },
      {
        property: "og:description",
        content:
          "Sophisticated legal counsel from Maitama, Abuja. Corporate, litigation, energy, and private client practice.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const PRACTICE_ICONS = [Scale, Gavel, Building2, ShieldCheck, Briefcase, FileSearch] as const;

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <PracticeAreas />
      <WhyChoose />
      <Attorneys />
      <CaseResults />
      <Testimonials />
      <Faqs />
      <ConsultationCta />
    </>
  );
}

function Hero() {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center pt-20 pb-28 md:pt-28 md:pb-36">
        <div>
          <span className="inline-block bg-burgundy text-white font-serif italic text-xl mb-6 animate-fade-up px-3 py-1 rounded-sm">
            Established {FIRM.founded} Abeokuta. Ogun State
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-medium leading-[1.05] text-balance text-ink mb-8 animate-fade-up delay-100">
            The authority on{" "}
            <span className="italic text-gold">complex litigation</span> and
            corporate counsel.
          </h1>
          <p className="text-lg text-ink-soft max-w-[52ch] text-pretty leading-relaxed mb-10 animate-fade-up delay-200">
            Headquartered in the heart of the Federal Capital Territory, we
            provide a sophisticated legal framework for Nigeria's most
            influential corporations, institutions, and private clients.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
            <Link
              to="/booking"
              className="bg-burgundy text-white py-4 px-6 inline-flex items-center gap-3 ring-1 ring-burgundy-deep rounded-sm hover:bg-burgundy-deep transition-all hover:translate-y-[-1px]"
            >
              Request Consultation
              <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/practice-areas"
              className="text-ink py-4 px-6 inline-flex items-center gap-3 ring-1 ring-border rounded-sm hover:bg-card transition-colors"
            >
              View Practice Areas
            </Link>
          </div>
        </div>

        <div className="relative animate-fade-in delay-300">
          <img
            src={heroChambers}
            alt="Mahogany-paneled chambers of Christopher Segun in Maitama, Abuja"
            width={1600}
            height={1920}
            className="w-full aspect-[4/5] object-cover rounded-sm ring-1 ring-border"
          />
          <div className="absolute -bottom-8 -left-8 bg-card p-8 ring-1 ring-border rounded-sm hidden xl:block backdrop-blur-md">
            <div className="text-4xl font-serif text-gold mb-1 font-semibold">
              98.4%
            </div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-white font-medium">
              Case success rate
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function useCountUp(target: string) {
  const [display, setDisplay] = useState(target);
  useEffect(() => {
    const numeric = parseFloat(target.replace(/[^0-9.]/g, ""));
    if (!Number.isFinite(numeric)) return;
    let start = 0;
    const duration = 1400;
    const startTime = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const progress = Math.min((t - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = start + (numeric - start) * eased;
      const formatted = target.replace(
        /[\d.]+/,
        Number.isInteger(numeric)
          ? Math.round(current).toString()
          : current.toFixed(1),
      );
      setDisplay(formatted);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target]);
  return display;
}

function StatItem({ value, label }: { value: string; label: string }) {
  const display = useCountUp(value);
  return (
    <div className="p-10 md:p-12 text-center md:text-left">
      <div className="text-4xl md:text-5xl font-serif text-gold mb-3">
        {display}
      </div>
      <div className="text-[10px] uppercase tracking-[0.25em] text-ink font-medium">
        {label}
      </div>
    </div>
  );
}

function Stats() {
  return (
    <section className="border-y border-border bg-card/40">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
        {STATS.map((s) => (
          <StatItem key={s.label} {...s} />
        ))}
      </div>
    </section>
  );
}

function PracticeAreas() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">
              Practice
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-ink text-balance mb-6">
              Core specializations
            </h2>
            <div className="h-px w-24 bg-burgundy" />
          </div>
          <Link
            to="/practice-areas"
            className="text-[10px] uppercase tracking-[0.25em] text-gold border-b border-gold/40 pb-2 self-start hover:text-ink transition-colors inline-flex items-center gap-2"
          >
            All practice areas
            <ArrowUpRight className="size-3" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {PRACTICE_AREAS.slice(0, 6).map((p, i) => {
            const Icon = PRACTICE_ICONS[i];
            return (
              <Link
                to="/practice-areas"
                key={p.slug}
                className="group p-10 bg-background hover:bg-card transition-colors"
              >
                <div className="text-burgundy mb-6 group-hover:text-gold transition-colors">
                  <Icon className="size-6" strokeWidth={1.25} />
                </div>
                <h3 className="text-xl font-serif font-medium text-ink mb-4">
                  {p.title}
                </h3>
                <p className="text-sm text-ink-soft leading-relaxed text-pretty">
                  {p.summary}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="size-3" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  const reasons = [
    {
      n: "01",
      title: "Senior-led representation",
      body: "Every matter is led by a partner. There is no second-tier service tier at this firm.",
    },
    {
      n: "02",
      title: "Cross-jurisdictional reach",
      body: "Active correspondent relationships in London, Johannesburg, and the Gulf for cross-border mandates.",
    },
    {
      n: "03",
      title: "Discretion as default",
      body: "Engagements protected by privilege from first contact. Conflict checks completed within 24 hours.",
    },
    {
      n: "04",
      title: "Outcomes that compound",
      body: "We measure success by what our clients build over decades — not the hours we bill in a quarter.",
    },
  ];
  return (
    <section className="py-24 md:py-32 bg-card/40 border-y border-border">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        <div>
          <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">
            The Distinction
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-ink text-balance mb-8">
            Why distinguished clients choose us.
          </h2>
          <div className="h-px w-24 bg-burgundy mb-8" />
          <p className="text-ink-soft leading-relaxed text-pretty max-w-md">
            Independent of the corporate machinery of the magic-circle firms,
            we are answerable only to our clients. The result is counsel that
            is specific, sustained, and unflinching.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-px bg-border">
          {reasons.map((r) => (
            <div key={r.n} className="bg-background p-8">
              <div className="font-mono text-[10px] text-gold mb-4">{r.n} /</div>
              <h3 className="text-lg font-serif text-ink mb-3">{r.title}</h3>
              <p className="text-sm text-ink-soft leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Attorneys() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading eyebrow="Eminent Counsel" title="Our partnership" />
        <div className="grid md:grid-cols-3 gap-12">
          {ATTORNEYS.map((a) => (
            <Link
              to="/attorneys"
              key={a.slug}
              className="group block"
            >
              <div className="overflow-hidden rounded-sm ring-1 ring-border mb-6 aspect-[3/4]">
                <img
                  src={a.photo}
                  alt={a.name}
                  loading="lazy"
                  width={800}
                  height={1024}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.02]"
                />
              </div>
              <h3 className="text-xl font-serif text-ink mb-2 group-hover:text-gold transition-colors">
                {a.name}
              </h3>
              <p className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold">
                {a.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseResults() {
  return (
    <section className="py-24 md:py-32 bg-card/40 border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <SectionHeading eyebrow="Case Results" title="Outcomes that matter" />
          <Link
            to="/case-studies"
            className="text-[10px] uppercase tracking-[0.25em] text-gold border-b border-gold/40 pb-2 hover:text-ink inline-flex items-center gap-2"
          >
            All case studies <ArrowUpRight className="size-3" />
          </Link>
        </div>
        <div className="divide-y divide-border ring-1 ring-border rounded-sm overflow-hidden">
          {CASE_RESULTS.map((c) => (
            <div
              key={c.title}
              className="grid md:grid-cols-12 gap-6 p-8 md:p-10 hover:bg-background/50 transition-colors group"
            >
              <div className="md:col-span-2 font-mono text-[10px] uppercase tracking-[0.25em] text-gold pt-2">
                {c.year}
              </div>
              <div className="md:col-span-3">
                <p className="text-[10px] uppercase tracking-[0.25em] text-ink mb-2">
                  {c.practice}
                </p>
                <h3 className="font-serif text-xl text-ink group-hover:text-gold transition-colors">
                  {c.title}
                </h3>
              </div>
              <p className="md:col-span-7 text-sm text-ink-soft leading-relaxed text-pretty">
                {c.result}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => (a + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => clearInterval(id);
  }, []);
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url(${abujaSkyline})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" aria-hidden />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <Quote className="size-10 text-burgundy mx-auto mb-8" strokeWidth={1} />
        <div className="min-h-[200px]">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.author + t.company}
              className={`transition-opacity duration-700 ${
                i === active ? "opacity-100" : "opacity-0 absolute inset-0"
              }`}
            >
              <blockquote className="text-2xl md:text-3xl font-serif italic text-ink leading-relaxed text-balance mb-8">
                "{t.quote}"
              </blockquote>
              <p className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold">
                {t.author} · {t.company}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-12">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Testimonial ${i + 1}`}
              className={`h-px transition-all ${
                i === active ? "w-12 bg-gold" : "w-6 bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Faqs() {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-[1fr_2fr] gap-16">
        <div>
          <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">
            Frequently asked
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-ink text-balance">
            Engaging the firm.
          </h2>
          <div className="h-px w-24 bg-burgundy mt-6" />
        </div>
        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="border-border"
            >
              <AccordionTrigger className="text-left font-serif text-lg text-ink hover:text-gold hover:no-underline py-6">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-ink-soft leading-relaxed text-base pb-6">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function ConsultationCta() {
  return (
    <section className="border-y border-border bg-burgundy-deep/40">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-[2fr_1fr] gap-12 items-center">
        <div>
          <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">
            Speak with counsel
          </p>
          <h2 className="text-3xl md:text-5xl font-serif text-ink text-balance">
            Begin a confidential conversation.
          </h2>
          <p className="text-ink-soft mt-6 max-w-lg leading-relaxed">
            Our associates will respond within 24 hours. All enquiries are
            privileged and held in strict confidence.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <Link
            to="/booking"
            className="bg-gold text-white py-4 px-6 text-center text-sm font-semibold uppercase tracking-[0.2em] rounded-sm hover:bg-gold/90 transition-colors"
          >
            Book Consultation
          </Link>
          <a
            href={`tel:${FIRM.phoneE164}`}
            className="ring-1 ring-border text-ink py-4 px-6 text-center text-sm rounded-sm hover:bg-card transition-colors"
          >
            Call {FIRM.phone}
          </a>
        </div>
      </div>
    </section>
  );
}


