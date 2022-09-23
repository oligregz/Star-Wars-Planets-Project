import React from 'react';
import PropTypes from 'prop-types';

function FilterSelect(props) {
  const {
    value,
    handleChange,
    dataTestId,
    valuesArray,
    id,
  } = props;
  return (
    <select
      data-testid={ dataTestId }
      value={ value }
      id={ id }
      onChange={ (event) => handleChange(event.target.value) }
    >
      {valuesArray.map((values, index) => (
        <option key={ index } value={ values }>{ values }</option>
      ))}
    </select>
  );
}

FilterSelect.propTypes = {
  dataTestId: PropTypes.string,
  handleChange: PropTypes.func,
  value: PropTypes.string,
  valuesArray: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.string,
}.isRequired;

export default FilterSelect;
