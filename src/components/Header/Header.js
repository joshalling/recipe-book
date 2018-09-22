import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const activeStyle = {
    borderBottom: '3px solid var(--teal)',
    paddingBottom: '7px'
};

const Header = () => (
  <header className="app-header">
  <div className="app-logo">
    <h1 className="app-title">Recipe Book</h1>
    <span className="app-subtitle">For All Your Recipe Needs</span>
  </div>
  <nav>
    <div className="app-navbar">
      <NavLink exact to="/" activeStyle={activeStyle}>recipes</NavLink>
      <NavLink to="/favorites" activeStyle={activeStyle}>favorites</NavLink>
      <NavLink to="/new-recipe" activeStyle={activeStyle}>add recipe</NavLink>
    </div>
  </nav>
  </header>
);

export default Header;
