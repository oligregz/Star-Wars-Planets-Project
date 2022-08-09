import PropTypes from 'prop-types';
import React from 'react';

function FilterInput(props) {
  const {
    value,
    handleChange,
  } = props;
  return (
    <input
      type="number"
      data-testid="value-filter"
      value={ value }
      onChange={ (event) => handleChange(event.target.value) }
    />
  );
}

FilterInput.propTypes = {
  handleChange: PropTypes.func,
  value: PropTypes.string,
}.isRequired;

export default FilterInput;
