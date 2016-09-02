var React = require('react');

var WeatherMsg = ({temp, location}) => {
	return(
		<p>It is {temp}&#8457; in {location}.</p>
	);
}

module.exports = WeatherMsg;

/***

This is the old version, the tutorial had the above way of re-factoring the code


var WeatherMsg = (props) => {
	var {temp, location} = props

	return(
		<p>It is {temp}&#8457; in {location}.</p>
	);
}

***/

// Ok so quick explaination on this --> var {temp, location} = this.props from the instructor

	//var {temp, location} = props
	// --> is the same thing as the following:
	//var location = props.location;
	//var temp = props.temp;
	// ...it's just a fancy shorthand for ES6