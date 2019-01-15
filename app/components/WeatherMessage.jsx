import React from 'react'

var WeatherMessage = ({location, country, temp}) => {
  // var {location, country, temp} = props;
    return(
      <h3 className="text-center">It's it {temp} in {location}, {country}. </h3>
    );
};
module.exports = WeatherMessage;
