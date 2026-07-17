import React from "react";

const SHURIKEN_PATH =
  "M12 1.2 L13.8 9.2 L21.8 12 L13.8 14.8 L12 22.8 L10.2 14.8 L2.2 12 L10.2 9.2 Z";

/** HTML snippet for Leaflet / raw markup markers. */
export const SHURIKEN_SVG = `
<svg class="shuriken-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="${SHURIKEN_PATH}" />
  <circle cx="12" cy="12" r="2.1" />
</svg>
`.trim();

/** Geometric brand-red shuriken mark used sitewide (same form as the tab icon). */
export const ShurikenMark = ({ className = "", title }) => (
  <svg
    className={`shuriken-icon ${className}`.trim()}
    viewBox="0 0 24 24"
    aria-hidden={title ? undefined : true}
    role={title ? "img" : "presentation"}
    focusable="false"
  >
    {title ? <title>{title}</title> : null}
    <path d={SHURIKEN_PATH} fill="currentColor" />
    <circle cx="12" cy="12" r="2.1" fill="currentColor" />
  </svg>
);

export default ShurikenMark;
