import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SignIn from './components/SignIn';
import Home from './components/Home';
import Search from './components/Search';
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/search" element={<Search />} /> {/* Add the Search route */}
        </Routes>
      </div>
    </Router>
  );
};

// Home component for the opening page

export default App;
