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
import PlusLifecycleProps from './../PlusLifecycleProps'
import ShowHideListItems from './../ShowHideListItems'

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
  {
    to: '/singleComponentShowHide', 
    str: 'Single-Component Show/Hide',
    comp: SingleComponentShowHide
  },
  {
    to: '/singleWithAppear',
    str: 'Single-Component WITH appear',
    comp: SingleWithAppear
  },
  {
    to: '/plusLifecycleProps',
    str: 'Single-Component PLUS lifecycle props',
    comp: PlusLifecycleProps
  },
  {
    to: '/showHideListItems',
    str: 'Show & Hide List Items',
    comp: ShowHideListItems
  }
]

let theseLinks = [];
let theseRoutes = [];

links.forEach((l,i) => {
  theseLinks.push(<li key={`nav-link-${i}`}>
    <Link to={l.to}>{l.str}</Link>
  </li>)

  let ThisComp = l.comp
  theseRoutes.push(<Route 
    key={`nav-route-${i}`}
    path={l.to}>
      <ThisComp />
    </Route>)
})

const Mpa = () => (
  <Router>
      <div>
        <nav>
          <ul>
            {theseLinks}
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {theseRoutes}
          <Redirect push from='/*' to='/singleComponentShowHide' />
        </Switch>
      </div>
    </Router>
);
export default Mpa;