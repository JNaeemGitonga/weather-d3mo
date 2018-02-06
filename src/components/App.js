import React, { Component } from 'react';
import {getWeather} from '../actions';
import {connect} from 'react-redux';
import City from './city';
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
			<City />
			<Forecast />
		</div>
		);
	}
}

export default connect()(App);
