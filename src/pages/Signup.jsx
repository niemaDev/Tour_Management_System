import React from 'react';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    /* pt-[74px] ensures space for the navbar while the orange background covers the whole screen */
    <div className="min-h-screen pt-[74px] flex items-center justify-center bg-[#B95B2A] relative overflow-hidden px-4">
      {/* Background Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#2D1B14 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
      ></div>

      {/* Signup Card: Reduced padding and tightened margins to prevent scrolling */}
      <div className="relative bg-white w-full max-w-[480px] rounded-[2.5rem] shadow-2xl p-8 md:p-10 flex flex-col items-center">
        
        {/* Logo Icon Removed to save vertical space, similar to login */}

        {/* Header */}
        <h1 className="text-3xl font-serif font-bold text-[#2D1B14] mb-1 text-center">Create Account</h1>
        <p className="text-gray-400 font-medium mb-6 text-center px-4 text-sm">Join us to explore the beauty of Ethiopia</p>

        {/* Form: Using space-y-4 to keep fields tight */}
        <form className="w-full space-y-4">
          {/* Full Name Field */}
          <div>
            <label className="block text-xs font-bold text-[#2D1B14] mb-1.5 ml-1 uppercase tracking-wider">Full Name</label>
            <div className="relative">
              <User className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Enter your name" 
                className="w-full pl-12 pr-6 py-3 bg-[#FDFBF9] border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-[#B95B2A]/20 transition font-medium text-sm"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-xs font-bold text-[#2D1B14] mb-1.5 ml-1 uppercase tracking-wider">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="w-full pl-12 pr-6 py-3 bg-[#FDFBF9] border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-[#B95B2A]/20 transition font-medium text-sm"
              />
            </div>
          </div>

          {/* Password Fields in Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#2D1B14] mb-1.5 ml-1 uppercase tracking-wider">Password</label>
              <div className="relative">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="password" 
                  placeholder="Min 8 chars" 
                  className="w-full pl-12 pr-6 py-3 bg-[#FDFBF9] border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-[#B95B2A]/20 transition font-medium text-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-[#2D1B14] mb-1.5 ml-1 uppercase tracking-wider">Confirm</label>
              <div className="relative">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="password" 
                  placeholder="Repeat it" 
                  className="w-full pl-12 pr-6 py-3 bg-[#FDFBF9] border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-[#B95B2A]/20 transition font-medium text-sm"
                />
              </div>
            </div>
          </div>

          {/* Terms Agreement */}
          <div className="flex items-start gap-2 text-[10px] md:text-xs px-1 text-gray-500 font-medium leading-tight">
            <input type="checkbox" className="mt-0.5 w-3.5 h-3.5 accent-[#B95B2A] rounded border-gray-200" required />
            <span>I agree to the <a href="#" className="text-[#B95B2A] font-bold">Terms</a> and <a href="#" className="text-[#B95B2A] font-bold">Privacy Policy</a>.</span>
          </div>

          {/* Sign Up Button */}
          <button 
            type="submit"
            className="w-full bg-[#B95B2A] text-white py-3.5 rounded-xl font-bold text-base shadow-lg shadow-[#B95B2A]/30 hover:brightness-110 active:scale-[0.98] transition flex items-center justify-center gap-2 cursor-pointer mt-2"
          >
            Create Account <ArrowRight size={18} />
          </button>
        </form>

        {/* Login Redirect */}
        <p className="mt-6 text-gray-500 font-medium text-sm">
          Already a member? {' '}
          <Link to="/login" className="text-[#B95B2A] font-bold hover:underline">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;