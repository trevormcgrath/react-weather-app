var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=0b3b3b58472a84afba688518b99d8d14&units=imperial';

// my api ID is: 0b3b3b58472a84afba688518b99d8d14

module.exports = {
	getTemp: function(location){
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestUrl).then(function(res){
			if (res.data.cod && res.data.message){
				throw new Error(res.data.message);	
			}else{
				return res.data.main.temp;
			}
		}, function(res){
			throw new Error(res.data.message);
		});
	}
}