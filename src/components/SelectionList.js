import React from 'react';
import PropTypes from 'prop-types';

const SelectionList = ({ selections, onChange }) => (
    <select onChange={onChange}>
        {selections.map((item) => (
            <option
                key={item.id}
            >
                {item.title}
            </option>
        ))}
    </select>
);

SelectionList.propTypes = {
    selections: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default SelectionList;