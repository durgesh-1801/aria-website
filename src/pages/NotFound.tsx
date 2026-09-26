import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const NotFound: React.FC = () => {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md">
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-center px-6 py-24 text-center">
        {/* Large 404 */}
        <div className="relative mb-8">
          <span
            className="text-[160px] md:text-[220px] font-bold leading-none text-surface-container select-none pointer-events-none"
            aria-hidden="true"
          >
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-6xl md:text-7xl" aria-hidden="true">
              shield_question
            </span>
          </div>
        </div>

        <h1 className="font-display-hero text-display-hero text-on-background mb-4">
          Page Not Found
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mb-10 leading-relaxed">
          The page you're looking for doesn't exist or may have been moved. Let's get you back to safety.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/"
            className="bg-primary-container text-on-surface px-8 py-3 rounded font-label-caps text-label-caps hover:opacity-90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            Go Home
          </Link>
          <Link
            to="/how-it-works"
            className="border border-outline-variant hover:border-primary text-on-background hover:text-primary px-8 py-3 rounded font-label-caps text-label-caps transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            Explore ARIA
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};
