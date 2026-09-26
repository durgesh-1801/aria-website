import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'How It Works', path: '/how-it-works' },
  { name: 'Privacy & Safety', path: '/privacy-and-safety' },
  { name: 'Trust & Recognition', path: '/trust-and-recognition' },
  { name: 'About Us', path: '/about' },
];

export const MobileNavDrawer: React.FC = () => {
  const { isMobileMenuOpen, closeMobileMenu } = useApp();

  // Accessibility: Lock background scroll and close on Escape key when drawer is open
  React.useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMobileMenu();
    };
    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isMobileMenuOpen, closeMobileMenu]);

  if (!isMobileMenuOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] md:hidden" role="dialog" aria-modal="true" aria-label="Navigation menu">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-4/5 max-w-sm bg-surface-container-low border-l border-outline-variant/30 p-6 flex flex-col justify-between shadow-2xl z-10">
        <div>
          {/* Header */}
          <div className="flex justify-between items-center pb-6 border-b border-outline-variant/20">
            <Link to="/" onClick={closeMobileMenu} className="flex items-center gap-2" aria-label="ARIA Home">
              <img
                src="/images/logo/aria-logo.png"
                alt="ARIA Logo"
                className="h-8 w-auto"
                width="80"
                height="32"
              />
              <span className="font-headline-md text-headline-md font-bold text-white tracking-widest">ARIA</span>
            </Link>
            <button
              onClick={closeMobileMenu}
              aria-label="Close navigation menu"
              className="text-on-surface-variant hover:text-white p-2 focus:outline-none focus:ring-2 focus:ring-primary rounded"
            >
              <span className="material-symbols-outlined" aria-hidden="true">close</span>
            </button>
          </div>

          {/* Links — Fix #14: Uses NavLink for dynamic active state */}
          <nav className="flex flex-col gap-4 mt-8" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `font-label-caps text-label-caps uppercase tracking-wider py-2 transition-colors duration-200 ${
                    isActive
                      ? 'text-primary font-bold border-l-2 border-primary pl-3'
                      : 'text-white hover:text-primary pl-3'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Action Button */}
        <div className="pt-6 border-t border-outline-variant/20">
          <Link
            to="/partner-with-us"
            onClick={closeMobileMenu}
            className="block text-center bg-primary-container text-on-surface py-3 px-6 rounded font-label-caps text-label-caps hover:opacity-90 transition-all w-full focus:outline-none focus:ring-2 focus:ring-primary"
          >
            Partner With Us
          </Link>
        </div>
      </div>
    </div>
  );
};
