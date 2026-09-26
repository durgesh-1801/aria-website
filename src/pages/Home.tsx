import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const Home: React.FC = () => {
  return (
    <div className="font-body-md antialiased overflow-x-hidden bg-[#0C0A0B] text-[#e7e1e2]">
      {/* Fix #12, #14: Shared Navbar with dynamic active state */}
      <Navbar />

      {/* 2. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center hero-pattern overflow-hidden px-container-margin-mobile md:px-container-margin-desktop py-stack-lg">
        <div
          className="absolute inset-0 opacity-20 bg-repeat pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM1YzFhMjQiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDM0djIwaDJ2LTIwaC0ydpt6bS0xOCAwVjU0aDJWMzRoLTJ6bTkgMHYyMGgyVjM0aC0yeiIvPjwvZz48L2c+PC9zdmc+\")",
          }}
        />
        <div className="max-w-7xl mx-auto w-full relative z-10 grid md:grid-cols-2 gap-gutter items-center">
          <div className="flex flex-col items-start gap-stack-md">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary-container bg-primary-container/20 text-primary font-label-caps text-label-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
              Working MVP — Pilot Development
            </div>
            <h1 className="font-display-hero text-display-hero md:text-[64px] md:leading-[72px] text-on-background">
              Intelligent Safety.<br />
              <span className="text-primary">Faster Response.</span>
            </h1>
            <p className="font-serif font-bold italic text-primary-container text-2xl mt-4">
              "No woman should ever have to ask for help. ARIA asks for her"
            </p>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              ARIA is an AI-powered real-time incident assistant designed to protect, empower, and support you
              during emergencies, bridging the gap between detection and response.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <Link
                to="/how-it-works"
                className="bg-primary-container hover:bg-inverse-primary text-on-surface px-8 py-3 rounded font-label-caps text-label-caps transition-colors duration-300 shadow-[0_0_20px_rgba(0,0,0,0.4)] focus:outline-none focus:ring-2 focus:ring-primary"
              >
                Explore ARIA
              </Link>
              <Link
                to="/partner-with-us"
                className="border border-outline-variant hover:border-primary text-on-background hover:text-primary px-8 py-3 rounded font-label-caps text-label-caps transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                Partner With Us
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[600px] flex items-center justify-center">
            <img
              alt="ARIA Shield Logo"
              className="w-2/3 h-auto object-contain drop-shadow-[0_0_40px_rgba(92,26,36,0.5)]"
              src="/images/logo/aria-shield.png"
              width="400"
              height="400"
            />
          </div>
        </div>
      </section>

      {/* 3. Problem Section */}
      <section className="bg-surface-container py-24 px-container-margin-mobile md:px-container-margin-desktop" id="problem">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background mb-4">
              Emergencies Move Fast. Response Often Doesn't.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
              Traditional systems struggle to keep pace with dynamic crisis situations, leading to critical delays.
            </p>
          </div>
          <div className="grid md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-7 grid sm:grid-cols-2 gap-4">
              <div className="glass-card p-6 rounded-lg">
                <span className="material-symbols-outlined text-primary text-3xl mb-4" aria-hidden="true">timer</span>
                <h3 className="font-headline-md text-headline-md text-on-background mb-2">Delayed Response</h3>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                  Every second counts, yet manual reporting and dispatch often add vital minutes to response times.
                </p>
              </div>
              <div className="glass-card p-6 rounded-lg">
                <span className="material-symbols-outlined text-primary text-3xl mb-4" aria-hidden="true">call_split</span>
                <h3 className="font-headline-md text-headline-md text-on-background mb-2">Fragmented Info</h3>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                  Responders often receive incomplete or scattered data, complicating the assessment process.
                </p>
              </div>
              <div className="glass-card p-6 rounded-lg sm:col-span-2">
                <span className="material-symbols-outlined text-primary text-3xl mb-4" aria-hidden="true">blind</span>
                <h3 className="font-headline-md text-headline-md text-on-background mb-2">Lack of Context</h3>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                  Without situational awareness, first responders enter situations blind, increasing risk for everyone involved.
                </p>
              </div>
            </div>
            <div className="md:col-span-5 h-full">
              <div className="glass-card p-6 rounded-lg h-full flex flex-col justify-center items-center">
                <img
                  alt="NCRB Crime Statistics Map of India"
                  className="w-full h-auto rounded opacity-80 mix-blend-screen"
                  src="/images/home-crime-map.png"
                  width="600"
                  height="450"
                />
                <p className="text-xs text-on-surface-variant mt-4 text-center">Source: NCRB Crime Statistics 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. What ARIA Does */}
      <section className="bg-surface py-24 px-container-margin-mobile md:px-container-margin-desktop" id="how-it-works">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background">
              What ARIA Does?
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              alt="ARIA five-stage workflow: Detect, Understand, Assess, Alert, Assist"
              className="w-full h-auto mb-8 filter brightness-75 contrast-125 hue-rotate-[320deg] max-w-6xl"
              src="/images/home-workflow.png"
              width="1200"
              height="400"
            />
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full max-w-5xl">
              <div className="text-center p-4">
                <h3 className="font-label-caps text-label-caps text-primary mb-2">Detect</h3>
                <p className="text-xs text-on-surface-variant">Continuous monitoring for anomalies.</p>
              </div>
              <div className="text-center p-4">
                <h3 className="font-label-caps text-label-caps text-[#dca3a9] mb-2">Understand</h3>
                <p className="text-xs text-on-surface-variant">AI contextualizes the event.</p>
              </div>
              <div className="text-center p-4">
                <h3 className="font-label-caps text-label-caps text-[#c0737d] mb-2">Assess</h3>
                <p className="text-xs text-on-surface-variant">Evaluating severity and risk.</p>
              </div>
              <div className="text-center p-4">
                <h3 className="font-label-caps text-label-caps text-[#95464e] mb-2">Alert</h3>
                <p className="text-xs text-on-surface-variant">Targeted notifications dispatched.</p>
              </div>
              <div className="text-center p-4 col-span-2 md:col-span-1">
                <h3 className="font-label-caps text-label-caps text-primary-container mb-2">Assist</h3>
                <p className="text-xs text-on-surface-variant">Guided response and coordination.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fix #13: Shared Footer */}
      <Footer />
    </div>
  );
};
