import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getWeather} from '../actions';
import DateTime from './date-time';
import Error from './error';
import Search from './search';
import Forecast from './forecast';

class App extends Component {
	componentWillMount() {
		this.props.dispatch(getWeather())
	}

	render() {
		return (
		<div className="App">
			LOOK I work:
			<DateTime />
			<Search />
			<Error />
			<Forecast />
		</div>
		);
	}
}

export default connect()(App);
