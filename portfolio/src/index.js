import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Pictures from './Pictures';
import Projects from './Projects';
import Home from './Home';

ReactDOM.render(
  <Router>
    <div>
      <div className="menu-bar">
        <nav>
          <div className="menu">
            <NavLink exact={true} className="navLinkText hoverGeneral" activeClassName='linkActive' to="/">
              HOME
            </NavLink>
            <NavLink className="navLinkText hoverGeneral" activeClassName='linkActive' to="/projects">
              PROJECTS
            </NavLink>
            <NavLink className="navLinkText hoverGeneral" activeClassName='linkActive' to="/pictures">
              PICTURES
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
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
);
