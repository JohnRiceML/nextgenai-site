import Image from "next/image";
import Link from "next/link";

const CONTACT_EMAIL = "nextgenai.llc.us@gmail.com";

type Product = {
  name: string;
  tagline: string;
  url: string;
  logo: string;
  logoTreatment: "contain" | "cover";
  bg: string;
};

const products: Product[] = [
  {
    name: "Subreddit Signals",
    tagline:
      "Discover what's actually trending across Reddit communities — without the noise.",
    url: "https://subredditsignals.com",
    logo: "/products/subredditsignals.png",
    logoTreatment: "contain",
    bg: "#fff7ef",
  },
  {
    name: "Narrative Nooks",
    tagline:
      "Cozy, AI-guided storytelling experiences for kids and the families who read with them.",
    url: "https://narrativenooks.com",
    logo: "/products/narrativenooks.png",
    logoTreatment: "contain",
    bg: "#fdf6ec",
  },
  {
    name: "Mochi",
    tagline:
      "A small, friendly companion for getting more out of social platforms.",
    url: "https://mochisocial.com",
    logo: "/products/mochi.png",
    logoTreatment: "contain",
    bg: "#fff5f3",
  },
  {
    name: "Pimple Popper Game",
    tagline:
      "A satisfying casual mobile game with a playful sense of humor.",
    url: "https://www.pimplepoppergame.com",
    logo: "/products/pimplepopper.png",
    logoTreatment: "cover",
    bg: "#1a1410",
  },
];

export default function Page() {
  return (
    <main className="relative flex-1 overflow-hidden">
      <Bloom />

      <div className="mx-auto w-full max-w-5xl px-6">
        <Hero />
        <ProductMarquee />
        <Products />
        <About />
        <Contact />
      </div>
    </main>
  );
}

function Bloom() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[720px]"
    >
      <div className="absolute left-1/2 top-[-200px] h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-[color:var(--accent-soft)] opacity-80 blur-3xl" />
      <div className="absolute left-[15%] top-[120px] h-[280px] w-[460px] rounded-full bg-[color:var(--accent)] opacity-[0.12] blur-3xl" />
      <div className="absolute right-[10%] top-[40px] h-[240px] w-[360px] rounded-full bg-[#f6c89b] opacity-30 blur-3xl" />
    </div>
  );
}

function Hero() {
  return (
    <section className="pt-20 pb-16 sm:pt-32 sm:pb-24">
      <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--hairline)] bg-[color:var(--surface)]/60 px-3 py-1 text-xs font-medium tracking-tight text-[color:var(--muted)] backdrop-blur">
        <span
          aria-hidden
          className="inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]"
        />
        Independent AI products studio
      </div>

      <h1 className="mt-8 font-sans tracking-tight text-[44px] leading-[1.02] sm:text-[80px] sm:leading-[0.98] font-semibold text-balance">
        We build{" "}
        <span className="font-display italic font-normal text-[color:var(--accent)]">
          practical
        </span>{" "}
        AI products{" "}
        <span className="text-[color:var(--muted)] font-normal">
          for the people who actually use them.
        </span>
      </h1>

      <p className="mt-8 max-w-2xl text-lg sm:text-xl leading-relaxed text-[color:var(--muted)]">
        NEXTGEN AI L.L.C. is an independent studio designing and shipping
        AI-powered mobile and web products. Small, focused tools that earn a
        place on your home screen.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-4 text-sm">
        <Link
          href="#products"
          className="inline-flex items-center gap-2 rounded-full bg-[color:var(--foreground)] px-5 py-2.5 text-[color:var(--background)] font-medium hover:opacity-90 transition-opacity"
        >
          See our work
          <span aria-hidden>→</span>
        </Link>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="inline-flex items-center gap-2 px-2 py-2.5 text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}

