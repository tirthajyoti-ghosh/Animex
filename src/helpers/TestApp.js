import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from '../components/App';
import reducer from '../store/reducers/index';

const initialState = {
  animeList: [],
  genreList: [],
  animeDetails: {},
  animeType: '',
};

const store = createStore(reducer, initialState);

const TestApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default TestApp;
