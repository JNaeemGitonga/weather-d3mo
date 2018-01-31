import React, {Component} from 'react';
import {connect} from 'react-redux';
import Search from './search';
import Marquee from './marquee';

class Nav extends Component {

    render() {

        const {ipweather} = this.props;

        let place;

        if(ipweather) {
            place = ipweather.city
            console.log(ipweather)            
        }

        return (

            <div className='nav'>
                <h1>Weather!</h1>
                <p>Looks like you're in {place}</p>
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