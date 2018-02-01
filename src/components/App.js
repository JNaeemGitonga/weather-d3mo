import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getWeather} from '../actions';

import Error from './error';
import Forecast from './forecast';
import Nav from './nav';
import './css/App.css';

class App extends Component {
	componentWillMount() {
		this.props.dispatch(getWeather())
	}

	render() {
		return (
		<div className="App">
			<Nav />
			
			<Error />
			<Forecast />
		</div>
		);
	}
}

export default connect()(App);
