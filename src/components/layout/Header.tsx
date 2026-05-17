import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, CalendarDays } from "lucide-react";

const navLinks = [
  { to: "/practice-areas", label: "Practice Areas" },
  { to: "/attorneys", label: "Attorneys" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/blog", label: "Insights" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md ring-1 ring-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="size-9 bg-burgundy flex items-center justify-center rounded-sm ring-1 ring-gold/20">
            <span className="text-sm font-serif font-bold text-ink">C</span>
          </div>
          <div className="leading-tight">
            <span className="block font-serif text-lg tracking-wide uppercase font-medium text-ink">
              Christopher Segun
            </span>
            <span className="block text-[10px] uppercase tracking-[0.25em] text-ink-soft">
              Attorneys · Ogun State
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm tracking-tight text-ink-soft font-medium">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="hover:text-ink transition-colors"
              activeProps={{ className: "text-ink" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/booking"
            className="bg-burgundy text-white py-2.5 px-4 flex items-center gap-2 ring-1 ring-burgundy-deep rounded-sm hover:bg-burgundy-deep transition-colors"
          >
            <CalendarDays className="size-4" />
            Book Consultation
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-ink p-2"
          aria-label="Menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <nav className="px-6 py-6 flex flex-col gap-4 text-sm">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-ink-soft hover:text-ink py-2"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/booking"
              onClick={() => setOpen(false)}
              className="bg-burgundy text-white py-3 px-4 flex items-center justify-center gap-2 ring-1 ring-burgundy-deep rounded-sm mt-2"
            >
              <CalendarDays className="size-4" />
              Book Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}


