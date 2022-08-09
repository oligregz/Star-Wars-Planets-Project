import React, { useContext } from 'react';
import FilterInput from './FilterInput';
import FilterSelect from './FilterSelect';
import GlobalContext from '../context/GloblaContext';
import Button from './Button';

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
    <div>
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
      <Button />
    </div>
  );
}
export default FilterHeader;
