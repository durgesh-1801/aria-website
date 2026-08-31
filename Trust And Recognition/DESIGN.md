---
name: Aria Safety Intelligence
colors:
  surface: '#151314'
  surface-dim: '#151314'
  surface-bright: '#3b3839'
  surface-container-lowest: '#100e0f'
  surface-container-low: '#1d1b1c'
  surface-container: '#211f20'
  surface-container-high: '#2c292a'
  surface-container-highest: '#373435'
  on-surface: '#e7e1e2'
  on-surface-variant: '#d9c1c1'
  inverse-surface: '#e7e1e2'
  inverse-on-surface: '#333031'
  outline: '#a18c8c'
  outline-variant: '#544343'
  surface-tint: '#ffb2b8'
  primary: '#ffb2b8'
  on-primary: '#5a1923'
  primary-container: '#5c1a24'
  on-primary-container: '#dc7f87'
  inverse-primary: '#95464e'
  secondary: '#ffb2b9'
  on-secondary: '#561d25'
  secondary-container: '#75353d'
  on-secondary-container: '#f7a1a9'
  tertiary: '#c8c6c3'
  on-tertiary: '#31302f'
  tertiary-container: '#323230'
  on-tertiary-container: '#9b9a97'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdadb'
  primary-fixed-dim: '#ffb2b8'
  on-primary-fixed: '#3e030f'
  on-primary-fixed-variant: '#772f38'
  secondary-fixed: '#ffdadb'
  secondary-fixed-dim: '#ffb2b9'
  on-secondary-fixed: '#3b0812'
  on-secondary-fixed-variant: '#72333b'
  tertiary-fixed: '#e5e2df'
  tertiary-fixed-dim: '#c8c6c3'
  on-tertiary-fixed: '#1c1c1a'
  on-tertiary-fixed-variant: '#474745'
  background: '#151314'
  on-background: '#e7e1e2'
  surface-variant: '#373435'
typography:
  display-hero:
    fontFamily: Poppins
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Poppins
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Poppins
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Glacial Indifference
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: 0.05em
  body-lg:
    fontFamily: Poppins
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Poppins
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Glacial Indifference
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.1em
  label-sm:
    fontFamily: Poppins
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-margin-desktop: 40px
  container-margin-mobile: 20px
  gutter: 24px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

The visual identity of this design system is rooted in **Professional Modernism**, prioritizing trust, urgency, and absolute clarity. As an AI-powered safety platform, the UI must balance emotional reassurance with technical precision. 

The aesthetic avoids "tech-startup" playfulness in favor of a sophisticated, high-contrast palette that evokes the gravity of emergency response. It utilizes a **Minimalist** approach with a **Tonal Layering** depth model, ensuring that critical information is never obscured by decorative elements. The mood is calm, authoritative, and empowering.

**Core Principles:**
- **Clarity over Decoration:** Every element must serve a functional purpose in high-stress scenarios.
- **Urgency without Panic:** Use high-contrast colors to highlight critical actions while maintaining a stable, dark background.
- **Sophisticated Protection:** Leverage the deep burgundy and maroon tones to signify strength and reliability rather than the alarmist bright reds common in consumer apps.

## Colors

The palette is anchored by a near-black foundation to provide maximum contrast for critical data and to reduce eye strain during nighttime use. 

- **Primary (Burgundy):** Used for primary actions, critical status updates, and brand presence. 
- **Secondary (Deep Maroon):** Used for subtle accents, workflow progression, and container backgrounds where slight elevation is needed.
- **Tertiary (Cream/Off-white):** Used for high-readability text on dark surfaces and for light-mode container backgrounds when the context requires a physical "paper" feel.
- **Workflow Progression:** Following the reference map data, use a sequential scale from light pink/burgundy to deep maroon to indicate severity or completion steps in safety workflows.

## Typography

The typography system uses **Poppins** for its geometric stability and exceptional legibility across digital interfaces. **Glacial Indifference** is reserved for subheadings and display labels to provide a distinct, minimalist architectural feel that differentiates the product from standard SaaS platforms.

- **Headlines:** Use Bold/SemiBold Poppins for immediate impact and clarity.
- **Navigation/Labels:** Use Glacial Indifference in all-caps for a professional, "mission-control" aesthetic.
- **Body:** Use Poppins Regular. Maintain generous line-height (1.5x minimum) to ensure readability during movement or high-stress interactions.

## Layout & Spacing

This design system employs a **Fixed Grid** on desktop (1280px max-width, 12 columns) and a **Fluid Grid** on mobile. The spacing logic is based on an 8px linear scale.

**Layout Model:**
- **Safe Margins:** Large 40px margins on desktop create a sense of calm and focus.
- **Density:** High density for data dashboards; low density (ample whitespace) for onboarding and emergency action screens to prevent cognitive overload.
- **Reflow:** On mobile, components stack vertically with a 20px side margin. Grid gutters reduce from 24px to 16px to maximize horizontal real estate.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** rather than heavy shadows. In the dark color mode, elevation is communicated by lightening the background hex value slightly as components move "closer" to the user.

- **Base Level:** #0C0A0B (Absolute background).
- **Mid Level:** #1A1718 (Standard cards and containers).
- **High Level:** #262223 (Floating menus and modals).
- **Shadows:** When used, shadows must be extremely soft and "ambient"—black with 40% opacity and a 20px blur, used only for floating action buttons or high-priority modals.
- **Outlines:** Low-contrast outlines (1px solid #262223) are preferred over shadows for defining secondary container boundaries.

## Shapes

The shape language is **Soft (0.25rem)**. This provides a balance between the clinical precision of sharp corners and the overly casual nature of fully rounded shapes.

- **Buttons & Inputs:** 4px (0.25rem) corner radius.
- **Cards & Modals:** 8px (0.5rem) corner radius.
- **SOS/Emergency Buttons:** These are the only exception and may utilize a fully circular/pill shape to distinguish them from standard UI actions.

## Components

**Buttons**
- **Primary:** Burgundy (#5C1A24) background with Cream (#F8F5F2) text. 4px radius. 
- **Secondary:** Transparent with 1.5px Burgundy border or Deep Maroon background.
- **Ghost:** Cream text with no background, used for "Learn More" or secondary navigation.

**Input Fields**
- Dark backgrounds (#1A1718) with a subtle 1px border. Focus state uses a Burgundy glow. Labels must always use the `label-caps` typography style for clarity.

**Cards**
- Use the Mid Level tonal background. Ensure internal padding is consistent with the `stack-md` spacing (24px). Borders are only used if the card contains complex nested data.

**Chips & Status Indicators**
- Small, 2px rounded containers. Use the burgundy progression to indicate status:
  - *Light (Detecting)*
  - *Medium (Assessing)*
  - *Deep (Action Required)*

**Icons**
- Strictly 2px stroke, minimalist line-style icons. Icons should never be filled unless they represent an active/selected state.