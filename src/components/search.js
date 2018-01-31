import React, {Component} from 'react';
import {connect} from 'react-redux';
import {typeOfSearch} from '../actions';
import './css/input.css';

class Search extends Component {

    render() {

        const {dispatch} = this.props;

        return(

            <form className='search-bar' onSubmit={e => {
                e.preventDefault()
                dispatch(typeOfSearch(this.textInput.value))
                console.log(typeof this.textInput.value)
                this.textInput.value = ''
            }}>

                <div className='input-field'>
                    <input type='text' 
                        className='input-box'
                        placeholder='enter city, state or zip code'
                        ref={input => this.textInput = input}
                    />
                </div>

                <div className='search-btn'>
                    <i className="fa fa-search link" type='submit' aria-hidden="true" onClick={
                        () => {
                            dispatch(typeOfSearch(this.textInput.value))
                            this.textInput.value = '' ;
                        }
                    }></i>
                </div>
                
            </form>
        )     
    }
}

export default connect()(Search)