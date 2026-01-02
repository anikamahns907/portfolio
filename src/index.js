import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import Projects from './Projects';
import Home from './Home';
import About from './About';
import Footer from './Footer';
import StudyAbroad from './StudyAbroad';
import Resume from './Resume';
import Pictures from './Pictures';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scroll when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  // Close menu when route changes
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  // Close menu on window resize if it becomes desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        closeMenu();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  return (
    <div className="menu-bar">
      <nav>
        <NavLink exact={true} className="initials-logo" to="/" onClick={closeMenu}>
          AM
        </NavLink>
        <button className="hamburger-menu" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={isMenuOpen ? 'hamburger-line open' : 'hamburger-line'}></span>
          <span className={isMenuOpen ? 'hamburger-line open' : 'hamburger-line'}></span>
          <span className={isMenuOpen ? 'hamburger-line open' : 'hamburger-line'}></span>
        </button>
        <div className={`menu ${isMenuOpen ? 'menu-open' : ''}`}>
          <NavLink className="navLinkText hoverGeneral" activeClassName='linkActive' to="/projects" onClick={closeMenu}>
            PROJECTS
          </NavLink>
          <NavLink className="navLinkText hoverGeneral" activeClassName='linkActive' to="/study-abroad" onClick={closeMenu}>
            STUDY ABROAD
          </NavLink>
          <NavLink className="navLinkText hoverGeneral" activeClassName='linkActive' to="/pictures" onClick={closeMenu}>
            PICTURES
          </NavLink>
          <NavLink className="navLinkText hoverGeneral" activeClassName='linkActive' to="/about" onClick={closeMenu}>
            ABOUT
          </NavLink>
          <NavLink className="navLinkText resume-link" activeClassName='linkActive' to="/resume" onClick={closeMenu}>
            RESUME
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

ReactDOM.render(
  <Router>
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/study-abroad" element={<StudyAbroad />} />
        <Route path="/pictures" element={<Pictures />} />
      </Routes>
      <Footer />
    </div>
  </Router>,
  document.getElementById('root')
);
