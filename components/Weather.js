import React, { Component } from "react";
import fetch from "isomorphic-fetch";
import serialize from 'form-serialize'

export default class Weather extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search_param: 'moscow',
			result: []
		};
		this.onSubmit = this.onSubmit.bind(this);
	}

	async getFetch(param) {
		const response = await fetch(
			`http://localhost:3001/${param}`
		);
		if (!response.ok) return;
		const result = await response.json()
		console.log(result);
		this.setState({
			result
		});
	}

	onSubmit (e) {
		e.preventDefault();
		const form = serialize(e.target, {hash:true})
		console.log(form.value);
		this.setState({
			search_param: form.value
		});
		this.getFetch(form.value)
	};

	componentDidMount() {
		this.getFetch(this.state.search_param)
	}

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<input type="text" name='value' />
					<button type="submit">Get Weather</button>
				</form>
				<br />
				<p>Your weather:</p>
				{this.state.result[0] ? this.state.result[0].weather_state_name : null}
				<br />
			</div>
		);
	}
}
