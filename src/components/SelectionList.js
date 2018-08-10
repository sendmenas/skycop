import React from 'react';
import PropTypes from 'prop-types';

let id = 0;

const SelectionList = ({ options, onChange }) => (
    <select onChange={(evt) => onChange(options.find(function(option) { if (evt.target.value === option.title) { return option; }}))}>
        {options.map((item) => (
            <option
                key={id++}
                value={item.title}
            >
                {item.title}
            </option>
        ))}
    </select>
);

SelectionList.propTypes = {
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default SelectionList;