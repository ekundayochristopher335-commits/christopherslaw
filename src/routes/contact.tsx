import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { PageHero } from "@/components/site/PageHero";
import { FIRM } from "@/lib/content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Christopher Segun" },
      {
        name: "description",
        content: `Contact Christopher Segun at ${FIRM.address.street}, ${FIRM.address.city}, Abuja, FCT. Phone ${FIRM.phone}.`,
      },
      { property: "og:title", content: "Contact — Christopher Segun" },
      { property: "og:description", content: `Reach our chambers in ${FIRM.address.city}, Abuja.` },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  subject: z.string().trim().min(1).max(200),
  message: z.string().trim().min(10, "Please add a brief description").max(2000),
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = new FormData(e.currentTarget);
    const parsed = contactSchema.safeParse({
      name: form.get("name"),
      email: form.get("email"),
      subject: form.get("subject"),
      message: form.get("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please review the form");
      setSubmitting(false);
      return;
    }
    await new Promise((r) => setTimeout(r, 700));
    toast.success("Enquiry received. Our associates will respond within 24 hours.");
    (e.target as HTMLFormElement).reset();
    setSubmitting(false);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Speak with <span className="italic text-gold">counsel</span>.</>}
        description="All enquiries are received in confidence. A senior associate will respond within one business day."
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_1.4fr] gap-12">
          <aside className="space-y-px bg-border ring-1 ring-border rounded-sm overflow-hidden">
            {[
              {
                Icon: MapPin,
                title: "Chambers",
                body: `${FIRM.address.street}\n${FIRM.address.city}, ${FIRM.address.region}\n${FIRM.address.country}`,
              },
              { Icon: Phone, title: "Direct line", body: FIRM.phone, href: `tel:${FIRM.phoneE164}` },
              {
                Icon: Phone,
                title: "WhatsApp",
                body: FIRM.whatsapp,
                href: `https://wa.me/${FIRM.whatsappE164.replace(/^\+/, "")}`,
              },
              { Icon: Mail, title: "Email", body: FIRM.email, href: `mailto:${FIRM.email}` },
              { Icon: Clock, title: "Hours", body: FIRM.hours },
            ].map(({ Icon, title, body, href }) => (
              <div key={title} className="bg-background p-8">
                <Icon className="size-5 text-gold mb-4" strokeWidth={1.5} />
                <p className="text-[10px] uppercase tracking-[0.25em] text-ink mb-2">{title}</p>
                {href ? (
                  <a href={href} className="text-ink hover:text-gold transition-colors whitespace-pre-line">{body}</a>
                ) : (
                  <p className="text-ink whitespace-pre-line text-sm leading-relaxed">{body}</p>
                )}
              </div>
            ))}
          </aside>

          <form onSubmit={handleSubmit} className="bg-card/40 ring-1 ring-border rounded-sm p-8 md:p-10 space-y-6">
            <h2 className="font-serif text-2xl text-ink">Send a confidential enquiry</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Field label="Full name" name="name" required maxLength={100} />
              <Field label="Email" name="email" type="email" required maxLength={255} />
            </div>
            <Field label="Subject" name="subject" required maxLength={200} />
            <div>
              <label className="block text-[10px] uppercase tracking-[0.25em] text-ink mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={6}
                maxLength={2000}
                required
                className="w-full bg-transparent ring-1 ring-border rounded-sm px-4 py-3 text-sm text-ink focus:ring-gold outline-none resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-burgundy text-ink py-4 text-sm font-semibold uppercase tracking-[0.2em] rounded-sm ring-1 ring-burgundy-deep hover:bg-burgundy-deep transition-colors disabled:opacity-50"
            >
              {submitting ? "Sending…" : "Submit Enquiry"}
            </button>
          </form>
        </div>
      </section>

      <button
        aria-label="Open live chat"
        className="fixed bottom-6 right-6 z-40 size-14 bg-burgundy ring-1 ring-gold/30 rounded-full flex items-center justify-center text-ink shadow-lg hover:bg-burgundy-deep transition-colors"
        onClick={() => toast.info("Live chat opens shortly. For now, please call or use the form.")}
      >
        <MessageCircle className="size-6" />
      </button>
    </>
  );
}

function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-[10px] uppercase tracking-[0.25em] text-ink mb-2">{label}</label>
      <input
        {...props}
        className="w-full bg-transparent ring-1 ring-border rounded-sm px-4 py-3 text-sm text-ink focus:ring-gold outline-none"
      />
    </div>
  );
}


