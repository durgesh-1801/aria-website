import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const TermsOfService: React.FC = () => {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md">
      <Navbar />

      <main className="flex-grow w-full">
        {/* Header */}
        <header className="w-full bg-[#F8F5F2] text-surface pt-24 pb-16 px-6 md:px-container-margin-desktop">
          <div className="max-w-4xl mx-auto">
            <p className="text-primary-container font-label-caps text-label-caps uppercase tracking-[0.2em] mb-4">
              LEGAL
            </p>
            <h1 className="font-display-hero text-display-hero text-surface-dim mb-6 leading-tight">
              Terms of Service
            </h1>
            <p className="font-body-lg text-body-lg text-surface-variant max-w-2xl">
              These terms govern your use of the ARIA platform. Please read them carefully.
            </p>
            <p className="font-label-sm text-label-sm text-outline mt-4 italic">
              Last updated: September 2026 — Pending formal legal review.
            </p>
          </div>
        </header>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 md:px-container-margin-desktop py-16 space-y-12">

          {/* Notice */}
          <div className="bg-primary-container/10 border border-primary-container/30 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined filled text-primary mt-0.5" aria-hidden="true">info</span>
              <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                <strong>Important notice:</strong> ARIA is currently in an early experimental / MVP stage.
                These terms are provided as a working draft and are subject to revision as the product and
                applicable regulations evolve. They have not yet been reviewed by legal counsel.
                Do not rely on these terms for formal legal purposes without independent legal advice.
              </p>
            </div>
          </div>

          <section aria-labelledby="acceptance">
            <h2 id="acceptance" className="font-headline-lg text-headline-lg text-on-surface mb-4">1. Acceptance of Terms</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              By accessing or using the ARIA platform, website, or any associated services, you agree to be bound
              by these Terms of Service. If you do not agree to these terms, please do not use ARIA.
            </p>
          </section>

          <section aria-labelledby="description">
            <h2 id="description" className="font-headline-lg text-headline-lg text-on-surface mb-4">2. Description of Service</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
              ARIA is an AI-powered personal safety platform designed to detect potential emergencies using
              real-time sensor signals (voice, motion, orientation, and contextual data) and facilitate
              faster response. ARIA is an <strong>assistance layer only</strong> and does not replace
              professional emergency services.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              The service is currently in a pilot / experimental stage. Features, availability, and performance
              may change without prior notice.
            </p>
          </section>

          <section aria-labelledby="use">
            <h2 id="use" className="font-headline-lg text-headline-lg text-on-surface mb-4">3. Acceptable Use</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
              You agree to use ARIA only for lawful purposes and in a manner that does not infringe the rights
              of others. You must not:
            </p>
            <ul className="space-y-3 font-body-md text-body-md text-on-surface-variant list-disc pl-6">
              <li>Use ARIA to generate false emergency alerts.</li>
              <li>Attempt to reverse-engineer, copy, or tamper with the platform.</li>
              <li>Use ARIA in ways that could endanger yourself or others.</li>
              <li>Share or resell access to ARIA without authorisation.</li>
            </ul>
          </section>

          <section aria-labelledby="liability">
            <h2 id="liability" className="font-headline-lg text-headline-lg text-on-surface mb-4">4. Disclaimer of Liability</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              ARIA is provided "as is" without warranties of any kind. We do not guarantee that ARIA will detect
              every emergency, that emergency responses will be successful, or that the service will be available
              at all times. In no event shall ARIA or its founders be liable for any direct, indirect, or
              consequential damages arising from your use of or inability to use the service.
            </p>
          </section>

          <section aria-labelledby="privacy">
            <h2 id="privacy" className="font-headline-lg text-headline-lg text-on-surface mb-4">5. Privacy</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Your use of ARIA is also governed by our{' '}
              <a href="/privacy-and-safety" className="text-primary hover:underline focus:outline-none focus:ring-1 focus:ring-primary rounded">
                Privacy & Safety Policy
              </a>
              , which is incorporated by reference into these Terms.
            </p>
          </section>

          <section aria-labelledby="changes">
            <h2 id="changes" className="font-headline-lg text-headline-lg text-on-surface mb-4">6. Changes to These Terms</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              We reserve the right to modify these Terms at any time. Changes will be published on this page with
              an updated date. Continued use of ARIA after changes constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section aria-labelledby="contact">
            <h2 id="contact" className="font-headline-lg text-headline-lg text-on-surface mb-4">7. Contact</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              For questions about these Terms, please contact us at{' '}
              <a
                href="mailto:aria.safetytech@gmail.com"
                className="text-primary hover:underline focus:outline-none focus:ring-1 focus:ring-primary rounded"
              >
                aria.safetytech@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};
