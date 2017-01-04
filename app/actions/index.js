import config from '../config.json';

const receiveWeatherData = (json, period) => {
    return {
        type: 'RECEIVE_WEATHER_DATA',
        json,
        period,
    };
};

const getUrlApi = ({ position, cityName, state }) => {
    const period = state.period;
    const apiConfig = config.api;

    let url = `${apiConfig.url[period]}?units=${apiConfig.units}&APPID=${apiConfig.key}`;

    if (position && position.coords) {
        url += `&lat=${position.coords.latitude}&lon=${position.coords.longitude}`;
    } else if (cityName) {
        url += `&q=${cityName}`;
    }

    return url;
};

const receiveError = (e, type) => {
    console.warn(e.message);
    let errorText = '';
    switch (type) {
        case 'geoApiError': errorText = config.errorText.geoApi; break;
        default: errorText = config.errorText.default;
    }
    return {
        type: 'RECEIVE_ERROR',
        errorText,
    };
};

const fetchDataFromApi = data => (dispatch) => {
    const url = getUrlApi(data);

    return fetch(url)
        .then((response) => {
            if (response.status === 200) {
                return response;
            }

            throw Error(`Api error: ${response.status} - ${response.statusText}`);
        })
        .then(response => response.json())
        .then(json => dispatch(receiveWeatherData(json, data.state.period)))
        .catch(e => dispatch(receiveError(e, 'apiError')));
};

export const fetchWeather = cityName =>
(dispatch, getState) => dispatch(fetchDataFromApi({
    state: getState(),
    cityName,
}));

const geoApi = state => (dispatch) => {
    navigator.geolocation.getCurrentPosition(position =>
            dispatch(fetchDataFromApi({ position, state })),
        e => dispatch(receiveError(e, 'geoApiError')));
};

export const receiveCityNameFromGeoApi = () => (dispatch, getState) => dispatch(geoApi(getState()));

const setWeatherPeriod = (period) => {
    return {
        type: 'SET_WEATHER_PERIOD',
        period,
    };
};

export const changeWeatherPeriod = period => (dispatch, getState) => {
    dispatch(setWeatherPeriod(period));

    const state = getState();
    if (state.cityName) {
        dispatch(fetchDataFromApi({
            state: getState(),
            cityName: state.cityName,
        }));
    }
};
