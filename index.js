const React = require("react");
const ReactDOM = require("react-dom");
const fetch = require("isomorphic-fetch");

class AppContainer extends React.Component {
	componentDidMount() {
		// navigator.geolocation.getCurrentPosition(position => {
		// 	const { longitude, latitude } = position.coords;

		fetch(
			`https://www.metaweather.com/api/location/search/?lattlong=41.4532007,-85.7564007`,
			{ mode: "cors" }
		)
			.then(response => {
				console.log(response);
				return response.json();
			})
			.then(data => {
				console.log(data);
			})
			.catch(err => {
				console.log(err);
			});
		// https://www.metaweather.com/api/location/search/?lattlong=(latt),(long)
		// /api/location/(woeid)/(date)/
	}
	// }

	render() {
		return <p>Hello, {name}!</p>;
	}
}

ReactDOM.render(<AppContainer />, document.getElementById("gerby"));
