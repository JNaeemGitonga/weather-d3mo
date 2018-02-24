import React, { Component } from 'react';
import {connect} from 'react-redux';
import './css/App.css';

class City extends Component {
	
	render() {
        
        const {cityName, currentTemp} = this.props;
 
        let city;

        if (cityName) {
            city = cityName
        }

		return (
		<div className="city-box">
			 <h2 className='current-city'  style={{fontSize:'x-large',marginTop:'40px'}}>{city} {currentTemp}&#8457;</h2>
		</div>
		);
	}
}

const mapStateToProps = state => {
    return {
        cityName:state.cityName,
        currentTemp:state.currentTemp
    }
}
export default connect(mapStateToProps)(City)