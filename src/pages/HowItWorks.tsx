import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Toast } from '../components/Toast';

export const HowItWorks: React.FC = () => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Fix #9: Replace alert() with non-blocking toast
  const handleShare = useCallback(() => {
    if (navigator.share) {
      navigator.share({
        title: 'ARIA - Intelligent Safety Platform',
        text: 'Learn how ARIA uses AI and signal fusion for emergency response.',
        url: window.location.href,
      }).catch(() => {
        // User cancelled share — no action needed
      });
    } else {
      navigator.clipboard.writeText(window.location.href).then(() => {
        setToastMessage('Link copied to clipboard!');
      }).catch(() => {
        setToastMessage('Could not copy link. Please copy it from the address bar.');
      });
    }
  }, []);

  return (
    <div className="antialiased bg-background text-on-background min-h-screen flex flex-col font-body-md">
      {/* Fix #12, #14: Shared Navbar with dynamic active state */}
      <Navbar />

      {/* Fix #9: Toast notification */}
      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
      )}

      {/* Page Header */}
      {/* Fix #15: Replaced bg-cream-override (!important) with bg-cream-section (dark-mode-aware) */}
      <section className="bg-cream-section pt-32 pb-24 px-container-margin-desktop text-center">
        <div className="max-w-4xl mx-auto">
          <span className="font-label-caps text-label-caps tracking-[0.2em] text-primary-container mb-6 block">
            THE TECHNOLOGY
          </span>
          <h1 className="font-display-hero text-display-hero text-[#151314] dark:text-on-background mb-8">
            How ARIA Works
          </h1>
          <p className="font-glacial text-2xl leading-relaxed text-inverse-on-surface dark:text-on-surface-variant max-w-3xl mx-auto">
            ARIA continuously reads multiple real-time signals, fuses them into a single risk picture, and decides
            in seconds whether and how to act
          </p>
        </div>
      </section>

      {/* Signal Fusion Diagram */}
      <section className="bg-cream-section px-container-margin-desktop py-8">
        <div className="mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full flex justify-center items-center">
            <img
              alt="ARIA's Comprehensive Safety System diagram showing signal fusion flow"
              className="w-full h-auto rounded-lg shadow-sm max-w-5xl"
              src="/images/howitworks-safety-system.png"
              width="1200"
              height="600"
            />
          </div>
        </div>
      </section>

      {/* Signal Explainer Cards */}
      <section className="bg-cream-section py-24 px-container-margin-desktop">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: 'graphic_eq', title: 'Voice Analysis', desc: 'Detects stress levels, sudden shouts, and specific keywords to gauge immediate danger.' },
            { icon: 'directions_run', title: 'Motion Detection', desc: 'Identifies abrupt movements, running, or unusual pacing associated with panic or struggle.' },
            { icon: '360', title: 'Rotation Detection', desc: 'Monitors device orientation to identify drops, falls, or sudden physical impacts.' },
            { icon: 'radar', title: 'Contextual Signals', desc: 'Analyzes location changes, time of day, and environmental noise to establish a baseline of safety.' },
            { icon: 'hub', title: 'Risk Fusion', desc: 'Combines all sensory inputs into a cohesive risk matrix in real-time, eliminating false positives.' },
            { icon: 'gavel', title: 'Decision Engine', desc: 'Autonomously determines the appropriate level of intervention, from silent alerts to emergency dispatch.' },
          ].map((card) => (
            <div key={card.title} className="bg-white dark:bg-surface-container p-8 rounded border border-outline/20 shadow-sm hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-primary-container text-4xl mb-6" aria-hidden="true">{card.icon}</span>
              <h3 className="font-headline-md text-2xl text-[#151314] dark:text-on-background mb-4">{card.title}</h3>
              <p className="font-glacial text-inverse-on-surface dark:text-on-surface-variant">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* From Signal to Action Bridge */}
      <section className="bg-cream-section py-16 px-container-margin-desktop border-y border-outline/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-headline-lg text-headline-lg text-[#151314] dark:text-on-background mb-6">
            From Signals to a Decision — In Seconds
          </h2>
          <p className="font-glacial text-lg text-inverse-on-surface dark:text-on-surface-variant mb-12">
            The raw data captured by our sensors undergoes immediate processing through our five-stage intelligent workflow.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 text-primary-container font-label-caps">
            {['Detect', 'Understand', 'Assess', 'Alert', 'Assist'].map((step, i, arr) => (
              <React.Fragment key={step}>
                <span className="bg-white dark:bg-surface-container px-4 py-2 rounded-full border border-primary-container/20 shadow-sm">
                  {step}
                </span>
                {i < arr.length - 1 && (
                  <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_forward</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-cream-section py-24 px-container-margin-desktop">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-headline-lg text-headline-lg text-[#151314] dark:text-on-background mb-12 text-center">
            Built for Every Scenario
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: 'person', title: 'Personal Safety', desc: 'Empowering individuals walking alone at night or in unfamiliar areas. ARIA acts as an invisible companion, ready to intervene before a threat escalates.' },
              { icon: 'school', title: 'Campus/Institutions', desc: 'Integrating with campus security to provide students with discreet, immediate access to help, streamlining dispatch without the need for blue light boxes.' },
              { icon: 'business', title: 'Organizations', desc: 'Protecting lone workers and staff in high-risk environments. Ensure compliance and rapid response with automated incident reporting.' },
              { icon: 'local_police', title: 'Public Safety Ecosystems', desc: 'Feeding high-fidelity, contextual data directly into 911 dispatch centers to prioritize responses and improve situational awareness for first responders.' },
            ].map((uc) => (
              <div key={uc.title} className="bg-white dark:bg-surface-container p-8 rounded-lg border border-outline/10 shadow-sm flex items-start gap-6">
                <div className="bg-primary-container/10 p-4 rounded-full shrink-0">
                  <span className="material-symbols-outlined text-primary-container text-3xl" aria-hidden="true">{uc.icon}</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-2xl text-[#151314] dark:text-on-background mb-3">{uc.title}</h3>
                  <p className="font-glacial text-inverse-on-surface dark:text-on-surface-variant">{uc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust/Reassurance Strip */}
      <section className="bg-[#0C0A0B] py-6 px-container-margin-desktop text-center">
        <Link
          className="inline-flex items-center gap-2 text-cream hover:text-primary transition-colors duration-300 font-label-caps focus:outline-none focus:ring-2 focus:ring-primary rounded"
          to="/privacy-and-safety"
        >
          Read our Technical Overview
          <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_forward</span>
        </Link>
      </section>

      {/* Final CTA */}
      <section className="bg-surface-container-lowest py-24 px-container-margin-desktop text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-container/10 via-background to-background pointer-events-none" aria-hidden="true" />
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="font-headline-lg text-headline-lg text-cream mb-8">
            Help Us Build the Future of Emergency Response
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link
              to="/partner-with-us"
              className="bg-primary-container text-cream px-8 py-3 rounded font-label-caps hover:bg-burgundy-light transition-colors duration-300 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-primary"
            >
              Partner With Us
            </Link>
            <Link
              to="/partner-with-us"
              className="text-primary hover:text-cream transition-colors duration-300 font-label-caps border-b border-primary hover:border-cream pb-1 focus:outline-none focus:ring-2 focus:ring-primary rounded"
            >
              Contact the Team
            </Link>
          </div>
          {/* Share button */}
          <div className="mt-8">
            <button
              onClick={handleShare}
              title="Share this page"
              aria-label="Share ARIA How It Works page"
              className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors duration-300 font-label-caps text-sm focus:outline-none focus:ring-2 focus:ring-primary rounded px-2 py-1"
            >
              <span className="material-symbols-outlined text-base" aria-hidden="true">share</span>
              Share this page
            </button>
          </div>
        </div>
      </section>

      {/* Fix #13: Shared Footer */}
      <Footer />
    </div>
  );
};
