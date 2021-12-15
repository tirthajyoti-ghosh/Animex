import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './assets/styles/App.sass';

import Home from './components/Home';
import AnimeDetails from './containers/AnimeDetails';
import GenreList from './containers/GenreList';
import Navbar from './components/Navbar';
import MobileNavbar from './components/MobileNavbar';

const App = () => (
    <Router>
        <div id="outer-container">
            <Route>
                <MobileNavbar />
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
