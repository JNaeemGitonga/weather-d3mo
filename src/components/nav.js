import React, {Component} from 'react';
import {connect} from 'react-redux';
import Search from './search';

class Nav extends Component {

    render() {
        return (
            <div className='nav'>
                <Search />
            </div>
        )
    }
}

export default connect()(Nav)