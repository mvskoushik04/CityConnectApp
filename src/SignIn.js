import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Signed in with Email: ${email}`);
        navigate("/"); // Redirect to home after sign-in
    };

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
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit} style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px"
            }}>
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                        padding: "10px",
                        fontSize: "16px",
                        borderRadius: "5px",
                        border: "1px solid white",
                        backgroundColor: "black",
                        color: "white",
                        outline: "none"
                    }}
                />
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{
                        padding: "10px",
                        fontSize: "16px",
                        borderRadius: "5px",
                        border: "1px solid white",
                        backgroundColor: "black",
                        color: "white",
                        outline: "none"
                    }}
                />
                <button type="submit" style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    backgroundColor: "white",
                    color: "black",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer"
                }}>Submit</button>
            </form>
        </div>
    );
}

export default SignIn;
