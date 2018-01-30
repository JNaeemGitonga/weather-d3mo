
export const initialState = {
    ipweather:null,
    time:'',
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
        default:
            return state
    }
}

export default reducer;