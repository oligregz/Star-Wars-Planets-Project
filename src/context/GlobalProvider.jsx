import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './GloblaContext';
import getApi from '../service/api';

function GlobalProvider({ children }) {
  const [data, setData] = useState(null);
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState(0);
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState({
    filters: {
      filterNumberValues: [{
        column,
        comparison,
        value,
      }],
    },
  });

  useEffect(() => {
    const handleApi = () => {
      getApi()
        .then((valueApi) => setData(valueApi));
    };
    handleApi();
  }, []);

  return (
    <GlobalContext.Provider
      value={ {
        data,
        column,
        setColumn,
        comparison,
        setComparison,
        value,
        setValue,
        search,
        setSearch,
        filter,
        setFilter,
      } }
    >
      {children}
    </GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalProvider;
