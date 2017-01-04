import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import WeatherTile from './WeatherTile';

class WeatherTilesList extends React.Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.weatherList !== this.props.weatherList;
    }
    render() {
        return (
            <ul className={`myWeather__weather-list myWeather__weather-list_${this.props.period}`}>
                {this.props.weatherList.map(weather =>
                    <WeatherTile
                      key={weather.dt}
                      {...weather}
                    />,
                )}
            </ul>
        );
    }
}

WeatherTilesList.propTypes = {
    weatherList: PropTypes.arrayOf(PropTypes.shape()),
    period: PropTypes.string,
};

function mapStateToProps(state) {
    return {
        weatherList: state.weatherList,
        period: state.period,
    };
}

export default connect(mapStateToProps)(WeatherTilesList);
