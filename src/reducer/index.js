
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
        case 'GET_WEATHER':
            return Object.assign({}, state, {
                ipweather:action.weather
        })
        case 'UPDATE_TIME':
            return Object.assign({}, state, {
                time:action.time
            })
        case 'CITY_CONDITION':
            return Object.assign({}, state, {
                city:action.data,
                currentTemp:action.data.temp_f  
            })
        case 'UPDATE_ERROR':
            return Object.assign({}, state, {
                error:action.error,
                forecast:null
            })
        case 'UPDATE_FORECAST':
            return Object.assign({}, state, {
                forecast:action.forecast
            })
        case 'UPDATE_MARQUEE':
            return Object.assign({}, state, {
                marquee:action.marquee
            })
        case 'UPDATE_CITYNAME':
            return Object.assign({}, state,{
                cityName:action.city
            })  
        case 'UPDATE_CURRENTTEMP':
            return Object.assign({}, state, {
                currentTemp:action.temp
            })
        default:
            return state
    }
}

export default reducer;