import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './main.css'

/*
	CSSTransition is a component:
	allowing CSS transitions to child elements entering / exiting the dom
*/
import { TransitionGroup, Transition } from 'react-transition-group';
import cx from 'classnames';
import './main.css';

function CirclesApp(props){
	//use this to hide on start 
  let [showBalloon, setShowBalloon] = React.useState(true)

  let [circles, setCircles] = React.useState([
      {cx: 50, cy: 50, fill: 'orange', r: '8'},
      {cx: 75, cy: 150, fill: 'orange', r: '8'},
      {cx: 125, cy: 75, fill: 'orange', r: '8'},
      {cx: 300, cy: 200, fill: 'orange', r: '8'},
    ])

  let [rtgStyles] = React.useState({
    entering: { transition: 'all 1550ms', fillOpacity: 0, r: 0 },
    entered:  { transition: 'all 1550ms', fillOpacity: 1 },
    exiting:  { transition: 'all 1550ms', fillOpacity: 1 },
    exited:  { transition: 'all 1550ms', fillOpacity: 0, r: 0 }
  });

  console.log('rtgStyles')
  console.log(rtgStyles)
  

  const toggle = () => {
    let newView = showBalloon == true ? false : true;
    let fourcs = [
      {cx: 50, cy: 50, fill: 'orange', r: '8'},
      {cx: 75, cy: 150, fill: 'orange', r: '8'},
      {cx: 125, cy: 75, fill: 'orange', r: '8'},
      {cx: 300, cy: 200, fill: 'orange', r: '8'},
    ]

    let twoCs = [
      {cx: 75, cy: 150, fill: 'orange', r: '8'},
      {cx: 300, cy: 200, fill: 'orange', r: '8'},
    ]

    let whichToShow = Object.keys(circles).length > 2 ? twoCs : fourcs
    setShowBalloon(newView)
    setCircles(whichToShow)
  };

  console.log('showBalloon')
  console.log(showBalloon)
  
    return (
      <div className="container">
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
        
        <svg width={750} height={400} className="svg-wrapper">
          <TransitionGroup className="rtg" component="g">
          {circles.map((c, idx) => (
            <Transition
              key={`circle-${idx}`}
              timeout={1550}
              classNames="rtg-circles"
              unmountOnExit
              onEntering={() => console.log('entering')}
              onEntered={() => console.log('entered')}
              onExiting={() => console.log('exiting')}
              onExited={() => console.log('exited')}
            >
              {state => (
                <circle {...circles[idx]} style={{...rtgStyles}}/>
              )}
            </Transition>
          ))}
          </TransitionGroup>
        </svg>
        <button
          className={cx('toggler', {
            'toggler--active': showBalloon,
          })}
          onClick={toggle}
        >
          Menu
        </button>
      </div>
    );
}

export default CirclesApp;
