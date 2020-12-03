import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from '../components/App';
import reducer from '../store/reducers/index';

const initialState = {
  featuredAnime: {},
  genreList: [],
  genreRow: {},
  animeDetails: {},
};

const store = createStore(reducer, initialState);

const TestApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default TestApp;
