import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './assets/styles/index.sass';
import './assets/styles/reset.css';
import App from './components/App';

import reducer from './store/reducers/index';

const initialState = {
  animeList: [],
  featuredAnime: {},
  genreList: [],
  animeDetails: {},
  animeType: '',
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
