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
                <div className='app-name'>
                    <h1 className='el'>Weather!</h1>
                    <p className='location-statement el'>Looks like you're in... {place}</p>
                </div>
                <DateTime />
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