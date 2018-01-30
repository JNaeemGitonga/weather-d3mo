import request from "superagent";

export const GET_WEATHER = 'GET_WEATHER';
export const get_weather = weather => ({
    type:GET_WEATHER,
    weather
});

export const getWeather = () => dispatch => {
    request 
        .get('http://api.wunderground.com/api/379fd1456a7b17fc/geolookup/q/autoip.json')
        .then(res => {
                console.log(res.body)
            dispatch(get_weather(res.body.location))
            console.log('wtf')
        }).catch(err => {
            console.error(err)
        })
}  