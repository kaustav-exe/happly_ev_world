---
name: Kinetic Precision
colors:
  surface: '#111415'
  surface-dim: '#111415'
  surface-bright: '#37393b'
  surface-container-lowest: '#0c0e10'
  surface-container-low: '#1a1c1d'
  surface-container: '#1e2021'
  surface-container-high: '#282a2c'
  surface-container-highest: '#333537'
  on-surface: '#e2e2e4'
  on-surface-variant: '#b9ccb2'
  inverse-surface: '#e2e2e4'
  inverse-on-surface: '#2f3132'
  outline: '#84967e'
  outline-variant: '#3b4b37'
  surface-tint: '#00e639'
  primary: '#ebffe2'
  on-primary: '#003907'
  primary-container: '#00ff41'
  on-primary-container: '#007117'
  inverse-primary: '#006e16'
  secondary: '#c9c6c5'
  on-secondary: '#313030'
  secondary-container: '#4a4949'
  on-secondary-container: '#bab8b7'
  tertiary: '#fbf8fb'
  on-tertiary: '#303032'
  tertiary-container: '#dfdcde'
  on-tertiary-container: '#616063'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#72ff70'
  primary-fixed-dim: '#00e639'
  on-primary-fixed: '#002203'
  on-primary-fixed-variant: '#00530e'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c9c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#e4e2e4'
  tertiary-fixed-dim: '#c8c6c8'
  on-tertiary-fixed: '#1b1b1d'
  on-tertiary-fixed-variant: '#474649'
  background: '#111415'
  on-background: '#e2e2e4'
  surface-variant: '#333537'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 120px
    fontWeight: '700'
    lineHeight: 110%
    letterSpacing: -0.04em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 110%
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 64px
    fontWeight: '600'
    lineHeight: 120%
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 120%
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 130%
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 160%
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 160%
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 100%
    letterSpacing: 0.1em
  mono-technical:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 140%
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 32px
  margin-desktop: 80px
  margin-mobile: 24px
  section-gap: 160px
---

## Brand & Style

The design system is rooted in the high-end automotive editorial tradition. It prioritizes the vehicle as the hero, utilizing expansive negative space and technical precision to evoke a sense of quiet luxury and engineering excellence.

The aesthetic is **Minimalist-Technological**. It avoids the cluttered tropes of consumer software in favor of a clean, gallery-like experience. The interface should feel like a physical showroom: quiet, spacious, and meticulously curated. Motion should be linear and intentional, mimicking the smooth acceleration of an electric drivetrain.

**Key Principles:**
- **Product as Hero:** UI elements never compete with imagery.
- **Asymmetric Balance:** Use staggered layouts to create a sense of forward motion.
- **Architectural Rigor:** Every element must align to a strict underlying grid.
- **Human-Centric Tech:** Technology is presented through clarity and legibility, not decorative flourishes.

## Colors

This design system utilizes a high-contrast, dark-mode-first palette to mirror the premium feel of automotive dashboards and luxury nocturnal environments.

- **Deep Black (#0A0A0A):** The primary canvas. Used for the deepest backgrounds to make imagery "pop" without visible borders.
- **Graphite (#1D1D1F):** Used for surface elevation, containers, and secondary structural elements.
- **Electric Emerald (#00FF41):** A high-visibility technical accent. Use sparingly for critical calls to action, active states, and performance data. It represents energy and precision.
- **Off-white (#F5F5F7):** The primary color for typography and iconography to ensure maximum legibility against dark backgrounds.

## Typography

The typography system relies on **Plus Jakarta Sans** for its modern, geometric clarity and technical feel. High contrast in weight and scale is essential to create an editorial hierarchy.

- **Display Hierarchy:** Use `display-hero` for product names and hero sections. Tight letter-spacing is required at large scales to maintain a "locked-in" architectural feel.
- **Technical Labels:** Use `label-caps` for categories, specs, and overlines. The increased letter-spacing provides a functional, industrial look.
- **Body Copy:** Maintain generous line-height (`160%`) to ensure readability and a premium, unhurried feel.

## Layout & Spacing

The layout philosophy is based on a **12-column fixed grid** for desktop and a **4-column grid** for mobile. 

- **Intentional Asymmetry:** Avoid centering everything. Align text to the far left and imagery to the far right, or use "bleeding" images that span from the center of the grid to the edge of the viewport.
- **Vertical Rhythm:** Use massive vertical gaps (`section-gap`) between content blocks to allow the eye to rest and emphasize the importance of the following content.
- **Negative Space:** Margin areas should remain clear of "utility" clutter. Icons and navigation should be tucked into corners to maximize the visual field for product photography.

## Elevation & Depth

This system rejects traditional drop shadows and glassmorphism. Depth is achieved through **Tonal Layering** and **Surface Contrast**.

- **Level 0 (Base):** Deep Black (#0A0A0A) for the main viewport.
- **Level 1 (Surfaces):** Graphite (#1D1D1F) for secondary cards or content areas.
- **Outlines:** Instead of shadows, use thin (1px), low-opacity borders (#FFFFFF at 10% opacity) to define boundaries on interactive elements.
- **Atmospheric Depth:** Depth is created by the lighting within the product photography itself. UI elements should feel like they are "printed" onto the surface or floating as perfectly flat overlays.

## Shapes

The shape language is disciplined and industrial. Elements utilize a **Soft (0.25rem)** base radius to prevent the UI from feeling aggressive while maintaining a sharp, precision-machined appearance.

- **Large Components:** Use the base `rounded` (4px) for cards and containers.
- **Buttons:** Use `rounded` for a sleek, rectangular look. Never use pill-shaped buttons as they conflict with the architectural rigor of the system.
- **Media:** Images should have sharp (0px) corners when they bleed to the edge of the screen, but use the base 4px radius when contained within the grid.

## Components

### Buttons
- **Primary:** Solid Electric Emerald (#00FF41) background with Deep Black text. Sharp corners. No shadows.
- **Secondary:** Transparent background with a 1px Off-white border. Text in Off-white.
- **Hover State:** Primary buttons shift to a slightly brighter green; Secondary buttons fill with Off-white and shift text to Deep Black.

### Product Cards
- Cards must use Graphite (#1D1D1F) backgrounds. 
- Photography should be top-aligned with no internal padding on the top or sides of the image.
- Technical specs (Range, 0-60, Top Speed) should be displayed in `mono-technical` style in a horizontal row at the bottom of the card.

### Input Fields
- Underline-only style or subtle Graphite fills.
- Active state indicated by an Electric Emerald 1px bottom border.
- Error states use a muted red, never clashing with the Emerald accent.

### Cinematic Containers
- Full-bleed image or video containers that utilize "parallax" scrolling effects.
- Text overlays should be positioned in the "negative space" of the image (e.g., top-left or bottom-right) using the `display-hero` typography.

### Technical Chips
- Small, rectangular labels with Off-white borders. 
- Used for "Available Now" or "Long Range" badges. 
- All text in `label-caps`.