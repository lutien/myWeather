import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { changeWeatherPeriod } from '../actions';

const WeatherPeriodButton = ({ text, period, checked, onChange }) => (
    <li className="myWeather__period-button">
        <input
          id={`toggle-${period}`} className="myWeather__button myWeather__button_switch"
          name="myWeatherPeriod" value={period} type="radio"
          checked={checked}
          onChange={() => onChange()}
        />
        <label htmlFor={`toggle-${period}`} className="myWeather__label-radio">{text}</label>
    </li>
);


WeatherPeriodButton.propTypes = {
    text: PropTypes.string,
    period: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
    return {
        checked: ownProps.period === state.period,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onChange: () => {
            dispatch(changeWeatherPeriod(ownProps.period));
        },
    };
};

const WeatherPeriodButtonCalculated = connect(
    mapStateToProps,
    mapDispatchToProps,
)(WeatherPeriodButton);


export default WeatherPeriodButtonCalculated;
