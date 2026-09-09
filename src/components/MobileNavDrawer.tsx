import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export const MobileNavDrawer: React.FC = () => {
  const { isMobileMenuOpen, closeMobileMenu } = useApp();
  const location = useLocation();

  if (!isMobileMenuOpen) return null;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Privacy & Safety', path: '/privacy-and-safety' },
    { name: 'Trust & Recognition', path: '/trust-and-recognition' },
    { name: 'About Us', path: '/about' },
  ];

  return (
    <div className="fixed inset-0 z-[100] md:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={closeMobileMenu}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-4/5 max-w-sm bg-surface-container-low border-l border-outline-variant/30 p-6 flex flex-col justify-between shadow-2xl z-10">
        <div>
          {/* Header */}
          <div className="flex justify-between items-center pb-6 border-b border-outline-variant/20">
            <Link to="/" onClick={closeMobileMenu} className="flex items-center gap-2">
              <span className="font-headline-md text-headline-md font-bold text-white tracking-widest">ARIA</span>
            </Link>
            <button 
              onClick={closeMobileMenu} 
              aria-label="Close menu"
              className="text-on-surface-variant hover:text-white p-2"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col gap-4 mt-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMobileMenu}
                  className={`font-label-caps text-label-caps uppercase tracking-wider py-2 transition-colors ${
                    isActive 
                      ? 'text-primary font-bold border-l-2 border-primary pl-3' 
                      : 'text-white hover:text-primary pl-3'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Action Button */}
        <div className="pt-6 border-t border-outline-variant/20">
          <Link
            to="/partner-with-us"
            onClick={closeMobileMenu}
            className="block text-center bg-primary-container text-on-surface py-3 px-6 rounded font-label-caps text-label-caps hover:opacity-90 transition-all w-full"
          >
            Partner With Us
          </Link>
        </div>
      </div>
    </div>
  );
};
