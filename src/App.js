import React, { useState } from 'react';

import Layout from './components/Layout/Layout';
import Table from './components/Table/Table';
import Filters from './components/Filters/Filters';
import { TableData, listOfColumns } from './utils/data';

import './styles/global.scss';

const App = () => {
  const [filters, setFilters] = useState({
    conditions: [],
  });

  const handleFilterAdd = (data) => {
    setFilters({
      conditions: [...filters.conditions, data],
    });
  };

  const handleFilterEdit = (index, data) => {
    const newConditions = [...filters.conditions];
    newConditions.splice(index, 1, data);
    setFilters({ conditions: newConditions });
  };

  const handleFilterDelete = (index) => {
    const newConditions = [...filters.conditions];
    setFilters({ conditions: newConditions.filter((c, i) => i !== index) });
  };

  return (
    <Layout>
      <Filters
        filters={filters}
        handleFilterAdd={handleFilterAdd}
        handleFilterDelete={handleFilterDelete}
        columnsList={listOfColumns}
        handleFilterEdit={handleFilterEdit}
      />
      <Table data={TableData} filters={filters} />
    </Layout>
  );
};

export default App;
