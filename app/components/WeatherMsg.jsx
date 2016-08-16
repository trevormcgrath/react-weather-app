var React = require('react');

var WeatherMsg = React.createClass({
	render: function(){
		var location = this.props.location;
		var temp = this.props.temp;
		// Could also do:
		// var {temp, location} = this.props

		return(
			<p>It is {temp}&#8457; in {location}.</p>
		);
	}
});

module.exports = WeatherMsg;