// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="title">CityConnectApp</div>
      <div className="search-container">
        <input type="text" placeholder="Search..." className="search-box" />
        <button className="search-button">Search</button>
      </div>
      <div className="auth-buttons">
        <Link to="/signin">
          <button className="signin-button">Sign Up / Login</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;