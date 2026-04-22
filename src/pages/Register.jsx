import React, { useState } from 'react';
import { Mail, Lock, User, Eye, EyeOff, ArrowLeft, ArrowRight, ShieldCheck, Plane } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'customer' // Default role set to Customer
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
    if (formData.role === 'admin') {
      navigate('/admin/dashboard');
    } else {
      navigate('/dashboard');
    }
  };
  return (
    <div className="min-h-screen w-full bg-[#B95B2A] flex justify-center items-start px-4 pt-[114px] pb-20 relative">
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#2D1B14 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
      ></div>
      <div className="relative z-10 bg-white w-full max-w-[440px] rounded-[2.5rem] shadow-2xl p-8 flex flex-col mt-6 animate-in fade-in zoom-in-95 duration-500">
        <button 
          onClick={() => navigate('/login')}
          className="flex items-center gap-1.5 text-gray-400 font-bold hover:text-[#B95B2A] transition mb-4 text-[10px] uppercase tracking-wider"
        >
          <ArrowLeft size={14} /> Back to Login
        </button>

        <div className="text-center mb-6">
          <h1 className="text-3xl font-black tracking-tight text-[#2D1B14] mb-1">Join EthioPath</h1>
          <p className="text-gray-400 text-xs font-medium px-6">Explore authentic Ethiopia or manage world-class tours</p>
        </div>
        <div className="flex gap-3 mb-6 bg-gray-50 p-1.5 rounded-2xl">
          <button
            type="button"
            onClick={() => setFormData({...formData, role: 'customer'})}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-wider transition-all ${
              formData.role === 'customer' 
              ? 'bg-[#B95B2A] text-white shadow-md' 
              : 'text-gray-400 hover:text-[#2D1B14]'
            }`}
          >
            <Plane size={14} /> Traveler
          </button>
          <button
            type="button"
            onClick={() => setFormData({...formData, role: 'admin'})}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-wider transition-all ${
              formData.role === 'admin' 
              ? 'bg-[#2D1B14] text-white shadow-md' 
              : 'text-gray-400 hover:text-[#2D1B14]'
            }`}
          >
            <ShieldCheck size={14} /> Admin
          </button>
        </div>

        <form onSubmit={handleSubmit} className="w-full space-y-3.5">
          
          <div className="space-y-1">
            <label className="block text-[10px] font-bold text-[#2D1B14] ml-1 uppercase tracking-[0.15em]">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input 
                type="text" 
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your name" 
                className="w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-[#B95B2A]/20 transition text-sm text-[#2D1B14]"
                required
              />
            </div>
          </div>
          <div className="space-y-1">
            <label className="block text-[10px] font-bold text-[#2D1B14] ml-1 uppercase tracking-[0.15em]">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com" 
                className="w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-[#B95B2A]/20 transition text-sm text-[#2D1B14]"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="block text-[10px] font-bold text-[#2D1B14] ml-1 uppercase tracking-[0.15em]">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input 
                  type={showPassword ? "text" : "password"} 
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create" 
                  className="w-full pl-11 pr-10 py-2.5 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-[#B95B2A]/20 transition text-sm text-[#2D1B14]"
                  required
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#B95B2A]"
                >{showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
              </div>
            </div> <div className="space-y-1">
              <label className="block text-[10px] font-bold text-[#2D1B14] ml-1 uppercase tracking-[0.15em]">Confirm</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input 
                  type="password" 
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Repeat" 
                  className="w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-[#B95B2A]/20 transition text-sm text-[#2D1B14]"
                  required
                />
              </div>
            </div>
          </div>
          <button 
            type="submit"
            className={`w-full text-white py-3.5 rounded-xl font-bold text-sm shadow-lg active:scale-[0.98] transition mt-4 flex items-center justify-center gap-2 group ${
              formData.role === 'admin' ? 'bg-[#2D1B14] hover:bg-black' : 'bg-[#B95B2A] hover:brightness-110'
            }`}
          >
            {formData.role === 'admin' ? 'Register as Admin' : 'Create Traveler Account'}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
        <div className="mt-8 pt-5 border-t border-gray-50 text-center">
          <p className="text-xs text-gray-500 font-medium">
            Already have an account? {' '}
            <Link to="/login" className="text-[#B95B2A] font-bold hover:underline">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Register;