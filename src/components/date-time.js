import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateTime} from '../actions';
import moment from 'moment';
import './css/nav.css';

class DateTime extends Component {

    state = {
        date:''
    }

    componentWillMount() {
        this.startTime()
    }


    startTime = () => {
        let today = new Date();
        this.setState({date:moment(today).format('MMM Do YY')})
        this.props.dispatch(updateTime(moment(today.getTime()).format('LT')))
        setTimeout(this.startTime, 500);
    }


    render() {
        const {date} = this.state;
        const {time} = this.props;
        
        return (
            <div className='date-time'>
                <p className='date'> {date}</p>
                <p className='time'> {time}</p>
            </div>
        )
    } 
}
const mapStateToProps = state => {
    return {
        time:state.time
    }
}
export default connect(mapStateToProps)(DateTime)