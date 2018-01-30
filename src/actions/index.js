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

export const getCityDetails = (city,state) => dispatch => {
    // city.join
    request
        .get(`http://api.wunderground.com/api/379fd1456a7b17fc/conditions/q/${state}/${city}.json`)
        .then(res => {
            console.log(res.body.current_observation)
            dispatch(cityCondition(res.body.current_observation))
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
