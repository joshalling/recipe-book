import React from 'react';
import './Header.css';

const Header = () => (
  <header className="app-header">
  <div className="app-logo">
    <h1 className="app-title">Recipe Book</h1>
    <span className="app-subtitle">For All Your Recipe Needs</span>
  </div>
  <nav>
    <ul className="app-navbar">
      <li>recipes</li>
      <li>favorites</li>
      <li>add recipe</li>
    </ul>
  </nav>
  </header>
);

export default Header;
