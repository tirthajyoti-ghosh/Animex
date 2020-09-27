import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <a href="/"><img className="logo" src="https://fontmeme.com/permalink/200927/7644f67b9ca3547230cb655ba735cc04.png" alt="logo" border="0" /></a>

    <ul className="genre-links">
      <li><Link to="/genre/1">Action</Link></li>
      <li><Link to="/genre/4">Comedy</Link></li>
      <li><Link to="/genre/22">Romance</Link></li>
      <li><Link to="/genre/27">Shounen</Link></li>
      <li><Link to="/genre/37">Supernatural</Link></li>
    </ul>

    <ul className="login-links">
      <li>Sign In</li>
      <li>Sign Up</li>
    </ul>
  </nav>
);

export default Navbar;
