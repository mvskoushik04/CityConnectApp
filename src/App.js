import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SignIn from "./SignIn";

function Home() {
    const [text, setText] = useState("");

    useEffect(() => {
        document.title = text ? `Typing: ${text}` : "City Connect";
    }, [text]);

    return (
        <div className="container">
            {/* Top Navigation Bar */}
            <div className="navbar">
                <h1 className="header">City Connect App</h1>
                <Link to="/signin">
                    <button className="signin-button">Sign In</button>
                </Link>
            </div>

            {/* Centered Input Section */}
            <div className="content">
                <input
                    type="text"
                    placeholder="Enter text here..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="input-field"
                />
                <p>You entered: {text}</p>
            </div>
        </div>
    );
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
            </Routes>
        </Router>
    );
}

export default App;
