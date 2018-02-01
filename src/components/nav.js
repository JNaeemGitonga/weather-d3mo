import React, {Component} from 'react';
import {connect} from 'react-redux';
import Search from './search';
import Marquee from './marquee';
import DateTime from './date-time';

class Nav extends Component {

    render() {

        const {ipweather} = this.props;

        let place;

        if(ipweather) {
            place = ipweather.city
        }

        return (

            <div className='nav'>
                <h1>Weather!</h1>
                <DateTime />
                <p>Looks like you're in... {place}</p>
                <Search />
                <Marquee />
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        ipweather:state.ipweather
    }
}

export default connect(mapStateToProps)(Nav)