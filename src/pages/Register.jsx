import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Registering User:", formData);
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">Create Account</h2>
      <form onSubmit={handleRegister} className="space-y-4">
        <input 
          type="text" placeholder="Full Name" required 
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
        <input 
          type="email" placeholder="Email Address" required 
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
        <input 
          type="password" placeholder="Password" required 
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setFormData({...formData, password: e.target.value})}
        />
        <button className="w-full bg-blue-900 text-white py-3 rounded-lg font-bold hover:bg-blue-800 shadow-md">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;