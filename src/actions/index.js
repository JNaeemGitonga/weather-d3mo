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

export const UPDATE_FORECAST = 'UPDATE_FORECAST';
export const updateForecast = forecast => ({
    type:UPDATE_FORECAST,
    forecast
})

export const UPDATE_MARQUEE = 'UPDATE_MARQUEE';
export const updateMarquee = marquee => ({
    type:UPDATE_MARQUEE,
    marquee
}) 

export const getCityDetails = (city,state) => dispatch => {
    console.log(city,state)
    request
        .get(`http://api.wunderground.com/api/379fd1456a7b17fc/conditions/q/${state}/${city}.json`)
        .then(res => {
            // console.log(res)
            if(res.body.response.error){
               return dispatch(updateError(`${res.body.response.error.description}. Please enter city with abbreviation! e.g., Clinton, NC`))
            }
            else {
                dispatch(cityCondition(res.body.current_observation))
                dispatch(getForecast(city,state))
            }
           
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
const  _toTitleCase = str => {
    return str.replace(/\w\S*/g, txt => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

export const getForecast = (city,state) => dispatch => {

    /*
        here we have an issue, if you type in Atlanta, asfdasdfasd 
        you will get back an array of cities named atlanta but it will also 
        also 
    
    
    */
    dispatch(updateForecast(''))
    dispatch(updateError(''))
    request
        .get(`http://api.wunderground.com/api/379fd1456a7b17fc/forecast10day/q/${state}/${city}.json`)
        .then(res => {
            console.log(res)
            if(res.body.response.error){
                dispatch(updateError(`${res.body.response.error.description}. Please enter city with abbreviation! e.g., Clinton, NC`))
            }
            else {
                console.log(res.body.forecast)
                if (!res.body.forecast.hasOwnProperty('simpleforecast')){
                    dispatch(updateError('There may have been multiple cities matching your search. Please try again!'))
                }
                else {
                    let forecast = res.body.forecast.simpleforecast.forecastday
                    let txt = res.body.forecast.txt_forecast.forecastday[0].fcttext
                    let today = forecast[0];
                    dispatch(updateForecast(forecast.splice(0,5)))
                    // dispatch(updateMarquee(`Today in ${toTitleCase(city)} it is "${today.conditions}" with a high of ${today.high.fahrenheit}°F and a low of ${today.low.fahrenheit}°F!`))
                    dispatch(updateMarquee(`In ${_toTitleCase(city)}: ${txt}`))
                }
                
            }
        })
        .catch(err => {
            console.error(err)
        })
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
        }
    }
    else {
        console.log('working else block', data)
        dispatch(updateError('Please enter city with abbreviation! e.g., Clinton, NC'))
        ///CALL ON ERROR HANDLER MESSAGE: PLEASE ENTER CITY WITH ABBREVIATED STATE eg. Seattle, WA

    }
}

