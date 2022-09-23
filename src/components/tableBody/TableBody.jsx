import React, { useContext } from 'react';
import GlobalContext from '../../context/GloblaContext';

function TableBody() {
  const {
    data,
    search,
    filter,
  } = useContext(GlobalContext);
  const bodyArr = ['name', 'rotation_period', 'orbital_period', 'diameter', 'climate',
    'gravity', 'terrain', 'surface_water', 'population', 'films', 'created', 'edited',
    'url'];

  const filterManager = (infoData, searchValue, filterX) => {
    if (!infoData) return [];
    if (searchValue) {
      return infoData.results.filter((planets) => planets.name.includes(searchValue));
    }
    const { column, comparison, value } = filterX.filters.filterNumberValues[0];
    if ([column, comparison, value].every((value2) => value2 !== '')) {
      if (comparison === 'maior que') {
        return infoData.results.filter((planet) => planet[column] > Number(value));
      }
      if (comparison === 'menor que') {
        return infoData.results.filter((planet) => planet[column] < Number(value));
      }
      if (comparison === 'igual a') {
        return infoData.results.filter((planet) => planet[column] === value);
      }
    }
    return infoData.results;
  };

  const arrayAPI = filterManager(data, search, filter);

  return (
    <tbody>
      { arrayAPI.map((planet) => (
        <tr key={ planet.name }>
          { bodyArr.map((value, index) => (
            <td key={ `${index}_${value}` }>
              { planet[value] }
            </td>
          )) }
        </tr>
      )) }
    </tbody>
  );
}
export default TableBody;
