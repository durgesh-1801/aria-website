import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export const Home: React.FC = () => {
  const { toggleMobileMenu } = useApp();

  return (
    <div className="font-body-md antialiased overflow-x-hidden pt-[72px] bg-[#0C0A0B] text-[#e7e1e2]">
      {/* 1. TopNavBar */}
      <nav className="bg-background/90 dark:bg-background/95 backdrop-blur-md fixed top-0 w-full z-50 border-b border-outline-variant/30 shadow-sm dark:shadow-none">
        <div className="flex justify-between items-center w-full px-6 md:px-10 py-4 max-w-7xl mx-auto">
          <Link className="flex items-center gap-2" to="/">
            <img 
              alt="ARIA Logo" 
              className="w-auto h-12" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0KKJosaPcktp3Oe5CLnskbTjJeXLODCMV4HtcppmzKvMrchrQ5UBrscq9UlX2xl1QgkJhh_jXPGSMdAb6hDRhx1wHw1YRrVwnzDGwLOyzVH2rLxVW8IokHqboeG0YcXBvyz9Sy8Io3rE4vRLHDsSh3E0_q65C1ffvRB-aL233syd7sb-dnQGPuf1cWacp3o7k6lrLeo7vwW5aYJ9nkf1qolS6YJxs_RGy7aa0Ob1c1V07a0Q63rWEggW3jyCTanLhNg" 
            />
            <span className="text-headline-md font-headline-md font-bold tracking-widest text-white">ARIA</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link className="text-primary dark:text-primary border-b-2 border-primary pb-1 text-label-caps font-label-caps hover:opacity-90 transition-all duration-300" to="/">Home</Link>
            <Link className="text-white hover:text-primary transition-colors text-label-caps font-label-caps hover:opacity-90 transition-all duration-300" to="/how-it-works">How It Works.</Link>
            <Link className="text-white hover:text-primary transition-colors text-label-caps font-label-caps hover:opacity-90 transition-all duration-300" to="/privacy-and-safety">Privacy &amp; Safety</Link>
            <Link className="text-white hover:text-primary transition-colors text-label-caps font-label-caps hover:opacity-90 transition-all duration-300" to="/trust-and-recognition">Trust &amp; Recognition</Link>
            <Link className="text-white hover:text-primary transition-colors text-label-caps font-label-caps hover:opacity-90 transition-all duration-300" to="/about">About Us</Link>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Link to="/how-it-works" className="text-white hover:text-primary transition-colors text-label-caps font-label-caps hover:opacity-90 transition-all duration-300">Explore ARIA</Link>
            <Link to="/partner-with-us" className="bg-primary-container text-on-surface px-6 py-2 rounded font-label-caps text-label-caps hover:opacity-90 transition-all duration-300">Partner With Us</Link>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={toggleMobileMenu} 
            aria-label="Open Menu" 
            className="md:hidden text-white focus:outline-none p-1"
          >
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center hero-pattern overflow-hidden px-container-margin-mobile md:px-container-margin-desktop py-stack-lg">
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM1YzFhMjQiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDM0djIwaDJ2LTIwaC0ydpt6bS0xOCAwVjU0aDJWMzRoLTJ6bTkgMHYyMGgyVjM0aC0yeiIvPjwvZz48L2c+PC9zdmc+')] bg-repeat pointer-events-none"></div>
        <div className="max-w-7xl mx-auto w-full relative z-10 grid md:grid-cols-2 gap-gutter items-center">
          <div className="flex flex-col items-start gap-stack-md">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary-container bg-primary-container/20 text-primary font-label-caps text-label-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
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
              ARIA is an AI-powered real-time incident assistant designed to protect, empower, and support you during emergencies, bridging the gap between detection and response.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <Link 
                to="/how-it-works" 
                className="bg-primary-container hover:bg-inverse-primary text-on-surface px-8 py-3 rounded font-label-caps text-label-caps transition-all shadow-[0_0_20px_rgba(0,0,0,0.4)]"
              >
                Explore ARIA
              </Link>
              <Link 
                to="/partner-with-us" 
                className="border border-outline-variant hover:border-primary text-on-background hover:text-primary px-8 py-3 rounded font-label-caps text-label-caps transition-all"
              >
                Partner With Us
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[600px] flex items-center justify-center">
            <img 
              alt="ARIA Shield Logo" 
              className="w-2/3 h-auto object-contain drop-shadow-[0_0_40px_rgba(92,26,36,0.5)]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUrJgncmlq1VzWy_fDsGTaj_eNqvbGOb5kCuiihPiigEA5o-JLXG_L_Xyo7yYvs8CdnAu9jmD3VA6njIp-6gMt-oRZq62GrnEzeI99jWgqYNQHJrYwJUzYVs0KiPLRBv-_HSvEI8DGf_Kj6grskDPIFWGxtzzy_SGkFYwSVRbRl51vXGNKD7gd8Rux6BrkevuG99BayQLSAXaHKcaB1upxKn8Gz9RWQ5_Xjmm7Lmwg2Y92m9Xq74a5yCsC1Wx4xLooDg" 
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
                <span className="material-symbols-outlined text-primary text-3xl mb-4" data-icon="timer">timer</span>
                <h3 className="font-headline-md text-headline-md text-on-background mb-2">Delayed Response</h3>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">Every second counts, yet manual reporting and dispatch often add vital minutes to response times.</p>
              </div>
              <div className="glass-card p-6 rounded-lg">
                <span className="material-symbols-outlined text-primary text-3xl mb-4" data-icon="call_split">call_split</span>
                <h3 className="font-headline-md text-headline-md text-on-background mb-2">Fragmented Info</h3>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">Responders often receive incomplete or scattered data, complicating the assessment process.</p>
              </div>
              <div className="glass-card p-6 rounded-lg sm:col-span-2">
                <span className="material-symbols-outlined text-primary text-3xl mb-4" data-icon="blind">blind</span>
                <h3 className="font-headline-md text-headline-md text-on-background mb-2">Lack of Context</h3>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">Without situational awareness, first responders enter situations blind, increasing risk for everyone involved.</p>
              </div>
            </div>
            <div className="md:col-span-5 h-full">
              <div className="glass-card p-6 rounded-lg h-full flex flex-col justify-center items-center">
                <img 
                  alt="NCRB Crime Statistics Map" 
                  className="w-full h-auto rounded opacity-80 mix-blend-screen" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXg1_rwYcEFHEDpz-f6UMUODqAIh251-czljeUeT7NT935phoxU17NK18j0w4c-Z03aYX28ej4wr5WMqbRVnX9kaWLlQ_X3WbwulL4QcAZgpYdGc-fbUs4ldK3eJP_MhLSI345PJbKgcBj-YXsc99hd22XLWtOrisCDJ_H2GXQFrZEKL5WyNK64h6yyY3jtAI56SX7r8q-QnEMqvN7EL7rjcXJYKIqPOj2BAvuU3n76ddbqtG2DKgqVnRxD7iwJHCHEg" 
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
              alt="ARIA Workflow Chain" 
              className="w-full h-auto mb-8 filter brightness-75 contrast-125 hue-rotate-[320deg] max-w-6xl" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIQ3jxjp7rWMxDgPModesipuvbU4IKv4SWUjCqd4_xhlIHQBbvBrU9PjT2iPyjXNm3v3-8HXJsVMohJYzTkFLVemIzbITYW1hiA_Dqi2Er6ReRFQ28jhnVcpIntQWI7RGERh_hox8Oz0LwjarEagvVvZ1a2882r8ts_fRxRlOYj4boI_D6cTPDxsrTmnACkmOT_deRTeHmsJszy_8CeRWrOAZlpD34KnKd6x7QoEJMP3cY-Y08Irp3xAsvOU_wqVpu3A" 
            />
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full max-w-5xl">
              <div className="text-center p-4">
                <h4 className="font-label-caps text-label-caps text-primary mb-2">Detect</h4>
                <p className="text-xs text-on-surface-variant">Continuous monitoring for anomalies.</p>
              </div>
              <div className="text-center p-4">
                <h4 className="font-label-caps text-label-caps text-[#dca3a9] mb-2">Understand</h4>
                <p className="text-xs text-on-surface-variant">AI contextualizes the event.</p>
              </div>
              <div className="text-center p-4">
                <h4 className="font-label-caps text-label-caps text-[#c0737d] mb-2">Assess</h4>
                <p className="text-xs text-on-surface-variant">Evaluating severity and risk.</p>
              </div>
              <div className="text-center p-4">
                <h4 className="font-label-caps text-label-caps text-[#95464e] mb-2">Alert</h4>
                <p className="text-xs text-on-surface-variant">Targeted notifications dispatched.</p>
              </div>
              <div className="text-center p-4 col-span-2 md:col-span-1">
                <h4 className="font-label-caps text-label-caps text-primary-container mb-2">Assist</h4>
                <p className="text-xs text-on-surface-variant">Guided response and coordination.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Footer */}
      <footer className="bg-surface-container-lowest dark:bg-surface-container-lowest w-full py-12 border-t border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="flex flex-col gap-4">
            <span className="text-headline-md font-headline-md font-bold text-on-background dark:text-on-background">ARIA</span>
            <p className="text-body-md font-body-md text-on-surface-variant">© 2026 ARIA Safety Platform. Empowering Security through AI.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:gap-16">
            <div className="flex flex-col gap-2">
              <Link className="text-label-caps font-label-caps text-on-surface-variant hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary" to="/">Product</Link>
              <Link className="text-label-caps font-label-caps text-on-surface-variant hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary" to="/how-it-works">How It Works</Link>
              <Link className="text-label-caps font-label-caps text-on-surface-variant hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary" to="/how-it-works">Why ARIA</Link>
            </div>
            <div className="flex flex-col gap-2">
              <Link className="text-label-caps font-label-caps text-on-surface-variant hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary" to="/partner-with-us">Contact</Link>
              <Link className="text-label-caps font-label-caps text-on-surface-variant hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary" to="/privacy-and-safety">Privacy Policy</Link>
              <Link className="text-label-caps font-label-caps text-on-surface-variant hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary" to="/privacy-and-safety">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
