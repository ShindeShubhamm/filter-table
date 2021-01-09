import React from 'react';
import { Container } from '@material-ui/core';

const Layout = (props) => {
  const { children } = props;

  return (
    <div className='layout'>
      <div className='navbar'>
        <Container maxWidth='md'>
          <div className='logo'>
            <h1 className='logo-icon'>Filter</h1>
            <h2 className='logo-picker'>Table</h2>
          </div>
        </Container>
      </div>
      <Container maxWidth='md' className='children'>
        {children}
      </Container>
    </div>
  );
};

export default Layout;
