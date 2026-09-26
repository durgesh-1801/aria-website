import React, { useEffect, useState } from 'react';

interface ToastProps {
  message: string;
  duration?: number;
  onClose: () => void;
}

/** Lightweight, accessible toast notification. Auto-dismisses after `duration` ms. */
export const Toast: React.FC<ToastProps> = ({ message, duration = 3000, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 300); // allow fade-out
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[200] flex items-center gap-3
        bg-surface-container-high border border-outline-variant text-on-surface
        px-5 py-3 rounded-full shadow-2xl
        transition-all duration-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
    >
      <span className="material-symbols-outlined filled text-primary text-xl" aria-hidden="true">check_circle</span>
      <span className="font-label-caps text-label-caps text-sm">{message}</span>
      <button
        onClick={() => { setVisible(false); setTimeout(onClose, 300); }}
        aria-label="Dismiss notification"
        className="ml-2 text-on-surface-variant hover:text-on-surface transition-colors"
      >
        <span className="material-symbols-outlined text-base" aria-hidden="true">close</span>
      </button>
    </div>
  );
};
