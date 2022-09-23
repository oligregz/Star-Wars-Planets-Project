import React, { useContext } from 'react';
import GlobalContext from '../../context/GloblaContext';

function InputSearch() {
  const { search, setSearch } = useContext(GlobalContext);
  return (
    <input
      type="text"
      data-testid="name-filter"
      value={ search }
      onChange={ (event) => {
        setSearch(event.target.value);
      } }
    />
  );
}

export default InputSearch;
