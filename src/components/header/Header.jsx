import React from 'react';
import FilterHeader from '../filterHeader/FilterHeader';
import InputSearch from '../inputSearch/InputSearch';

function Header() {
  return (
    <div>
      <h1>Projeto Star Wars Trybe</h1>
      <InputSearch />
      <FilterHeader />
    </div>
  );
}

export default Header;
