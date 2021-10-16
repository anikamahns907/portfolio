import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Pictures from './Pictures';
import Projects from './Projects';

ReactDOM.render(
    <Router>
      <div>
        <nav>
          <div className = "menu" >
            <Link className="navLinkText hoverGeneral" to="/">
              PROJECTS
            </Link>
            <Link className="navLinkText hoverGeneral" to="/pictures">
              PICTURES
            </Link>
          </div>
        </nav>
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
