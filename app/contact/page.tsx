import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';
import { InquiryForm } from '@/components/forms/InquiryForm';
import { site } from '@/lib/content/site';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Start a project with XEVORA Technologies. Tell us about your business challenge and we will respond honestly about whether we are the right partner.',
  alternates: { canonical: 'https://xevoratechnologies.com/contact' },
};

export default function ContactPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Contact"
        title="Tell us what you are trying to solve."
        description="We read every inquiry. If your project is a good fit for XEVORA, we will propose next steps. If it is not, we will say so clearly and, where possible, point you toward someone who can help."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          {/* Sidebar: contact info and expectations */}
          <aside>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-orange">
              What happens next
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-neutral-50">
              A short, honest response — not a sales pitch.
            </h2>

            <ol className="mt-8 space-y-5">
              <Step n="1" title="We read your inquiry">
                Every submission is reviewed directly. There is no automated triage
                that routes you to a queue.
              </Step>
              <Step n="2" title="We respond with questions or next steps">
                If the project fits, we will suggest a short call. If it does not, we
                will tell you why.
              </Step>
              <Step n="3" title="If it is a fit, we scope and quote">
                No cost is agreed before we understand the problem and can describe an
                approach.
              </Step>
            </ol>

            <div className="mt-10 border-t border-white/5 pt-8 text-sm text-neutral-400">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
                Direct email
              </p>
              <p className="mt-3">
                <a
                  href={`mailto:${site.contact.email}`}
                  className="text-neutral-200 transition-colors hover:text-brand-yellow"
                >
                  {site.contact.email}
                </a>
              </p>
              <p className="mt-4 text-xs leading-relaxed text-neutral-500">
                instant replies.
              </p>
            </div>
          </aside>

          {/* Form */}
          <div>
            <InquiryForm />
          </div>
        </div>
      </Section>
    </main>
  );
}

function Step({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-4">
      <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/10 font-mono text-[11px] text-brand-orange">
        {n}
      </span>
      <div>
        <p className="text-sm font-semibold text-neutral-100">{title}</p>
        <p className="mt-1 text-sm leading-relaxed text-neutral-400">{children}</p>
      </div>
    </li>
  );
}