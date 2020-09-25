import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../styles/App.css';
import TopAnimesList from '../containers/index';
// import AnimeDetails from '../containers/animeDetails';

const App = () => (
  <Router>
    <Route exact path="/" component={TopAnimesList} />
    {/* <Route exact path="/anime/:animeId" component={AnimeDetails} /> */}
  </Router>
);

export default App;
