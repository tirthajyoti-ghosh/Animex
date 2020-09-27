import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <a href="https://fontmeme.com/netflix-font/"><img src="https://fontmeme.com/permalink/200927/6a5f1c61b9793277131922d39cad14df.png" alt="netflix-font" border="0" /></a>

    <ul className="genre-links">
      <li><Link to="/genre/1">Action</Link></li>
      <li><Link to="/genre/4">Comedy</Link></li>
      <li><Link to="/genre/22">Romance</Link></li>
      <li><Link to="/genre/27">Shounen</Link></li>
      <li><Link to="/genre/37">Supernatural</Link></li>
    </ul>

    <ul>
      <li>Sign In</li>
      <li>Sign Up</li>
    </ul>
  </nav>
);

export default Navbar;
