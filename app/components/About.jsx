// var React = require('react');
import React from 'react'
// import * as CONATANT from './constants'  //CONATANT.COMPONENT_NAME
// import {} from './constants'

import Details from './Details.js'

var About = (props) =>{
  return(
    <div>
      <h1 className="text-center">About</h1>
      <p>
        This is a weather application build on React. I have built this 
        for The Complete React Web Developer Cource.
      </p>
      <p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a> - This was the 
            JavaScript framework used.
          </li>
          <li>
            <a href="http://openweathermap.org">Open Weather Map</a> - I used 
            Open Weather Map to seatch for weather data by city name.
          </li>
        </ul>
      </p>
    </div>
  );
};

module.exports = About;
