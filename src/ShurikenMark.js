import React from "react";

/** Four-blade shuriken mark used sitewide. */
export const SHURIKEN_SVG = `
<svg class="shuriken-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M12 1.2 L13.8 9.2 L21.8 12 L13.8 14.8 L12 22.8 L10.2 14.8 L2.2 12 L10.2 9.2 Z" />
  <circle cx="12" cy="12" r="2.1" />
</svg>
`.trim();

export const ShurikenMark = ({ className = "", title }) => (
  <svg
    className={`shuriken-icon ${className}`.trim()}
    viewBox="0 0 24 24"
    aria-hidden={title ? undefined : true}
    role={title ? "img" : "presentation"}
    focusable="false"
  >
    {title ? <title>{title}</title> : null}
    <path d="M12 1.2 L13.8 9.2 L21.8 12 L13.8 14.8 L12 22.8 L10.2 14.8 L2.2 12 L10.2 9.2 Z" />
    <circle cx="12" cy="12" r="2.1" />
  </svg>
);

export default ShurikenMark;
