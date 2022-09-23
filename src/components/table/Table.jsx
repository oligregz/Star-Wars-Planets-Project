import React from 'react';
import Header from '../Header';
import TableHeader from '../TableHeader';
import TableBody from '../TableBody';
import "./style.css";

function Table() {
  return (
    <div className="tableMain">
      <Header />
      <table>
        <TableHeader />
        <TableBody />
      </table>
    </div>
  );
}

export default Table;
