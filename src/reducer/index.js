import * as a from '../actions';

export const initialState = {
    ipweather:null,
    time:'',
    city:null,
    error:'',
    forecast:null,
    marquee:'',
    cityName:'',
    currentTemp:''
} 

const reducer = (state = initialState, action) => {
    switch(action.type){
        case a.GET_WEATHER:
            return Object.assign({}, state, {
                ipweather:action.weather
        })
        case a.UPDATE_TIME:
            return Object.assign({}, state, {
                time:action.time
            })
        case a.CITY_CONDITION:
            return Object.assign({}, state, {
                city:action.data,
                currentTemp:action.data.temp_f  
            })
        case a.UPDATE_ERROR:
            return Object.assign({}, state, {
                error:action.error,
                forecast:null
            })
        case a.UPDATE_FORECAST:
            return Object.assign({}, state, {
                forecast:action.forecast
            })
        case a.UPDATE_MARQUEE:
            return Object.assign({}, state, {
                marquee:action.marquee
            })
        case a.UPDATE_CITYNAME:
            return Object.assign({}, state,{
                cityName:action.city
            })  
        case a.UPDATE_CURRENTTEMP:
            return Object.assign({}, state, {
                currentTemp:action.temp
            })
        default:
            return state
    }
}

export default reducer;