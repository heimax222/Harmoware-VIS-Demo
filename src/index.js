import { render } from 'react-dom';
import { getCombinedReducer } from 'harmoware-vis';
import { createStore } from 'redux';

import { Provider } from 'react-redux';
import React from 'react';
import App from './containers/app';
import 'harmoware-vis/scss/harmoware.scss';

const store = createStore(getCombinedReducer());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
