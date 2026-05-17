import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { CalendarDays, Clock, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { FIRM, PRACTICE_AREAS } from "@/lib/content";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book a Consultation — Christopher Segun" },
      {
        name: "description",
        content:
          "Schedule a confidential consultation with senior counsel at Christopher Segun, Maitama, Abuja.",
      },
      { property: "og:title", content: "Book a Consultation — Christopher Segun" },
      { property: "og:description", content: "Schedule a confidential consultation with senior counsel." },
      { property: "og:url", content: "/booking" },
    ],
    links: [{ rel: "canonical", href: "/booking" }],
  }),
  component: BookingPage,
});

const bookingSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(7).max(30),
  matter: z.string().trim().min(1),
  date: z.string().min(1),
  time: z.string().min(1),
  notes: z.string().trim().max(1500).optional().or(z.literal("")),
});

const TIMES = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00"];

function BookingPage() {
  const [submitting, setSubmitting] = useState(false);
  const today = new Date().toISOString().slice(0, 10);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const f = new FormData(e.currentTarget);
    const parsed = bookingSchema.safeParse({
      name: f.get("name"),
      email: f.get("email"),
      phone: f.get("phone"),
      matter: f.get("matter"),
      date: f.get("date"),
      time: f.get("time"),
      notes: f.get("notes") ?? "",
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please complete the form");
      setSubmitting(false);
      return;
    }
    await new Promise((r) => setTimeout(r, 800));
    toast.success("Consultation requested. We will confirm within 24 hours and may follow up by WhatsApp.");
    (e.target as HTMLFormElement).reset();
    
    // Redirect to WhatsApp after successful booking
    const whatsappMessage = `Hi Christopher Segun, I've just submitted a consultation booking request for ${parsed.data.matter}. Looking forward to hearing from you!`;
    const whatsappUrl = `https://wa.me/${FIRM.whatsappE164.replace(/^\+/, "")}?text=${encodeURIComponent(whatsappMessage)}`;
    setTimeout(() => {
      window.location.href = whatsappUrl;
    }, 1500);
    
    setSubmitting(false);
  };

  return (
    <>
      <PageHero
        eyebrow="Engagement"
        title={<>Book a <span className="italic text-gold">private consultation</span>.</>}
        description="Initial consultations are 45 minutes, conducted in chambers or by encrypted video. Engagement is subject to conflict clearance."
      />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1fr_1.6fr] gap-12">
          <aside className="space-y-6">
            {[
              { Icon: CalendarDays, t: "Same-week availability", b: "Senior counsel typically available within 3–5 business days." },
              { Icon: Clock, t: "45-minute session", b: "Sufficient for matter assessment, fit, and engagement terms." },
              { Icon: ShieldCheck, t: "Privileged from contact", b: "All communications protected by attorney-client privilege." },
            ].map(({ Icon, t, b }) => (
              <div key={t} className="ring-1 ring-border rounded-sm p-6 bg-card/40">
                <Icon className="size-5 text-gold mb-4" strokeWidth={1.5} />
                <h3 className="font-serif text-lg text-ink mb-2">{t}</h3>
                <p className="text-sm text-ink-soft leading-relaxed">{b}</p>
              </div>
            ))}
            <div className="ring-1 ring-burgundy/40 rounded-sm p-6 bg-burgundy-deep/30">
              <p className="text-[10px] uppercase tracking-[0.25em] text-gold mb-2">Urgent matter?</p>
              <a href={`tel:${FIRM.phoneE164}`} className="block font-serif text-2xl text-ink hover:text-gold transition-colors">
                {FIRM.phone}
              </a>
              <a
                href={`https://wa.me/${FIRM.whatsappE164.replace(/^\+/, "")}`}
                className="mt-3 block text-sm text-ink-soft hover:text-gold transition-colors"
              >
                WhatsApp: {FIRM.whatsapp}
              </a>
            </div>
          </aside>

          <form onSubmit={handleSubmit} className="bg-card/40 ring-1 ring-border rounded-sm p-8 md:p-10 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Field label="Full name" name="name" required maxLength={100} />
              <Field label="Email" name="email" type="email" required maxLength={255} />
              <Field label="Phone" name="phone" type="tel" required maxLength={30} />
              <div>
                <Label>Matter type</Label>
                <select name="matter" required className="w-full bg-card ring-1 ring-border rounded-sm px-4 py-3 text-sm text-ink focus:ring-gold outline-none">
                  <option value="">Select…</option>
                  {PRACTICE_AREAS.map((p) => (
                    <option key={p.slug} value={p.slug}>{p.title}</option>
                  ))}
                </select>
              </div>
              <Field label="Preferred date" name="date" type="date" required min={today} />
              <div>
                <Label>Preferred time</Label>
                <select name="time" required className="w-full bg-card ring-1 ring-border rounded-sm px-4 py-3 text-sm text-ink focus:ring-gold outline-none">
                  <option value="">Select…</option>
                  {TIMES.map((t) => (
                    <option key={t} value={t}>{t} WAT</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <Label>Brief note (optional)</Label>
              <textarea
                name="notes"
                rows={5}
                maxLength={1500}
                placeholder="A few sentences about the nature of the matter."
                className="w-full bg-transparent ring-1 ring-border rounded-sm px-4 py-3 text-sm text-ink focus:ring-gold outline-none resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-gold text-white py-4 text-sm font-semibold uppercase tracking-[0.2em] rounded-sm hover:bg-gold/90 transition-colors disabled:opacity-50"
            >
              {submitting ? "Submitting…" : "Request Confidential Consultation"}
            </button>
            <p className="text-[10px] uppercase tracking-[0.25em] text-white text-center">
              Submission does not establish an attorney-client relationship.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="block text-[10px] uppercase tracking-[0.25em] text-white mb-2">{children}</label>;
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        {...props}
        className="w-full bg-transparent ring-1 ring-border rounded-sm px-4 py-3 text-sm text-ink focus:ring-gold outline-none [color-scheme:dark]"
      />
    </div>
  );
}


