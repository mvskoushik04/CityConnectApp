import React, { useState } from "react";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="container">
      {/* Header Section */}
      <header>
        <h1 className="title">CityConnectApp</h1>
        <button className="signin">Sign In</button>
      </header>

      {/* Centered Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for places, people, or services..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
