import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore} from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';

const appElement = document.getElementById('root');
const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  appElement
);
