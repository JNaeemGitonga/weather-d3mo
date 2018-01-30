
export const initialState = {
    ipweather:null,
    time:'',
    city:null
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
                city:action.data
            })
        default:
            return state
    }
}

export default reducer;