import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SignIn from './components/SignIn';
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
};

// Home component for the opening page
const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to CityConnectApp</h1>
    </div>
  );
};

export default App;
