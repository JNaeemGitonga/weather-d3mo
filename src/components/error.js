import React, {Component} from 'react';
import {connect} from 'react-redux';



class Error extends Component{

    render() {

        const { error} = this.props

        return (
            <div className='error' >
                <p>{error}</p>
            </div>
        )
    }
} 
   
   

const mapStateToProps = state => {
    return {
        error:state.error
    }
}

export default connect(mapStateToProps)(Error)