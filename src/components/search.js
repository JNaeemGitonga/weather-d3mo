import React, {Component} from 'react';
import {typeOfSearch} from '../actions';
import {connect} from 'react-redux';
import './css/input.css';

class Search extends Component {

    render() {

        const {dispatch} = this.props;

        return(

            <form className='search-bar' onSubmit={e => {
                e.preventDefault()
                dispatch(typeOfSearch(this.textInput.value))
                this.textInput.value = ''
            }}>

                <div className='input-field search'>
                    <input type='text' 
                        className='input-box '
                        placeholder='enter city, state or zip code e.g. Clinton, NC '
                        ref={input => this.textInput = input}
                    />
                </div>

                <div className='search-btn search'>
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