// import axios from 'axios';
var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'https://api.openweathermap.org/data/2.5/find?appid=6e9b9f7139ef3ebee28a6510cf60c341&units=metric';

module.exports = {
    getTemp: function (location){
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        return axios.get(requestUrl).then(function (res){
            if(res.status != 200) {
                throw new Error(res.data.message);
            } else {
                return res.data;
            }
        }, function(res){
            throw new Error(res.data.message);
        });
    }
}