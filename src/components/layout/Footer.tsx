import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail } from "lucide-react";
import { FIRM } from "@/lib/content";

export function Footer() {
  const ogunAddresses = [
    {
      street: "46 Olanrewaju Street, Ilupeju Estate",
      city: "Abeokuta",
      region: "Ogun State",
      country: "Nigeria",
    },
    {
      street: "12 Ijapo Road, Ijebu-Ode",
      city: "Ijebu-Ode",
      region: "Ogun State",
      country: "Nigeria",
    },
    {
      street: "8 Oke-Ona Avenue, Sagamu",
      city: "Sagamu",
      region: "Ogun State",
      country: "Nigeria",
    },
    {
      street: "23 Adebayo Street, Makun",
      city: "Sagamu",
      region: "Ogun State",
      country: "Nigeria",
    },
    {
      street: "Flat 4, 7 Ogunlana Drive",
      city: "Abeokuta",
      region: "Ogun State",
      country: "Nigeria",
    },
  ];

  const random = ogunAddresses[Math.floor(Math.random() * ogunAddresses.length)];

  return (
    <footer className="border-t border-border bg-card/40">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="size-9 bg-burgundy flex items-center justify-center rounded-sm ring-1 ring-gold/20">
                <span className="text-sm font-serif font-bold text-ink">C</span>
              </div>
              <span className="font-serif text-lg tracking-wide uppercase font-medium text-ink">
                Christopher Segun
              </span>
            </div>
            <p className="text-sm text-ink-soft leading-relaxed max-w-md mb-8">
              A premier independent law firm serving the Federal Capital
              Territory and beyond. Counsel for distinguished corporations,
              private clients, and institutions.
            </p>
            <div className="space-y-3 text-sm text-ink-soft">
              <p className="flex items-start gap-3">
                <MapPin className="size-4 text-gold mt-0.5 shrink-0" />
                <span>
                  {random.street}
                  <br /> {random.city}, {random.region}, {random.country}
                </span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="size-4 text-gold shrink-0" />
                <a href="tel:+2348129374001" className="hover:text-ink">
                  0812 937 4001
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="size-4 text-gold shrink-0" />
                <a
                  href="mailto:christophersegs30@gmail.com"
                  className="hover:text-ink"
                >
                  christophersegs30@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.25em] font-bold mb-5 text-gold">
                Firm
              </h4>
              <ul className="space-y-3 text-sm text-ink-soft">
                <li><Link to="/about" className="hover:text-ink">About</Link></li>
                <li><Link to="/attorneys" className="hover:text-ink">Attorneys</Link></li>
                <li><Link to="/case-studies" className="hover:text-ink">Case Studies</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.25em] font-bold mb-5 text-gold">
                Practice
              </h4>
              <ul className="space-y-3 text-sm text-ink-soft">
                <li><Link to="/practice-areas" className="hover:text-ink">Practice Areas</Link></li>
                <li><Link to="/blog" className="hover:text-ink">Legal Insights</Link></li>
                <li><Link to="/booking" className="hover:text-ink">Book Consultation</Link></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-[10px] uppercase tracking-[0.25em] font-bold mb-5 text-gold">
                Newsletter
              </h4>
              <p className="text-xs text-ink-soft mb-4 leading-relaxed">
                Quarterly briefings on Nigerian legal developments.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col gap-2"
              >
                <input
                  type="email"
                  required
                  placeholder="Email address"
                  className="bg-transparent ring-1 ring-border rounded-sm px-3 py-2 text-xs text-ink placeholder:text-ink-soft/60 focus:ring-gold outline-none"
                />
                <button className="text-[10px] uppercase tracking-[0.25em] font-semibold py-2 ring-1 ring-gold/40 text-gold hover:bg-gold hover:text-background transition-colors rounded-sm">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="hairline mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-[0.25em] text-ink">
            © {new Date().getFullYear()} Christopher Segun · Advocates &
            Solicitors of the Supreme Court of Nigeria
          </p>
          <p className="text-[9px] text-ink italic">This is a demo website.</p>
          <div className="flex gap-6 text-[10px] uppercase tracking-[0.25em] text-ink">
            <a href="#" className="hover:text-gold transition-colors">Privacy</a>
            <a href="#" className="hover:text-gold transition-colors">Disclaimer</a>
            <a href="#" className="hover:text-gold transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}


