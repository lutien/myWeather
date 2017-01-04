import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const ErrorField = ({ errorText }) => (
    <div className="myWeather__error-text">
        {errorText &&
            <i className="myWeather__error-icon" />
        }
        {errorText}
    </div>
);

ErrorField.propTypes = {
    errorText: PropTypes.string,
};

const mapStateToProps = (state) => {
    return {
        errorText: state.errorText,
    };
};

export default connect(mapStateToProps)(ErrorField);
