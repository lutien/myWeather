const weatherList = (state = '', action) => {
    switch (action.type) {
        case 'RECEIVE_ERROR':
            return action.errorText;
        case 'RECEIVE_WEATHER_DATA':
            return '';
        default:
            return state;
    }
};

export default weatherList;

