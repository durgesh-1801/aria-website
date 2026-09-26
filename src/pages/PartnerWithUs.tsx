import React, { useCallback } from 'react';

import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const PartnerWithUs: React.FC = () => {
  const scrollToContact = useCallback(() => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md">
      {/* Fix #12, #14: Shared Navbar with dynamic active state and partner CTA scroll behavior */}
      <Navbar onPartnerClick={scrollToContact} />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-24 px-container-margin-desktop max-w-[1280px] mx-auto text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-surface-container-low to-background -z-10 opacity-50 pointer-events-none" aria-hidden="true" />
          <div className="inline-block px-4 py-1 rounded-full bg-surface-container border border-surface-container-high mb-6">
            <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">PARTNER WITH US</span>
          </div>
          <h1 className="text-display-hero font-display-hero md:text-[56px] text-on-background mb-8 leading-tight">
            Let's Build Safer Response,<br className="hidden md:block" /> Together
          </h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant max-w-[650px] mx-auto leading-relaxed font-glacial">
            ARIA is at an early, experimental stage — and that's exactly when the right partners, mentors, and
            early collaborators make the biggest difference. Whether you're an institution, a potential pilot
            partner, a mentor, a contributor, or simply someone who believes in what we're building, we'd like
            to hear from you.
          </p>
        </section>

        {/* Partnership Grid */}
        <section className="py-stack-lg px-container-margin-desktop max-w-[1280px] mx-auto">
          <h2 className="text-headline-lg font-headline-lg text-center text-on-background mb-16">
            Who We're Looking to Connect With
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {[
              { icon: 'flight_takeoff', title: 'Pilot Partners', desc: 'Organizations willing to test early iterations in controlled environments. Help us refine practical application before broader rollout.' },
              { icon: 'account_balance', title: 'Institutions', desc: 'Academic, safety, or tech institutions interested in collaborative research or aligning frameworks with early response standards.' },
              { icon: 'psychology', title: 'Mentors', desc: 'Experienced professionals in AI safety, emergency response, or product scaling willing to offer strategic guidance.' },
              { icon: 'handshake', title: 'Contributors', desc: 'Developers, designers, or safety advocates who want to contribute their skills to an open or semi-open initiative.' },
              { icon: 'visibility', title: 'Early Users', desc: 'Individuals eager to provide feedback on usability, tone, and practical utility in high-stress simulation contexts.' },
            ].map((card, idx, arr) => (
              <div
                key={card.title}
                className={`bg-surface-container-low p-stack-md rounded-xl border border-surface-container-high hover:border-outline-variant transition-colors duration-300 group ${
                  idx === arr.length - 1 && arr.length % 3 !== 0 ? 'lg:col-span-1 md:col-span-2' : ''
                }`}
              >
                <span
                  className="material-symbols-outlined text-primary text-4xl mb-4 group-hover:scale-110 transition-transform"
                  style={{ fontVariationSettings: '"wght" 200' }}
                  aria-hidden="true"
                >
                  {card.icon}
                </span>
                <h3 className="text-headline-md font-headline-md text-on-background mb-2">{card.title}</h3>
                <p className="text-body-md font-body-md text-on-surface-variant font-glacial">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-surface-container-low border-y border-surface-container mt-16" id="contact">
          <div className="py-24 px-container-margin-desktop max-w-[1280px] mx-auto text-center">
            <h2 className="text-display-hero font-display-hero text-on-background mb-4">Get in Touch</h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant font-glacial mb-12">
              Reach out directly — we respond personally to every message.
            </p>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch max-w-4xl mx-auto">
              {/* Phone */}
              <a
                className="flex-1 bg-surface-container hover:bg-surface-container-high p-8 rounded-xl border border-outline-variant hover:border-primary transition-all duration-300 group flex flex-col items-center justify-center min-h-[200px] focus:outline-none focus:ring-2 focus:ring-primary"
                href="tel:+918765794481"
                aria-label="Call ARIA at +91 87657 94481"
              >
                <span
                  className="material-symbols-outlined text-primary text-5xl mb-4 group-hover:scale-110 transition-transform"
                  style={{ fontVariationSettings: '"wght" 300' }}
                  aria-hidden="true"
                >
                  call
                </span>
                <span className="text-headline-md font-headline-md text-on-background">+91 87657 94481</span>
              </a>
              {/* Email */}
              <a
                className="flex-1 bg-surface-container hover:bg-surface-container-high p-8 rounded-xl border border-outline-variant hover:border-primary transition-all duration-300 group flex flex-col items-center justify-center min-h-[200px] focus:outline-none focus:ring-2 focus:ring-primary"
                href="mailto:aria.safetytech@gmail.com"
                aria-label="Email ARIA at aria.safetytech@gmail.com"
              >
                <span
                  className="material-symbols-outlined text-primary text-5xl mb-4 group-hover:scale-110 transition-transform"
                  style={{ fontVariationSettings: '"wght" 300' }}
                  aria-hidden="true"
                >
                  mail
                </span>
                <span className="text-headline-md font-headline-md text-on-background truncate w-full px-4 text-center">
                  aria.safetytech@gmail.com
                </span>
              </a>
            </div>
            <p className="text-label-sm font-label-sm text-outline mt-8 font-glacial max-w-2xl mx-auto">
              Best reached via email for partnership and pilot inquiries; call for anything urgent or time-sensitive.
            </p>
          </div>
        </section>

        {/* Reach Out Info */}
        <section className="py-16 px-container-margin-desktop max-w-[800px] mx-auto text-center">
          <h3 className="text-headline-lg font-headline-lg text-on-background mb-4">Reaching Out?</h3>
          <p className="text-body-md font-body-md text-on-surface-variant font-glacial leading-relaxed">
            Let us know a bit about who you are and how you're hoping to be involved — pilot partnership,
            mentorship, contribution, or something else. It helps us respond with the right next step.
          </p>
        </section>

        {/* Closing Statement */}
        <section className="py-24 px-container-margin-desktop bg-surface-container-highest border-t border-surface-container-low text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-headline-lg font-headline-lg text-on-background leading-relaxed">
              Safety technology gets stronger with the{' '}
              <span className="text-primary font-bold">right people around it.</span>{' '}
              We'd like you to be one of them.
            </p>
          </div>
        </section>
      </main>

      {/* Fix #13: Shared Footer */}
      <Footer />
    </div>
  );
};
