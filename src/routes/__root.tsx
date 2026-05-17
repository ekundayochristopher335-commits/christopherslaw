import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  Link,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6">
          Error 404
        </p>
        <h1 className="text-6xl font-serif text-ink mb-4">Page not found</h1>
        <p className="text-sm text-ink-soft mb-8">
          The page you sought is not on file. Return to chambers.
        </p>
        <Link
          to="/"
          className="inline-block bg-burgundy text-ink px-6 py-3 ring-1 ring-burgundy-deep rounded-sm text-sm hover:bg-burgundy-deep transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6">
          Unexpected Error
        </p>
        <h1 className="text-3xl font-serif text-ink mb-4">
          This page didn't load
        </h1>
        <p className="text-sm text-ink-soft mb-8">
          Our chambers experienced a brief interruption. Please try again.
        </p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="bg-burgundy text-ink px-6 py-3 ring-1 ring-burgundy-deep rounded-sm text-sm hover:bg-burgundy-deep transition-colors"
          >
            Try again
          </button>
          <a
            href="/"
            className="ring-1 ring-border text-ink px-6 py-3 rounded-sm text-sm hover:bg-card transition-colors"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title:
          "Christopher Segun — Premier Law Firm in Maitama, Abuja",
      },
      {
        name: "description",
        content:
          "Christopher Segun is a premier independent law firm in Maitama, Abuja. Sophisticated counsel for corporate, litigation, and private client matters across Nigeria.",
      },
      { name: "author", content: "Christopher Segun" },
      { property: "og:site_name", content: "Christopher Segun" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,500;1,600&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: "Christopher Segun",
          description:
            "Premier independent law firm serving Abuja, FCT and beyond.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "A46 Mammy, 3 Lungi Barracks",
            addressLocality: "Maitama",
            addressRegion: "FCT",
            addressCountry: "NG",
          },
          telephone: "+234 812 937 4001",
          areaServed: "NG",
          priceRange: "$$$",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}


