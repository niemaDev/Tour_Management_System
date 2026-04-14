import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to validate credentials against the DB goes here [cite: 200]
    console.log("Logging in with:", credentials);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-100">
      <h2 className="text-2xl font-bold text-center text-blue-900 mb-2">Traveler Login</h2>
      <p className="text-center text-gray-500 mb-6">Welcome back! Please log in to continue.</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Username or Email</label>
          <input 
            type="email" 
            required 
            className="w-full p-2 border rounded-md"
            onChange={(e) => setCredentials({...credentials, email: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input 
            type="password" 
            required 
            className="w-full p-2 border rounded-md"
            onChange={(e) => setCredentials({...credentials, password: e.target.value})}
          />
        </div>
        <button className="w-full bg-blue-950 text-white py-2 rounded-md font-semibold hover:bg-blue-900 transition">
          Login
        </button>
      </form>

      <p className="mt-6 text-center text-sm">
        Don't have an account? <Link to="/register" className="text-blue-700 font-bold">Create new profile</Link> [cite: 265]
      </p>
    </div>
  );
};

export default Login;