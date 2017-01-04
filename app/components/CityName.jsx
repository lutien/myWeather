import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const CityName = ({ cityName }) => (
    <div className="myWeather__city-block">
        <h1 className="myWeather__city-name">{cityName}</h1>
        {cityName &&
            <hr className="myWeather__line myWeather__line_city-name" />
        }
    </div>
);

CityName.propTypes = {
    cityName: PropTypes.string,
};

const mapStateToProps = (state) => {
    return {
        cityName: state.cityName,
    };
};

export default connect(mapStateToProps)(CityName);

