import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../styles/App.css';
import AnimeList from '../containers/index';
import AnimeDetails from '../containers/AnimeDetails';
import Navbar from './Navbar';

const App = () => (
  <Router>
    <Navbar />
    <Route exact path="/" component={AnimeList} />
    <Route exact path="/anime/:animeId" component={AnimeDetails} />
  </Router>
);

export default App;
