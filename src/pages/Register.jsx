import React, { useState } from 'react';
import { Mail, Lock, User, Compass, Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Creating account for:", formData);
    
    // Simulate successful registration and redirect to login
    alert("Account created successfully!");
    navigate('/login');
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

      <div className="relative bg-white w-full max-w-[500px] rounded-[2.5rem] shadow-2xl p-10 md:p-14 flex flex-col">
        {/* Back Button */}
        <button 
          onClick={() => navigate('/login')}
          className="flex items-center gap-2 text-gray-400 font-bold hover:text-[#B95B2A] transition mb-6"
        >
          <ArrowLeft size={20} /> Back to Login
        </button>

        <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-[#B95B2A] rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg">
                <Compass size={32} />
            </div>
            <h1 className="text-3xl font-serif font-bold text-[#2D1B14] mb-2">Create Account</h1>
            <p className="text-gray-400 font-medium mb-8 text-center">Join us and start your adventure</p>
        </div>

        <form onSubmit={handleSubmit} className="w-full space-y-5">
          {/* Full Name Field */}
          <div>
            <label className="block text-sm font-bold text-[#2D1B14] mb-2 ml-1">Full Name</label>
            <div className="relative">
              <User className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name" 
                className="w-full pl-14 pr-6 py-4 bg-[#FDFBF9] border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-[#B95B2A]/20 transition font-medium"
                required
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-bold text-[#2D1B14] mb-2 ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com" 
                className="w-full pl-14 pr-6 py-4 bg-[#FDFBF9] border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-[#B95B2A]/20 transition font-medium"
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
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password" 
                className="w-full pl-14 pr-14 py-4 bg-[#FDFBF9] border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-[#B95B2A]/20 transition font-medium"
                required
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#2D1B14]"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-bold text-[#2D1B14] mb-2 ml-1">Confirm Password</label>
            <div className="relative">
              <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="password" 
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password" 
                className="w-full pl-14 pr-6 py-4 bg-[#FDFBF9] border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-[#B95B2A]/20 transition font-medium"
                required
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-[#B95B2A] text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-[#B95B2A]/30 hover:brightness-110 active:scale-[0.98] transition mt-4"
          >
            Create Account
          </button>
        </form>

        <p className="mt-8 text-center text-gray-500 font-medium">
          Already have an account? {' '}
          <Link to="/login" className="text-[#B95B2A] font-bold hover:underline">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;