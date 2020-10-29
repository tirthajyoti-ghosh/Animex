import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className="nav-header">
    <nav className="desktop-menu">
      <a className="logo" href="/"><img src="https://fontmeme.com/permalink/200927/7644f67b9ca3547230cb655ba735cc04.png" alt="logo" border="0" /></a>

      <ul className="genre-links">
        <li className="active"><Link to="/">Home</Link></li>
        <li><Link to="/genre/1/Action">Action</Link></li>
        <li><Link to="/genre/4/Comedy">Comedy</Link></li>
        <li><Link to="/genre/22/Romance">Romance</Link></li>
        <li><Link to="/genre/27/Shounen">Shounen</Link></li>
        <li><Link to="/genre/37/Supernatural">Supernatural</Link></li>
      </ul>

      <ul className="login-links">
        <li>Sign In</li>
        <li>Sign Up</li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
