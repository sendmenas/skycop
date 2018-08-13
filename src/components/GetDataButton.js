import React from 'react';
import PropTypes from 'prop-types';

const GetDataButton = ({getData}) => (
    <button
        onClick={getData}
    >GET DATA</button>
);

GetDataButton.propTypes = {
    getData: PropTypes.func.isRequired,
}

export default GetDataButton;