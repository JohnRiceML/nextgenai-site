import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NEXTGEN AI L.L.C.",
  description:
    "NEXTGEN AI L.L.C. builds AI-powered mobile and web products.",
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <footer className="mt-24 border-t border-[color:var(--hairline)]">
          <div className="mx-auto w-full max-w-5xl px-6 py-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between text-sm text-[color:var(--muted)]">
            <p>
              &copy; {new Date().getFullYear()} NEXTGEN AI L.L.C. All rights
              reserved.
            </p>
            <nav className="flex items-center gap-6">
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
                href="mailto:rice.john.nextgenai@gmail.com"
                className="hover:text-[color:var(--foreground)] transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
