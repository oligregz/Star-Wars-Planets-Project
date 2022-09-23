import React, { useContext } from 'react';
import FilterInput from '../filterInput/FilterInput';
import FilterSelect from '../filterSelect/FilterSelect';
import GlobalContext from '../../context/GloblaContext';

import InputSearch from '../inputSearch/InputSearch';

function FilterHeader() {
  const {
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    filter,
  } = useContext(GlobalContext);

  const valuesArr = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  function filterColum(data) {
    const { filterNumberValues } = data.filters;
    return valuesArr.reduce((acc, curr) => {
      if (filterNumberValues.every((value2) => value2.column !== curr)) {
        acc.push(curr);
      }
      return acc;
    }, []);
  }

  return (
    <div className="headFilters">
        <InputSearch />
        <FilterSelect
          dataTestId="column-filter"
          value={ column }
          id="column"
          handleChange={ setColumn }
          valuesArray={ filterColum(filter) }
        />

        <FilterSelect
          dataTestId="comparison-filter"
          value={ comparison }
          id="comparison"
          handleChange={ setComparison }
          valuesArray={ [
            'maior que',
            'menor que',
            'igual a',
          ] }
        />
        <FilterInput
          value={ value }
          handleChange={ setValue }
        />
    </div>
  );
}
export default FilterHeader;
