import React from 'react';

import ErrorField from './ErrorField';
import SearchField from './SearchField';
import CityName from './CityName';
import WeatherTilesList from './WeatherTilesList';

const MyWeather = () => (
    <div className="myWeather">
        <SearchField />
        <ErrorField />
        <CityName />
        <WeatherTilesList />
    </div>
);

export default MyWeather;
