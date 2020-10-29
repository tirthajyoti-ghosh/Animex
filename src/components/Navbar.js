import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <header className="nav-header">
    <nav className="desktop-menu">
      <a className="logo" href="/"><img src="https://fontmeme.com/permalink/200927/7644f67b9ca3547230cb655ba735cc04.png" alt="logo" border="0" /></a>

      <ul className="genre-links">
        <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
        <li><NavLink exact to="/genre/1/Action" activeClassName="active">Action</NavLink></li>
        <li><NavLink exact to="/genre/4/Comedy" activeClassName="active">Comedy</NavLink></li>
        <li><NavLink exact to="/genre/22/Romance" activeClassName="active">Romance</NavLink></li>
        <li><NavLink exact to="/genre/27/Shounen" activeClassName="active">Shounen</NavLink></li>
        <li><NavLink exact to="/genre/37/Supernatural" activeClassName="active">Supernatural</NavLink></li>
      </ul>

      <ul className="login-links">
        <li>Sign In</li>
        <li>Sign Up</li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
