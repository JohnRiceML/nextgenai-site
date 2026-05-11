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
  openSource?: boolean;
};

const webApps: Product[] = [
  {
    name: "Subreddit Signals",
    tagline: "Discover what's actually trending across Reddit communities.",
    url: "https://subredditsignals.com",
    logo: "/products/subredditsignals.png",
    logoTreatment: "contain",
    bg: "#fff7ef",
  },
  {
    name: "Narrative Nooks",
    tagline: "Cozy, AI-guided storytelling for kids and their families.",
    url: "https://narrativenooks.com",
    logo: "/products/narrativenooks.png",
    logoTreatment: "contain",
    bg: "#fdf6ec",
  },
  {
    name: "Mochi",
    tagline: "A small, friendly companion for getting more out of Reddit.",
    url: "https://mochisocial.com",
    logo: "/products/mochi.png",
    logoTreatment: "contain",
    bg: "#fff5f3",
  },
  {
    name: "Tech Pathways",
    tagline:
      "Map your skills to a technical career. Searchable directory of 2-year programs and certifications.",
    url: "https://tech-pathways-orcin.vercel.app",
    logo: "/products/techpathways.svg",
    logoTreatment: "cover",
    bg: "#0f172a",
  },
  {
    name: "ClawPort",
    tagline:
      "AI agent command center for Claude Code teams. Org map, kanban, crons, memory browser.",
    url: "https://www.clawport.dev",
    logo: "/products/clawport.svg",
    logoTreatment: "contain",
    bg: "#fff1e6",
    openSource: true,
  },
  {
    name: "TicketToPR",
    tagline:
      "Open-source CLI that turns Notion kanban tickets into pull requests with Claude.",
    url: "https://www.tickettopr.com",
    logo: "/products/tickettopr.png",
    logoTreatment: "cover",
    bg: "#fef9f0",
    openSource: true,
  },
  {
    name: "Locala",
    tagline:
      "AI-powered discovery of local events, gatherings, and community happenings near you.",
    url: "https://www.locala.app",
    logo: "/products/locala.webp",
    logoTreatment: "contain",
    bg: "#f0f9f4",
  },
  {
    name: "InstaFunnel",
    tagline:
      "Paste a product URL, instantly find the creators your target audience already follows.",
    url: "https://instafunnel-app.vercel.app",
    logo: "/products/instafunnel.svg",
    logoTreatment: "cover",
    bg: "#fdf2f8",
  },
];

const iosGames: Product[] = [
  {
    name: "Pimple Popper Game",
    tagline:
      "A satisfying casual mobile game with a playful sense of humor. Available on the App Store.",
    url: "https://www.pimplepoppergame.com",
    logo: "/products/pimplepopper.png",
    logoTreatment: "cover",
    bg: "#1a1410",
  },
];

const allProducts = [...webApps, ...iosGames];

export default function Page() {
  return (
    <main className="relative flex-1 overflow-hidden">
      <Bloom />

      <div className="mx-auto w-full max-w-6xl px-6">
        <Hero />
        <ProductMarquee />
        <WebApps />
        <IOSGames />
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

      <h1 className="mt-8 font-sans tracking-tight text-[44px] leading-[1.02] sm:text-[80px] sm:leading-[0.98] font-semibold text-balance max-w-[18ch]">
        We build{" "}
        <span className="font-display italic font-normal text-[color:var(--accent)]">
          practical
        </span>{" "}
        AI products{" "}
        <span className="text-[color:var(--muted)] font-normal">
          for the web and for your phone.
        </span>
      </h1>

      <p className="mt-8 max-w-2xl text-lg sm:text-xl leading-relaxed text-[color:var(--muted)]">
        NEXTGEN AI L.L.C. is an independent studio designing and shipping
        AI-powered web apps and iOS games. Small, focused products that earn a
        place on your home screen.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-4 text-sm">
        <Link
          href="#web-apps"
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
        Shipping {allProducts.length} products
      </div>
      <div className="flex items-center gap-8 sm:gap-12 overflow-x-auto px-6 sm:px-0 pb-2 [-webkit-mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] sm:[-webkit-mask-image:none]">
        {allProducts.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center gap-2.5 text-sm font-medium text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors"
          >
            <Logo product={p} size={36} radius="rounded-lg" />
            {p.name}
          </a>
        ))}
      </div>
    </div>
  );
}

