// src/components/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to CityConnectApp</h1>
      <div className="search-container">
        <input type="text" placeholder="Search..." className="search-box" />
        <button className="search-button">Search</button>
      </div>
    </div>
  );
};

export default Home;