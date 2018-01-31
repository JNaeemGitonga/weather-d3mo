import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateTime} from '../actions';
import moment from 'moment';

class DateTime extends Component {

    state = {
        date:''
    }

    componentWillMount() {
        this.startTime()
    }

    startTime = () => {
        let today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();
        m = this.checkTime(m);
        s = this.checkTime(s);
        this.setState({date:moment(today).format('MMM Do YY')})
        this.props.dispatch(updateTime(`${h}:${m}:${s}`));
        setTimeout(this.startTime, 500);
    }

    checkTime = i => {
        if (i < 10) {i = '0' + i}
        return i
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
        ipweather:state.ipweather,
        time:state.time,
    }
}
export default connect(mapStateToProps)(DateTime)