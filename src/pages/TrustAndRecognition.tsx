import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const TrustAndRecognition: React.FC = () => {
  return (
    <div className="bg-background text-on-background antialiased min-h-screen flex flex-col font-body-md">
      {/* Fix #4, #12, #14: Shared Navbar — no double-background artifact, dynamic active state */}
      <Navbar />

      {/* Main Content Canvas */}
      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-cream py-stack-lg px-container-margin-desktop text-center">
          <div className="max-w-3xl mx-auto">
            <span className="font-label-caps text-label-caps text-burgundy tracking-widest uppercase mb-4 block">
              TRUST &amp; RECOGNITION
            </span>
            <h1 className="font-display-hero text-display-hero text-surface-container-lowest mb-6">
              Backed by Real Recognition, Real Results
            </h1>
            <p className="font-headline-md text-headline-md text-surface-variant font-normal leading-relaxed">
              ARIA has been validated through hackathons, competitions, and builder communities as it progresses
              from concept to pilot.
            </p>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-stack-lg px-container-margin-desktop max-w-[1280px] mx-auto" aria-labelledby="achievements-heading">
          <h2 id="achievements-heading" className="font-headline-lg text-headline-lg text-on-background mb-stack-md">
            Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Card 1 */}
            <div className="bg-surface-container-high rounded p-6 border border-outline-variant hover:border-primary transition-colors duration-300 flex flex-col h-full">
              <div className="bg-surface-container-low rounded h-32 flex items-center justify-center mb-6">
                <img
                  src="/images/recognition/hackhazards-logo.png"
                  alt="HACKHAZARDS '26 hackathon logo"
                  className="h-full w-auto object-contain"
                  width="200"
                  height="128"
                />
              </div>
              {/* Fix #6: Replaced <div> inside <h3> with valid inline <span> */}
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4">
                Global Rank 6–25&nbsp;— HACKHAZARDS '26
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">
                ARIA, built by team Kasukabe Defence Group, placed among the top 25 teams — the top 1% of
                builders — at HACKHAZARDS '26, an international hackathon hosted by the NAMESPACE community.
              </p>
              <div className="font-label-sm text-label-sm text-tertiary-fixed-dim uppercase tracking-wider mt-auto">
                Organized by NAMESPACE
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-surface-container-high rounded p-6 border border-outline-variant hover:border-primary transition-colors duration-300 flex flex-col h-full">
              <div className="bg-surface-container-low rounded h-32 flex items-center justify-center mb-6">
                <img
                  src="/images/recognition/code-capital-logo.png"
                  alt="Code Capital and Coffee national buildathon logo"
                  className="h-full w-auto object-contain"
                  width="200"
                  height="128"
                />
              </div>
              {/* Fix #6: Replaced <div> inside <h3> with valid inline markup */}
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4">
                Top 100 Nationally —<br />Code Capital and Coffee
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">
                ARIA ranked in the top 100 out of 3,000+ participants in a national buildathon hosted by Code
                Capital and Coffee, validating the technical architecture.
              </p>
              <div className="font-label-sm text-label-sm text-tertiary-fixed-dim uppercase tracking-wider mt-auto">
                National Buildathon
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-surface-container-high rounded p-6 border border-outline-variant hover:border-primary transition-colors duration-300 flex flex-col h-full">
              <div className="bg-surface-container-low rounded h-32 flex items-center justify-center mb-6">
                <img
                  src="/images/recognition/aic-muj-logo.png"
                  alt="AIC-MUJ (Atal Incubation Centre, Manipal University Jaipur) logo"
                  className="h-full w-auto object-contain"
                  width="200"
                  height="128"
                />
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4">
                Selected for Pre-Incubation AIC-MUJ
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">
                ARIA was selected for the Pre-Incubation Program at AIC-MUJ. The team is now working to test,
                refine, and scale the idea into a viable, real-world solution.
              </p>
              <div className="font-label-sm text-label-sm text-tertiary-fixed-dim uppercase tracking-wider mt-auto">
                Atal Incubation Centre, Manipal University Jaipur
              </div>
            </div>
          </div>

          {/* Gallery Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-base">
            {[
              { src: '/images/gallery/event-1.png', alt: 'ARIA team at a hackathon event' },
              { src: '/images/gallery/event-2.png', alt: 'ARIA team presenting their project' },
              { src: '/images/gallery/event-3.png', alt: 'ARIA recognition ceremony' },
            ].map((img) => (
              <div
                key={img.alt}
                className="bg-cover bg-center w-full h-64 rounded bg-surface-container border border-outline-variant"
                style={{ backgroundImage: `url("${img.src}")` }}
                role="img"
                aria-label={img.alt}
              />
            ))}
          </div>
        </section>

        {/* Inspiration Section */}
        <section className="py-stack-lg border-t border-outline-variant" aria-labelledby="why-building">
          <div className="px-container-margin-desktop max-w-[1280px] mx-auto text-center mb-16">
            <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase mb-4 block">
              IN THEIR OWN WORDS
            </span>
            <h2 id="why-building" className="font-display-hero text-display-hero text-on-background mb-4">
              Why We're Building ARIA
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant italic">
              The founders' own words on what drove them to start ARIA.
            </p>
          </div>

          {[
            {
              quote: "There's something deeply unsettling about how quickly a few seconds can change someone's entire life. We spend so much time preparing for what could happen, without ever thinking about what happens when preparation isn't enough. Those are the seconds that made ARIA feel worth building.",
              name: 'Anushka',
              imgSrc: '/images/founders/anushka-full.png',
              imgAlt: 'Anushka Singh, ARIA co-founder',
              bgClass: 'bg-surface-container',
              reversed: false,
            },
            {
              quote: "There's a moment when an ordinary situation can turn into an emergency and there's often no time to think twice. I wanted to build something that could understand those moments and help before it's too late. That idea became ARIA.",
              name: 'Durgesh',
              imgSrc: '/images/founders/durgesh-full.png',
              imgAlt: 'Durgesh Sharma, ARIA co-founder',
              bgClass: 'bg-surface-container-low',
              reversed: true,
            },
            {
              quote: "Women's safety is always a primary concern in India, and it was this very concern that sparked the idea of ARIA. We envisioned a technology-driven safety solution that could help women respond to emergencies faster, access timely assistance, and feel safer in their everyday lives.",
              name: 'Kaustav',
              imgSrc: '/images/founders/kaustav-full.png',
              imgAlt: 'Kaustav Halder, ARIA co-founder',
              bgClass: 'bg-surface-container',
              reversed: false,
            },
            {
              quote: "I built ARIA because personal safety should not depend on someone noticing a danger at the right moment or knowing what to do during a crisis. I wanted to create something that could actively understand situations, identify potential risks, and help people respond faster when it matters most.",
              name: 'Khushi',
              imgSrc: '/images/founders/khushi-full.png',
              imgAlt: 'Khushi Rathore, ARIA co-founder',
              bgClass: 'bg-surface-container-low',
              reversed: true,
            },
          ].map((row) => (
            <div key={row.name} className={`${row.bgClass} py-16 px-container-margin-desktop`}>
              <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center">
                <div
                  className={`bg-cover bg-center w-full h-80 md:h-[400px] rounded shadow-lg border border-outline-variant ${
                    row.reversed ? '' : 'order-2 md:order-1'
                  }`}
                  style={{ backgroundImage: `url("${row.imgSrc}")` }}
                  role="img"
                  aria-label={row.imgAlt}
                />
                <div className={`${row.reversed ? '' : 'order-1 md:order-2'} ${row.reversed ? 'pr-0 md:pr-8' : 'pl-0 md:pl-8'}`}>
                  <span className="text-6xl text-primary opacity-20 font-serif leading-none absolute -mt-6 -ml-4" aria-hidden="true">"</span>
                  <p className="font-headline-md text-headline-md text-on-surface mb-6 relative z-10">{row.quote}</p>
                  <p className="font-label-caps text-label-caps text-primary">— {row.name}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Fix #7: Removed <br /> spacer, replaced with pt-12 on container */}
          <div className="text-center pt-12 px-container-margin-desktop">
            <p className="font-headline-lg text-headline-lg text-on-surface">
              Four different reasons. One shared mission.
            </p>
          </div>
        </section>

        {/* Institutional Support */}
        <section className="py-stack-lg px-container-margin-desktop max-w-[1280px] mx-auto border-t border-outline-variant" aria-labelledby="supported-by">
          <h3 id="supported-by" className="font-label-caps text-label-caps text-on-surface-variant tracking-widest uppercase text-center mb-8">
            Supported By
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
            {[
              { src: '/images/recognition/partner-1.png', alt: 'AIC-MUJ — Atal Incubation Centre' },
              { src: '/images/recognition/partner-2.png', alt: 'Code Capital and Coffee' },
              { src: '/images/recognition/partner-3.png', alt: 'HACKHAZARDS / NAMESPACE' },
              { src: '/images/recognition/partner-4.png', alt: 'Supporting partner' },
            ].map((logo) => (
              <img
                key={logo.alt}
                alt={logo.alt}
                className="h-12 object-contain"
                src={logo.src}
                width="120"
                height="48"
              />
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-[#0C0A0B] py-24 px-container-margin-desktop text-center border-t border-outline-variant">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display-hero text-display-hero text-on-surface mb-6">Join the Mission</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
              We are actively seeking partners, mentors, and integration opportunities to scale ARIA's impact.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <Link
                to="/partner-with-us"
                className="bg-primary-container text-on-primary-container font-label-caps text-label-caps px-8 py-4 rounded hover:opacity-90 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                Partner With Us
              </Link>
              <Link
                to="/partner-with-us"
                className="font-label-caps text-label-caps text-primary border-b border-transparent hover:border-primary pb-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary rounded"
              >
                Contact the Team
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Fix #13: Shared Footer */}
      <Footer />
    </div>
  );
};
