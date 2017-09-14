import React from 'react';
import ReactDOM from 'react-dom';
import './greet.css';
import Weather from './components/Weather';

const Greeting = ({ name }) => {
	return (
		<p className="greet">
			Hello, {name}!
		</p>
	);
};

ReactDOM.render(<Weather />, document.getElementById('root'));
