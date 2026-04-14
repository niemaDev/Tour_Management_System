import React from 'react';
import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-[#2D1B14] text-white py-4 px-8 md:px-16 flex justify-between items-center sticky top-0 z-50 shadow-md">
      <Link to="/" className="flex items-center gap-3">
        <div className="bg-[#B95B2A] p-2 rounded-full">
          <Compass size={24} className="text-white" />
        </div>
        <span className="text-2xl font-serif font-bold tracking-tight">Ethiopian Tours</span>
      </Link>
      
      <div className="hidden md:flex items-center gap-10 font-medium">
        <Link to="/destinations" className="hover:text-[#B95B2A] transition">Destinations</Link>
        <Link to="/dashboard" className="hover:text-[#B95B2A] transition">Dashboard</Link>
        <Link to="/admin" className="hover:text-[#B95B2A] transition">Admin</Link>
        <button className="bg-[#B95B2A] hover:bg-[#a04a20] px-7 py-2.5 rounded-xl font-bold transition shadow-lg">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;