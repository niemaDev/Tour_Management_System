import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Map, 
  ClipboardList, 
  BarChart3, 
  LogOut, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';

const AdminLayout = () => {
  const location = useLocation();
  // 1. State for collapsing the sidebar
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { name: 'Overview', path: '/admin', icon: LayoutDashboard }, 
    { name: 'Manage Tours', path: '/admin/tours', icon: Map },
    { name: 'Bookings', path: '/admin/bookings', icon: ClipboardList },
    { name: 'Reports', path: '/admin/reports', icon: BarChart3 },
  ];

  const getPageTitle = () => {
    const path = location.pathname.split('/').pop();
    if (path === 'admin' || !path) return 'Dashboard Overview';
    return path.replace('-', ' ');
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      
      {/* SIDEBAR */}
      <aside 
        className={`bg-[#2D1B14] text-white flex flex-col transition-all duration-300 ease-in-out relative shrink-0 z-50
          ${isCollapsed ? 'w-20' : 'w-64'}`}
      >
        {/* 2. THE ARROW TOGGLE BUTTON */}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-10 bg-[#B95B2A] text-white rounded-full p-1.5 shadow-lg hover:scale-110 transition-transform z-[60] border-2 border-gray-50"
        >
          {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>

        {/* LOGO SECTION */}
        <div className="p-8 h-24 flex items-center overflow-hidden">
          <span className={`font-black tracking-tighter uppercase transition-all duration-300 ${isCollapsed ? 'text-xl' : 'text-2xl'}`}>
            {isCollapsed ? (
              <span className="text-[#B95B2A]">EA</span>
            ) : (
              <>Ethio<span className="text-[#B95B2A]">Admin</span></>
            )}
          </span>
        </div>

        {/* NAVIGATION */}
        <nav className="flex-grow px-4 space-y-2 overflow-hidden">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm group relative ${
                  isActive 
                    ? 'bg-[#B95B2A] text-white shadow-lg shadow-[#B95B2A]/20' 
                    : 'text-gray-400 hover:bg-white/5'
                }`}
              >
                <item.icon size={18} className="shrink-0" />
                
                {/* Hide text when collapsed */}
                <span className={`transition-opacity duration-300 whitespace-nowrap ${
                  isCollapsed ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}>
                  {item.name}
                </span>

                {/* Tooltip for collapsed mode */}
                {isCollapsed && (
                  <div className="absolute left-full ml-4 px-3 py-1 bg-[#2D1B14] text-white text-[10px] rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
                    {item.name}
                  </div>
                )}
              </Link>
            );
          })}
        </nav>

        {/* LOGOUT */}
        <div className="p-4 border-t border-white/5 overflow-hidden">
          <Link 
            to="/" 
            className="flex items-center gap-3 px-4 py-3 text-red-400 font-bold text-sm hover:bg-red-500/10 rounded-xl transition"
          >
            <LogOut size={18} className="shrink-0" />
            {!isCollapsed && <span className="whitespace-nowrap">Exit Admin</span>}
          </Link>
        </div>
      </aside>

      {/* CONTENT AREA */}
      <main className="flex-grow flex flex-col min-w-0">
        <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-8 shrink-0">
          <h2 className="font-bold text-[#2D1B14] uppercase tracking-widest text-xs">
            {getPageTitle()}
          </h2>
          
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-bold text-[#2D1B14]">Nimet Yayualem</p>
              <p className="text-[10px] text-gray-400 uppercase tracking-tighter">System Admin</p>
            </div>
            <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#B95B2A] font-black text-xs">
              NY
            </div>
          </div>
        </header>

        {/* MAIN SCROLLABLE CONTENT */}
        <div className="flex-grow overflow-y-auto p-8 bg-[#F8F9FA]">
          <div className="max-w-7xl mx-auto">
             <Outlet /> 
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;