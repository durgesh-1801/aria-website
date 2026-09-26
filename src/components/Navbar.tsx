import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

interface NavbarProps {
  /** Optional override for the "Partner With Us" CTA button behavior.
   *  When provided, clicking the button calls this function (e.g., scrollToContact).
   *  When omitted, it renders as a Link to /partner-with-us. */
  onPartnerClick?: () => void;
}

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'How It Works', path: '/how-it-works' },
  { name: 'Privacy & Safety', path: '/privacy-and-safety' },
  { name: 'Trust & Recognition', path: '/trust-and-recognition' },
  { name: 'About Us', path: '/about' },
];

/** Shared top navigation bar used across all pages. */
export const Navbar: React.FC<NavbarProps> = ({ onPartnerClick }) => {
  const { isMobileMenuOpen, toggleMobileMenu } = useApp();

  return (
    <nav
      aria-label="Main Navigation"
      className="sticky top-0 w-full z-50 bg-background border-b border-outline-variant/30 shadow-sm"
    >
      <div className="flex justify-between items-center w-full px-6 md:px-10 py-4 max-w-7xl mx-auto">
        {/* Brand */}
        <Link className="flex items-center gap-2 hover:opacity-80 transition-opacity" to="/" aria-label="ARIA Home">
          <img
            alt="ARIA Logo"
            className="w-auto h-10"
            src="/images/logo/aria-logo.png"
          />
          <span className="text-headline-md font-headline-md font-bold tracking-widest text-white">ARIA</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-8" role="list">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `text-label-caps font-label-caps transition-colors duration-300 ${
                  isActive
                    ? 'text-primary border-b-2 border-primary pb-1'
                    : 'text-white hover:text-primary'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/how-it-works"
            className="text-white hover:text-primary transition-colors duration-300 text-label-caps font-label-caps"
          >
            Explore ARIA
          </Link>
          {onPartnerClick ? (
            <button
              onClick={onPartnerClick}
              className="bg-primary-container text-on-surface px-6 py-2 rounded font-label-caps text-label-caps hover:opacity-90 transition-all duration-300"
            >
              Partner With Us
            </button>
          ) : (
            <Link
              to="/partner-with-us"
              className="bg-primary-container text-on-surface px-6 py-2 rounded font-label-caps text-label-caps hover:opacity-90 transition-all duration-300"
            >
              Partner With Us
            </Link>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
          className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-primary p-1 rounded"
        >
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>
    </nav>
  );
};
