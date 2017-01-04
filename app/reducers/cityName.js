const cityName = (state = '', action) => {
    switch (action.type) {
        case 'SET_CITY_NAME':
            return action.cityName;

        case 'RECEIVE_WEATHER_DATA':
            switch (action.period) {
                case 'current':
                    return action.json.name;
                case 'forecast':
                    return action.json.city.name;
                default:
                    return '';
            }

        case 'RECEIVE_ERROR':
            return '';
        default:
            return state;
    }
};

export default cityName;

