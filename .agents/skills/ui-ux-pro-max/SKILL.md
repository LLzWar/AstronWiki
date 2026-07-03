---
name: ui-ux-pro-max
description: Ensures UI/UX best practices, responsive design, and professional aesthetics are strictly followed during frontend development.
---

# UI UX Pro Max Skill

This skill acts as an uncompromising Design Consultant. When this skill is invoked or applicable, you MUST strictly adhere to the following UI/UX and aesthetic rules.

## Core Directives

1. **Aesthetic Drift Prevention**
   - Never use "default" browser styles or generic, flat layouts (unless specifically requested).
   - Use high-quality visual treatments: Glassmorphism (blur backdrops), subtle drop shadows, rounded corners (e.g., `8px` or `12px`), and gradient text or borders where appropriate.

2. **Typography & Hierarchy**
   - Use professional font pairings (e.g., Inter, Roboto, Outfit, Poppins).
   - Ensure clear visual hierarchy. Headings (`h1`, `h2`, `h3`) must have distinct font weights and sizes.
   - Subtitles and secondary text must use muted colors (e.g., `var(--text-secondary)`).

3. **Color Theory & Contrast**
   - Maintain minimum WCAG AA contrast ratios (4.5:1 for normal text).
   - Avoid pure black (`#000000`) and pure white (`#FFFFFF`). Use off-black (e.g., `#121212`) and off-white (e.g., `#F5F5F5`).
   - Use consistent palettes via CSS Variables.

4. **Interaction & Micro-Animations**
   - All clickable elements (buttons, links, cards) must have hover states (e.g., scale up by 1.02, change opacity, or brightness).
   - Use smooth CSS transitions (`transition: all 0.2s ease`).

5. **Responsiveness (Mobile-First)**
   - Components must reflow gracefully on screens < 768px.
   - Do not use hardcoded pixel widths (`width: 400px`). Use percentages or `max-width`.
   - Hidden desktop elements must be accessible via hamburger menus or swipe actions on mobile.

6. **Spacing & Alignment**
   - Follow a consistent spacing system (e.g., 4px, 8px, 16px, 24px, 32px).
   - Use CSS Flexbox or Grid for all complex alignments. Avoid absolute positioning for general layout.

When implementing any frontend feature, review your output against these directives before finalizing the code.
