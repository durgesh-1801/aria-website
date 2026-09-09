import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export const PrivacyAndSafety: React.FC = () => {
  const { toggleMobileMenu } = useApp();

  return (
    <div className="bg-background text-on-background antialiased selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col font-body-md">
      {/* TopNavBar */}
      <nav aria-label="Main Navigation" className="bg-surface dark:bg-surface text-primary dark:text-primary docked full-width top-0 sticky z-50 flex justify-between items-center w-full px-container-margin-desktop max-w-7xl mx-auto h-20 shadow-sm border-b border-surface-container-highest transition-colors duration-200">
        <div className="flex items-center gap-4">
          <Link className="font-headline-md text-headline-md font-bold tracking-wider flex items-center hover:opacity-80 transition-opacity text-white" to="/">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP9WfcdTcSsBgqk3hwZruYFpxtccRca88wsg0H6-3qN1JeuepxBNCxJD4w1ffj8gX0-yqAb_TMlnkanINr9dDHj5bB_ZbTnm7Cn66IqLPOrNunBm3Rhzb3tRDWMqYeFfIjTWOApzeDX0KPmnDtgytYgApfY2nrOX_SwBMmlnMIcEu1JsK4zGiexmN0lSa0orH7bNB7Iv244S9FLAcAHBM03FmQgRou0krqUh2MqCYpM_6n1s2b4lTdYN4iv-iN_LDFag" 
              alt="ARIA Logo" 
              className="w-8 h-8 mr-2 object-contain" 
            />
            ARIA
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link className="font-medium font-label-caps text-label-caps hover:text-primary transition-colors duration-200 uppercase tracking-wider text-white" to="/">Home</Link>
          <Link className="font-medium font-label-caps text-label-caps hover:text-primary transition-colors duration-200 uppercase tracking-wider text-white" to="/how-it-works">How It Works</Link>
          <Link aria-current="page" className="text-primary dark:text-primary font-bold border-b-2 border-primary pb-1 font-label-caps text-label-caps uppercase tracking-wider opacity-80 transition-opacity" to="/privacy-and-safety">Privacy &amp; Safety</Link>
          <Link className="font-medium font-label-caps text-label-caps hover:text-primary transition-colors duration-200 uppercase tracking-wider text-white" to="/trust-and-recognition">Trust &amp; Recognition</Link>
          <Link className="font-medium font-label-caps text-label-caps hover:text-primary transition-colors duration-200 uppercase tracking-wider text-white" to="/about">About Us</Link>
        </div>
        <div className="hidden md:flex items-center">
          <Link className="bg-primary-container text-[#F8F5F2] font-label-caps text-label-caps px-4 py-2 rounded uppercase tracking-wider hover:bg-secondary-container transition-colors duration-200 border border-transparent" to="/partner-with-us">
            Partner With Us
          </Link>
        </div>
        <button 
          onClick={toggleMobileMenu} 
          aria-label="Open menu" 
          className="md:hidden text-on-surface p-2"
        >
          <span className="material-symbols-outlined" data-icon="menu">menu</span>
        </button>
      </nav>

      <main className="w-full flex-grow">
        {/* Header */}
        <header className="w-full bg-[#F8F5F2] text-surface pt-24 pb-20 px-container-margin-mobile md:px-container-margin-desktop relative overflow-hidden">
          <div className="max-w-7xl relative z-10">
            <p className="text-primary-container font-label-caps text-label-caps uppercase tracking-[0.2em] mb-4">PRIVACY &amp; SAFETY</p>
            <h1 className="font-display-hero text-display-hero text-surface-dim mb-8 max-w-4xl tracking-tight leading-tight">Built for safety.<br />Designed with privacy in mind.</h1>
            <p className="font-body-lg text-body-lg text-surface-variant max-w-[700px] leading-relaxed opacity-90">
              ARIA is an AI-powered personal safety platform designed to detect potential emergencies when a user may not be able to manually trigger an SOS. We believe safety technology should be effective without unnecessarily compromising user privacy.
            </p>
          </div>
          <img 
            alt="ARIA decorative accent" 
            className="absolute inset-0 m-auto w-[800px] h-[800px] object-contain opacity-5 pointer-events-none z-0" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzMCy_MPtJXlvJxM63dGzZCA-KFuJww2tGAknujjUYwCPqpNKZQGGwwmBEH-557lBr0UgIhigSJU-Rn0I04kQYiyWRoPoRZxwrlIYQHFdL3nitQh1t-3sdcdzi0xg24RnpTF9JfacJrX53vMkYtpJQXmPoUlFvRYt6N0Vw5TvhjinIhrMWvM6w0g-oPgF7DysCTZGVYxH7EPirvHuT9g8ycdPXnopqgsfKCXaDzTHF5pOyz7gya2PbFiYXJyF5I-l_ew" 
          />
        </header>

        {/* Main Content Area */}
        <div className="max-w-7xl px-container-margin-mobile md:px-container-margin-desktop py-16 space-y-24 mx-auto">
          {/* What ARIA May Process */}
          <section className="max-w-4xl">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6 font-semibold">What ARIA May Process</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
              Depending on the features enabled and permissions granted, ARIA may process:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded bg-surface-container-high text-primary border border-outline-variant/30 mt-1">
                  <span className="material-symbols-outlined text-[20px]" data-icon="graphic_eq">graphic_eq</span>
                </div>
                <div>
                  <h3 className="font-label-caps text-label-caps text-on-surface mb-1">Voice/audio signals</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant text-sm">Analyzed locally for trigger phrases or distress sounds.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 rounded bg-surface-container-high text-primary border border-outline-variant/30 mt-1">
                  <span className="material-symbols-outlined text-[20px]" data-icon="sensors">sensors</span>
                </div>
                <div>
                  <h3 className="font-label-caps text-label-caps text-on-surface mb-1">Accelerometer and gyroscope data</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant text-sm">To detect sudden impacts or abnormal movement patterns.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 rounded bg-surface-container-high text-primary border border-outline-variant/30 mt-1">
                  <span className="material-symbols-outlined text-[20px]" data-icon="location_on">location_on</span>
                </div>
                <div>
                  <h3 className="font-label-caps text-label-caps text-on-surface mb-1">Location information</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant text-sm">Used solely to dispatch assistance when an emergency is confirmed.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 rounded bg-surface-container-high text-primary border border-outline-variant/30 mt-1">
                  <span className="material-symbols-outlined text-[20px]" data-icon="contact_emergency">contact_emergency</span>
                </div>
                <div>
                  <h3 className="font-label-caps text-label-caps text-on-surface mb-1">Account and emergency-contact information</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant text-sm">To notify designated trusted contacts during an incident.</p>
                </div>
              </div>
            </div>
            <p className="font-label-sm text-label-sm text-outline italic">
              Note: ARIA operates on a strict data-minimization principle, only processing what is absolutely necessary for threat detection.
            </p>
          </section>
        </div>

        {/* How We Handle Data (Full Width Band) */}
        <section className="w-full bg-[#1A1718] border-y border-surface-container-high py-20 px-container-margin-mobile md:px-container-margin-desktop relative">
          <div className="absolute inset-0 bg-primary-container/5 pointer-events-none"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6 font-semibold">How We Handle Data</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-10 leading-relaxed">
              ARIA is being designed with privacy-first principles, including:
            </p>
            <ul className="space-y-6 mb-10">
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined filled text-primary mt-1" data-icon="check_circle">check_circle</span>
                <span className="font-body-md text-body-md text-on-surface">Secure communication channels for data transmission.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined filled text-primary mt-1" data-icon="check_circle">check_circle</span>
                <span className="font-body-md text-body-md text-on-surface">Restricted internal access controls to user data.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined filled text-primary mt-1" data-icon="check_circle">check_circle</span>
                <span className="font-body-md text-body-md text-on-surface">Minimal retention periods for sensitive sensor data.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined filled text-primary mt-1" data-icon="check_circle">check_circle</span>
                <span className="font-body-md text-body-md text-on-surface">Appropriate authentication and authorization mechanisms.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined filled text-primary mt-1" data-icon="check_circle">check_circle</span>
                <span className="font-body-md text-body-md text-on-surface">Anonymized or aggregated data processing where feasible for model improvement.</span>
              </li>
            </ul>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              ARIA may utilize specialized third-party services (such as cloud infrastructure or emergency dispatch partners) to facilitate core functionalities. These partners are strictly vetted to ensure compliance with our stringent privacy standards.
            </p>
          </div>
        </section>

        {/* More Content */}
        <div className="max-w-7xl px-container-margin-mobile md:px-container-margin-desktop py-20 space-y-24 mx-auto">
          {/* User Control */}
          <section className="max-w-4xl grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6 font-semibold">User Control</h2>
              <div className="space-y-6 text-on-surface-variant font-body-md text-body-md leading-relaxed">
                <p>
                  We fundamentally believe that safety tools should empower users, not monitor them. ARIA operates strictly based on explicit user permissions. You maintain full control over which sensors are active and when the application is monitoring for distress signals.
                </p>
                <p>
                  Within the application settings, users can granularly toggle permissions for location tracking, microphone access, and motion sensors. Disabling these permissions may limit ARIA's ability to automatically detect emergencies, placing the reliance back on manual SOS triggers.
                </p>
              </div>
            </div>
            <div className="lg:col-span-4 flex items-center justify-center lg:justify-end">
              <div className="flex gap-8 p-10 rounded-xl bg-surface-container-low border border-surface-container-highest shadow-sm w-full justify-center">
                <span className="material-symbols-outlined text-primary text-4xl" data-icon="mic">mic</span>
                <span className="material-symbols-outlined text-primary text-4xl" data-icon="location_on">location_on</span>
                <span className="material-symbols-outlined text-primary text-4xl" data-icon="vibration">vibration</span>
                <span className="material-symbols-outlined text-primary text-4xl" data-icon="notifications_active">notifications_active</span>
              </div>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="w-full bg-primary-container text-[#F8F5F2] rounded-xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined filled text-primary" data-icon="warning">warning</span>
                <h2 className="font-headline-lg text-headline-lg md:text-headline-lg font-bold">ARIA Does Not Replace Emergency Services</h2>
              </div>
              <p className="font-body-lg text-body-lg text-[#F8F5F2]/90 leading-relaxed font-light">
                ARIA is an assistance layer, not a replacement for emergency responders. ARIA cannot guarantee that every emergency will be detected or that an emergency response will always be successful. Users should continue to rely on official emergency services and established safety procedures whenever necessary.
              </p>
            </div>
          </section>
        </div>

        {/* Principle Statement */}
        <section className="w-full bg-[#F8F5F2] text-surface py-24 px-container-margin-mobile md:px-container-margin-desktop text-center border-t border-outline/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display-hero text-headline-lg md:text-display-hero font-bold text-surface-dim mb-8 leading-tight tracking-tight">
              Our principle: <span className="text-primary-container">Collect less.</span> <span className="text-primary-container">Protect better.</span> Give users control.
            </h2>
            <Link 
              className="inline-flex items-center gap-2 font-label-caps text-label-caps text-surface-variant hover:text-primary-container transition-colors uppercase tracking-widest border-b border-surface-variant pb-1 hover:border-primary-container" 
              to="/how-it-works"
            >
              Read our full Technical Documentation
              <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-lowest dark:bg-surface-container-lowest border-t border-surface-container-low dark:border-surface-container-low py-stack-lg px-container-margin-mobile md:px-container-margin-desktop full-width">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex flex-col gap-2">
            <span className="font-headline-md text-headline-md font-bold text-primary dark:text-primary tracking-wider">ARIA</span>
            <span className="text-on-surface-variant text-sm font-body-md text-body-md opacity-80">© 2026 ARIA Safety Intelligence. All rights reserved.</span>
          </div>
          <nav aria-label="Footer Navigation" className="flex flex-wrap gap-x-8 gap-y-4">
            <Link className="text-on-surface-variant dark:text-on-surface-variant font-label-caps text-label-caps uppercase tracking-wider hover:text-secondary-container transition-colors duration-200" to="/">Home</Link>
            <Link className="text-on-surface-variant dark:text-on-surface-variant font-label-caps text-label-caps uppercase tracking-wider hover:text-secondary-container transition-colors duration-200" to="/how-it-works">How It Works</Link>
            <Link className="text-on-surface dark:text-on-surface font-label-caps text-label-caps uppercase tracking-wider font-bold" to="/privacy-and-safety">Privacy &amp; Safety</Link>
            <Link className="text-on-surface-variant dark:text-on-surface-variant font-label-caps text-label-caps uppercase tracking-wider hover:text-secondary-container transition-colors duration-200" to="/partner-with-us">Contact</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
};
