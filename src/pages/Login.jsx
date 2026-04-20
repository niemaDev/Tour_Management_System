import React from 'react';
import { Mail, Lock, Eye, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen w-full bg-[#B95B2A] flex items-center justify-center px-4 pt-[114px]">
      {/* - max-w-[400px]: Makes the card narrower and cleaner.
          - -translate-y-12: This is the trick to move it "a little bit upper" without breaking the centering.
      */}
      <div className="bg-white rounded-[2rem] p-8 w-full max-w-[400px] shadow-2xl transform -translate-y-12 animate-in fade-in zoom-in-95 duration-500">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black tracking-tight text-[#2D1B14] mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-400 text-sm font-medium">
            Sign in to continue your journey
          </p>
        </div>

        <form className="space-y-5">
          {/* Email Input */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#2D1B14] ml-1">
              Email Address
            </label>
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#B95B2A] transition-colors">
                <Mail size={18} />
              </div>
              <input 
                type="email" 
                placeholder="your@email.com"
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl pl-12 pr-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#B95B2A]/20 focus:bg-white transition-all text-[#2D1B14]"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center ml-1">
              <label className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#2D1B14]">
                Password
              </label>
              <button type="button" className="text-[10px] font-bold text-[#B95B2A] hover:underline">
                Forgot Password?
              </button>
            </div>
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#B95B2A] transition-colors">
                <Lock size={18} />
              </div>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl pl-12 pr-12 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#B95B2A]/20 focus:bg-white transition-all text-[#2D1B14]"
              />
              <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#2D1B14]">
                <Eye size={18} />
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center gap-2 ml-1">
            <input 
              type="checkbox" 
              id="remember"
              className="w-4 h-4 rounded border-gray-300 text-[#B95B2A] focus:ring-[#B95B2A]" 
            />
            <label htmlFor="remember" className="text-xs font-medium text-gray-500 cursor-pointer">
              Remember me
            </label>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-[#2D1B14] text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-[#B95B2A] transition-all shadow-lg shadow-black/10 active:scale-[0.98] mt-2 group">
            Sign In
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-gray-50 text-center">
          <p className="text-sm text-gray-500">
            Don't have an account? {' '}
            <Link to="/signup" className="text-[#B95B2A] font-bold hover:underline">
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;