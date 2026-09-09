import forms from '@tailwindcss/forms'
import containerQueries from '@tailwindcss/container-queries'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface-container-high": "#2c292a",
        "on-secondary-fixed": "#3b0812",
        "on-error": "#690005",
        "surface-bright": "#3b3839",
        "error": "#ffb4ab",
        "on-primary-fixed": "#3e030f",
        "secondary-fixed": "#ffdadb",
        "surface-container-lowest": "#100e0f",
        "secondary": "#ffb2b9",
        "tertiary": "#c8c6c3",
        "outline-variant": "#544343",
        "inverse-surface": "#e7e1e2",
        "surface-container": "#211f20",
        "surface-container-highest": "#373435",
        "on-secondary": "#561d25",
        "error-container": "#93000a",
        "on-surface": "#e7e1e2",
        "primary-container": "#5c1a24",
        "background": "#151314",
        "inverse-primary": "#95464e",
        "secondary-container": "#75353d",
        "primary": "#ffb2b8",
        "on-tertiary-fixed": "#1c1c1a",
        "tertiary-fixed": "#e5e2df",
        "on-primary-fixed-variant": "#772f38",
        "on-primary-container": "#dc7f87",
        "on-tertiary": "#31302f",
        "on-tertiary-container": "#9b9a97",
        "surface-dim": "#151314",
        "on-tertiary-fixed-variant": "#474745",
        "on-background": "#e7e1e2",
        "outline": "#a18c8c",
        "inverse-on-surface": "#333031",
        "surface": "#151314",
        "surface-tint": "#ffb2b8",
        "secondary-fixed-dim": "#ffb2b9",
        "on-secondary-container": "#f7a1a9",
        "tertiary-fixed-dim": "#c8c6c3",
        "surface-variant": "#373435",
        "tertiary-container": "#323230",
        "on-primary": "#5a1923",
        "primary-fixed": "#ffdadb",
        "surface-container-low": "#1d1b1c",
        "primary-fixed-dim": "#ffb2b8",
        "on-secondary-fixed-variant": "#72333b",
        "on-surface-variant": "#d9c1c1",
        "on-error-container": "#ffdad6",
        // Extended custom colors used in individual pages
        "cream": "#F8F5F2",
        "burgundy-light": "#7A2B37",
        "burgundy-deep": "#3A0E15",
        "burgundy": "#5C1A24",
        "warm-gray": "#EFEBE7"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "sm": "0.125rem",
        "md": "0.375rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      spacing: {
        "base": "8px",
        "stack-sm": "12px",
        "stack-md": "24px",
        "stack-lg": "48px",
        "gutter": "24px",
        "container-margin-mobile": "20px",
        "container-margin-desktop": "40px"
      },
      fontFamily: {
        "body-md": ["Poppins", "sans-serif"],
        "display-hero": ["Poppins", "sans-serif"],
        "label-caps": ["'Glacial Indifference'", "sans-serif"],
        "headline-lg-mobile": ["Poppins", "sans-serif"],
        "headline-md": ["'Glacial Indifference'", "sans-serif"],
        "body-lg": ["Poppins", "sans-serif"],
        "headline-lg": ["Poppins", "sans-serif"],
        "label-sm": ["Poppins", "sans-serif"],
        "glacial": ["'Glacial Indifference'", "sans-serif"]
      },
      fontSize: {
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "display-hero": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "label-caps": ["14px", { lineHeight: "20px", letterSpacing: "0.1em", fontWeight: "700" }],
        "headline-lg-mobile": ["28px", { lineHeight: "36px", fontWeight: "600" }],
        "headline-md": ["24px", { lineHeight: "32px", letterSpacing: "0.05em", fontWeight: "700" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "headline-lg": ["32px", { lineHeight: "40px", fontWeight: "600" }],
        "label-sm": ["12px", { lineHeight: "16px", fontWeight: "500" }]
      }
    }
  },
  plugins: [forms, containerQueries],
}
