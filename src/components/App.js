import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getWeather} from '../actions';
import DateTime from './date-time';
import Error from './error';
import Forecast from './forecast';
import Nav from './nav';

class App extends Component {
	componentWillMount() {
		this.props.dispatch(getWeather())
	}

	render() {
		return (
		<div className="App">
			<Nav />
			<DateTime />
			<Error />
			<Forecast />
		</div>
		);
	}
}

export default connect()(App);
