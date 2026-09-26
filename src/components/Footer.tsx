import React from 'react';
import { Link } from 'react-router-dom';

/** Shared footer used across all pages. */
export const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/20 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <span className="text-headline-md font-headline-md font-bold text-on-background">ARIA</span>
          <p className="text-body-md font-body-md text-on-surface-variant">
            © 2026 ARIA Safety Platform. Empowering Security through AI.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-8 md:gap-16">
          <div className="flex flex-col gap-2">
            <span className="text-label-caps font-label-caps text-on-surface uppercase tracking-wider mb-1">Product</span>
            <Link
              className="text-label-caps font-label-caps text-on-surface-variant hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded"
              to="/"
            >
              Home
            </Link>
            <Link
              className="text-label-caps font-label-caps text-on-surface-variant hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded"
              to="/how-it-works"
            >
              How It Works
            </Link>
            <Link
              className="text-label-caps font-label-caps text-on-surface-variant hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded"
              to="/how-it-works"
            >
              Why ARIA
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-label-caps font-label-caps text-on-surface uppercase tracking-wider mb-1">Legal</span>
            <Link
              className="text-label-caps font-label-caps text-on-surface-variant hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded"
              to="/partner-with-us"
            >
              Contact
            </Link>
            <Link
              className="text-label-caps font-label-caps text-on-surface-variant hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded"
              to="/privacy-and-safety"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-label-caps font-label-caps text-on-surface-variant hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded"
              to="/terms-of-service"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
