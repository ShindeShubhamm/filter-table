import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import App from './App';
import { AppTheme } from './theme';

ReactDOM.render(
  <ThemeProvider theme={AppTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
