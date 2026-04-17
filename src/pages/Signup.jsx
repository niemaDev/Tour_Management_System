import React from 'react';
import { Mail, Lock, User, Compass, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#B95B2A] relative overflow-hidden px-4 py-10">
      {/* Background Pattern Overlay matching the Login page */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(#2D1B14 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
      ></div>

      {/* Signup Card */}
      <div className="relative bg-white w-full max-w-[500px] rounded-[2.5rem] shadow-2xl p-10 md:p-12 flex flex-col items-center">
        
        {/* Logo Icon */}
        <div className="w-16 h-16 bg-[#B95B2A] rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-[#B95B2A]/20">
          <Compass size={32} />
        </div>

        {/* Header */}
        <h1 className="text-3xl font-serif font-bold text-[#2D1B14] mb-2 text-center">Create Account</h1>
        <p className="text-gray-400 font-medium mb-8 text-center px-4">Join us to explore the beauty of Ethiopia</p>

        {/* Form */}
        <form className="w-full space-y-5">
          {/* Full Name Field */}
          <div>
            <label className="block text-sm font-bold text-[#2D1B14] mb-2 ml-1">Full Name</label>
            <div className="relative">
              <User className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Enter your name" 
                className="w-full pl-14 pr-6 py-3.5 bg-[#FDFBF9] border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-[#B95B2A]/20 transition font-medium"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-bold text-[#2D1B14] mb-2 ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="w-full pl-14 pr-6 py-3.5 bg-[#FDFBF9] border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-[#B95B2A]/20 transition font-medium"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-[#2D1B14] mb-2 ml-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="password" 
                  placeholder="Min 8 chars" 
                  className="w-full pl-14 pr-6 py-3.5 bg-[#FDFBF9] border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-[#B95B2A]/20 transition font-medium"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-[#2D1B14] mb-2 ml-1">Confirm</label>
              <div className="relative">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="password" 
                  placeholder="Repeat it" 
                  className="w-full pl-14 pr-6 py-3.5 bg-[#FDFBF9] border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-[#B95B2A]/20 transition font-medium"
                />
              </div>
            </div>
          </div>

          {/* Terms Agreement */}
          <div className="flex items-start gap-2 text-xs px-1 text-gray-500 font-medium">
            <input type="checkbox" className="mt-0.5 w-4 h-4 accent-[#B95B2A] rounded border-gray-200" required />
            <span>I agree to the <a href="#" className="text-[#B95B2A] font-bold">Terms of Service</a> and <a href="#" className="text-[#B95B2A] font-bold">Privacy Policy</a>.</span>
          </div>

          {/* Sign Up Button */}
          <button 
            type="submit"
            className="w-full bg-[#B95B2A] text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-[#B95B2A]/30 hover:brightness-110 active:scale-[0.98] transition flex items-center justify-center gap-2 cursor-pointer"
          >
            Create Account <ArrowRight size={20} />
          </button>
        </form>

        {/* Login Redirect */}
        <p className="mt-8 text-gray-500 font-medium">
          Already a member? {' '}
          <Link to="/login" className="text-[#B95B2A] font-bold hover:underline">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;