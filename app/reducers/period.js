const period = (state = '', action) => {
    switch (action.type) {
        case 'SET_WEATHER_PERIOD':
            return action.period;
        default:
            return state;
    }
};

export default period;
