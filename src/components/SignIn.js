// src/components/SignIn.js
import React from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
  return (
    <div className="signin-page">
      <h2>Sign Up / Login</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default SignIn;