var React = require('react');

var WeatherForm = React.createClass({
	onFormSubmit: function(e){
		e.preventDefault();

		var location = this.refs.location.value;

		if(location.length > 0){
			this.refs.location.value = '';
			this.props.onSearch(location);	//pass in the location the user searched for
		}

	},
	render: function(){
		return(
			<div>
				<form onSubmit={this.onFormSubmit}>
					<input type="text" ref="location" placeholder="Enter a city. (eg: San Diego, London, etc...)" />
					<button>Search</button>
				</form>
			</div>
		);
	}
});

module.exports = WeatherForm;