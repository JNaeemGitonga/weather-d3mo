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

export const UPDATE_CITYNAME = 'UPDATE_CITYNAME';
export const updateCityName = city => ({
    type:UPDATE_CITYNAME,
    city
})

export const getCityDetails = (city,state) => dispatch => {
    console.log(city,state)
    request
        .get(`http://api.wunderground.com/api/379fd1456a7b17fc/conditions/q/${state}/${city}.json`)
        .then(res => {
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
    
    dispatch(updateForecast(''))
    dispatch(updateError(''))
    request
        .get(`http://api.wunderground.com/api/379fd1456a7b17fc/forecast10day/q/${state}/${city}.json`)
        .then(res => {
            if(res.body.response.error){
                dispatch(updateError(`${res.body.response.error.description}. Please enter city with abbreviation! e.g., Clinton, NC`))
            }
            else {
                if (Object.keys(res.body).length === 1){
                    dispatch(updateError('Seems like there are multiple cities matching your search. Try refining it with a City, State name and abbreviation!'))
                }
                else if (res.body.hasOwnProperty('response') && res.body.hasOwnProperty('forecast')) {
                    let forecast = res.body.forecast.simpleforecast.forecastday
                    let txt = res.body.forecast.txt_forecast.forecastday[0].fcttext
                    dispatch(updateForecast(forecast.splice(0,5)))
                    dispatch(updateCityName(_toTitleCase(city)))
                    dispatch(updateMarquee(`In ${_toTitleCase(city)}: ${txt}`))
                }
                else {
                    dispatch(updateError('Opps! Something when wrong. Please try your search again!'))
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

