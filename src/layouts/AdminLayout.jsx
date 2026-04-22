import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Map, ClipboardList, BarChart3, LogOut } from 'lucide-react';

const AdminLayout = () => {
  const location = useLocation();

  const menuItems = [
    // Changed path to match the App.js structure
    { name: 'Overview', path: '/admin', icon: LayoutDashboard }, 
    { name: 'Manage Tours', path: '/admin/tours', icon: Map },
    { name: 'Bookings', path: '/admin/bookings', icon: ClipboardList },
    { name: 'Reports', path: '/admin/reports', icon: BarChart3 },
  ];

  // Helper to make the header title look nice
  const getPageTitle = () => {
    const path = location.pathname.split('/').pop();
    if (path === 'admin' || !path) return 'Dashboard Overview';
    return path.replace('-', ' '); // Turns "manage-tours" into "manage tours"
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* SIDEBAR */}
      <aside className="w-64 bg-[#2D1B14] text-white flex flex-col shrink-0">
        <div className="p-8">
          <span className="text-2xl font-black tracking-tighter uppercase">
            Ethio<span className="text-[#B95B2A]">Admin</span>
          </span>
        </div>

        <nav className="flex-grow px-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition font-bold text-sm ${
                location.pathname === item.path 
                  ? 'bg-[#B95B2A] text-white shadow-lg shadow-[#B95B2A]/20' 
                  : 'text-gray-400 hover:bg-white/5'
              }`}
            >
              <item.icon size={18} /> {item.name}
            </Link>
          ))}
        </nav>

        {/* LOGOUT / EXIT */}
        <div className="p-4 border-t border-white/5">
          <Link to="/" className="flex items-center gap-3 px-4 py-3 text-red-400 font-bold text-sm hover:bg-red-500/10 rounded-xl transition">
            <LogOut size={18} /> Exit Admin
          </Link>
        </div>
      </aside>

      {/* CONTENT AREA */}
      <main className="flex-grow flex flex-col min-w-0 overflow-hidden">
        <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-8 shrink-0">
          <h2 className="font-bold text-[#2D1B14] uppercase tracking-widest text-xs">
            {getPageTitle()}
          </h2>
          
          {/* Admin Avatar - Nice professional touch */}
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-bold text-[#2D1B14]">Nimet Yayualem</p>
              <p className="text-[10px] text-gray-400">System Admin</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#B95B2A] flex items-center justify-center text-white font-bold text-xs">
              NY
            </div>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <div className="flex-grow overflow-y-auto p-8">
          <Outlet /> 
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;