import React, { PropTypes } from 'react';

const Icon = ({ glyph, width = 16, height = 16, className = 'icon' }) => {
    return (
        <svg className={className} width={width} height={height}>
            <use xlinkHref={glyph} />
        </svg>
    );
};

Icon.propTypes = {
    glyph: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    className: PropTypes.string,
};

export default Icon;

