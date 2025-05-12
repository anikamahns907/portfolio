import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Pictures from './Pictures';
import Projects from './Projects';
import Home from './Home';
import About from './About';
import Footer from './Footer';
import StudyAbroad from './StudyAbroad';
import Resume from './Resume';

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
      <Switch>
        <Route path="/pictures">
          <Pictures />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/study-abroad">
          <StudyAbroad />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  </Router>,
  document.getElementById('root')
);
