import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from '../containers/SearchBar';

const Navbar = () => (
    <header className="nav-header">
        <a className="mobile-logo" href="/"><img src="https://fontmeme.com/permalink/200927/7644f67b9ca3547230cb655ba735cc04.png" alt="logo" border="0" /></a>

        <nav className="desktop-menu">
            <div className="left">
                <a className="logo" href="/"><img src="https://fontmeme.com/permalink/200927/7644f67b9ca3547230cb655ba735cc04.png" alt="logo" border="0" /></a>

                <ul className="genre-links">
                    <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                    <li><NavLink exact to="/genre/1/Action" activeClassName="active">Action</NavLink></li>
                    <li><NavLink exact to="/genre/4/Comedy" activeClassName="active">Comedy</NavLink></li>
                    <li><NavLink exact to="/genre/22/Romance" activeClassName="active">Romance</NavLink></li>
                    <li><NavLink exact to="/genre/27/Shounen" activeClassName="active">Shounen</NavLink></li>
                    <li><NavLink exact to="/genre/37/Supernatural" activeClassName="active">Supernatural</NavLink></li>
                </ul>
            </div>

            <div className="right">
                <SearchBar />

                <ul className="login-links">
                    <li>Log In</li>
                    <li>Register</li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Navbar;
