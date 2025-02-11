import React, { useState } from "react";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="container">
      {/* Title on the top left */}
      <h1 className="title">CityConnectApp</h1>

      {/* Sign-in button on the top right */}
      <button className="signin">Sign In</button>

      {/* Search bar in the center */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
