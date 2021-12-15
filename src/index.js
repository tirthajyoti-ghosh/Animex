import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './assets/styles/index.sass';
import './assets/styles/reset.css';
import App from './App';

import reducer from './store/reducers/index';

const initialState = {
    featuredAnime: {},
    genreList: [],
    genreRow: {},
    animeDetails: {},
};

// genreRow object structure:

// genreRow: {
//    genre1: [ // genre1 anime ]
//    genre2: [ // genre2 anime ]
//    genre3: [ // genre3 anime ]
// }

const store = createStore(reducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
