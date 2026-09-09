import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export const PartnerWithUs: React.FC = () => {
  const { toggleMobileMenu } = useApp();

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md">
      {/* Navigation Bar */}
      <header className="bg-background dark:bg-background border-b border-surface-container-low dark:border-surface-container-low docked full-width top-0 z-50">
        <div className="flex justify-between items-center w-full px-container-margin-desktop max-w-[1280px] mx-auto h-20">
          {/* Brand */}
          <Link className="text-headline-md font-headline-md font-bold text-on-background dark:text-on-background tracking-wider flex items-center" to="/">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmbv0ik3EdjGIf1KfULQY3Q22jUeMO5AaXWY9uhGntNOmXE2aFZ6whAovDppAvnvsssOb7KDyUbavNTm3uj0YJZW_68GU68WY7XroX8N-BOHoufWiIlnqyeTLrJ00EjphChEZnLzfVOpdnKn2PkHHL33hFgPr5qNNAKQSMLccdMSQvrSdDGa4K5c6VXXqeYLR__dxb3uFR5FkupvlP1zZiFPwA7bqyW5X9tTAm07be3ACv2xMvl8sDLtl3-MuSIDYB3w" 
              alt="ARIA Logo" 
              className="h-8 inline-block mr-2" 
            />
            ARIA
          </Link>
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-gutter">
            <Link className="text-label-caps font-label-caps text-on-surface-variant dark:text-on-surface-variant hover:text-primary transition-colors" to="/">Home</Link>
            <Link className="text-label-caps font-label-caps text-on-surface-variant dark:text-on-surface-variant hover:text-primary transition-colors" to="/how-it-works">How It Works</Link>
            <Link className="text-label-caps font-label-caps text-on-surface-variant dark:text-on-surface-variant hover:text-primary transition-colors" to="/privacy-and-safety">Privacy &amp; Safety</Link>
            <Link className="text-label-caps font-label-caps text-on-surface-variant dark:text-on-surface-variant hover:text-primary transition-colors" to="/trust-and-recognition">Trust &amp; Recognition</Link>
            <Link className="text-label-caps font-label-caps text-on-surface-variant dark:text-on-surface-variant hover:text-primary transition-colors" to="/about">About Us</Link>
          </nav>
          {/* Action */}
          <div className="flex items-center gap-4">
            <button 
              onClick={scrollToContact}
              className="bg-primary-container text-on-primary font-label-caps text-label-caps px-6 py-3 rounded scale-95 active:scale-90 transition-transform"
            >
              Partner With Us
            </button>
            {/* Mobile Menu Toggle */}
            <button 
              onClick={toggleMobileMenu} 
              aria-label="Open menu"
              className="md:hidden text-on-background p-1"
            >
              <span className="material-symbols-outlined text-3xl">menu</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-24 px-container-margin-desktop max-w-[1280px] mx-auto text-center relative overflow-hidden">
          {/* Subtle background effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-surface-container-low to-background -z-10 opacity-50 pointer-events-none"></div>
          <div className="inline-block px-4 py-1 rounded-full bg-surface-container border border-surface-container-high mb-6">
            <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">PARTNER WITH US</span>
          </div>
          <h1 className="text-display-hero font-display-hero md:text-[56px] text-on-background mb-8 leading-tight">
            Let's Build Safer Response,<br className="hidden md:block" /> Together
          </h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant max-w-[650px] mx-auto leading-relaxed font-glacial">
            ARIA is at an early, experimental stage — and that's exactly when the right partners, mentors, and early collaborators make the biggest difference. Whether you're an institution, a potential pilot partner, a mentor, a contributor, or simply someone who believes in what we're building, we'd like to hear from you.
          </p>
        </section>

        {/* Partnership Grid */}
        <section className="py-stack-lg px-container-margin-desktop max-w-[1280px] mx-auto">
          <h2 className="text-headline-lg font-headline-lg text-center text-on-background mb-16">
            Who We're Looking to Connect With
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {/* Card 1 */}
            <div className="bg-surface-container-low p-stack-md rounded-xl border border-surface-container-high hover:border-outline-variant transition-colors group">
              <span className="material-symbols-outlined text-primary text-4xl mb-4 group-hover:scale-110 transition-transform" style={{ fontVariationSettings: '"wght" 200' }}>flight_takeoff</span>
              <h3 className="text-headline-md font-headline-md text-on-background mb-2">Pilot Partners</h3>
              <p className="text-body-md font-body-md text-on-surface-variant font-glacial">
                Organizations willing to test early iterations in controlled environments. Help us refine practical application before broader rollout.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-surface-container-low p-stack-md rounded-xl border border-surface-container-high hover:border-outline-variant transition-colors group">
              <span className="material-symbols-outlined text-primary text-4xl mb-4 group-hover:scale-110 transition-transform" style={{ fontVariationSettings: '"wght" 200' }}>account_balance</span>
              <h3 className="text-headline-md font-headline-md text-on-background mb-2">Institutions</h3>
              <p className="text-body-md font-body-md text-on-surface-variant font-glacial">
                Academic, safety, or tech institutions interested in collaborative research or aligning frameworks with early response standards.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-surface-container-low p-stack-md rounded-xl border border-surface-container-high hover:border-outline-variant transition-colors group">
              <span className="material-symbols-outlined text-primary text-4xl mb-4 group-hover:scale-110 transition-transform" style={{ fontVariationSettings: '"wght" 200' }}>psychology</span>
              <h3 className="text-headline-md font-headline-md text-on-background mb-2">Mentors</h3>
              <p className="text-body-md font-body-md text-on-surface-variant font-glacial">
                Experienced professionals in AI safety, emergency response, or product scaling willing to offer strategic guidance.
              </p>
            </div>
            {/* Card 4 */}
            <div className="bg-surface-container-low p-stack-md rounded-xl border border-surface-container-high hover:border-outline-variant transition-colors group">
              <span className="material-symbols-outlined text-primary text-4xl mb-4 group-hover:scale-110 transition-transform" style={{ fontVariationSettings: '"wght" 200' }}>handshake</span>
              <h3 className="text-headline-md font-headline-md text-on-background mb-2">Contributors</h3>
              <p className="text-body-md font-body-md text-on-surface-variant font-glacial">
                Developers, designers, or safety advocates who want to contribute their skills to an open or semi-open initiative.
              </p>
            </div>
            {/* Card 5 */}
            <div className="bg-surface-container-low p-stack-md rounded-xl border border-surface-container-high hover:border-outline-variant transition-colors group lg:col-span-1 md:col-span-2">
              <span className="material-symbols-outlined text-primary text-4xl mb-4 group-hover:scale-110 transition-transform" style={{ fontVariationSettings: '"wght" 200' }}>visibility</span>
              <h3 className="text-headline-md font-headline-md text-on-background mb-2">Early Users</h3>
              <p className="text-body-md font-body-md text-on-surface-variant font-glacial">
                Individuals eager to provide feedback on usability, tone, and practical utility in high-stress simulation contexts.
              </p>
            </div>
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
                className="flex-1 bg-surface-container hover:bg-surface-container-high p-8 rounded-xl border border-outline-variant hover:border-primary transition-all group flex flex-col items-center justify-center min-h-[200px]" 
                href="tel:+918765794481"
              >
                <span className="material-symbols-outlined text-primary text-5xl mb-4 group-hover:scale-110 transition-transform" style={{ fontVariationSettings: '"wght" 300' }}>call</span>
                <span className="text-headline-md font-headline-md text-on-background">+91 87657 94481</span>
              </a>
              {/* Email */}
              <a 
                className="flex-1 bg-surface-container hover:bg-surface-container-high p-8 rounded-xl border border-outline-variant hover:border-primary transition-all group flex flex-col items-center justify-center min-h-[200px]" 
                href="mailto:aria.safetytech@gmail.com"
              >
                <span className="material-symbols-outlined text-primary text-5xl mb-4 group-hover:scale-110 transition-transform" style={{ fontVariationSettings: '"wght" 300' }}>mail</span>
                <span className="text-headline-md font-headline-md text-on-background truncate w-full px-4">aria.safetytech@gmail.com</span>
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
            Let us know a bit about who you are and how you're hoping to be involved — pilot partnership, mentorship, contribution, or something else. It helps us respond with the right next step.
          </p>
        </section>

        {/* Closing Statement */}
        <section className="py-24 px-container-margin-desktop bg-surface-container-highest border-t border-surface-container-low text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-headline-lg font-headline-lg text-on-background leading-relaxed">
              Safety technology gets stronger with the <span className="text-primary font-bold">right people around it.</span> We'd like you to be one of them.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-lowest dark:bg-surface-container-lowest border-t border-outline-variant full-width bottom mt-auto">
        <div className="w-full py-stack-lg px-container-margin-desktop flex flex-col md:flex-row justify-between items-center max-w-[1280px] mx-auto gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-headline-md font-headline-md font-bold text-on-surface dark:text-on-surface">ARIA</span>
            <p className="text-body-md font-body-md text-on-surface-variant">
              © 2026 ARIA AI Safety Platform. All rights reserved.
            </p>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end gap-6">
            <Link className="text-label-sm font-label-sm text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100" to="/privacy-and-safety">Privacy Policy</Link>
            <Link className="text-label-sm font-label-sm text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100" to="/privacy-and-safety">Terms of Service</Link>
            <Link className="text-label-sm font-label-sm text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100" to="/privacy-and-safety">Security Disclosure</Link>
            <Link className="text-label-sm font-label-sm text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100" to="/partner-with-us">Contact Us</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
};
