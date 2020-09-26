import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../styles/App.css';
import AnimeList from '../containers/index';
import AnimeDetails from '../containers/AnimeDetails';

const App = () => (
  <Router>
    <Route exact path="/" component={AnimeList} />
    <Route exact path="/anime/:animeId" component={AnimeDetails} />
  </Router>
);

export default App;
