import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Pictures from './Pictures';
import Projects from './Projects';

ReactDOM.render(
  <Router>
    <div style={{textAlign:"center"}}>
      <br/>
      <i className="introText" >
        Hi my name is Anika Mahns. This is my site. thanks for visting!
      </i>

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
