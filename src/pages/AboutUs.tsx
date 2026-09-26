import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const AboutUs: React.FC = () => {
  return (
    <div className="bg-background text-on-background font-body-lg min-h-screen flex flex-col selection:bg-primary-container selection:text-on-primary-container">
      {/* Fix #12, #14: Shared Navbar with dynamic active state */}
      <Navbar />

      <main className="flex-grow">
        {/* Page Header */}
        <section className="custom-cream-bg text-surface-container-lowest py-20 px-container-margin-mobile md:px-container-margin-desktop">
          <div className="max-w-4xl mx-auto space-y-stack-md text-center">
            <h1 className="font-display-hero text-display-hero md:text-5xl text-4xl mb-6">
              Building safety that doesn't wait for you to ask for help.
            </h1>
            <p className="font-body-lg text-body-lg md:text-xl text-lg text-surface-container-highest max-w-3xl mx-auto mb-4">
              ARIA exists to address a simple but important gap in personal safety: in a real emergency, a person
              may not always have the time, ability, or opportunity to manually press an SOS button.
            </p>
            <p className="font-body-lg text-body-lg md:text-xl text-lg text-surface-container-highest max-w-3xl mx-auto">
              We are building ARIA as an AI-powered personal safety platform that can identify potential emergency
              situations using signals such as voice, movement, and contextual information, and help initiate an
              appropriate response.
            </p>
          </div>
        </section>

        {/* Our Journey */}
        <section className="custom-near-black-bg py-24 px-container-margin-mobile md:px-container-margin-desktop border-y border-surface-variant relative overflow-hidden">
          {/* Ambient subtle highlight */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-primary-container opacity-5 blur-[100px] rounded-full pointer-events-none" aria-hidden="true" />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="mb-16 max-w-3xl">
              <h2 className="font-headline-lg text-headline-lg md:text-headline-lg text-headline-lg-mobile text-primary mb-6">
                Our Journey
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                ARIA started as an idea focused on making emergency assistance more accessible and responsive.
                From the initial concept, we progressed to building an MVP, participating in innovation programs
                and competitions, and validating the idea through practical development.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                We are currently in the experimental/MVP stage, working toward pilot deployment and further
                real-world validation.
              </p>
            </div>
            {/* Timeline */}
            <div className="relative pt-10 pb-4">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-surface-variant -translate-y-1/2 z-0" aria-hidden="true" />
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
                {/* Step 1 */}
                <div className="flex flex-row md:flex-col items-center md:items-start gap-4">
                  <div className="w-4 h-4 rounded-full bg-surface-variant shrink-0 relative md:ml-4">
                    <div className="hidden md:block absolute bottom-full left-1/2 -translate-x-1/2 w-px h-6 bg-surface-variant" />
                  </div>
                  <div className="flex-1 md:text-left">
                    <span className="font-label-caps text-label-caps text-on-surface-variant block mb-1 opacity-70">Phase 1</span>
                    <h3 className="font-body-lg text-body-lg text-inverse-surface font-medium">Idea</h3>
                  </div>
                </div>
                {/* Step 2 */}
                <div className="flex flex-row md:flex-col items-center md:items-start gap-4">
                  <div className="w-4 h-4 rounded-full bg-surface-variant shrink-0 relative md:ml-4">
                    <div className="hidden md:block absolute bottom-full left-1/2 -translate-x-1/2 w-px h-6 bg-surface-variant" />
                  </div>
                  <div className="flex-1 md:text-left">
                    <span className="font-label-caps text-label-caps text-on-surface-variant block mb-1 opacity-70">Phase 2</span>
                    <h3 className="font-body-lg text-body-lg text-inverse-surface font-medium">MVP Build</h3>
                  </div>
                </div>
                {/* Step 3 */}
                <div className="flex flex-row md:flex-col items-center md:items-start gap-4">
                  <div className="w-4 h-4 rounded-full bg-surface-variant shrink-0 relative md:ml-4">
                    <div className="hidden md:block absolute bottom-full left-1/2 -translate-x-1/2 w-px h-6 bg-surface-variant" />
                  </div>
                  <div className="flex-1 md:text-left">
                    <span className="font-label-caps text-label-caps text-on-surface-variant block mb-1 opacity-70">Phase 3</span>
                    <h3 className="font-body-lg text-body-lg text-inverse-surface font-medium">Innovation Programs &amp; Competitions</h3>
                  </div>
                </div>
                {/* Step 4 (Current) */}
                <div className="flex flex-row md:flex-col items-center md:items-start gap-4 relative">
                  <div className="absolute -inset-4 bg-primary-container/20 blur-xl rounded-full z-0 md:hidden" aria-hidden="true" />
                  <div className="w-6 h-6 rounded-full custom-burgundy-bg shrink-0 relative md:ml-3 z-10 flex items-center justify-center ring-4 ring-background">
                    <div className="w-2 h-2 bg-inverse-surface rounded-full" />
                    <div className="hidden md:block absolute bottom-full left-1/2 -translate-x-1/2 w-px h-5 custom-burgundy-bg" />
                  </div>
                  <div className="flex-1 md:text-left z-10 p-4 md:p-0 bg-surface-container-low md:bg-transparent rounded-lg border border-primary-container/30 md:border-none shadow-lg md:shadow-none">
                    <span className="font-label-caps text-label-caps text-primary block mb-1">Current Stage</span>
                    <h3 className="font-body-lg text-body-lg text-primary-fixed font-semibold">Pilot Deployment (in progress)</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Founders */}
        <section className="custom-cream-bg text-surface-container-lowest py-24 px-container-margin-mobile md:px-container-margin-desktop">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="font-headline-lg text-headline-lg md:text-headline-lg text-headline-lg-mobile text-surface-container-lowest mb-2">
              The Founders
            </h2>
            <p className="font-body-md text-body-md text-surface-container-highest mb-12">ARIA is being built by:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 mb-12">
              {/* Fix #5: Removed redundant inline style — Tailwind classes handle object-fit/dimensions */}
              {[
                { name: 'Durgesh Sharma', src: '/images/founders/durgesh-sharma.png' },
                { name: 'Anushka Singh', src: '/images/founders/anushka-singh.png' },
                { name: 'Khushi Rathore', src: '/images/founders/khushi-rathore.png' },
                { name: 'Kaustav Halder', src: '/images/founders/kaustav-halder.png' },
              ].map((founder) => (
                <div key={founder.name} className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 shadow-md">
                    <img
                      src={founder.src}
                      alt={`Photo of ${founder.name}, ARIA co-founder`}
                      className="w-full h-full object-cover"
                      width="96"
                      height="96"
                    />
                  </div>
                  <h3 className="font-body-lg text-body-lg font-semibold">{founder.name}</h3>
                </div>
              ))}
            </div>
            <p className="font-body-md text-body-md text-surface-container-highest max-w-2xl mx-auto italic">
              "We are a student-led founding team combining interests in technology, AI, product development,
              and entrepreneurship."
            </p>
          </div>
        </section>
      </main>

      {/* Fix #13: Shared Footer */}
      <Footer />
    </div>
  );
};
