import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const CONTACT_EMAIL = "nextgenai.llc.us@gmail.com";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextgenai-site.vercel.app"),
  title: {
    default: "NEXTGEN AI L.L.C.",
    template: "%s — NEXTGEN AI L.L.C.",
  },
  description:
    "NEXTGEN AI L.L.C. is an independent studio designing AI-powered web apps and iOS games — Subreddit Signals, Narrative Nooks, Mochi, Tech Pathways, ClawPort, TicketToPR, Locala, InstaFunnel, and Pimple Popper Game.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "NEXTGEN AI L.L.C.",
    description:
      "An independent studio building practical AI products for mobile and the web.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}

function SiteNav() {
  return (
    <nav className="sticky top-0 z-20 backdrop-blur-md bg-[color:var(--background)]/75 border-b border-[color:var(--hairline)]/60">
      <div className="mx-auto w-full max-w-6xl px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-medium tracking-tight"
        >
          <span
            aria-hidden
            className="inline-block h-2 w-2 rounded-full bg-[color:var(--accent)]"
          />
          <span>NEXTGEN AI</span>
          <span className="text-[color:var(--muted)] font-normal">L.L.C.</span>
        </Link>
        <div className="flex items-center gap-6 sm:gap-7 text-sm text-[color:var(--muted)]">
          <Link
            href="/#web-apps"
            className="hover:text-[color:var(--foreground)] transition-colors"
          >
            Web
          </Link>
          <Link
            href="/#ios-games"
            className="hover:text-[color:var(--foreground)] transition-colors"
          >
            Games
          </Link>
          <Link
            href="/#about"
            className="hidden sm:inline hover:text-[color:var(--foreground)] transition-colors"
          >
            About
          </Link>
          <Link
            href="/#contact"
            className="hover:text-[color:var(--foreground)] transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-[color:var(--hairline)]">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between text-sm text-[color:var(--muted)]">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-[color:var(--foreground)] font-medium tracking-tight">
            <span
              aria-hidden
              className="inline-block h-2 w-2 rounded-full bg-[color:var(--accent)]"
            />
            NEXTGEN AI L.L.C.
          </div>
          <p>
            &copy; {new Date().getFullYear()} NEXTGEN AI L.L.C. All rights
            reserved.
          </p>
        </div>
        <nav className="flex flex-wrap items-center gap-x-7 gap-y-2">
          <Link
            href="/privacy"
            className="hover:text-[color:var(--foreground)] transition-colors"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="hover:text-[color:var(--foreground)] transition-colors"
          >
            Terms
          </Link>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="hover:text-[color:var(--foreground)] transition-colors"
          >
            {CONTACT_EMAIL}
          </a>
        </nav>
      </div>
    </footer>
  );
}
