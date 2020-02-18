/*
  HERE
  - single element shows/hides (menu)
  - *** WITH *** initial show animation
  - Wrapped in CSSTransition
		- set init show state to true
		- include appear prop on CT wrapper
		- css should have 
			balloon-appear 
			next-to the 
			balloon-enter
		- css should have 
			balloon-appear-active 
			next-to the 
			balloon-enter-active
*/

import React, { Component, useState } from 'react';
import { CSSTransition as CT } from 'react-transition-group';
import cx from 'classnames';
import './SingleWithAppear.css';

const SingleWithAppear = () => {
  const [showBalloon, setShowBalloon] = useState(true);

  const toggle = () => setShowBalloon(!showBalloon);


  return (
    <div className="container">
      <button
        className={cx('toggler', {
          'toggler--active': showBalloon,
        })}
        onClick={toggle}
      >
        Menu
      </button>
      <CT
        in={showBalloon}
        timeout={350}
        classNames="balloon"
        unmountOnExit
        appear
      >
        <div className="menu">
          <ul className="list">
            <li className="list-item">Home</li>
            <li className="list-item">Profile</li>
            <li className="list-item">Favorites</li>
            <li className="list-item">Sign out</li>
          </ul>
        </div>
      </CT>
    </div>
  );
}

export default SingleWithAppear;