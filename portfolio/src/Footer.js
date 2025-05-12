import React, { useState } from 'react';
import './index.css';

const Footer = () => {
  const [showEmails, setShowEmails] = useState(false);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2 className="footer-title">
            {'Let\'s Connect'.split('').map((char, index) => (
              <span key={index} className="title-char">{char}</span>
            ))}
          </h2>
          <div className="contact-links">
            <div className="email-container">
              <a 
                href="#" 
                className="contact-link"
                onClick={(e) => {
                  e.preventDefault();
                  setShowEmails(!showEmails);
                }}
              >
                Email
              </a>
              {showEmails && (
                <div className="email-dropdown">
                  <a href="mailto:anika.mahns@gmail.com" className="contact-link">anika.mahns@gmail.com</a>
                  <a href="mailto:anika_mahns@brown.edu" className="contact-link">anika_mahns@brown.edu</a>
                </div>
              )}
            </div>
            <a href="https://www.linkedin.com/in/anika-mahns-27a128211/" className="contact-link" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/anikamahns907" className="contact-link" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="/RESUME--Anika Mahns.pdf" className="contact-link" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-quote">
            <span className="quote-mark">"</span>
            <p>Rendering into reality.</p>
            <span className="quote-mark">"</span>
          </div>
          <div className="footer-decoration">
            <span className="decoration-dot">•</span>
            <span className="decoration-dot">•</span>
            <span className="decoration-dot">•</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;