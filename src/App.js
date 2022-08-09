import React from 'react';
import './App.css';
import Table from './components/Table';
import GlobalProvider from './context/GlobalProvider';

function App() {
  return (
    <GlobalProvider>
      <Table />
    </GlobalProvider>
  );
}

export default App;
