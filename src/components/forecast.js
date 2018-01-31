import React, {Component} from 'react';
import {connect} from 'react-redux';

class Forecast extends Component {

    render() {
        const {forecast} = this.props;
        let daily;
        if (forecast) {
            daily = forecast.map(day => {
                return (
                    <div key={day.period}>
                            <ul>
                                <li><img src={day.icon_url}/></li>
                                <li>{day.date.weekday_short}</li>
                                <li>{day.date.month}/{day.date.day}</li>
                                <li>Humidity: {day.avehumidity}</li>
                                <li>Conditions: {day.conditions}</li>
                            </ul>
                        </div>
                    )
            })
        }

        return ( 
                <div>
                   
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