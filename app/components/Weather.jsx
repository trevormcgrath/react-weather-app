var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMsg = require('WeatherMsg');
var openWeatherMap = require('openWeatherMap');
var Loading = require('Loading');
var ErrorMessage = require('ErrorMessage');


var Weather = React.createClass({
	getInitialState: function(){
		return{
			isLoading: false,
			isError:false
		}
	},
	handleSearch: function(location){ //open weather map API here
		var that = this;

		this.setState({isLoading: true});
		

		openWeatherMap.getTemp(location).then(function(temp){
			that.setState({
				location: location,
				temp: temp
			});
			that.setState({isLoading: false});
		}, function(errorMessage){
			that.setState({isError: true});
		});
	},
	render: function(){
		var location = this.state.location;
		var temp = this.state.temp;
		var isLoading = this.state.isLoading;
		var isError = this.state.isError;

		/*function renderMessage(){
			while(isLoading===true){
				if(temp===undefined && location===undefined){
					return <Loading/>
				}else if(temp!=undefined && location!=undefined){
					return <WeatherMsg location={location} temp={temp}/>;
				}
			}
		}*/
		function renderMessage(){
			if(isError===true){
				return <ErrorMessage/>;
			}else if(isLoading===true){
				return <Loading/>;
			}else if(temp && location){
				return <WeatherMsg location={location} temp={temp}/>;
			}
		}


		return(
			<div>
				<h3>Weather component</h3>
				<WeatherForm onSearch={this.handleSearch} />
				{renderMessage()}
			</div>
		);
	}
});

module.exports = Weather;