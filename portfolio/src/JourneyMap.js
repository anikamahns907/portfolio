import React from 'react';
import './index.css';

const locations = [
  { key: 'ALASKA', label: 'Alaska' },
  { key: 'KENT ISLAND', label: 'Maryland' },
  { key: 'PUERTO RICO', label: 'Puerto Rico' },
  { key: 'TOKYO', label: 'Tokyo' },
  { key: 'URBANA', label: 'Los Angeles' },
  { key: 'PROVIDENCE', label: 'Providence' },
];

const JourneyMap = ({ interactive = false, onLocationClick, activeLocation }) => (
  <div className="journey-map">
    <div className="journey-timeline">
      {locations.map((loc, idx) => (
        <React.Fragment key={loc.key}>
          <div
            className={`journey-point${interactive ? ' clickable' : ''}${activeLocation === loc.key ? ' active' : ''}`}
            onClick={interactive && onLocationClick ? () => onLocationClick(loc.key) : undefined}
            style={interactive ? { cursor: 'pointer' } : {}}
          >
            <div className={`point-label${activeLocation === loc.key ? ' active' : ''}`}>{loc.label}</div>
            <div className="point-dot"></div>
          </div>
          {idx < locations.length - 1 && <div className="journey-line"></div>}
        </React.Fragment>
      ))}
    </div>
  </div>
);

export default JourneyMap; 