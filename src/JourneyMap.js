import React from "react";
import "./index.css";

export const JOURNEY_LOCATIONS = [
  { key: "ALASKA", label: "Anchorage, Alaska" },
  { key: "KENT ISLAND", label: "Kent Island, MD" },
  { key: "PUERTO RICO", label: "Puerto Rico" },
  { key: "TOKYO", label: "Tokyo, Japan" },
  { key: "URBANA", label: "Urbana, Maryland" },
  { key: "LA", label: "Los Angeles, California" },
  { key: "RHODE ISLAND", label: "Providence, Rhode Island" },
];

const JourneyMap = ({ interactive = false, onLocationClick, activeLocation }) => (
  <div className="journey-places" role="navigation" aria-label="Places">
    {JOURNEY_LOCATIONS.map((loc) => {
      const isActive = activeLocation === loc.key;
      const className = `journey-place${isActive ? " is-active" : ""}${
        interactive ? " is-clickable" : ""
      }`;

      if (!interactive) {
        return (
          <span key={loc.key} className={className}>
            {loc.label}
          </span>
        );
      }

      return (
        <button
          key={loc.key}
          type="button"
          className={className}
          aria-pressed={isActive}
          onClick={() => onLocationClick?.(loc.key)}
        >
          {loc.label}
        </button>
      );
    })}
  </div>
);

export default JourneyMap;
