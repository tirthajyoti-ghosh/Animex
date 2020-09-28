import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { push as Menu } from 'react-burger-menu';
import '../assets/styles/App.sass';
import AnimeList from '../containers/AnimeList';
import AnimeDetails from '../containers/AnimeDetails';
import GenreList from '../containers/GenreList';
import Navbar from './Navbar';

const App = () => (
  <Router>
    <div id="outer-container">
      {/* <Route>
        <Menu pageWrapId="page-wrap" outerContainerId="outer-container">
          <Link to="/genre/1/Action">Action</Link>
          <Link to="/genre/4/Comedy">Comedy</Link>
          <Link to="/genre/22/Romance">Romance</Link>
          <Link to="/genre/27/Shounen">Shounen</Link>
          <Link to="/genre/37/Supernatural">Supernatural</Link>
        </Menu>
      </Route> */}
      <div id="page-wrap">
        <Navbar />
        <Route exact path="/" component={AnimeList} />
        <Route exact path="/genre/:genreId/:genreName" component={GenreList} />
        <Route exact path="/anime/:animeId" component={AnimeDetails} />
      </div>
    </div>

  </Router>
);

export default App;
