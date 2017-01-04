import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchWeather, receiveCityNameFromGeoApi } from '../actions';
import WeatherPeriodButton from './WeatherPeriodButton';

class SearchField extends React.Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(receiveCityNameFromGeoApi());
    }
    render() {
        let input;
        return (
            <form
              className="myWeather__search-form"
              onSubmit={(e) => {
                  e.preventDefault();
                  if (!input.value.trim()) {
                      return;
                  }
                  this.props.dispatch(fetchWeather(input.value));
              }}
            >
                <input
                  className="myWeather__button myWeather__button_search"
                  type="submit" value="Search"
                />
                <ul className="myWeather__period-block">
                    <WeatherPeriodButton text="Current" period="current" />
                    <WeatherPeriodButton text="Forecast" period="forecast" />
                </ul>
                <input
                  className="myWeather__search-field"
                  type="text" name="cityName"
                  placeholder="Your city"
                  ref={(node) => {
                      input = node;
                  }}
                />
            </form>
        );
    }
}

SearchField.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

export default connect()(SearchField);
