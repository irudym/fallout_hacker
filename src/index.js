import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';

import './styles/bootstrap.min.css';
import './styles/index.css';

import { wordReducer } from './actions/actions';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  wordReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/* eslint-enable */


ReactDOM.render(
  <div>
    <div className="overlay" />
    <Provider store={store}>
      <App />
    </Provider>
  </div>,
  document.getElementById('root')
);
