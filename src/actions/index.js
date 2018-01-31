import request from "superagent";

export const GET_WEATHER = 'GET_WEATHER';
export const get_weather = weather => ({
    type:GET_WEATHER,
    weather
});

export const CITY_CONDITION = 'CITY_CONDITION';
export const cityCondition = data => ({
    type:CITY_CONDITION,
    data
})

export const UPDATE_ERROR = 'UPDATE_ERROR';
export const updateError = error => ({
    type:UPDATE_ERROR,
    error
})

export const getCityDetails = (city,state) => dispatch => {
    request
        .get(`http://api.wunderground.com/api/379fd1456a7b17fc/conditions/q/${state}/${city}.json`)
        .then(res => {
            console.log(res)
            if(res.body.response.error){
               dispatch(updateError(`${res.body.response.error.description}. Please enter city with abbreviation! e.g., Clinton, NC`))
            }
            console.log(res.body.current_observation)
            dispatch(cityCondition(res.body.current_observation))
        })
        .catch(err => {
            console.error(err)
            // MAKE ACTION TO DISPLAY NOT FOUND MESSAGE
            //UPDATE REDUCER TO STORE THAT MESSAGE
        })
}

export const getCityDetailsZip = zip => dispatch => {
    request
        .get(`http://api.wunderground.com/api/379fd1456a7b17fc/geolookup/q/${zip}.json`)
        .then(res => {
            dispatch(getCityDetails(res.body.location.city,res.body.location.state))
        })
        .catch(err => {
            console.error(err)
            // MAKE ACTION TO DISPLAY NOT FOUND MESSAGE
            //UPDATE REDUCER TO STORE THAT MESSAGE
        })
}


export const getWeather = () => dispatch => {
    request 
        .get('http://api.wunderground.com/api/379fd1456a7b17fc/geolookup/q/autoip.json')
        .then(res => {
            dispatch(get_weather(res.body.location))
            const {city,state} = res.body.location;
            dispatch(getCityDetails(city,state))
        }).catch(err => {
            console.error(err)
        })
}  

export const UPDATE_TIME = 'UPDATE_TIME';
export const updateTime = time => ({
    type:UPDATE_TIME,
    time
})

export const testData = data => dispatch => {

}

export const typeOfSearch = data => dispatch => {

    if(/^\d+$/.test(data)) {
        dispatch(getCityDetailsZip(data))
    }
    else if (/^[A-Za-z,\W]+$/.test(data)) {

        let str = data.split(',')
        let str2= data.split(' ')

        if(str.length ===2){
            dispatch(getCityDetails(str[0],str[1]))
        }
        else if(str2.length === 2){
            dispatch(getCityDetails(str2[0],str2[1]))
        }
        else {
           dispatch(updateError('Please enter city with abbreviation! e.g., Clinton, NC'))
            ///CALL ON ERROR HANDLER MESSAGE: PLEASE ENTER CITY WITH ABBREVIATED STATE eg. Seattle, WA
        }
    }
    else {
        console.log('working else block', data)
        dispatch(updateError('Please enter city with abbreviation! e.g., Clinton, NC'))
        ///CALL ON ERROR HANDLER MESSAGE: PLEASE ENTER CITY WITH ABBREVIATED STATE eg. Seattle, WA

    }
}