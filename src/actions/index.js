import request from "superagent";

export const GET_WEATHER = 'GET_WEATHER';
export const get_weather = weather => ({
    type:GET_WEATHER,
});

export const getWeather = () => dispatch => {
    request 
        .get('/http://api.wunderground.com/api/379fd1456a7b17fc/geolookup/q/autoip.json')
        .then(data => console.log(data))
} 