function WebApps() {
  return (
    <section
      id="web-apps"
      className="border-t border-[color:var(--hairline)] pt-14 sm:pt-20 scroll-mt-20"
    >
      <SectionHeader
        kicker="Web Apps"
        title={
          <>
            AI-powered tools{" "}
            <span className="font-display italic font-normal text-[color:var(--muted)]">
              built on the web.
            </span>
          </>
        }
        meta={`${webApps.length} live`}
      />

      <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {webApps.map((p) => (
          <li key={p.name}>
            <ProductCard product={p} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function IOSGames() {
  return (
    <section
      id="ios-games"
      className="mt-24 sm:mt-32 border-t border-[color:var(--hairline)] pt-14 sm:pt-20 scroll-mt-20"
    >
      <SectionHeader
        kicker="iOS Games"
        title={
          <>
            Casual games{" "}
            <span className="font-display italic font-normal text-[color:var(--muted)]">
              for your pocket.
            </span>
          </>
        }
        meta={`${iosGames.length} on the App Store`}
      />

      <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {iosGames.map((p) => (
          <li key={p.name}>
            <ProductCard product={p} feature />
          </li>
        ))}
      </ul>
    </section>
  );
}

function SectionHeader({
  kicker,
  title,
  meta,
}: {
  kicker: string;
  title: React.ReactNode;
  meta?: string;
}) {
  return (
    <div className="flex items-end justify-between gap-6">
      <div>
        <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--muted)]">
          {kicker}
        </h2>
        <p className="mt-3 max-w-xl text-2xl sm:text-3xl font-semibold tracking-tight text-balance">
          {title}
        </p>
      </div>
      {meta ? (
        <span className="hidden sm:inline text-sm text-[color:var(--muted)] whitespace-nowrap">
          {meta}
        </span>
      ) : null}
    </div>
  );
}

function ProductCard({
  product,
  feature = false,
}: {
  product: Product;
  feature?: boolean;
}) {
  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block h-full rounded-2xl bg-[color:var(--surface)] p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-0.5 transition-[transform,box-shadow] duration-200"
    >
      {product.openSource ? (
        <span className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full bg-[color:var(--accent-soft)] px-2 py-0.5 text-[10.5px] font-medium uppercase tracking-wider text-[color:var(--accent)]">
          Open source
        </span>
      ) : null}

      <Logo
        product={product}
        size={feature ? 88 : 64}
        radius={feature ? "rounded-2xl" : "rounded-xl"}
      />

      <h3
        className={`mt-5 font-semibold tracking-tight ${
          feature ? "text-2xl" : "text-lg"
        }`}
      >
        {product.name}
      </h3>
      <p className="mt-2 text-[14.5px] leading-relaxed text-[color:var(--muted)]">
        {product.tagline}
      </p>

      <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-[color:var(--accent)]">
        <span>Visit site</span>
        <span
          aria-hidden
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        >
          →
        </span>
      </div>
    </a>
  );
}

function Logo({
  product,
  size,
  radius,
}: {
  product: Product;
  size: number;
  radius: string;
}) {
  return (
    <span
      className={`grid place-items-center overflow-hidden ${radius}`}
      style={{
        width: size,
        height: size,
        background: product.bg,
      }}
    >
      <Image
        src={product.logo}
        alt={`${product.name} logo`}
        width={size}
        height={size}
        className={
          product.logoTreatment === "cover"
            ? "h-full w-full object-cover"
            : "max-h-[72%] max-w-[72%] object-contain"
        }
      />
    </span>
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
            AI-powered products end-to-end — handling design, engineering, and
            operations under one roof.
          </p>
          <p className="text-[color:var(--muted)]">
            We&apos;re less interested in AI as a buzzword and more interested
            in AI as a quiet tool that makes everyday products noticeably
            better. Some of our work is also{" "}
            <Link
              href="#web-apps"
              className="text-[color:var(--foreground)] underline decoration-[color:var(--hairline)] underline-offset-4 hover:decoration-[color:var(--accent)]"
            >
              open source
            </Link>
            .
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
