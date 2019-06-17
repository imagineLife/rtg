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
	//use this to hide on start 
  // let [showBalloon, setShowBalloon] = React.useState(false)

  let [showBalloon, setShowBalloon] = React.useState(true)

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
        	CSSTransition props
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
				gives new classnamees on initial load:
			- enter
			- exit
				These can be FALSE (in case of dynamic transition toggling)
				this will not use the css assocated with the enter/exit classes
		
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
        	classNames="balloon-show-init"
        	unmountOnExit
        	appear
        	onEnter={() => console.log('onEnter')}
        	onEntering={() => console.log('onEntering')}
        	onEntered={() => console.log('onEntered')}
        	onExit={() => console.log('onExit')}
        	onExiting={() => console.log('onExiting')}
        	onExited={() => console.log('onExited')}>
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
