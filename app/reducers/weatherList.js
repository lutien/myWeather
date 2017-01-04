const transformForecastData = (data) => {
    return {
        condition: data.weather[0].main,
        conditionId: data.weather[0].icon,
        temp: data.temp.day,
        tempMax: data.temp.max,
        tempMin: data.temp.min,
        dt: data.dt * 1000,
    };
};

const weatherList = (state = [], action) => {
    switch (action.type) {
        case 'RECEIVE_WEATHER_DATA':
            switch (action.period) {
                case 'current':
                    return [{
                        condition: action.json.weather[0].main,
                        conditionId: action.json.weather[0].icon,
                        temp: action.json.main.temp,
                        tempMax: action.json.main.temp_max,
                        tempMin: action.json.main.temp_min,
                        dt: Date.now(),
                    }];
                case 'forecast':
                    return action.json.list.map(transformForecastData);
                default:
                    return [];
            }

        case 'RECEIVE_ERROR':
            return [];
        default:
            return state;
    }
};

export default weatherList;
