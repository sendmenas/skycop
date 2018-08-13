import React from 'react';
import PropTypes from 'prop-types';

const Data = ({option}) => (
    <div>
        <div>{option.id}</div>
        <div>{option.title}</div>
    </div>
);

Data.propTypes = {
    option: PropTypes.object.isRequired,
}

export default Data;