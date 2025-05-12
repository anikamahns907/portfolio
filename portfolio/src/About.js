import React, { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import brownLogo from './brown-logo.jpg'; // Ensure this is the new Brown logo
import './index.css';

const placesLived = [
  { key: 'ALASKA', label: 'Alaska', years: 'Born', description: 'Where my journey began.' },
  { key: 'KENT ISLAND', label: 'Maryland', years: 'Childhood', description: 'Grew up surrounded by water and nature.' },
  { key: 'PUERTO RICO', label: 'Puerto Rico', years: 'Adventure', description: 'Immersed in vibrant culture and language.' },
  { key: 'TOKYO', label: 'Tokyo', years: 'Exploration', description: 'Explored technology and tradition in Japan.' },
  { key: 'URBANA', label: 'Los Angeles', years: 'Growth', description: 'Experienced the energy of the West Coast.' },
  { key: 'PROVIDENCE', label: 'Providence', years: 'Present', description: 'Currently studying at Brown University.' },
];

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = aboutRef.current.querySelectorAll('.about-brief-row, .about-interests');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="mainDiv">
      <div className="decor-shape"></div>
      <div className="about-section">
        <div className="about-content" ref={aboutRef}>
          <div className="about-header">
            <h1 className="about-title">About Me</h1>
          </div>

          <div className="about-brief-row">
            <div className="about-brief-text">
              <div className="typewriter-intro">
                <Typewriter
                  options={{
                    strings: [
                      "Software Engineer at Brown University",
                      "Full-stack Developer",
                      "Problem Solver",
                      "Technical Innovator"
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 40,
                    deleteSpeed: 30,
                    pauseFor: 1800
                  }}
                />
              </div>
              <p className="about-intro">
                I'm a Software Engineer and Computer Scientist currently studying at Brown University, passionate about building impactful technology solutions. 
              </p>
              <blockquote className="quote-box">
                Building technology that makes a difference.
              </blockquote>
              <p className="about-intro">
                Currently working on innovative projects that combine technical excellence with practical applications. I'm particularly interested in developing scalable solutions and creating intuitive user experiences.
              </p>
              <p className="about-intro">
                <a href="mailto:anika_mahns@brown.edu" style={{ color: '#000', textDecoration: 'underline' }}>→ anika_mahns@brown.edu</a>
              </p>
            </div>
            <div className="brown-logo-container">
              <img src={brownLogo} alt="Brown University Logo" className="brown-logo" />
            </div>
          </div>

          <div className="about-interests">
            <h2>Beyond the Screen</h2>
            <div className="interests-grid">
              <div className="interest-card">
                <h3>
                  <i className="fas fa-music"></i> Music Vibes
                </h3>
                <p>Currently obsessed with <a href="https://open.spotify.com/user/anikaaaa.m?si=209f57c4f145429a" target="_blank" rel="noopener noreferrer" style={{ color: '#000', textDecoration: 'underline' }}>Spotify</a> playlists that mix indie rock with electronic beats. Always on the hunt for new artists!</p>
              </div>
              <div className="interest-card">
                <h3>
                  <i className="fas fa-camera"></i> Photography
                </h3>
                <p>Capturing moments through my lens, from urban landscapes to nature's beauty. Check out my <a href="/pictures" style={{ color: '#000', textDecoration: 'underline' }}>travel gallery</a>!</p>
              </div>
              <div className="interest-card">
                <h3>
                  <i className="fas fa-palette"></i> Art & Origami
                </h3>
                <p>Whether it's folding cranes, or fine line pen drawings, I love creating artistic things. It grounds me.</p>
              </div>
              <div className="interest-card">
                <h3>
                  <i className="fas fa-running"></i> Movement
                </h3>
                <p>Staying active through strength training, running, and climbing. Whether it's lifting weights, hitting the trails, or scaling walls, I love challenging my body in different ways.</p>
              </div>
              <div className="interest-card">
                <h3>
                  <i className="fas fa-lightbulb"></i> Scrappy Creator
                </h3>
                <p>I love building and creating things from scratch. Whether it's coding, art, or solving problems, I'm always up for the challenge of making something new.</p>
              </div>
            </div>
          </div>

          <div className="about-interests" style={{ marginTop: '80px' }}>
            <h2>Areas of Expertise</h2>
            <div className="interests-grid">
              <div className="interest-card">
                <h3>Technical Expertise</h3>
                <p>Full-stack development with React.js, JavaScript, and Vue.js. Experience with TypeScript, Node.js, and RESTful APIs. Proficient in database management and microservices architecture.</p>
              </div>
              <div className="interest-card">
                <h3>Industry Experience</h3>
                <p>Summer internship at Fidelity Investments, working on the Workforce Connect platform. Led frontend development, API integration, and enhanced UI/UX using Vue.js and TypeScript.</p>
              </div>
              <div className="interest-card">
                <h3>Problem Solving</h3>
                <p>Developed solutions ranging from AWS-powered platforms to Chaos Theory applications. Focus on creating scalable, maintainable systems with robust testing and quality assurance.</p>
              </div>
              <div className="interest-card">
                <h3>Collaboration</h3>
                <p>Experienced in Agile methodologies, team collaboration, and cross-functional communication. Skilled at bridging technical and business requirements to deliver impactful solutions.</p>
              </div>
            </div>
          </div>
        </div>
        <a href="mailto:anika_mahns@brown.edu" className="sticky-contact">
          Let's Connect
        </a>
      </div>
    </div>
  );
};

export default About; 