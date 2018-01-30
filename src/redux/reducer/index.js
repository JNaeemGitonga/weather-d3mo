export const state = {
    prop1:'look here'
}


const reducer = (state = state, action) => {
    switch(action.type){
        case 'ADD_IG_POST':
            return Object.assign({}, state, {
                igPost:action.post
            })
        default:
            return state 
    }
}

export default reducer;