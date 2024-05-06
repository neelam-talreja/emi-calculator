import React from 'react';
import ReactDOM from 'react-dom';

import { MuiThemeProvider } from '@material-ui/core';

import ErrorBoundary from './components/ErrorBoundary';
import App from './pages/App';

import './index.css';
import theme from './theme';

import * as serviceWorker from './serviceWorker';

ReactDOM.render((
  <MuiThemeProvider theme={theme}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </MuiThemeProvider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
