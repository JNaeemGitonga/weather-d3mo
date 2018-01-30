import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getWeather} from '../actions';
import DateTime from './date-time';
import Search from './search';

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
		</div>
		);
	}
}

export default connect()(App);
