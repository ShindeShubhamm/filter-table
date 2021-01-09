import React from 'react';

import Layout from './components/Layout/Layout';
import Table from './components/Table/Table';

import './styles/global.scss';

const App = () => {
  return (
    <Layout>
      <Table />
    </Layout>
  );
};

export default App;
