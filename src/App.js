import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './main.css'

/*
	A component
	allows CSSTransition to elements entering / exiting the dom
*/
import { CSSTransition } from 'react-transition-group';
import cx from 'classnames';
import './main.css';

function App(props){
  let [showBalloon, setShowBalloon] = React.useState(false)

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
        {/*
    		-in is the condition, similar to 
    			{showBallon && ...}
			- timeout 
				is REQUIRED, in ms
			- classnames 
				is custom class
				allows interaction via css
			- unmountOnExit 
				removes from dom when left the dom
			- appear
		
			CLASSNAMES:
				ballon:
					 simple appear/hide
				ballon-appear:
					 more 
				balloon-ltr:
					 left-to-right animation
				balloon-show-init:
					appears on load with a fade-in
					without clcking the button

		*/}
        <CSSTransition
        	in={showBalloon}
        	timeout={1550}
        	classNames="ballon-ltr"
        	unmountOnExit>
          <div className="menu">
            <ul className="list">
              <li className="list-item">Home</li>
              <li className="list-item">Profile</li>
              <li className="list-item">Favorites</li>
              <li className="list-item">Sign out</li>
            </ul>
          </div>
        </CSSTransition>
      </div>
    );
}

export default App;
