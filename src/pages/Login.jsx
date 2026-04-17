import React, { useState } from 'react'; // Added useState
import { Mail, Lock, Compass, Eye, EyeOff } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom'; // Added useNavigate

const Login = () => {
  const navigate = useNavigate();
  
  // 1. State for form inputs
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  // 2. State for password visibility toggle
  const [showPassword, setShowPassword] = useState(false);

  // 3. Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 4. Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // For now, we simulate a successful login
    console.log("Logging in with:", formData);
    
    // If successful, redirect to the Admin Dashboard
    if (formData.email && formData.password) {
      navigate('/admin');
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#B95B2A] relative overflow-hidden px-4">
      {/* Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#2D1B14 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
      ></div>

      <div className="relative bg-white w-full max-w-[450px] rounded-[2.5rem] shadow-2xl p-10 md:p-14 flex flex-col items-center">
        <div className="w-20 h-20 bg-[#B95B2A] rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg">
          <Compass size={40} />
        </div>

        <h1 className="text-4xl font-serif font-bold text-[#2D1B14] mb-2">Welcome Back</h1>
        <p className="text-gray-400 font-medium mb-10 text-center">Sign in to continue your journey</p>

        <form onSubmit={handleSubmit} className="w-full space-y-6">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-bold text-[#2D1B14] mb-2 ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="email" 
                name="email" // Must match state key
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com" 
                className="w-full pl-14 pr-6 py-4 bg-[#FDFBF9] border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-[#B95B2A]/20 transition font-medium text-coffee"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-bold text-[#2D1B14] mb-2 ml-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type={showPassword ? "text" : "password"} 
                name="password" // Must match state key
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password" 
                className="w-full pl-14 pr-14 py-4 bg-[#FDFBF9] border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-[#B95B2A]/20 transition font-medium text-coffee"
                required
              />
              {/* Password Visibility Toggle */}
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-coffee cursor-pointer"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm px-1">
            <label className="flex items-center gap-2 text-gray-500 font-medium cursor-pointer">
              <input type="checkbox" className="w-4 h-4 accent-[#B95B2A] rounded" />
              Remember me
            </label>
            <Link to="/forgot-password" size={18} className="text-[#B95B2A] font-bold hover:underline">Forgot Password?</Link>
          </div>

          <button 
            type="submit"
            className="w-full bg-[#B95B2A] text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-[#B95B2A]/30 hover:brightness-110 active:scale-[0.98] transition cursor-pointer"
          >
            Sign In
          </button>
        </form>

        <p className="mt-10 text-gray-500 font-medium">
          Don't have an account? {' '}
          <Link to="/signup" className="text-[#B95B2A] font-bold hover:underline">Create Account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;