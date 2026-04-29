import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Map, 
  ClipboardList, 
  BarChart3, 
  LogOut, 
  ChevronLeft, 
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

const AdminLayout = () => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Close mobile sidebar when route changes
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

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
    <div className="flex h-screen bg-[#F8F9FA] overflow-hidden relative">
      
      {/* MOBILE OVERLAY */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[60] lg:hidden backdrop-blur-sm"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside 
        className={`bg-[#2D1B14] text-white flex flex-col transition-all duration-300 ease-in-out fixed lg:relative h-full z-[70] shrink-0
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} 
          ${isCollapsed ? 'lg:w-20' : 'lg:w-64'} w-64`}
      >
        {/* DESKTOP COLLAPSE TOGGLE */}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hidden lg:flex absolute -right-3 top-10 bg-[#B95B2A] text-white rounded-full p-1.5 shadow-lg hover:scale-110 transition-transform z-[80] border-2 border-[#F8F9FA]"
        >
          {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>

        {/* LOGO SECTION */}
        <div className="p-6 h-20 flex items-center justify-between lg:justify-center overflow-hidden">
          <span className={`font-black tracking-tighter uppercase transition-all duration-300 ${isCollapsed ? 'lg:text-xl' : 'text-2xl'}`}>
            {isCollapsed ? (
              <span className="text-[#B95B2A] hidden lg:block">EA</span>
            ) : (
              <div className="flex items-center">TOUR<span className="text-[#B95B2A]">Admin</span></div>
            )}
          </span>
          {/* Mobile Close Button */}
          <button className="lg:hidden p-1 text-gray-400" onClick={() => setIsMobileOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* NAVIGATION */}
        <nav className="flex-grow px-4 space-y-2 overflow-y-auto overflow-x-hidden pt-4">
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
                
                <span className={`transition-opacity duration-300 whitespace-nowrap ${
                  isCollapsed ? 'lg:opacity-0 lg:pointer-events-none' : 'opacity-100'
                }`}>
                  {item.name}
                </span>

                {/* Tooltip for desktop collapsed mode */}
                {isCollapsed && (
                  <div className="absolute left-full ml-4 px-3 py-1 bg-[#2D1B14] text-white text-[10px] rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10 hidden lg:block">
                    {item.name}
                  </div>
                )}
              </Link>
            );
          })}
        </nav>

        {/* LOGOUT */}
        <div className="p-4 border-t border-white/5">
          <Link 
            to="/" 
            className="flex items-center gap-3 px-4 py-3 text-red-400 font-bold text-sm hover:bg-red-500/10 rounded-xl transition"
          >
            <LogOut size={18} className="shrink-0" />
            <span className={`whitespace-nowrap ${isCollapsed ? 'lg:hidden' : 'block'}`}>Exit Admin</span>
          </Link>
        </div>
      </aside>

      {/* CONTENT AREA */}
      <main className="flex-grow flex flex-col min-w-0 h-full">
        <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-4 lg:px-8 shrink-0">
          <div className="flex items-center gap-4">
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMobileOpen(true)}
              className="lg:hidden p-2 text-[#2D1B14] hover:bg-gray-100 rounded-lg transition"
            >
              <Menu size={24} />
            </button>
            <h2 className="font-bold text-[#2D1B14] uppercase tracking-widest text-[10px] md:text-xs">
              {getPageTitle()}
            </h2>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-bold text-[#2D1B14]">Nimet Yayualem</p>
              <p className="text-[10px] text-gray-400 uppercase tracking-tighter">System Admin</p>
            </div>
            <div className="w-8 h-8 md:w-9 md:h-9 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#B95B2A] font-black text-xs shadow-sm">
              NY
            </div>
          </div>
        </header>

        {/* MAIN SCROLLABLE CONTENT */}
        <div className="flex-grow overflow-y-auto p-4 md:p-8 bg-[#F8F9FA]">
          <div className="max-w-7xl mx-auto h-full">
             <Outlet /> 
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;