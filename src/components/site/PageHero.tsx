import { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-border">
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-28">
        <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6 animate-fade-up">
          {eyebrow}
        </p>
        <h1 className="text-5xl md:text-7xl font-serif font-medium leading-[1.05] text-balance text-ink max-w-4xl animate-fade-up delay-100">
          {title}
        </h1>
        {description && (
          <p className="text-lg text-ink-soft max-w-2xl mt-8 leading-relaxed animate-fade-up delay-200">
            {description}
          </p>
        )}
        {children && <div className="mt-10 animate-fade-up delay-300">{children}</div>}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center mb-16" : "mb-16"}>
      {eyebrow && (
        <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-serif font-medium text-ink text-balance">
        {title}
      </h2>
      <div
        className={`h-px w-24 bg-burgundy mt-6 ${align === "center" ? "mx-auto" : ""}`}
      />
    </div>
  );
}


