import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

export default class Weather extends Component {
	constructor(props) {
		super(props);

		this.state = {
			latitude: 46.770439,
			longitude: 23.591423
		};
	}

	// async componentDidMount() {
	// 	const BASE_URL = 'https://www.metaweather.com/api/';
	// 	const SEARCH_URL = 'location/search/';
	// 	const LOCATION_URL = 'location/';
	// 	const LATTLONG_QUERY = `?lattlong=${this.state.latitude},${this.state.longitude}`
	// 	const SEARCH_QUERY = '?query=bucharest';

	// 	const response = await fetch(BASE_URL + SEARCH_URL + SEARCH_QUERY
	// 		, {
	// 		mode: 'no-cors'
	// 		}
	// 	);
	// 	if (response.statusCode !== 200) { 
	// 		console.log(response)
	// 		return;
	// 	}
	// 	const json = await response.json();

	// 	console.log(json);
	// }

	async componentDidMount() {
		const response = await fetch('http://localhost:3001/bucharest')
		if (!response.ok) return;
		const json = await response.json();
		console.log(json)
	}

	render() {
		return <p>foo</p>;
	}
}
