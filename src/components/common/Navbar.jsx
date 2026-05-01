import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  ChevronDown, LayoutDashboard, User, LogIn, LogOut,
  Facebook, Linkedin, Instagram, Briefcase, Menu, X
} from 'lucide-react';

import logo from '../../assets/habesha-logo.jpg'; 

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  const userRole = localStorage.getItem('userRole'); 
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.clear();
    setIsMobileMenuOpen(false);
    navigate('/login');
  };

  const destinations = [
    { name: "Amhara", path: "/destinations/amhara" },
    { name: "Oromia", path: "/destinations/oromia" },
    { name: "Tigray", path: "/destinations/tigray" },
    { name: "Afar", path: "/destinations/afar" },
    { name: "Southern Nation", path: "/destinations/south" },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] bg-white shadow-sm font-sans">
      
      <div className="border-b border-gray-100 hidden lg:block bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-8 h-10 flex items-center justify-between">
          <div className="flex items-center gap-4 text-gray-400">
            <Facebook size={14} className="hover:text-[#B95B2A] cursor-pointer transition-colors" />
            <Linkedin size={14} className="hover:text-[#B95B2A] cursor-pointer transition-colors" />
            <Instagram size={14} className="hover:text-[#B95B2A] cursor-pointer transition-colors" />
          </div>
          <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-gray-500">
            {!isLoggedIn ? (
              <>
                <Link to="/login" className="hover:text-[#B95B2A] transition-colors flex items-center gap-1">
                  <LogIn size={12} /> Sign In
                </Link>
                <Link to="/signup" className="hover:text-[#B95B2A] transition-colors flex items-center gap-1">
                  <User size={12} /> Sign Up
                </Link>
              </>
            ) : (
              <button onClick={handleLogout} className="text-red-400 hover:text-red-600 transition-colors flex items-center gap-1">
                <LogOut size={12} /> Signout
              </button>
            )}
          </div>
        </div>
      </div>

      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-[74px] flex items-center justify-between">
        {/* 2. Updated Branding Section with Image Logo */}
        <Link to="/" className="shrink-0 flex items-center gap-2 group">
          <img 
  src={logo} 
  alt="HabeshaTour Logo" 
  className="
    h-12                 /* Mobile: 48px */
    sm:h-14              /* Small tablets: 56px */
    md:h-16              /* Tablets: 64px */
    lg:h-18              /* Desktop: 80px */
    w-auto               /* Maintain aspect ratio */
    object-contain       /* Ensure no clipping */
    transition-transform 
    duration-300 
    group-hover:scale-105
  " 
/>
    
        </Link>

       
        <div className="hidden lg:flex items-center gap-8 font-bold text-[#2D1B14] uppercase text-[11px] tracking-widest">
          <Link to="/" className="hover:text-[#B95B2A] transition-colors">Home</Link>
          <Link to="/tours" className="hover:text-[#B95B2A] transition-colors">Tours</Link>
          
          <div 
            className="relative cursor-pointer py-2 group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span className="flex items-center gap-1 hover:text-[#B95B2A] transition-colors">
              Destinations <ChevronDown size={14}/>
            </span>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 w-48 bg-[#2D1B14] text-white py-3 rounded-b-xl shadow-xl animate-in fade-in slide-in-from-top-2">
                {destinations.map(d => (
                  <Link key={d.name} to={d.path} className="block px-6 py-2.5 hover:bg-[#B95B2A] text-[10px] transition-colors border-b border-white/5 last:border-0">
                    {d.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
           <Link to="/about" className="hover:text-[#B95B2A] transition-colors">About Us</Link>
          <Link to="/contact" className="hover:text-[#B95B2A] transition-colors">Contact</Link>
          
          {isLoggedIn && (
            <Link 
              to={userRole === 'admin' ? "/admin" : "/dashboard"} 
              className="bg-[#B95B2A] text-white px-5 py-2.5 rounded-full hover:bg-[#2D1B14] transition-all shadow-lg shadow-orange-900/10 active:scale-95 flex items-center gap-2"
            >
              {userRole === 'admin' ? <LayoutDashboard size={14}/> : <Briefcase size={14}/>}
              {userRole === 'admin' ? "Admin" : "Dashboard"}
            </Link>
          )}
        </div>

        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className="lg:hidden p-2 hover:bg-gray-100 rounded-xl transition-colors"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={28} className="text-[#B95B2A]" /> : <Menu size={28} className="text-[#2D1B14]" />}
        </button>
      </div>

      
      <div className={`lg:hidden fixed inset-0 top-[74px] bg-white z-[90] transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col p-8 space-y-6 font-bold text-[#2D1B14] uppercase tracking-widest h-full overflow-y-auto pb-32">
          {/* Logo in Mobile Menu */}
          <div className="flex justify-center pb-4">
             <img src={logo} alt="Logo" className="h-12 w-auto" />
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[10px] text-gray-400">Navigation</p>
            <Link to="/" className="text-lg py-2 border-b border-gray-50">Home</Link>
            <Link to="/tours" className="text-lg py-2 border-b border-gray-50">Tours</Link>
            <Link to="/about" className="text-lg py-2 border-b border-gray-50">About Us</Link>
            <Link to="/contact" className="text-lg py-2 border-b border-gray-50">Contact</Link>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[10px] text-gray-400">Destinations</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {destinations.map(d => (
                <Link key={d.name} to={d.path} className="text-xs text-gray-600 hover:text-[#B95B2A] transition-colors">
                  {d.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-8 flex flex-col gap-4">
            {!isLoggedIn ? (
              <div className="flex flex-col gap-3">
                <Link to="/login" className="w-full bg-gray-100 text-center py-4 rounded-2xl">Sign In</Link>
                <Link to="/signup" className="w-full bg-[#B95B2A] text-white text-center py-4 rounded-2xl shadow-lg shadow-orange-900/20">Sign Up</Link>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <Link to={userRole === 'admin' ? "/admin" : "/dashboard"} className="w-full bg-[#2D1B14] text-white text-center py-4 rounded-2xl">
                  Go to Dashboard
                </Link>
                <button onClick={handleLogout} className="w-full bg-red-50 text-red-500 text-center py-4 rounded-2xl">
                  Signout
                </button>
              </div>
            )}
          </div>

          <div className="flex items-center justify-center gap-8 pt-8 text-gray-400">
            <Facebook size={20} />
            <Instagram size={20} />
            <Linkedin size={20} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;