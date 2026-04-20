import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronDown,
   LayoutDashboard,
    MapPin,
     Globe,
  User, 
  LogIn, 
  Facebook, 
  Linkedin, 
  Youtube, 
  Instagram, 
  MessageCircle
} from 'lucide-react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const isAdmin = true;
  // Destinations matching the reference style
  const destinations = ["Amhara", "Oromia", "Tigray", "Afar", "Southern Nation", "More"];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-sm">
      {/* --- TOP BAR: Social Media & Simple Auth --- */}
      <div className="border-b border-gray-100 hidden md:block">
        <div className="max-w-7xl mx-auto px-8 h-10 flex items-center justify-between">
          {/* Social Icons (Left side of top bar) */}
          <div className="flex items-center gap-4 text-gray-400">
            <a href="#" className="hover:text-[#B95B2A] transition"><Facebook size={14} /></a>
            <a href="#" className="hover:text-[#B95B2A] transition"><Linkedin size={14} /></a>
            <a href="#" className="hover:text-[#B95B2A] transition"><Youtube size={14} /></a>
            <a href="#" className="hover:text-[#B95B2A] transition"><Instagram size={14} /></a>
            <a href="#" className="hover:text-[#B95B2A] transition"><MessageCircle size={14} /></a>
          </div>

          {/* Simple Auth Links (Right side of top bar) */}
          <div className="flex items-center gap-6 text-[11px] font-bold uppercase tracking-wider text-gray-500">
            <Link to="/login" className="flex items-center gap-1.5 hover:text-[#B95B2A] transition">
              <LogIn size={14} /> Login
            </Link>
            <Link to="/signup" className="flex items-center gap-1.5 hover:text-[#B95B2A] transition">
              <User size={14} /> Sign Up
            </Link>
          </div>
        </div>
      </div>

      {/* --- MAIN NAVBAR: Logo & Main Navigation --- */}
      <div className="max-w-7xl mx-auto px-8 h-[74px] flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-tighter uppercase text-[#2D1B14]">
            Ethio<span className="text-[#B95B2A]">Path</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8 font-bold text-[#2D1B14] uppercase text-xs tracking-[0.2em]">
          <Link to="/" className="hover:text-[#B95B2A] transition">Home</Link>
          <Link to="/tours" className="hover:text-[#B95B2A] transition">Search Tours</Link>

          {/* DROPDOWN: Destinations */}
          <div 
            className="relative group cursor-pointer py-2"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <div className="flex items-center gap-1 hover:text-[#B95B2A] transition">
              Destination <ChevronDown size={14} />
            </div>

            {/* Dropdown Menu (Dark background matching reference) */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 w-40 bg-[#2D1B14] text-white rounded-b-lg shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                {destinations.map((place) => (
                  <Link
                    key={place}
                    to={`/tours?region=${place}`}
                    className="block px-6 py-2.5 hover:bg-[#B95B2A] transition text-[10px] border-b border-white/5 last:border-0"
                  >
                    {place}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Action Button (Main sign up button) */}
        {/*<div className="hidden sm:block">
          <Link 
            to="/signup" 
            className="bg-[#2D1B14] text-white px-6 py-2.5 rounded-md text-[11px] font-bold uppercase tracking-widest hover:bg-[#B95B2A] transition-all shadow-md active:scale-95"
          >
            Sign Up
          </Link>
        </div>*/}
      </div>
    </nav>
  );
};

export default Navbar;