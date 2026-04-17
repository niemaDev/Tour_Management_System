import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-cream flex flex-col">
      {/* Admin Navbar */}
      <nav className="bg-coffee text-white px-8 md:px-20 py-4 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-burnt-orange rounded-full flex items-center justify-center">
            <span className="font-bold">ET</span>
          </div>
          <span className="text-xl font-serif font-bold">Ethiopian Tours</span>
        </div>
        
        <div className="flex items-center gap-8">
          <Link to="/destinations" className="hover:text-burnt-orange transition">Destinations</Link>
          <Link to="/dashboard" className="hover:text-burnt-orange transition">Dashboard</Link>
          <div className="flex gap-4">
            <Link 
              to="/" 
              className="bg-[#B95B2A]/20 border border-burnt-orange text-white px-6 py-2 rounded-lg font-bold hover:bg-burnt-orange transition"
            >
              Exit Admin
            </Link>
            <button className="bg-burnt-orange px-6 py-2 rounded-lg font-bold hover:brightness-110 transition">
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Dynamic Content Area */}
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AdminLayout;