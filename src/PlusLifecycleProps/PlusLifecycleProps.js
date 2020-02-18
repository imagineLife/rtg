/*
  HERE
  single element shows/hides (menu)
  Wrapped in CSSTransition

*/

import React, { Component, useState } from 'react';
import { CSSTransition as CT } from 'react-transition-group';
import cx from 'classnames';
import './PlusLifecycleProps.css';

const PlusLifecycleProps = () => {
  const [showBalloon, setShowBalloon] = useState(false);
  const [highlightedMenuItem, setHighlightedMenuItem] = useState(false)

  const toggle = () => setShowBalloon(!showBalloon);

  const toggleHighlightedMenuItem = () => setHighlightedMenuItem(!highlightedMenuItem)

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
        onEntered={toggleHighlightedMenuItem}
        onExit={toggleHighlightedMenuItem}
      >
        <div className="menu">
          <ul className="list">
            <li className="list-item">Home</li>
            <li
                className={`list-item ${highlightedMenuItem === true && 'list-item--active'}`}
              >
                Profile
              </li>
            <li className="list-item">Favorites</li>
            <li className="list-item">Sign out</li>
          </ul>
        </div>
      </CT>
    </div>
  );
}

export default PlusLifecycleProps;