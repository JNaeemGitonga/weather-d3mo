import React, {Component} from 'react';
import {connect} from 'react-redux';
import './css/marquee.css'

class Marquee extends Component {

    render() {
        return (
            <div className="marquee">
            <div>
              <span>You spin me right round, baby. Like a record, baby.</span>
              <span>You spin me right round, baby. Like a record, baby.</span>
            </div>
          </div> 
        )
    }
}

export default connect()(Marquee)