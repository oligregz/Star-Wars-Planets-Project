import React from 'react';
import Header from './Header';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

function Table() {
  return (
    <div>
      <Header />
      <table>
        <TableHeader />
        <TableBody />
      </table>
    </div>
  );
}

export default Table;
