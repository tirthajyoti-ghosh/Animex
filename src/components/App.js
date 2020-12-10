import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { push as Menu } from 'react-burger-menu';
import '../assets/styles/App.sass';
import Home from './Home';
import AnimeDetails from '../containers/AnimeDetails';
import GenreList from '../containers/GenreList';
import Navbar from './Navbar';
import SearchBar from '../containers/SearchBar';

const App = () => (
  <Router>
    <div id="outer-container">
      <Route>
        <Menu width="300px" className="mobile-menu" pageWrapId="page-wrap" outerContainerId="outer-container">
          <SearchBar />
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
          <NavLink exact to="/genre/1/Action" activeClassName="active">Action</NavLink>
          <NavLink exact to="/genre/4/Comedy" activeClassName="active">Comedy</NavLink>
          <NavLink exact to="/genre/22/Romance" activeClassName="active">Romance</NavLink>
          <NavLink exact to="/genre/27/Shounen" activeClassName="active">Shounen</NavLink>
          <NavLink exact to="/genre/37/Supernatural" activeClassName="active">Supernatural</NavLink>
        </Menu>
      </Route>
      <div id="page-wrap">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/genre/:genreId/:genreName" component={GenreList} />
        <Route exact path="/anime/:animeId" component={AnimeDetails} />
      </div>
    </div>

  </Router>
);

export default App;
