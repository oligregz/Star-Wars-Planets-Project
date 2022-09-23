import React from 'react';
import Header from '../header/Header';
import TableHeader from '../tableHeader/TableHeader';
import TableBody from '../tableBody/TableBody';
import "./style.css";

function Table() {
  return (
    <div className="tableMain">
      <div className="tableChild">
        <Header />
        <table>
          <TableHeader />
          <TableBody />
        </table>
    </div>
    </div>
  );
}

export default Table;
