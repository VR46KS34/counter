import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

//include styles library into the bundle
import './styles/index.css';
import './styles/counter.css';
//include componente Counter into the bundle

//include componente Bootstrap into the bundle
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import * as serviceWorker from './serviceWorker';

function Counter(props) {
    return (
      <div className="bigCounter">
        <div className="calendar"><i className="fa fa-clock-o"></i></div>
        <div className="four">{props.digitFour % 10 }</div>
        <div className="three">{props.digitThree % 10}</div>
        <div className="two">{props.digitTwo % 10}</div>
        <div className="one">{props.digitOne % 10}</div>
      </div>
    );
  }
  
  Counter.propTypes = {
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number
  };
  
  let counter = 0;
  
  setInterval(function(){
    const four = Math.floor(counter/1000);
    const three = Math.floor(counter/100);
    const two = Math.floor(counter/10);
    const one = Math.floor(counter/1);
    counter++;
    ReactDOM.render(
      <Counter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />,document.querySelector('#root')
    );
  }, 1000);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
