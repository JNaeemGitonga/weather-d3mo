import React, {Component} from 'react';
import {connect} from 'react-redux';
import './css/forecast.css';

class Forecast extends Component {

    render() {
        const {forecast} = this.props;
        let daily;
        if (forecast) {
            daily = forecast.map(day => {

                let name = `forecast-${day.period}`;

                return (
                    <div key={day.period} className={name} >
                            <ul>
                                <li><img src={day.icon_url} alt={day.icon}/></li>
                                <li>{day.date.weekday_short}</li>
                                <li>{day.date.month}/{day.date.day}</li>
                                
                                <li>Conditions: {day.conditions}</li>
                                <li>Hi: {day.high.fahrenheit}&#8457; / {day.high.celsius}&#8451;</li>
                                <li>Lo: {day.low.fahrenheit}&#8457; / {day.low.celsius}&#8451;</li>
                                
                                <li>Humidity: {day.avehumidity}</li><li>Wind: {day.maxwind.mph == -999 ? 'unavailable' : day.maxwind.mph + ' mph'}, {day.maxwind.dir == -999 ? 'unavailable' : day.maxwind.dir}</li>
                            </ul>
                        </div>
                    )
            })
        }

        return ( 
                <div className='forecast'>
                   
                    {daily}
                
                </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        forecast:state.forecast
    }
}
export default connect(mapStateToProps)(Forecast)