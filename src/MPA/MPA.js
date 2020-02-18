import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import SingleComponentShowHide from './../SingleCompShHd'
import SingleWithAppear from './../SingleWithAppear'

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

const links = [
  {to: '/singleComponentShowHide', str: 'Single-Component Show/Hide'},
  {to: '/singleWithAppear', str: 'Single-Component WITH appear'},
  {to: '/users', str: 'Users'}
]

const Mpa = () => (
  <Router>
      <div>
        <nav>
          <ul>
            {links.map((l,i) =>(
              <li key={`nav-link-${i}`}>
                <Link to={l.to}>{l.str}</Link>
              </li>
              ))}
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/singleComponentShowHide">
            <SingleComponentShowHide />
          </Route>

          <Route path="/singleWithAppear">
            <SingleWithAppear />
          </Route>

          <Redirect push from='/*' to='/singleComponentShowHide' />
        </Switch>
      </div>
    </Router>
);
export default Mpa;