function ProductMarquee() {
  return (
    <div className="-mx-6 sm:mx-0 mb-20 sm:mb-28">
      <div className="flex items-center gap-3 px-6 sm:px-0 mb-4 text-xs uppercase tracking-[0.18em] text-[color:var(--muted)]">
        <span className="h-px w-8 bg-[color:var(--hairline)]" />
        Shipping
      </div>
      <div className="flex items-center gap-10 sm:gap-14 overflow-x-auto px-6 sm:px-0 pb-2 [-webkit-mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] sm:[-webkit-mask-image:none]">
        {products.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center gap-3 text-sm font-medium text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors"
          >
            <span
              className="grid h-9 w-9 place-items-center rounded-lg overflow-hidden"
              style={{ background: p.bg }}
            >
              <Image
                src={p.logo}
                alt=""
                width={36}
                height={36}
                className={
                  p.logoTreatment === "cover"
                    ? "h-full w-full object-cover"
                    : "max-h-[70%] max-w-[70%] object-contain"
                }
              />
            </span>
            {p.name}
          </a>
        ))}
      </div>
    </div>
  );
}

function Products() {
  return (
    <section
      id="products"
      className="border-t border-[color:var(--hairline)] pt-14 sm:pt-20 scroll-mt-20"
    >
      <div className="flex items-baseline justify-between">
        <div>
          <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--muted)]">
            Products
          </h2>
          <p className="mt-3 max-w-xl text-2xl sm:text-3xl font-semibold tracking-tight">
            Four products,{" "}
            <span className="font-display italic font-normal text-[color:var(--muted)]">
              one studio.
            </span>
          </p>
        </div>
        <span className="hidden sm:inline text-sm text-[color:var(--muted)]">
          {products.length} live
        </span>
      </div>

      <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {products.map((p) => (
          <li key={p.name}>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block rounded-2xl bg-[color:var(--surface)] p-6 sm:p-7 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-0.5 transition-[transform,box-shadow] duration-200"
            >
              <div
                className="grid h-20 w-20 place-items-center rounded-xl overflow-hidden"
                style={{ background: p.bg }}
              >
                <Image
                  src={p.logo}
                  alt={`${p.name} logo`}
                  width={80}
                  height={80}
                  className={
                    p.logoTreatment === "cover"
                      ? "h-full w-full object-cover"
                      : "max-h-[72%] max-w-[72%] object-contain"
                  }
                />
              </div>

              <h3 className="mt-6 text-2xl font-semibold tracking-tight">
                {p.name}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[color:var(--muted)]">
                {p.tagline}
              </p>

              <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-[color:var(--accent)]">
                <span>Visit site</span>
                <span
                  aria-hidden
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  →
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      className="mt-24 sm:mt-32 border-t border-[color:var(--hairline)] pt-14 sm:pt-20 scroll-mt-20"
    >
      <div className="grid gap-12 sm:grid-cols-[200px_minmax(0,1fr)]">
        <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--muted)]">
          About
        </h2>
        <div className="space-y-6 text-lg leading-relaxed text-[color:var(--foreground)]">
          <p>
            NEXTGEN AI L.L.C. is a small, US-based studio. We design and ship
            AI-powered products for mobile and the web — built end-to-end by a
            tight team that handles design, engineering, and operations under
            one roof.
          </p>
          <p className="text-[color:var(--muted)]">
            We&apos;re less interested in AI as a buzzword and more interested
            in AI as a quiet tool that makes everyday products noticeably
            better. Useful tools, considered details, and apps that respect
            your time.
          </p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="mt-24 sm:mt-32 border-t border-[color:var(--hairline)] pt-14 sm:pt-20 scroll-mt-20"
    >
      <div className="grid gap-12 sm:grid-cols-[200px_minmax(0,1fr)]">
        <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--muted)]">
          Contact
        </h2>
        <div>
          <p className="max-w-xl text-2xl sm:text-3xl font-semibold tracking-tight text-balance">
            Questions about our apps, partnerships, or press?
          </p>
          <p className="mt-4 max-w-xl text-lg text-[color:var(--muted)]">
            We&apos;re a small team and we read everything that comes in.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-8 inline-flex items-baseline text-2xl sm:text-3xl font-medium tracking-tight text-[color:var(--foreground)] underline decoration-[color:var(--accent)] decoration-2 underline-offset-[6px] hover:decoration-[3px] transition-all break-all"
          >
            {CONTACT_EMAIL}
          </a>
          <p className="mt-10 text-sm text-[color:var(--muted)]">
            By contacting us you agree to our{" "}
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
        </div>
      </div>
    </section>
  );
}
