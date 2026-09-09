import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export const HowItWorks: React.FC = () => {
  const { toggleMobileMenu } = useApp();

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'ARIA - Intelligent Safety Platform',
        text: 'Learn how ARIA uses AI and signal fusion for emergency response.',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="antialiased bg-[#F8F5F2] text-[#151314] dark:bg-background dark:text-on-background selection:bg-primary selection:text-on-primary min-h-screen flex flex-col font-body-md">
      {/* TopNavBar */}
      <nav className="sticky top-0 w-full z-50 bg-background dark:bg-background border-b border-outline-variant">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-container-margin-desktop py-4">
          <Link className="flex items-center gap-2" to="/">
            <img 
              alt="ARIA Shield Logo" 
              className="w-auto h-10" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxMcS03ssV6R1hNr5iqqttteDJFOR0l-yIN1w5K_5RJI9hjq4-OSWjuzTikW5NmsQ23ybUYtvaOOn4_wULGLiLpBSICD1DMXMvXL0cuYCZiIaN6EJzHmDUBKsO1FS4i-B5uXFKWUSj7tAjeyuFyvptr_6JcsC1LcwmVeDz_shvPDTmPuEHkd8X7X8WZjcrBrZXBVyQ5-0g3y0JdLJ1Qe-eNZiFIQ2SALZ6UAc3Z5sl39R31CFgVdKmfIon-LDRRkpJvA" 
            />
            <span className="font-headline-md text-headline-md font-bold text-white tracking-widest">ARIA</span>
          </Link>

          <ul className="hidden md:flex items-center gap-8 font-label-caps text-label-caps">
            <li>
              <Link className="text-white hover:text-primary transition-colors" to="/">Home</Link>
            </li>
            <li>
              <Link className="text-primary font-bold border-b-2 border-primary pb-1" to="/how-it-works">How It Works</Link>
            </li>
            <li>
              <Link className="text-white hover:text-primary transition-colors" to="/privacy-and-safety">Privacy &amp; Safety</Link>
            </li>
            <li>
              <Link className="text-white hover:text-primary transition-colors" to="/trust-and-recognition">Trust &amp; Recognition</Link>
            </li>
            <li>
              <Link className="text-white hover:text-primary transition-colors" to="/about">About Us</Link>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <Link 
              to="/partner-with-us" 
              className="hidden md:inline-flex bg-primary-container text-cream px-6 py-2 rounded font-label-caps hover:bg-burgundy-light transition-colors"
            >
              Partner With Us
            </Link>
            <button 
              onClick={toggleMobileMenu} 
              aria-label="Open Menu" 
              className="md:hidden text-white focus:outline-none p-1"
            >
              <span className="material-symbols-outlined text-3xl">menu</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <section className="bg-cream-override pt-32 pb-24 px-container-margin-desktop text-center">
        <div className="max-w-4xl mx-auto">
          <span className="font-label-caps text-label-caps tracking-[0.2em] text-primary-container mb-6 block">THE TECHNOLOGY</span>
          <h1 className="font-display-hero text-display-hero text-[#151314] mb-8">How ARIA Works</h1>
          <p className="font-glacial text-2xl leading-relaxed text-inverse-on-surface max-w-3xl mx-auto">
            ARIA continuously reads multiple real-time signals, fuses them into a single risk picture, and decides in seconds whether and how to act
          </p>
        </div>
      </section>

      {/* Signal Fusion Diagram (Conceptual) */}
      <section className="bg-cream-override px-container-margin-desktop">
        <div className="mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full flex justify-center items-center">
            <img 
              alt="ARIA's Comprehensive Safety System" 
              className="w-full h-auto rounded-lg shadow-sm max-w-5xl" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtlry3XnbH_dq9GqtX6OJv1Y7Oqf7SXhSyhBHJA6F5SjjVf9xtYqHiszAl5bfE657YjxLIUOoi29olkc3tgNdzEQqxifWrQPeKHp0Rr788LvdX7GbIipiudALc2cvnfHp3_v-TRvVggGL0wiTXu2eQI8mlw0aSBNFWfLXZrwqhJ2ohzdi0HIf6TzhgM96mh1kIOnkPrRk2vcDYS_Vq3yZbZ-NcDIA7DLNjGChPidcwLnC5XJjYbaw3DIwTKRy-f7AN3A" 
            />
          </div>
        </div>
      </section>

      {/* Signal Explainer Cards */}
      <section className="bg-cream-override py-24 px-container-margin-desktop">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded border border-outline/20 shadow-sm hover:shadow-md transition-shadow">
            <span className="material-symbols-outlined text-primary-container text-4xl mb-6">graphic_eq</span>
            <h4 className="font-headline-md text-2xl text-[#151314] mb-4">Voice Analysis</h4>
            <p className="font-glacial text-inverse-on-surface">Detects stress levels, sudden shouts, and specific keywords to gauge immediate danger.</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-8 rounded border border-outline/20 shadow-sm hover:shadow-md transition-shadow">
            <span className="material-symbols-outlined text-primary-container text-4xl mb-6">directions_run</span>
            <h4 className="font-headline-md text-2xl text-[#151314] mb-4">Motion Detection</h4>
            <p className="font-glacial text-inverse-on-surface">Identifies abrupt movements, running, or unusual pacing associated with panic or struggle.</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-8 rounded border border-outline/20 shadow-sm hover:shadow-md transition-shadow">
            <span className="material-symbols-outlined text-primary-container text-4xl mb-6">360</span>
            <h4 className="font-headline-md text-2xl text-[#151314] mb-4">Rotation Detection</h4>
            <p className="font-glacial text-inverse-on-surface">Monitors device orientation to identify drops, falls, or sudden physical impacts.</p>
          </div>
          {/* Card 4 */}
          <div className="bg-white p-8 rounded border border-outline/20 shadow-sm hover:shadow-md transition-shadow">
            <span className="material-symbols-outlined text-primary-container text-4xl mb-6">radar</span>
            <h4 className="font-headline-md text-2xl text-[#151314] mb-4">Contextual Signals</h4>
            <p className="font-glacial text-inverse-on-surface">Analyzes location changes, time of day, and environmental noise to establish a baseline of safety.</p>
          </div>
          {/* Card 5 */}
          <div className="bg-white p-8 rounded border border-outline/20 shadow-sm hover:shadow-md transition-shadow">
            <span className="material-symbols-outlined text-primary-container text-4xl mb-6">hub</span>
            <h4 className="font-headline-md text-2xl text-[#151314] mb-4">Risk Fusion</h4>
            <p className="font-glacial text-inverse-on-surface">Combines all sensory inputs into a cohesive risk matrix in real-time, eliminating false positives.</p>
          </div>
          {/* Card 6 */}
          <div className="bg-white p-8 rounded border border-outline/20 shadow-sm hover:shadow-md transition-shadow">
            <span className="material-symbols-outlined text-primary-container text-4xl mb-6">gavel</span>
            <h4 className="font-headline-md text-2xl text-[#151314] mb-4">Decision Engine</h4>
            <p className="font-glacial text-inverse-on-surface">Autonomously determines the appropriate level of intervention, from silent alerts to emergency dispatch.</p>
          </div>
        </div>
      </section>

      {/* From Signal to Action Bridge */}
      <section className="bg-cream-override py-16 px-container-margin-desktop border-y border-outline/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-headline-lg text-headline-lg text-[#151314] mb-6">From Signals to a Decision — In Seconds</h2>
          <p className="font-glacial text-lg text-inverse-on-surface mb-12">The raw data captured by our sensors undergoes immediate processing through our five-stage intelligent workflow.</p>
          <div className="flex flex-wrap justify-center items-center gap-4 text-primary-container font-label-caps">
            <span className="bg-white px-4 py-2 rounded-full border border-primary-container/20 shadow-sm">Detect</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
            <span className="bg-white px-4 py-2 rounded-full border border-primary-container/20 shadow-sm">Understand</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
            <span className="bg-white px-4 py-2 rounded-full border border-primary-container/20 shadow-sm">Assess</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
            <span className="bg-white px-4 py-2 rounded-full border border-primary-container/20 shadow-sm">Alert</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
            <span className="bg-white px-4 py-2 rounded-full border border-primary-container/20 shadow-sm">Assist</span>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-cream-override py-24 px-container-margin-desktop">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-headline-lg text-headline-lg text-[#151314] mb-12 text-center">Built for Every Scenario</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Use Case 1 */}
            <div className="bg-white p-8 rounded-lg border border-outline/10 shadow-sm flex items-start gap-6">
              <div className="bg-primary-container/10 p-4 rounded-full shrink-0">
                <span className="material-symbols-outlined text-primary-container text-3xl">person</span>
              </div>
              <div>
                <h4 className="font-headline-md text-2xl text-[#151314] mb-3">Personal Safety</h4>
                <p className="font-glacial text-inverse-on-surface">Empowering individuals walking alone at night or in unfamiliar areas. ARIA acts as an invisible companion, ready to intervene before a threat escalates.</p>
              </div>
            </div>
            {/* Use Case 2 */}
            <div className="bg-white p-8 rounded-lg border border-outline/10 shadow-sm flex items-start gap-6">
              <div className="bg-primary-container/10 p-4 rounded-full shrink-0">
                <span className="material-symbols-outlined text-primary-container text-3xl">school</span>
              </div>
              <div>
                <h4 className="font-headline-md text-2xl text-[#151314] mb-3">Campus/Institutions</h4>
                <p className="font-glacial text-inverse-on-surface">Integrating with campus security to provide students with discreet, immediate access to help, streamlining dispatch without the need for blue light boxes.</p>
              </div>
            </div>
            {/* Use Case 3 */}
            <div className="bg-white p-8 rounded-lg border border-outline/10 shadow-sm flex items-start gap-6">
              <div className="bg-primary-container/10 p-4 rounded-full shrink-0">
                <span className="material-symbols-outlined text-primary-container text-3xl">business</span>
              </div>
              <div>
                <h4 className="font-headline-md text-2xl text-[#151314] mb-3">Organizations</h4>
                <p className="font-glacial text-inverse-on-surface">Protecting lone workers and staff in high-risk environments. Ensure compliance and rapid response with automated incident reporting.</p>
              </div>
            </div>
            {/* Use Case 4 */}
            <div className="bg-white p-8 rounded-lg border border-outline/10 shadow-sm flex items-start gap-6">
              <div className="bg-primary-container/10 p-4 rounded-full shrink-0">
                <span className="material-symbols-outlined text-primary-container text-3xl">local_police</span>
              </div>
              <div>
                <h4 className="font-headline-md text-2xl text-[#151314] mb-3">Public Safety Ecosystems</h4>
                <p className="font-glacial text-inverse-on-surface">Feeding high-fidelity, contextual data directly into 911 dispatch centers to prioritize responses and improve situational awareness for first responders.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust/Reassurance Strip */}
      <section className="bg-[#0C0A0B] py-6 px-container-margin-desktop text-center">
        <Link className="inline-flex items-center gap-2 text-cream hover:text-primary transition-colors font-label-caps" to="/privacy-and-safety">
          Read our Technical Overview <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </Link>
      </section>

      {/* Final CTA */}
      <section className="bg-surface-container-lowest py-24 px-container-margin-desktop text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-container/10 via-background to-background pointer-events-none"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="font-headline-lg text-headline-lg text-cream mb-8">Help Us Build the Future of Emergency Response</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link to="/partner-with-us" className="bg-primary-container text-cream px-8 py-3 rounded font-label-caps hover:bg-burgundy-light transition-colors w-full sm:w-auto">
              Partner With Us
            </Link>
            <Link to="/partner-with-us" className="text-primary hover:text-cream transition-colors font-label-caps border-b border-primary hover:border-cream pb-1">
              Contact the Team
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-container-lowest dark:bg-surface-container-lowest border-t border-outline-variant w-full">
        <div className="max-w-7xl mx-auto px-container-margin-desktop py-stack-lg flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
            <span className="font-headline-md text-headline-md text-primary dark:text-primary mb-2">ARIA</span>
            <span className="font-body-md text-body-md text-on-surface-variant">© 2026 ARIA Safety Intelligence. All rights reserved.</span>
          </div>
          <ul className="flex flex-wrap justify-center gap-6 font-label-caps text-label-caps mb-8 md:mb-0">
            <li><Link className="text-on-surface-variant hover:text-primary transition-colors duration-200" to="/">Home</Link></li>
            <li><Link className="text-primary hover:text-primary transition-colors duration-200" to="/how-it-works">How It Works</Link></li>
            <li><Link className="text-on-surface-variant hover:text-primary transition-colors duration-200" to="/how-it-works">Features</Link></li>
            <li><Link className="text-on-surface-variant hover:text-primary transition-colors duration-200" to="/trust-and-recognition">Trust</Link></li>
            <li><Link className="text-on-surface-variant hover:text-primary transition-colors duration-200" to="/partner-with-us">Contact</Link></li>
          </ul>
          <div className="flex gap-4">
            <a href="mailto:aria.safetytech@gmail.com" title="Email ARIA" aria-label="Email ARIA">
              <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors">mail</span>
            </a>
            <button onClick={handleShare} title="Share ARIA" aria-label="Share page">
              <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors">share</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};
