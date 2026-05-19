import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing your use of NEXTGEN AI L.L.C.'s websites, AI products, kids product (Narrative Nooks), open-source projects, and iOS games.",
};

const EFFECTIVE = "May 11, 2026";
const EMAIL = "support@nexgenai.llc";

export default function TermsPage() {
  return (
    <main className="flex-1">
      <article className="mx-auto w-full max-w-3xl px-4 sm:px-6 pt-10 pb-10 sm:pt-24 sm:pb-12">
        <Breadcrumb current="Terms" />

        <h1 className="mt-8 sm:mt-10 text-3xl sm:text-5xl font-semibold tracking-tight">
          Terms of Service
        </h1>
        <p className="mt-3 sm:mt-4 text-sm text-[color:var(--muted)]">
          Effective {EFFECTIVE}
        </p>

        <div className="mt-8 sm:mt-12 space-y-10 sm:space-y-12 text-[15.5px] sm:text-[17px] leading-[1.7]">
          <Intro>
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your access
              to and use of the website at this domain and the products
              operated by NEXTGEN AI L.L.C., a Minnesota limited liability
              company (&ldquo;NEXTGEN AI,&rdquo; &ldquo;we,&rdquo;
              &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By using our Products,
              you agree to these Terms. If you don&apos;t agree, please
              don&apos;t use the Products.
            </p>
            <p>
              Questions? <EmailLink />.
            </p>
          </Intro>

          <Section title="1. The Products">
            <p>
              These Terms cover the NEXTGEN AI marketing site and the
              following products: Subreddit Signals, Narrative Nooks, Mochi,
              Tech Pathways, ClawPort, TicketToPR, Locala, InstaFunnel, and
              Pimple Popper Game (collectively, the &ldquo;Products&rdquo;).
              Individual Products may have additional product-specific terms;
              in case of conflict for that Product, the product-specific terms
              control.
            </p>
          </Section>

          <Section title="2. Eligibility and accounts">
            <p>
              You must be old enough to form a binding contract under the
              laws of your jurisdiction to use our Products on your own
              behalf. Children under 13 may use Narrative Nooks only through
              a parent-managed account, as described in our{" "}
              <Link
                href="/privacy"
                className="text-[color:var(--foreground)] underline decoration-[color:var(--hairline)] underline-offset-4 hover:decoration-[color:var(--accent)]"
              >
                Privacy Policy
              </Link>
              . You&apos;re responsible for keeping your credentials secure
              and for activity on your account. Notify us promptly at{" "}
              <EmailLink /> if you suspect unauthorized use.
            </p>
          </Section>

          <Section title="3. Acceptable use">
            <p>You agree not to:</p>
            <List>
              <li>
                Use the Products to violate any law or third party&apos;s
                rights.
              </li>
              <li>
                Reverse-engineer, scrape, or attempt to extract source code,
                except where permitted by an open-source license that applies
                to a specific Product.
              </li>
              <li>
                Interfere with or disrupt the Products, including by sending
                malware, probing for vulnerabilities without authorization, or
                circumventing rate limits.
              </li>
              <li>
                Use the Products to generate content that sexualizes minors,
                harasses or threatens others, infringes intellectual property,
                or creates deceptive deepfakes of real people without consent.
              </li>
              <li>
                Resell, sublicense, or repackage the Products without our
                written permission.
              </li>
            </List>
            <p>
              We may suspend or terminate access for violations.
            </p>
          </Section>

          <Section title="4. User content">
            <p>
              You retain ownership of content you submit to the Products
              (&ldquo;User Content&rdquo;), including prompts, story inputs,
              configurations, and uploads. You grant NEXTGEN AI a worldwide,
              non-exclusive, royalty-free license to host, process, transmit,
              display, and otherwise use User Content solely to operate and
              improve the Products for you. We do not use your User Content
              to train AI models, and we do not authorize our model providers
              to do so. You&apos;re responsible for making sure you have the
              rights to submit any User Content.
            </p>
          </Section>

          <Section title="5. AI features and outputs">
            <p>
              Many of our Products use third-party AI models (e.g., Anthropic,
              OpenAI) to produce responses to your inputs.
            </p>

            <Sub title="AI Disclaimer">
              <p>
                AI outputs are generated based on statistical patterns and{" "}
                <strong>
                  can be inaccurate, incomplete, biased, or entirely
                  fabricated
                </strong>{" "}
                (&ldquo;hallucinations&rdquo;). Treat AI outputs as a starting
                point, not as fact.{" "}
                <strong>
                  Do not rely on AI outputs as legal, medical, financial,
                  mental-health, safety, or other professional advice.
                </strong>{" "}
                Always verify important information independently.
              </p>
            </Sub>

            <Sub title="Ownership of outputs">
              <p>
                As between you and NEXTGEN AI, you own the outputs generated
                for you, subject to the terms of the applicable model provider
                and to the rights of others (AI outputs are not always
                copyrightable, and similar outputs may be produced for other
                users).
              </p>
            </Sub>

            <Sub title="Third-party model terms">
              <p>
                Use of AI features is also subject to the usage policies of
                the applicable model provider. You agree not to use AI
                features in any way prohibited by those policies.
              </p>
            </Sub>
          </Section>

          <Section title="6. Third-party platforms">
            <p>
              Several Products read from or interact with third-party
              platforms:
            </p>
            <List>
              <li>
                <strong>Subreddit Signals and Mochi</strong> surface public
                Reddit content under Reddit&apos;s developer terms and
                applicable API policies.
              </li>
              <li>
                <strong>TicketToPR</strong> is an open-source CLI that
                connects Notion and Claude. You bring your own API keys and
                are responsible for complying with Notion&apos;s and
                Anthropic&apos;s terms.
              </li>
              <li>
                <strong>ClawPort</strong> is an open-source dashboard for
                Claude Code teams.
              </li>
              <li>
                <strong>InstaFunnel</strong> surfaces publicly available
                creator information from Instagram-adjacent platforms.
              </li>
              <li>
                <strong>Pimple Popper Game</strong> is distributed via the
                Apple App Store and is subject to Apple&apos;s Licensed
                Application End User License Agreement and App Store Terms.
              </li>
            </List>
            <p>
              We are not affiliated with Reddit, Notion, Anthropic, OpenAI,
              Instagram/Meta, Apple, or other named third parties unless
              explicitly stated. Use of their services is at your own risk
              and on their terms.
            </p>
          </Section>

          <Section title="7. Open-source products">
            <p>
              ClawPort and TicketToPR are open-source projects. The source
              code is licensed under the open-source license posted in each
              project&apos;s repository. These Terms govern your use of any
              hosted services or websites we operate for those Products, but
              the open-source license governs your rights to copy, modify,
              and redistribute the code itself. Where the open-source license
              conflicts with these Terms regarding the code, the open-source
              license controls for the code.
            </p>
          </Section>

          <Section title="8. Paid products and in-app purchases">
            <p>
              Some Products or features are paid. Pricing and billing terms
              are disclosed before purchase. For Pimple Popper Game and any
              other App Store Product, in-app purchases are processed by
              Apple and subject to Apple&apos;s terms. Subscription Products
              renew automatically unless canceled before the renewal date.
              Refunds are handled per applicable law and, for App Store
              purchases, by Apple.
            </p>
          </Section>

          <Section title="9. Intellectual property">
            <p>
              The Products, including software, design, text, graphics, and
              the NEXTGEN AI name and logos, are owned by NEXTGEN AI or its
              licensors and are protected by intellectual property laws.
              Subject to these Terms, we grant you a limited, non-exclusive,
              non-transferable, revocable license to access and use the
              Products for your personal or internal business purposes.
            </p>
          </Section>

          <Section title="10. DMCA / copyright complaints">
            <p>
              We respect intellectual property rights. If you believe content
              available through a Product infringes your copyright, send a
              notice to <EmailLink /> with the subject line &ldquo;DMCA
              Notice&rdquo; including:
            </p>
            <List>
              <li>
                A physical or electronic signature of the rights holder or
                authorized agent.
              </li>
              <li>
                Identification of the copyrighted work claimed to be
                infringed.
              </li>
              <li>
                Identification of the material to be removed and information
                sufficient to locate it.
              </li>
              <li>Your contact information.</li>
              <li>
                A statement of good-faith belief that the use is not
                authorized.
              </li>
              <li>
                A statement, under penalty of perjury, that the information is
                accurate and you are authorized to act.
              </li>
            </List>

            <Sub title="Counter-notice">
              <p>
                If your content was removed and you believe it was a mistake
                or misidentification, you may send a counter-notice to the
                same address containing your signature, identification of the
                removed material and its prior location, a statement under
                penalty of perjury that you have a good-faith belief the
                removal was a mistake, and your contact information and
                consent to jurisdiction. We may restore the content if the
                original complainant does not file suit within the time
                allowed by law.
              </p>
              <p>We may terminate accounts of repeat infringers.</p>
            </Sub>
          </Section>

          <Section title="11. Termination">
            <p>
              You may stop using the Products at any time and delete your
              account by emailing <EmailLink /> or using in-Product controls.
              We may suspend or terminate your access if you violate these
              Terms or to protect the Products or other users. Sections that
              by their nature should survive termination (e.g., ownership,
              disclaimers, limitations of liability, dispute resolution) will
              survive.
            </p>
          </Section>

          <Section title="12. Disclaimers">
            <p className="uppercase text-[15px] tracking-wide text-[color:var(--muted)] leading-relaxed">
              The Products are provided &ldquo;as is&rdquo; and &ldquo;as
              available,&rdquo; without warranties of any kind, express or
              implied, including implied warranties of merchantability,
              fitness for a particular purpose, and non-infringement. We do
              not warrant that the Products will be uninterrupted, error-free,
              secure, or that AI outputs will be accurate or reliable.
            </p>
          </Section>

          <Section title="13. Limitation of liability">
            <p className="uppercase text-[15px] tracking-wide text-[color:var(--muted)] leading-relaxed">
              To the maximum extent permitted by law, NEXTGEN AI and its
              affiliates will not be liable for any indirect, incidental,
              special, consequential, or punitive damages, or any loss of
              profits, revenue, data, or goodwill, arising out of or related
              to your use of the Products. Our total liability for any claim
              relating to the Products will not exceed the greater of (a) the
              amount you paid us for the applicable Product in the 12 months
              before the claim or (b) USD $100.
            </p>
            <p>
              Some jurisdictions don&apos;t allow these limitations, in which
              case they apply to the maximum extent permitted.
            </p>
          </Section>

          <Section title="14. Indemnification">
            <p>
              You agree to indemnify and hold harmless NEXTGEN AI and its
              affiliates, officers, and employees from claims arising out of
              your User Content, your use of the Products, or your violation
              of these Terms or applicable law.
            </p>
          </Section>

          <Section title="15. Governing law and disputes">
            <p>
              These Terms are governed by the laws of the State of Minnesota,
              without regard to its conflict-of-laws rules. Except where
              prohibited, you and NEXTGEN AI agree to resolve disputes in the
              state or federal courts located in Minnesota, and we each
              consent to personal jurisdiction there. Nothing in these Terms
              limits either party&apos;s right to seek injunctive relief in
              any competent court. If you are a consumer in a jurisdiction
              whose laws provide otherwise, mandatory provisions of your
              local law apply.
            </p>
          </Section>

          <Section title="16. Changes to these Terms">
            <p>
              We may update these Terms from time to time. If we make
              material changes, we&apos;ll update the effective date and
              provide additional notice where appropriate. Continued use of
              the Products after the changes take effect means you accept the
              updated Terms.
            </p>
          </Section>

          <Section title="17. Miscellaneous">
            <p>
              These Terms are the entire agreement between you and NEXTGEN AI
              regarding the Products and supersede prior agreements on the
              same subject. If any provision is unenforceable, the rest stays
              in effect. Our failure to enforce a provision is not a waiver.
              You may not assign these Terms without our consent; we may
              assign them in connection with a merger, acquisition, or sale
              of assets.
            </p>
          </Section>

          <Section title="18. Contact">
            <p>
              NEXTGEN AI L.L.C.
              <br />
              Email: <EmailLink />
            </p>
          </Section>

          <p className="text-sm text-[color:var(--muted)] italic pt-4 border-t border-[color:var(--hairline)]">
            Note: these terms were last updated on {EFFECTIVE}.
          </p>
        </div>
      </article>
    </main>
  );
}

function Breadcrumb({ current }: { current: string }) {
  return (
    <div className="flex items-center gap-2 text-sm font-medium tracking-tight text-[color:var(--muted)]">
      <Link href="/" className="hover:text-[color:var(--foreground)]">
        NEXTGEN AI L.L.C.
      </Link>
      <span aria-hidden>/</span>
      <span>{current}</span>
    </div>
  );
}

function Intro({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-4 text-[color:var(--muted)]">{children}</div>
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
    <section className="space-y-4">
      <h2 className="text-xl font-medium tracking-tight">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function Sub({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-3">
      <h3 className="text-base font-medium tracking-tight text-[color:var(--foreground)]">
        {title}
      </h3>
      <div className="space-y-3 text-[color:var(--muted)]">{children}</div>
    </div>
  );
}

function List({ children }: { children: React.ReactNode }) {
  return (
    <ul className="ml-5 list-disc space-y-2 marker:text-[color:var(--accent)]">
      {children}
    </ul>
  );
}

function EmailLink() {
  return (
    <a
      href={`mailto:${EMAIL}`}
      className="text-[color:var(--foreground)] underline decoration-[color:var(--accent)] underline-offset-4 hover:decoration-[3px] transition-all"
    >
      {EMAIL}
    </a>
  );
}
