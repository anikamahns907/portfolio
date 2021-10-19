import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Pictures from './Pictures';
import Projects from './Projects';
import transparent from './transparent.gif';


ReactDOM.render(
  <Router>
    
    <div style={{textAlign:"center"}}>
      <center className="introText" >
        Throughout the past 17 years, my passion for computer science and photography have profoundly developed. Allocating these passions, I have coded this portfolio using React.JS, Cloudinary, Netlify, Virtual Studio Code, and other platforms. Clicking through, programmed projects and images throughout my five moves, each holding an unique perspective, are found.
      </center>
      <img src = {transparent} style={{width: 500, height: 100}} alt = "icon"></img>

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
      <br/> <br/>
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
