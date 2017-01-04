import React, { PropTypes } from 'react';
import Icon from './Icon';
import iconsCondition from '../iconsCondition';

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function addSymbolDegree(deg) {
    return deg !== undefined ? `${deg}°` : '';
}

function getIcon(idCondition) {
    return iconsCondition[parseInt(idCondition, 10)];
}

function getDateString(timestamp) {
    const date = new Date(timestamp);
    const month = date.getMonth() + 1;
    const monthString = (month < 10 ? `0${month}` : `${month}`);
    return `${date.getDate()}.${monthString}`;
}

function getWeekDay(timestamp) {
    return `${weekDays[new Date(timestamp).getDay()]}`;
}

const WeatherTile = ({ dt, temp, tempMin, tempMax, condition, conditionId }) => {
    return (
        <li className="myWeather__tile">
            <hr className="myWeather__line" />
            <div className="myWeather__wrap-tile">
                <h3 className="myWeather__day">
                    {getDateString(dt)}
                    <br />
                    {getWeekDay(dt)}
                </h3>
                <div className="myWeather__temp">
                    {addSymbolDegree(Math.round(temp))}
                    <div
                      className="myWeather__temp-interval"
                      data-temp-min={addSymbolDegree(Math.round(tempMin))}
                      data-temp-max={addSymbolDegree(Math.round(tempMax))}
                    />
                </div>
                <div className="myWeather__condition">
                    <Icon glyph={getIcon(conditionId)} className="myWeather__condition-icon" />
                    {condition}
                </div>
            </div>
        </li>
    );
};

WeatherTile.propTypes = {
    dt: PropTypes.number,
    condition: PropTypes.string,
    conditionId: PropTypes.string,
    temp: PropTypes.number,
    tempMax: PropTypes.number,
    tempMin: PropTypes.number,
};

export default WeatherTile;
