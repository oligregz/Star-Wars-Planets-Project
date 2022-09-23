import React from 'react';
import FilterHeader from '../filterHeader/FilterHeader';
import Button from '../button/Button';
import "./style.css";

function Header() {
  return (
    <div className="head">
      <h1>{" STAR WARS PALNETS "}</h1>
      <div className="titleAndFilter">
        <FilterHeader />
      </div>
      <Button />
    </div>
  );
}

export default Header;
