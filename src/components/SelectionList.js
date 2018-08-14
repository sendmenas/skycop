import React from 'react';
import PropTypes from 'prop-types';

let id = 0;

const SelectionList = ({ options, onChange }) => (
    <select onChange={onChange}>
        <option key={id} value='none'>Not selected</option>
        {options.map((item) => (
            <option
                key={++id}
                value={item.title}
            >
                {item.title}
            </option>
        ))}
    </select>
)

SelectionList.propTypes = {
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default SelectionList;