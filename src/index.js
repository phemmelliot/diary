// react libraries
import React from 'react';
import ReactDOM from 'react-dom';

// third party libraries
import { Provider } from 'react-redux';

// state
import configureStore from './store/configureStore';

// components
import AppRouter from './components/Router';

// styles
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);
