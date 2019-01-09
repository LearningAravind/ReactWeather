var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function (){
    return {
      isLoading: false
    }
  },
  handleSearch: function(location){
    var that = this;
    this.setState({isLoading: true});
    openWeatherMap.getTemp(location).then(function (data){
      that.setState({
        isLoading: false,
        location: data.list[0].name,
        temp: data.list[0].main.temp,
        country: data.list[0].sys.country
      });
    }, function(errorMessage){
      isLoading: false,
      alert(errorMessage);
    });
  },
  render: function(){
    var {isLoading, location, country, temp} = this.state;
    function renderMessage(){
      if(isLoading){
        return <h3>Featching weather...</h3>;
      }else if (location && country && temp){
        return <WeatherMessage location={location} temp={temp} country={country}/>;
      }
    }
    return(
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
