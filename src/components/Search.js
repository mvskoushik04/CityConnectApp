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
}