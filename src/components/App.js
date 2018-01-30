import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getWeather} from '../actions';
import DateTime from './date-time';

class App extends Component {
	componentWillMount() {
		this.props.dispatch(getWeather())
	}

	render() {
		return (
		<div className="App">
			LOOK I work:
			<DateTime />
		</div>
		);
	}
}

export default connect()(App);
