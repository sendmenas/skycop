import React from 'react';
import PropTypes from 'prop-types';

const Data = ({option}) => (
    <table>
        <tbody>
            <tr>
                <td>ID</td>
                <td>{option.id}</td>
            </tr>
            <tr>
                <td>TITLE</td>
                <td>{option.title}</td>
            </tr>
        </tbody>
    </table>
);

Data.propTypes = {
    option: PropTypes.object.isRequired,
}

export default Data;