import React from 'react';
import './index.css';

const resumeUrl = "/Resume.pdf";

const Resume = () => {
  return (
    <div className="mainDiv" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 'calc(100vh - 200px)' }}>
      <div className="resume-section" style={{ minHeight: 'auto', padding: '10px', textAlign: 'center' }}>
        <div className="resume-content" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div className="resume-header" style={{ flexDirection: 'column', gap: '5px', alignItems: 'center' }}>
            <h1 className="section-title" style={{ fontSize: '2.2rem', marginBottom: '3px' }}>Resume</h1>
            <p className="resume-description" style={{ fontSize: '1.1rem', color: '#666', marginBottom: '10px' }}>
              Download my resume to learn more about my professional experience, skills, and education.
            </p>
            <a 
              href={resumeUrl}
              className="download-button"
              download="Anika_Mahns_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                display: 'inline-block',
                padding: '10px 25px',
                fontSize: '1.1rem',
                backgroundColor: '#0070f3',
                color: '#fff',
                borderRadius: '6px',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
            >
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume; 