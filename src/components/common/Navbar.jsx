import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ChevronDown,
  LayoutDashboard,
  User, 
  LogIn, 
  LogOut,
  Facebook, 
  Linkedin, 
  Youtube, 
  Instagram, 
  MessageCircle,
  Briefcase, // Icon for Customer Dashboard
  HelpCircle,
  UserPlus
} from 'lucide-react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  
  // Get authentication status and role
  const userRole = localStorage.getItem('userRole'); // 'admin' or 'customer'
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const handleLogout = () => {
    localStorage.clear(); // Clears all session data
    navigate('/login');
  };

  const destinations = [
  { name: "Amhara", path: "/destinations/amhara" },
  { name: "Oromia", path: "/destinations/oromia" },
  { name: "Tigray", path: "/destinations/tigray" },
  { name: "Afar", path: "/destinations/afar" },
  { name: "Southern Nation", path: "/destinations/south" },
  { name: "More", path: "/destinations" }
];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-sm">
      {/* --- TOP BAR --- */}
      <div className="border-b border-gray-100 hidden md:block">
        <div className="max-w-7xl mx-auto px-8 h-10 flex items-center justify-between">
          <div className="flex items-center gap-4 text-gray-400">
            <a href="#" className="hover:text-[#B95B2A] transition"><Facebook size={14} /></a>
            <a href="#" className="hover:text-[#B95B2A] transition"><Linkedin size={14} /></a>
            <a href="#" className="hover:text-[#B95B2A] transition"><Youtube size={14} /></a>
            <a href="#" className="hover:text-[#B95B2A] transition"><Instagram size={14} /></a>
            <a href="#" className="hover:text-[#B95B2A] transition"><MessageCircle size={14} /></a>
          </div>

          <div className="flex items-center gap-6 text-[11px] font-bold uppercase tracking-wider text-gray-500">
            {!isLoggedIn ? (
              <>
                <Link to="/login" className="flex items-center gap-1.5 hover:text-[#B95B2A] transition">
                  <LogIn size={14} /> Sing In
                </Link>
                <Link to="/signup" className="flex items-center gap-1.5 hover:text-[#B95B2A] transition">
                  <User size={14} /> Sign Up
                </Link>
              </>
            ) : (
              <button 
                onClick={handleLogout}
                className="flex items-center gap-1.5 hover:text-red-500 transition text-red-400"
              >
                <LogOut size={14} /> Logout
              </button>
            )}
          </div>
        </div>
      </div>

      {/* --- MAIN NAVBAR --- */}
      <div className="max-w-7xl mx-auto px-8 h-[74px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-tighter uppercase text-[#2D1B14]">
            Habesha<span className="text-[#B95B2A]">Tour</span>
          </span>
        </Link>

        <div className="flex items-center gap-8 font-bold text-[#2D1B14] uppercase text-xs tracking-[0.2em]">
          <Link to="/" className="hover:text-[#B95B2A] transition">Home</Link>
          <Link to="/about" className="hover:text-[#B95B2A] transition">About</Link>
        
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

            {isDropdownOpen && (
              <div className="absolute top-full left-0 w-48 bg-[#2D1B14] text-white rounded-b-xl shadow-2xl py-3 z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                {destinations.map((dest) => (
                  <Link
                    key={dest.name}
                    to={dest.path}
                    className="block px-6 py-3 hover:bg-[#B95B2A] transition text-[10px] border-b border-white/5 last:border-0"
                  >
                    {dest.name}
                  </Link>
                ))}
              </div>
            )}
             
          </div>
            <div className="flex items-center gap-8 font-bold text-[#2D1B14] uppercase text-xs tracking-[0.2em]">
              <Link to="/contact" className="hover:text-[#B95B2A] transition">Contact Us</Link>
              </div>
          {/* DYNAMIC ROLE-BASED LINKS */}
          {isLoggedIn && userRole === 'admin' && (
            <Link 
              to="/admin" 
              className="flex items-center gap-2 bg-[#2D1B14] text-white px-5 py-2.5 rounded-full text-[10px] hover:bg-[#B95B2A] transition-all shadow-lg active:scale-95"
            >
              <LayoutDashboard size={14} />
              Admin Panel
            </Link>
          )}

          {isLoggedIn && userRole === 'customer' && (
            <Link 
              to="/dashboard" 
              className="flex items-center gap-2 bg-[#B95B2A] text-white px-5 py-2.5 rounded-full text-[10px] hover:bg-[#2D1B14] transition-all shadow-lg active:scale-95"
            >
              <Briefcase size={14} />
              My Bookings
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;