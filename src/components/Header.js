// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="title">CityConnectApp</div>
      <div className="auth-buttons">
        <Link to="/search">
          <button>Search</button>
        </Link>
        <Link to="/signin">
          <button className="signin-button">Sign Up / Login</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;