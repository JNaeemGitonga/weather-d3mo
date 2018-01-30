import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getWeather} from '../actions';
import './App.css';

class App extends Component {
	componentWillMount() {
		this.props.dispatch(getWeather())
	}

	render() {
		return (
		<div className="App">
			LOOK I work:
		</div>
		);
	}
}

export default connect()(App);
