
export const initialState = {
    ipweather:null,
    prop:'random shit',
}


const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_WEATHER':
            return Object.assign({}, state, {
                ipweather:action.weather
        })
        default:
            return state
            
    }
}

export default reducer;