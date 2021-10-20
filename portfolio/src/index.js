import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Pictures from './Pictures';
import Projects from './Projects';
import Particles from 'react-particles-js';


var s = {
  particles: {
    number: { value: 30, density: { enable: true, value_area: 300 } },
    color: { value: "#0C0800" },

    opacity: {
      value: 0,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 10, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#0C0800",
      opacity: 0.3,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.75,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
};



ReactDOM.render(
  <Router>
    <div>
      <Particles className=" particles" params={s} />
      <div className="cornerDiv">
          <p>Anika Mahns <br/> Toa Alta, Puerto Rico</p>
          
          </div>
      <div style={{ textAlign: "center" }}>

          <br/>        <br/>
          <br/>

          <center className="introText" >
          Throughout the past 17 years, my passion for computer science and photography have profoundly developed.Allocating these passions, I have coded this portfolio using React.JS, Cloudinary, Netlify, Virtual Studio Code, and other platforms.Clicking through, programmed projects and images throughout my five moves, each holding an unique perspective, are found.
          </center>

          <nav>

          <div className="menu" >
          <NavLink exact={true} className="navLinkText hoverGeneral" activeClassName='linkActive' to="/">
          PROJECTS
          </NavLink>
          <NavLink className="navLinkText hoverGeneral" activeClassName='linkActive' to="/pictures">
          PICTURES
          </NavLink>
          </div>
          </nav>
          <br /> <br />
          <Switch>
          <Route path="/pictures">
          <Pictures />
          </Route>
          <Route path="/">
          <Projects />
          </Route>
          </Switch>
          </div>
        </div>

      </Router>,
      document.getElementById("root")
      );
