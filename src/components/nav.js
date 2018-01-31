import React, {Component} from 'react';
import {connect} from 'react-redux';
import Search from './search';
import Marquee from './marquee';

class Nav extends Component {

    render() {
        return (
            <div className='nav'>
                <Search />
                <Marquee />
            </div>
        )
    }
}

export default connect()(Nav)