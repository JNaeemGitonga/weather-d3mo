import React, {Component} from 'react';
import {connect} from 'react-redux';
import Search from './search';
import Marquee from './marquee';
import DateTime from './date-time';
import './css/nav.css';

class Nav extends Component {

    render() {

        const {ipweather} = this.props;

        let place;

        if(ipweather) {
            place = ipweather.city
        }

        return (

            <div className='nav'>
                <h1 className='app-name'>Weather!</h1>
                <DateTime />
                <p className='location-statement'>Looks like you're in... {place}</p>
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