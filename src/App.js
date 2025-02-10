import { useState } from "react";
import data from "./data.json"; // Import JSON data
import "./App.css"; // Ensure this is present

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const filteredData = data.filter(person =>
      Object.values(person).some(value =>
        value.toLowerCase().includes(query.toLowerCase())
      )
    );

    setResults(filteredData.length > 0 ? filteredData : [{ name: "Not Found" }]);
  };

  return (
    <div className="container">
      <h1>CityConnect App</h1>
      <input
        type="text"
        placeholder="Enter your requirement"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div className="results">
        {results.map((person, index) => (
          <div key={index} className="result-card">
            {person.name === "Not Found" ? (
              <h2>Not Found</h2>
            ) : (
              <>
                <h2>{person.name}</h2>
                <p>Job: {person.job_title}</p>
                <p>Description: {person.desc}</p>
                <p>Phone: {person.number}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
