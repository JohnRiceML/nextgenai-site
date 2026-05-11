import Link from "next/link";

const products = [
  {
    name: "Subreddit Signals",
    blurb: "Surface what matters across Reddit communities.",
  },
  {
    name: "Narrative Nooks",
    blurb: "Cozy AI-guided storytelling for kids and families.",
  },
  {
    name: "Mochi",
    blurb: "A small, friendly companion app.",
  },
  {
    name: "Pimple Popper Game",
    blurb: "A satisfying casual mobile game.",
  },
];

export default function Page() {
  return (
    <main className="relative flex-1 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px]"
      >
        <div className="absolute left-1/2 top-[-160px] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[color:var(--accent-soft)] opacity-70 blur-3xl" />
        <div className="absolute left-[20%] top-[80px] h-[280px] w-[420px] rounded-full bg-[color:var(--accent)] opacity-15 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-5xl px-6">
        <header className="pt-10 sm:pt-14">
          <div className="flex items-center gap-2 text-sm font-medium tracking-tight text-[color:var(--muted)]">
            <span
              aria-hidden
              className="inline-block h-2 w-2 rounded-full bg-[color:var(--accent)]"
            />
            NEXTGEN AI L.L.C.
          </div>
        </header>

        <section className="pt-20 pb-16 sm:pt-28 sm:pb-24">
          <h1 className="font-sans tracking-tight text-[44px] leading-[1.05] sm:text-7xl sm:leading-[1.02] font-semibold text-balance">
            Building practical{" "}
            <span className="text-[color:var(--muted)] font-normal">
              AI products
            </span>{" "}
            for the people who use them.
          </h1>
          <p className="mt-8 max-w-2xl text-lg sm:text-xl leading-relaxed text-[color:var(--muted)]">
            NEXTGEN AI L.L.C. designs and ships AI-powered mobile and web
            products &mdash; small, useful tools that earn a place on your
            phone.
          </p>
        </section>

        <section
          id="products"
          className="border-t border-[color:var(--hairline)] pt-12 sm:pt-16"
        >
          <div className="flex items-baseline justify-between">
            <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-[color:var(--muted)]">
              Products
            </h2>
            <span className="text-sm text-[color:var(--muted)]">
              {products.length} shipped &amp; in development
            </span>
          </div>

          <ul className="mt-8 divide-y divide-[color:var(--hairline)]">
            {products.map((product, i) => (
              <li
                key={product.name}
                className="grid grid-cols-[auto_1fr] sm:grid-cols-[88px_minmax(0,1fr)_minmax(0,1fr)] items-baseline gap-x-6 gap-y-2 py-6"
              >
                <span className="font-mono text-sm text-[color:var(--muted)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-2xl sm:text-3xl font-medium tracking-tight">
                  {product.name}
                </h3>
                <p className="col-span-2 sm:col-span-1 sm:justify-self-end sm:text-right text-base text-[color:var(--muted)] max-w-md">
                  {product.blurb}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section
          id="contact"
          className="mt-20 sm:mt-28 border-t border-[color:var(--hairline)] pt-12 sm:pt-16"
        >
          <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-[color:var(--muted)]">
            Contact
          </h2>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-xl text-lg text-[color:var(--muted)]">
              Questions about our apps, partnerships, or press? Reach out
              &mdash; we read everything.
            </p>
            <a
              href="mailto:rice.john.nextgenai@gmail.com"
              className="text-2xl sm:text-3xl font-medium tracking-tight text-[color:var(--foreground)] underline decoration-[color:var(--accent)] decoration-2 underline-offset-[6px] hover:decoration-[3px] transition-all"
            >
              rice.john.nextgenai@gmail.com
            </a>
          </div>
          <p className="mt-10 text-sm text-[color:var(--muted)]">
            See our{" "}
            <Link
              href="/privacy"
              className="text-[color:var(--foreground)] underline decoration-[color:var(--hairline)] underline-offset-4 hover:decoration-[color:var(--accent)]"
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              href="/terms"
              className="text-[color:var(--foreground)] underline decoration-[color:var(--hairline)] underline-offset-4 hover:decoration-[color:var(--accent)]"
            >
              Terms of Service
            </Link>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
