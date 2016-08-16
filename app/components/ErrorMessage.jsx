var React = require('react');

var ErrorMessage = React.createClass({
	render: function(){
		return(
			<p>Error! City not found.</p>
		)
	}
})

module.exports = ErrorMessage;