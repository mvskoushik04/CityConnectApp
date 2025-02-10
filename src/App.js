import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SignIn from "./SignIn";

function Home() {
    const [text, setText] = useState("");

    useEffect(() => {
        document.title = text ? `Typing: ${text}` : "City Connect";
    }, [text]);

    return (
        <div style={{
            backgroundColor: "black",
            color: "white",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <h1>City Connect App</h1>
            <input
                type="text"
                placeholder="Enter text here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={{
                    padding: "10px",
                    fontSize: "16px",
                    borderRadius: "5px",
                    border: "1px solid white",
                    width: "300px",
                    backgroundColor: "black",
                    color: "white",
                    outline: "none"
                }}
            />
            <p>You entered: {text}</p>
            <Link to="/signin">
                <button style={{
                    marginTop: "20px",
                    padding: "10px 20px",
                    fontSize: "16px",
                    backgroundColor: "white",
                    color: "black",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer"
                }}>Sign In</button>
            </Link>
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
