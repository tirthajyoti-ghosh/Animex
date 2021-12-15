import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Menu from 'react-burger-menu/lib/menus/push'; // Reduces bundle size by removing unused snapsvg-cjs.

import SearchBar from './SearchBar';
import { GENRES } from '../constants';

const MobileNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Menu
            isOpen={menuOpen}
            onStateChange={state => setMenuOpen(state.isOpen)}
            width="300px"
            className="mobile-menu"
            pageWrapId="page-wrap"
            outerContainerId="outer-container"
        >
            <SearchBar />

            <NavLink exact to="/" activeClassName="active" onClick={() => setMenuOpen(!menuOpen)}>Home</NavLink>
            {GENRES.map(genre => (
                <NavLink
                    key={genre.id}
                    exact
                    to={`/genre/${genre.id}/${genre.name}`}
                    activeClassName="active"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {genre.name}
                </NavLink>
            ))}
        </Menu>
    );
};

export default MobileNavbar;
