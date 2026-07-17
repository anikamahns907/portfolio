import React from "react";
import "./index.css";

const resumeUrl = "/Resume.pdf";

const Resume = () => {
  return (
    <div className="journey-shell">
      <div className="journey-page resume-page">
        <header className="journey-hero">
          <h1 className="journey-title">Resume</h1>
          <div className="journey-story">
            <p>
              Download my resume for experience, skills, and education.
            </p>
          </div>
          <a
            href={resumeUrl}
            className="download-button"
            download="Anika_Mahns_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download PDF
          </a>
        </header>
      </div>
    </div>
  );
};

export default Resume;
