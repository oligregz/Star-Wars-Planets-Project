import React, { useContext } from 'react';
import GlobalContext from '../../context/GloblaContext';
import "./style.css";

function Button() {
  const {
    filter,
    setFilter,
    column,
    comparison,
    value,
  } = useContext(GlobalContext);

  function validation(id) {
    return document.getElementById(id).value;
  }

  function filterVerify(values) {
    values.setFilter({
      filters: {
        ...values.filter.filters,
        filterNumberValues: [
          {
            column: values.column || validation('column'),
            comparison: values.comparison || validation('comparison'),
            value: values.value,
          },
          ...values.filter.filters.filterNumberValues,
        ],
      },
    });
  }

  return (
    <button
      className='btn fifth'
      data-testid="button-filter"
      type="button"
      onClick={ () => filterVerify({
        filter,
        setFilter,
        column,
        comparison,
        value,
      }) }
    >
      Filtrar
    </button>

  );
}

export default Button;
