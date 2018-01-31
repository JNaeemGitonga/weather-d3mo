import React, {Component} from 'react';
import {connect} from 'react-redux';
import './css/marquee.css'

class Marquee extends Component {

    render() {
        const {marquee} = this.props;

        return (
            <div className="marquee">
            <div>
              <span>{marquee}</span>
              <span>{marquee}</span>
            </div>
          </div> 
        )
    }
}

const mapStateToProps = state => {
    return {
        marquee:state.marquee
    }
}
export default connect(mapStateToProps)(Marquee)