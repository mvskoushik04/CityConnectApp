// src/components/Search.js
import React, { useState } from 'react';
import axios from 'axios';
import './Search.css';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/professionals/search?job_title=${searchTerm}`);
      setResults(response.data);
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search by profession..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div className="results">
        {results.map((professional, index) => (
          <div key={index} className="professional-card">
            <h3>{professional.name}</h3>
            <p><strong>Profession:</strong> {professional.job_title}</p>
            <p><strong>Description:</strong> {professional.desc}</p>
            <p><strong>Contact:</strong> {professional.number}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;