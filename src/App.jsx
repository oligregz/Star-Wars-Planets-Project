import React from 'react';
import Table from './components/table/Table';
import GlobalProvider from './context/GlobalProvider';
import "./style.css"

function App() {
  return (
    <GlobalProvider>
      <Table />
    </GlobalProvider>
  );
}

export default App;
