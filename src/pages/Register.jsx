import React, { useState } from 'react';
import { Mail, Lock, User, Eye, EyeOff, ArrowLeft } from 'lucide-react';
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
    alert("Account created successfully!");
    navigate('/login');
  };

  return (
    /* pt-[74px] prevents Navbar overlap and keeps background seamless */
    <div className="min-h-screen pt-[74px] flex items-center justify-center bg-[#B95B2A] relative overflow-hidden px-4">
      {/* Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#2D1B14 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
      ></div>

      {/* Card: Reduced padding to p-8 to fit all fields on one screen */}
      <div className="relative bg-white w-full max-w-[450px] rounded-[2.5rem] shadow-2xl p-8 md:p-10 flex flex-col">
        
        {/* Back Button: Moved closer to top */}
        <button 
          onClick={() => navigate('/login')}
          className="flex items-center gap-2 text-gray-400 font-bold hover:text-[#B95B2A] transition mb-4 text-sm"
        >
          <ArrowLeft size={18} /> Back to Login
        </button>

        <div className="flex flex-col items-center">
            {/* Header: Compacted margins */}
            <h1 className="text-2xl font-serif font-bold text-[#2D1B14] mb-1">Create Account</h1>
            <p className="text-gray-400 font-medium mb-6 text-center text-sm">Join us and start your adventure</p>
        </div>

        {/* Form: Using space-y-4 for vertical density */}
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          
          {/* Full Name */}
          <div>
            <label className="block text-xs font-bold text-[#2D1B14] mb-1.5 ml-1 uppercase tracking-wider">Full Name</label>
            <div className="relative">
              <User className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full name" 
                className="w-full pl-12 pr-6 py-3 bg-[#FDFBF9] border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-[#B95B2A]/20 transition font-medium text-sm"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-bold text-[#2D1B14] mb-1.5 ml-1 uppercase tracking-wider">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com" 
                className="w-full pl-12 pr-6 py-3 bg-[#FDFBF9] border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-[#B95B2A]/20 transition font-medium text-sm"
                required
              />
            </div>
          </div>

          {/* Password & Confirm - Grid layout to save vertical space */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#2D1B14] mb-1.5 ml-1 uppercase tracking-wider">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type={showPassword ? "text" : "password"} 
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password" 
                  className="w-full pl-11 pr-10 py-3 bg-[#FDFBF9] border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-[#B95B2A]/20 transition font-medium text-sm"
                  required
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#2D1B14] mb-1.5 ml-1 uppercase tracking-wider">Confirm</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="password" 
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Repeat" 
                  className="w-full pl-11 pr-4 py-3 bg-[#FDFBF9] border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-[#B95B2A]/20 transition font-medium text-sm"
                  required
                />
              </div>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-[#B95B2A] text-white py-3.5 rounded-xl font-bold text-base shadow-lg shadow-[#B95B2A]/30 hover:brightness-110 active:scale-[0.98] transition mt-2"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-gray-500 font-medium text-sm">
          Already have an account? {' '}
          <Link to="/login" className="text-[#B95B2A] font-bold hover:underline">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;