import React, {Component} from 'react';
import {connect} from 'react-redux';

class DateTime extends Component {
    state = {
        time:'eat a dick',
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
        this.setState({time:`${h}:${m}:${s}`})
        setTimeout(this.startTime, 500);
    }

    checkTime = i => {
        if (i<10) {i = '0' + i}
        return i
    }

    render() {
        const {date, time} = this.state;
        const {ipweather} = this.props;
        
        return (
            <div className='date-time'>
                <p> {time}</p>
                <p> {date}</p>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        ipweather:state.ipweather
    }
}
export default connect(mapStateToProps)(DateTime)