var React = require('react');
var {Link,IndexLink} = require('react-router');

var Nav = () => {
	return(
		<div>
			<h2>Nav Component</h2>
			<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
			<Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About 1</Link>
			<Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples 2</Link>
		</div>
	);
}

module.exports = Nav;