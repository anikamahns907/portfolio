import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Pictures from './Pictures';
import Projects from './Projects';
import butterfly from './butterfly.jpeg';

ReactDOM.render(
  <Router>

    <div style={{ textAlign: "center" }}>
      <h6>"When a butterfly flutters its wings in one part of the world, it can eventually cause a hurricane in another" - <i>Chaos Theorist Edward Lorenz </i></h6>
      <img src={butterfly} width="300"
        height="300" alt="butterfly" />
      <center className="introText" >
        Throughout the past 17 years, my passion for computer science and photography have profoundly developed. Allocating these passions, I have coded this portfolio using React.JS, Cloudinary, Netlify, Virtual Studio Code, and other platforms. Clicking through, programmed projects and images throughout my five moves, each holding an unique perspective, are found.
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
  </Router>,
  document.getElementById("root")
);
