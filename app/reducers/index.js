import { combineReducers } from 'redux';
import weatherList from './weatherList';
import cityName from './cityName';
import period from './period';
import errorText from './errorText';

const myWeatherApp = combineReducers({
    weatherList,
    cityName,
    period,
    errorText,
});

export default myWeatherApp;
