import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Projects from './Projects';
import Home from './Home';
import About from './About';
import Footer from './Footer';
import StudyAbroad from './StudyAbroad';
import Resume from './Resume';
import Pictures from './Pictures';

ReactDOM.render(
  <Router>
    <div>
      <div className="menu-bar">
        <nav>
          <NavLink exact={true} className="initials-logo" to="/">
            AM
          </NavLink>
          <div className="menu">
            <NavLink className="navLinkText hoverGeneral" activeClassName='linkActive' to="/projects">
              PROJECTS
            </NavLink>
            <NavLink className="navLinkText hoverGeneral" activeClassName='linkActive' to="/study-abroad">
              STUDY ABROAD
            </NavLink>
            <NavLink className="navLinkText hoverGeneral" activeClassName='linkActive' to="/pictures">
              PICTURES
            </NavLink>
            <NavLink className="navLinkText hoverGeneral" activeClassName='linkActive' to="/about">
              ABOUT
            </NavLink>
            <NavLink className="navLinkText resume-link" activeClassName='linkActive' to="/resume">
              RESUME
            </NavLink>
          </div>
        </nav>
      </div>
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
