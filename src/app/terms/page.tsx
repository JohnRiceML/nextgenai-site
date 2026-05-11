import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — NEXTGEN AI L.L.C.",
  description:
    "The terms that govern your use of NEXTGEN AI L.L.C.'s websites and applications.",
};

const EFFECTIVE = "May 11, 2026";

export default function TermsPage() {
  return (
    <main className="flex-1">
      <article className="mx-auto w-full max-w-3xl px-6 pt-16 pb-12 sm:pt-24">
        <div className="flex items-center gap-2 text-sm font-medium tracking-tight text-[color:var(--muted)]">
          <Link href="/" className="hover:text-[color:var(--foreground)]">
            NEXTGEN AI L.L.C.
          </Link>
          <span aria-hidden>/</span>
          <span>Terms</span>
        </div>

        <h1 className="mt-10 text-4xl sm:text-5xl font-semibold tracking-tight">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-[color:var(--muted)]">
          Effective {EFFECTIVE}
        </p>

        <div className="mt-12 space-y-10 text-[17px] leading-[1.7]">
          <p className="text-[color:var(--muted)]">
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the
            websites and applications operated by NEXTGEN AI L.L.C.
            (&ldquo;NEXTGEN AI,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;),
            including Subreddit Signals, Narrative Nooks, Mochi, and Pimple
            Popper Game (the &ldquo;Services&rdquo;). By using the Services
            you agree to these Terms.
          </p>

          <Section title="Eligibility">
            <p>
              You must be at least 13 years old (or the minimum age required
              in your country) to use the Services. If you use the Services on
              behalf of an organization, you represent that you have authority
              to bind that organization.
            </p>
          </Section>

          <Section title="Your account">
            <p>
              Some features require an account. You are responsible for
              maintaining the confidentiality of your credentials and for any
              activity under your account. Notify us promptly of any
              unauthorized use.
            </p>
          </Section>

          <Section title="Acceptable use">
            <p>You agree not to:</p>
            <ul className="ml-5 list-disc space-y-2 marker:text-[color:var(--accent)]">
              <li>Violate any applicable law or regulation.</li>
              <li>Infringe the rights of others.</li>
              <li>
                Use the Services to generate or distribute illegal,
                deceptive, or harmful content.
              </li>
              <li>
                Interfere with, probe, or disrupt the Services or related
                infrastructure.
              </li>
              <li>
                Reverse engineer, scrape, or attempt to extract source code,
                except as permitted by law.
              </li>
            </ul>
          </Section>

          <Section title="AI features and content">
            <p>
              The Services include AI-generated output. AI output may be
              inaccurate, incomplete, or unsuitable for a given purpose. You
              are responsible for evaluating AI output before relying on it,
              and for any use you make of it. Do not use AI features for
              advice that requires a licensed professional (legal, medical,
              financial, etc.) as a substitute for that professional.
            </p>
            <p>
              You retain ownership of the content you submit. By submitting
              content, you grant us a worldwide, non-exclusive, royalty-free
              license to host, store, and process that content solely to
              provide and improve the Services.
            </p>
          </Section>

          <Section title="Intellectual property">
            <p>
              The Services, including all software, design, text, and
              trademarks (other than your content), are owned by NEXTGEN AI
              L.L.C. or its licensors and are protected by intellectual
              property laws. We grant you a limited, non-exclusive,
              non-transferable, revocable license to use the Services for
              their intended purpose.
            </p>
          </Section>

          <Section title="Third-party services">
            <p>
              The Services may integrate with third-party services. We are
              not responsible for third-party content or services, and your
              use of them is subject to their terms.
            </p>
          </Section>

          <Section title="Termination">
            <p>
              You can stop using the Services at any time. We may suspend or
              terminate your access if you violate these Terms, if required
              by law, or if continued provision is no longer commercially
              viable. Provisions that by their nature should survive
              termination will survive.
            </p>
          </Section>

          <Section title="Disclaimers">
            <p>
              The Services are provided &ldquo;as is&rdquo; and &ldquo;as
              available&rdquo; without warranties of any kind, whether
              express, implied, or statutory, including warranties of
              merchantability, fitness for a particular purpose, and
              non-infringement, to the maximum extent permitted by law.
            </p>
          </Section>

          <Section title="Limitation of liability">
            <p>
              To the maximum extent permitted by law, NEXTGEN AI L.L.C. and
              its affiliates, officers, employees, and agents will not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages, or any loss of profits or revenues, whether
              incurred directly or indirectly. Our aggregate liability for any
              claim arising out of or relating to these Terms or the Services
              will not exceed one hundred US dollars ($100) or the amount you
              paid us for the Services in the twelve months before the claim,
              whichever is greater.
            </p>
          </Section>

          <Section title="Governing law">
            <p>
              These Terms are governed by the laws of the State in which
              NEXTGEN AI L.L.C. is organized, without regard to its
              conflict-of-laws provisions. The courts located in that State
              will have exclusive jurisdiction over any dispute, subject to
              applicable consumer-protection laws that may apply.
            </p>
          </Section>

          <Section title="Changes">
            <p>
              We may update these Terms from time to time. When we do, we
              will update the effective date above. Material changes will be
              communicated more prominently. Your continued use of the
              Services after changes take effect means you accept the updated
              Terms.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              Questions about these Terms? Email{" "}
              <a
                href="mailto:rice.john.nextgenai@gmail.com"
                className="underline decoration-[color:var(--accent)] underline-offset-4"
              >
                rice.john.nextgenai@gmail.com
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
