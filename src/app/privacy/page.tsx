import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How NEXTGEN AI L.L.C. handles personal information across our websites, AI products, kids product (Narrative Nooks), and iOS games.",
};

const EFFECTIVE = "May 11, 2026";
const EMAIL = "support@nexgenai.llc";

export default function PrivacyPage() {
  return (
    <main className="flex-1">
      <article className="mx-auto w-full max-w-3xl px-4 sm:px-6 pt-10 pb-10 sm:pt-24 sm:pb-12">
        <Breadcrumb current="Privacy" />

        <h1 className="mt-8 sm:mt-10 text-3xl sm:text-5xl font-semibold tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-3 sm:mt-4 text-sm text-[color:var(--muted)]">
          Effective {EFFECTIVE}
        </p>

        <div className="mt-8 sm:mt-12 space-y-10 sm:space-y-12 text-[15.5px] sm:text-[17px] leading-[1.7]">
          <Intro>
            <p>
              NEXTGEN AI L.L.C. (&ldquo;NEXTGEN AI,&rdquo; &ldquo;we,&rdquo;
              &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is a Minnesota limited
              liability company that builds and operates a portfolio of
              AI-powered products. This Privacy Policy explains what
              information we collect across our website and the nine products
              linked from it, how we use that information, and the rights you
              have. We&apos;ve written it in plain English so it&apos;s
              actually readable.
            </p>
            <p>
              Questions? Email us at{" "}
              <EmailLink />.
            </p>
          </Intro>

          <Section title="1. Scope">
            <p>
              This policy applies to the NEXTGEN AI marketing site and to the
              following products operated by NEXTGEN AI: Subreddit Signals,
              Narrative Nooks, Mochi, Tech Pathways, ClawPort, TicketToPR,
              Locala, InstaFunnel, and Pimple Popper Game (collectively, the
              &ldquo;Products&rdquo;). Some Products have product-specific
              notices that supplement this policy; if there&apos;s ever a
              conflict, the product-specific notice controls for that Product.
            </p>
          </Section>

          <Section title="2. Information we collect">
            <Sub title="Information you provide">
              <List>
                <li>
                  Account information (email, display name, password hash)
                  when you sign up for a Product that requires an account.
                </li>
                <li>
                  Content you submit to a Product: prompts, story choices,
                  search queries, saved items, uploads, configuration, and
                  similar inputs.
                </li>
                <li>
                  Payment information for paid Products, processed by our
                  payment processors (we don&apos;t store full card numbers).
                </li>
                <li>Support correspondence when you email us.</li>
                <li>
                  For TicketToPR and ClawPort: any API keys (Anthropic, Notion,
                  etc.) you choose to provide. For TicketToPR, you provide and
                  control your own API keys; we do not store them on our
                  servers.
                </li>
              </List>
            </Sub>

            <Sub title="Information collected automatically">
              <List>
                <li>
                  Device and usage data: IP address, browser type, OS,
                  referring URLs, pages or screens viewed, timestamps, crash
                  logs, and similar diagnostics.
                </li>
                <li>
                  Cookies and similar technologies on our web Products (see
                  &ldquo;Cookies&rdquo; below).
                </li>
                <li>
                  Approximate location for Locala, derived from IP address or,
                  with your permission, your device&apos;s location services.
                  We use city/region-level precision unless you explicitly
                  grant finer access.
                </li>
              </List>
            </Sub>

            <Sub title="Information from third-party platforms">
              <List>
                <li>
                  Subreddit Signals and Mochi read publicly available Reddit
                  content via Reddit&apos;s APIs and developer terms. We
                  don&apos;t collect Reddit account credentials.
                </li>
                <li>
                  InstaFunnel surfaces publicly available creator information
                  from Instagram-adjacent platforms in accordance with those
                  platforms&apos; terms.
                </li>
                <li>
                  If you sign in via a third-party identity provider, we
                  receive the basic profile fields you authorize.
                </li>
              </List>
            </Sub>
          </Section>

          <Section title="3. How we use information">
            <p>We use information to:</p>
            <List>
              <li>Provide, operate, and improve the Products.</li>
              <li>
                Personalize content (for example, recommendations in Tech
                Pathways or events in Locala).
              </li>
              <li>
                Communicate with you about updates, security alerts, and
                support.
              </li>
              <li>
                Detect, prevent, and respond to abuse, fraud, and security
                incidents.
              </li>
              <li>
                Comply with legal obligations and enforce our Terms of Service.
              </li>
            </List>
            <p>
              We do not sell your personal information, and we do not
              &ldquo;share&rdquo; it for cross-context behavioral advertising
              as those terms are defined under California law.
            </p>
          </Section>

          <Section title="4. AI features and model providers">
            <p>
              Most NEXTGEN AI Products use large language models or other AI
              systems provided by third parties such as Anthropic and OpenAI.
            </p>

            <Sub title="What happens to your inputs">
              <p>
                When you submit a prompt or other input to an AI feature, that
                input (and sometimes relevant context from your account) is
                transmitted to the applicable model provider so they can
                return a response. The response is then delivered to you and,
                depending on the Product, stored in your account history.
              </p>
            </Sub>

            <Sub title="Training">
              <p>
                <strong>
                  We do not use your content to train AI models, and we do not
                  authorize our model providers to use your content to train
                  their general models.
                </strong>{" "}
                We rely on the enterprise/API terms of our model providers,
                which contractually prohibit training on customer inputs and
                outputs by default.
              </p>
            </Sub>

            <Sub title="Accuracy">
              <p>
                AI outputs can be wrong, incomplete, or fabricated. See the AI
                Disclaimer in our{" "}
                <Link
                  href="/terms"
                  className="text-[color:var(--foreground)] underline decoration-[color:var(--hairline)] underline-offset-4 hover:decoration-[color:var(--accent)]"
                >
                  Terms of Service
                </Link>{" "}
                before relying on anything an AI feature tells you.
              </p>
            </Sub>
          </Section>

          <Section title="5. Children's privacy (COPPA)">
            <p>
              Narrative Nooks is designed for kids and families, which means
              we follow the U.S. Children&apos;s Online Privacy Protection Act
              (&ldquo;COPPA&rdquo;) and similar laws for users under 13. Our
              other Products are not directed to children under 13.
            </p>

            <Sub title="Parental consent">
              <p>
                Before a child under 13 can use features of Narrative Nooks
                that involve collection of personal information, we obtain
                verifiable parental consent through a parent-managed account.
                A parent or legal guardian creates and controls the account,
                and child profiles operate underneath it.
              </p>
            </Sub>

            <Sub title="Data minimization for kids">
              <p>
                For child profiles in Narrative Nooks, we collect only
                what&apos;s necessary to deliver the storytelling experience:
              </p>
              <List>
                <li>
                  A child&apos;s first name or chosen nickname (no last name
                  required).
                </li>
                <li>
                  Age range or birth year, used to age-appropriately tailor
                  stories.
                </li>
                <li>Story choices and saved stories tied to that child profile.</li>
              </List>
              <p>
                We do not require photos, precise location, contact
                information, or social features for child profiles. We do not
                show third-party behavioral advertising to child profiles, and
                we do not use child data for AI model training.
              </p>
            </Sub>

            <Sub title="Parental rights">
              <p>
                Parents can review, export, or delete their child&apos;s
                information at any time from within the Narrative Nooks
                parent dashboard or by emailing <EmailLink />. We will honor
                verified parental requests promptly.
              </p>
            </Sub>

            <Sub title="If we learn we have a child's data without consent">
              <p>
                If we discover we&apos;ve collected personal information from
                a child under 13 without proper parental consent, we will
                delete that information promptly.
              </p>
            </Sub>
          </Section>

          <Section title="6. Apple App Store products">
            <p>
              Pimple Popper Game is distributed through the Apple App Store
              and complies with the Apple App Store Review Guidelines and App
              Tracking Transparency. The App Store listing includes an App
              Privacy &ldquo;nutrition label&rdquo; describing the categories
              of data collected. The label on the App Store is the
              authoritative summary for that app; this policy supplements it.
              The game&apos;s age rating is published on its App Store page.
              Where in-app purchases are offered, pricing and terms are
              disclosed in-app before purchase and handled by Apple.
            </p>
          </Section>

          <Section title="7. Cookies and similar technologies">
            <p>
              Our web Products use cookies and similar technologies to keep
              you signed in, remember preferences, measure performance, and
              protect against abuse. You can control cookies through your
              browser settings. We don&apos;t use third-party advertising
              cookies on Narrative Nooks.
            </p>
          </Section>

          <Section title="8. How we share information">
            <p>We share personal information only in these situations:</p>
            <List>
              <li>
                <strong>Service providers:</strong> hosting (e.g., Vercel),
                analytics, error monitoring, email delivery, payment
                processing, and AI model providers, all under contracts
                limiting their use of the data.
              </li>
              <li>
                <strong>Legal and safety:</strong> when required by law,
                subpoena, or to protect rights, safety, and integrity of our
                users and Products.
              </li>
              <li>
                <strong>Business transfers:</strong> if NEXTGEN AI is involved
                in a merger, acquisition, or asset sale, subject to continued
                protection of your information.
              </li>
              <li>
                <strong>With your direction:</strong> for example, when you
                connect a third-party account or paste content into a public
                destination.
              </li>
            </List>
          </Section>

          <Section title="9. Data retention">
            <p>
              We keep personal information only as long as we need it for the
              purposes described here, to comply with legal obligations,
              resolve disputes, or enforce agreements. You can request
              deletion at any time (see &ldquo;Your privacy rights&rdquo;).
            </p>
          </Section>

          <Section title="10. Security">
            <p>
              We use commercially reasonable administrative, technical, and
              physical safeguards designed to protect personal information. No
              system is perfectly secure, and we can&apos;t guarantee
              absolute security.
            </p>
          </Section>

          <Section title="11. International transfers">
            <p>
              We&apos;re based in the United States, and our infrastructure
              providers operate globally. If you access the Products from
              outside the U.S., your information may be transferred to and
              processed in the U.S. and other countries. For transfers of
              personal data from the EEA, UK, or Switzerland, we rely on
              appropriate safeguards such as the Standard Contractual Clauses
              where required.
            </p>
          </Section>

          <Section title="12. Your privacy rights">
            <Sub title="California (CCPA / CPRA)">
              <p>
                California residents have the right to know what personal
                information we collect, to access and obtain a copy of it, to
                request correction, to request deletion, and to limit the use
                of sensitive personal information. We do not sell personal
                information or share it for cross-context behavioral
                advertising. We won&apos;t discriminate against you for
                exercising these rights. To make a request, email{" "}
                <EmailLink />. We will verify your request using information
                already associated with your account.
              </p>
            </Sub>

            <Sub title="EEA, UK, and Switzerland (GDPR / UK GDPR)">
              <p>
                If you&apos;re in the EEA, UK, or Switzerland, you have the
                right to access, rectify, erase, restrict, and port your
                personal data, and to object to certain processing. You may
                also withdraw consent where processing is based on consent,
                and lodge a complaint with your local supervisory authority.
                For users in the EU, our lead supervisory authority will be
                the Irish Data Protection Commission unless another authority
                is designated based on where you reside.
              </p>
              <p>
                Our legal bases for processing are: performance of a contract
                (to deliver the Products you request), legitimate interests
                (to operate, secure, and improve the Products), consent
                (where required, such as certain cookies and child-product
                features), and compliance with legal obligations.
              </p>
            </Sub>

            <Sub title="Other U.S. states">
              <p>
                Residents of states with comparable privacy laws (e.g.,
                Virginia, Colorado, Connecticut, Texas) have similar rights of
                access, correction, deletion, and portability. Email us to
                exercise them.
              </p>
            </Sub>

            <Sub title="How to reach us about privacy">
              <p>
                Email <EmailLink /> with the subject line &ldquo;Privacy
                Request.&rdquo; We aim to respond within 30 days, or sooner
                where law requires.
              </p>
            </Sub>
          </Section>

          <Section title="13. Third-party services">
            <p>
              Our Products link to or integrate with third-party services
              (Reddit, Notion, Instagram-adjacent platforms, Apple, model
              providers, payment processors, etc.). Their privacy practices
              are governed by their own policies, not this one.
            </p>
          </Section>

          <Section title="14. Changes to this policy">
            <p>
              We may update this policy from time to time. When we do,
              we&apos;ll change the effective date at the top and, for
              material changes, provide additional notice (such as an
              in-Product banner or email).
            </p>
          </Section>

          <Section title="15. Contact">
            <p>
              NEXTGEN AI L.L.C.
              <br />
              Email: <EmailLink />
            </p>
          </Section>

          <p className="text-sm text-[color:var(--muted)] italic pt-4 border-t border-[color:var(--hairline)]">
            Note: this policy was last updated on {EFFECTIVE}.
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
