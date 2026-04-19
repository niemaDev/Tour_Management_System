import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      navigate('/admin');
    }
  };

  return (
    /* mt-[74px] prevents the Navbar from overlapping the top of this section */
    <div className=" min-h-screen flex items-center justify-center bg-[#B95B2A] relative overflow-hidden px-4 pt-[74px]">
      {/* Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#2D1B14 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
      ></div>

      {/* THE CARD */}
      <div className="relative bg-white w-full max-w-[400px] rounded-[2.5rem] shadow-2xl p-8 md:p-10 flex flex-col items-center">
        
        {/* LOGO ICON REMOVED - Heading starts higher now */}
        <h1 className="text-3xl font-serif font-bold text-[#2D1B14] mb-1">Welcome Back</h1>
        <p className="text-gray-400 font-medium mb-8 text-center text-sm">Sign in to continue your journey</p>

        <form onSubmit={handleSubmit} className="w-full space-y-5">
          <div>
            <label className="block text-xs font-bold text-[#2D1B14] mb-2 ml-1 uppercase tracking-wider">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com" 
                className="w-full pl-12 pr-6 py-3.5 bg-[#FDFBF9] border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-[#B95B2A]/20 transition font-medium text-coffee text-sm"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#2D1B14] mb-2 ml-1 uppercase tracking-wider">Password</label>
            <div className="relative">
              <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type={showPassword ? "text" : "password"} 
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password" 
                className="w-full pl-12 pr-12 py-3.5 bg-[#FDFBF9] border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-[#B95B2A]/20 transition font-medium text-coffee text-sm"
                required
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-coffee"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs px-1">
            <label className="flex items-center gap-2 text-gray-500 font-medium cursor-pointer">
              <input type="checkbox" className="w-3.5 h-3.5 accent-[#B95B2A] rounded" />
              Remember me
            </label>
            <Link to="/forgot-password" size={18} className="text-[#B95B2A] font-bold hover:underline">Forgot Password?</Link>
          </div>

          <button 
            type="submit"
            className="w-full bg-[#B95B2A] text-white py-4 rounded-xl font-bold text-base shadow-lg shadow-[#B95B2A]/30 hover:brightness-110 active:scale-[0.98] transition mt-2"
          >
            Sign In
          </button>
        </form>

        <p className="mt-8 text-gray-500 font-medium text-sm text-center">
          Don't have an account? {' '}
          <Link to="/signup" className="text-[#B95B2A] font-bold hover:underline">Create Account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;