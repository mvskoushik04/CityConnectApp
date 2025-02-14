// src/components/Search.js
import React, { useState } from 'react';
import professionals from '../data/professionals.json'; // Import the JSON data
import './Search.css';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const filteredResults = professionals.filter((professional) =>
      professional.job_title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filteredResults);
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