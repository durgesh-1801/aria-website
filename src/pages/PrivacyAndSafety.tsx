import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const PrivacyAndSafety: React.FC = () => {
  return (
    <div className="bg-background text-on-background antialiased selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col font-body-md">
      {/* Fix #3, #12, #14: Shared Navbar (sticky full-width outer, max-w inner) with dynamic active state */}
      <Navbar />

      <main className="w-full flex-grow">
        {/* Header */}
        <header className="w-full bg-[#F8F5F2] text-surface pt-24 pb-20 px-container-margin-mobile md:px-container-margin-desktop relative overflow-hidden">
          <div className="max-w-7xl relative z-10">
            <p className="text-primary-container font-label-caps text-label-caps uppercase tracking-[0.2em] mb-4">
              PRIVACY &amp; SAFETY
            </p>
            <h1 className="font-display-hero text-display-hero text-surface-dim mb-8 max-w-4xl tracking-tight leading-tight">
              Built for safety.<br />Designed with privacy in mind.
            </h1>
            <p className="font-body-lg text-body-lg text-surface-variant max-w-[700px] leading-relaxed opacity-90">
              ARIA is an AI-powered personal safety platform designed to detect potential emergencies when a user
              may not be able to manually trigger an SOS. We believe safety technology should be effective
              without unnecessarily compromising user privacy.
            </p>
          </div>
          <img
            alt=""
            aria-hidden="true"
            className="absolute inset-0 m-auto w-[800px] h-[800px] object-contain opacity-5 pointer-events-none z-0"
            src="/images/privacy-decorative.png"
            width="800"
            height="800"
          />
        </header>

        {/* Main Content Area */}
        <div className="max-w-7xl px-container-margin-mobile md:px-container-margin-desktop py-16 space-y-24 mx-auto">
          {/* What ARIA May Process */}
          <section className="max-w-4xl" aria-labelledby="what-aria-processes">
            <h2 id="what-aria-processes" className="font-headline-lg text-headline-lg text-on-surface mb-6 font-semibold">
              What ARIA May Process
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
              Depending on the features enabled and permissions granted, ARIA may process:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-8">
              {[
                { icon: 'graphic_eq', title: 'Voice/audio signals', desc: 'Analyzed locally for trigger phrases or distress sounds.' },
                { icon: 'sensors', title: 'Accelerometer and gyroscope data', desc: 'To detect sudden impacts or abnormal movement patterns.' },
                { icon: 'location_on', title: 'Location information', desc: 'Used solely to dispatch assistance when an emergency is confirmed.' },
                { icon: 'contact_emergency', title: 'Account and emergency-contact information', desc: 'To notify designated trusted contacts during an incident.' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="p-2 rounded bg-surface-container-high text-primary border border-outline-variant/30 mt-1">
                    <span className="material-symbols-outlined text-[20px]" aria-hidden="true">{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-label-caps text-label-caps text-on-surface mb-1">{item.title}</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="font-label-sm text-label-sm text-outline italic">
              Note: ARIA operates on a strict data-minimization principle, only processing what is absolutely
              necessary for threat detection.
            </p>
          </section>
        </div>

        {/* How We Handle Data (Full Width Band) */}
        <section className="w-full bg-[#1A1718] border-y border-surface-container-high py-20 px-container-margin-mobile md:px-container-margin-desktop relative" aria-labelledby="how-we-handle-data">
          <div className="absolute inset-0 bg-primary-container/5 pointer-events-none" aria-hidden="true" />
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 id="how-we-handle-data" className="font-headline-lg text-headline-lg text-on-surface mb-6 font-semibold">
              How We Handle Data
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-10 leading-relaxed">
              ARIA is being designed with privacy-first principles, including:
            </p>
            <ul className="space-y-6 mb-10">
              {[
                'Secure communication channels for data transmission.',
                'Restricted internal access controls to user data.',
                'Minimal retention periods for sensitive sensor data.',
                'Appropriate authentication and authorization mechanisms.',
                'Anonymized or aggregated data processing where feasible for model improvement.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="material-symbols-outlined filled text-primary mt-1" aria-hidden="true">check_circle</span>
                  <span className="font-body-md text-body-md text-on-surface">{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              ARIA may utilize specialized third-party services (such as cloud infrastructure or emergency dispatch
              partners) to facilitate core functionalities. These partners are strictly vetted to ensure compliance
              with our stringent privacy standards.
            </p>
          </div>
        </section>

        {/* More Content */}
        <div className="max-w-7xl px-container-margin-mobile md:px-container-margin-desktop py-20 space-y-24 mx-auto">
          {/* User Control */}
          <section className="max-w-4xl grid grid-cols-1 lg:grid-cols-12 gap-12" aria-labelledby="user-control">
            <div className="lg:col-span-8">
              <h2 id="user-control" className="font-headline-lg text-headline-lg text-on-surface mb-6 font-semibold">
                User Control
              </h2>
              <div className="space-y-6 text-on-surface-variant font-body-md text-body-md leading-relaxed">
                <p>
                  We fundamentally believe that safety tools should empower users, not monitor them. ARIA operates
                  strictly based on explicit user permissions. You maintain full control over which sensors are
                  active and when the application is monitoring for distress signals.
                </p>
                <p>
                  Within the application settings, users can granularly toggle permissions for location tracking,
                  microphone access, and motion sensors. Disabling these permissions may limit ARIA's ability to
                  automatically detect emergencies, placing the reliance back on manual SOS triggers.
                </p>
              </div>
            </div>
            <div className="lg:col-span-4 flex items-center justify-center lg:justify-end">
              <div className="flex gap-8 p-10 rounded-xl bg-surface-container-low border border-surface-container-highest shadow-sm w-full justify-center" aria-label="Sensor permissions: microphone, location, vibration, notifications">
                {['mic', 'location_on', 'vibration', 'notifications_active'].map((icon) => (
                  <span key={icon} className="material-symbols-outlined text-primary text-4xl" aria-hidden="true">{icon}</span>
                ))}
              </div>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="w-full bg-primary-container text-[#F8F5F2] rounded-xl p-8 md:p-12 shadow-2xl relative overflow-hidden" aria-labelledby="disclaimer">
            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined filled text-primary" aria-hidden="true">warning</span>
                <h2 id="disclaimer" className="font-headline-lg text-headline-lg md:text-headline-lg font-bold">
                  ARIA Does Not Replace Emergency Services
                </h2>
              </div>
              <p className="font-body-lg text-body-lg text-[#F8F5F2]/90 leading-relaxed font-light">
                ARIA is an assistance layer, not a replacement for emergency responders. ARIA cannot guarantee
                that every emergency will be detected or that an emergency response will always be successful.
                Users should continue to rely on official emergency services and established safety procedures
                whenever necessary.
              </p>
            </div>
          </section>
        </div>

        {/* Principle Statement */}
        <section className="w-full bg-[#F8F5F2] text-surface py-24 px-container-margin-mobile md:px-container-margin-desktop text-center border-t border-outline/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display-hero text-headline-lg md:text-display-hero font-bold text-surface-dim mb-8 leading-tight tracking-tight">
              Our principle:{' '}
              <span className="text-primary-container">Collect less.</span>{' '}
              <span className="text-primary-container">Protect better.</span>{' '}
              Give users control.
            </h2>
            <Link
              className="inline-flex items-center gap-2 font-label-caps text-label-caps text-surface-variant hover:text-primary-container transition-colors duration-300 uppercase tracking-widest border-b border-surface-variant pb-1 hover:border-primary-container focus:outline-none focus:ring-2 focus:ring-primary rounded"
              to="/how-it-works"
            >
              Read our full Technical Documentation
              <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_forward</span>
            </Link>
          </div>
        </section>
      </main>

      {/* Fix #13: Shared Footer */}
      <Footer />
    </div>
  );
};
