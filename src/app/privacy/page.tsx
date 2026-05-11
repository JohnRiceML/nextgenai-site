import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — NEXTGEN AI L.L.C.",
  description:
    "How NEXTGEN AI L.L.C. handles personal information across our websites and applications.",
};

const EFFECTIVE = "May 11, 2026";

export default function PrivacyPage() {
  return (
    <main className="flex-1">
      <article className="mx-auto w-full max-w-3xl px-6 pt-16 pb-12 sm:pt-24">
        <div className="flex items-center gap-2 text-sm font-medium tracking-tight text-[color:var(--muted)]">
          <Link href="/" className="hover:text-[color:var(--foreground)]">
            NEXTGEN AI L.L.C.
          </Link>
          <span aria-hidden>/</span>
          <span>Privacy</span>
        </div>

        <h1 className="mt-10 text-4xl sm:text-5xl font-semibold tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-[color:var(--muted)]">
          Effective {EFFECTIVE}
        </p>

        <div className="prose-body mt-12 space-y-10 text-[17px] leading-[1.7] text-[color:var(--foreground)]">
          <section>
            <p className="text-[color:var(--muted)]">
              NEXTGEN AI L.L.C. (&ldquo;NEXTGEN AI,&rdquo; &ldquo;we,&rdquo;
              &ldquo;us&rdquo;) builds AI-powered mobile and web products. This
              Privacy Policy explains what information we collect, how we use
              it, and the choices you have. It applies to this website and to
              our applications, including Subreddit Signals, Narrative Nooks,
              Mochi, and Pimple Popper Game (the &ldquo;Services&rdquo;).
            </p>
          </section>

          <Section title="Information we collect">
            <p>We collect only what we need to operate the Services:</p>
            <ul className="ml-5 list-disc space-y-2 marker:text-[color:var(--accent)]">
              <li>
                <strong>Information you give us.</strong> Account details such
                as email address, and anything you send us by email or in-app
                feedback.
              </li>
              <li>
                <strong>Information collected automatically.</strong> Basic
                usage data such as device type, operating system, app version,
                approximate region, and crash diagnostics. This helps us fix
                bugs and improve performance.
              </li>
              <li>
                <strong>Content you submit.</strong> Prompts, messages, or
                other content you provide to AI features so we can return a
                response.
              </li>
            </ul>
          </Section>

          <Section title="How we use information">
            <ul className="ml-5 list-disc space-y-2 marker:text-[color:var(--accent)]">
              <li>To provide, maintain, and improve the Services.</li>
              <li>
                To respond to your support requests and other communications.
              </li>
              <li>To detect, prevent, and address technical issues or abuse.</li>
              <li>To comply with legal obligations.</li>
            </ul>
            <p>
              We do not sell your personal information. We do not use the
              content you submit to AI features to train third-party models
              outside the scope of providing your response.
            </p>
          </Section>

          <Section title="Service providers">
            <p>
              We rely on a small number of vendors to run the Services
              (hosting, analytics, error monitoring, AI model providers). They
              process information on our behalf under contract and are not
              permitted to use it for their own purposes.
            </p>
          </Section>

          <Section title="Data retention">
            <p>
              We keep personal information for as long as needed to provide
              the Services and for a reasonable period afterward to comply
              with legal obligations, resolve disputes, and enforce our
              agreements. You can request deletion at any time using the
              contact email below.
            </p>
          </Section>

          <Section title="Your choices">
            <ul className="ml-5 list-disc space-y-2 marker:text-[color:var(--accent)]">
              <li>
                <strong>Access, correction, deletion.</strong> Email us to
                request a copy of your information, ask us to correct it, or
                ask us to delete it.
              </li>
              <li>
                <strong>Communications.</strong> You can opt out of
                non-essential emails at any time.
              </li>
              <li>
                <strong>Regional rights.</strong> Depending on where you live
                (for example California, the EU, or the UK), you may have
                additional rights under applicable law. We honor verified
                requests under those laws.
              </li>
            </ul>
          </Section>

          <Section title="Children">
            <p>
              Our Services are not directed to children under 13, and we do
              not knowingly collect personal information from them. If you
              believe a child has provided us with personal information,
              please contact us and we will delete it.
            </p>
          </Section>

          <Section title="Security">
            <p>
              We use industry-standard administrative, technical, and physical
              safeguards to protect personal information. No system is
              perfectly secure, so we cannot guarantee absolute security.
            </p>
          </Section>

          <Section title="International transfers">
            <p>
              We operate in the United States. If you access the Services from
              outside the US, your information may be transferred to, stored
              in, and processed in the US.
            </p>
          </Section>

          <Section title="Changes to this policy">
            <p>
              We may update this policy from time to time. When we do, we will
              update the effective date above and, for significant changes,
              provide a more prominent notice.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              Questions about this policy or a request about your information?
              Email{" "}
              <a
                href="mailto:nextgenai.llc.us@gmail.com"
                className="underline decoration-[color:var(--accent)] underline-offset-4"
              >
                nextgenai.llc.us@gmail.com
              </a>
              .
            </p>
          </Section>
        </div>
      </article>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-medium tracking-tight">{title}</h2>
      <div className="mt-3 space-y-4">{children}</div>
    </section>
  );
}
