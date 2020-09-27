import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../assets/styles/App.sass';
import AnimeList from '../containers/AnimeList';
import AnimeDetails from '../containers/AnimeDetails';
import GenreList from '../containers/GenreList';
import Navbar from './Navbar';

const App = () => (
  <Router>
    <Navbar />
    <Route exact path="/" component={AnimeList} />
    <Route exact path="/genre/:genreAndId" component={GenreList} />
    <Route exact path="/anime/:animeId" component={AnimeDetails} />
  </Router>
);

export default App;
