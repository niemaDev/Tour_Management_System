import React, { useState } from 'react';
import { 
  MapPin, 
  Calendar, 
  Users, 
  DollarSign, 
  TrendingUp, 
  Plus 
} from 'lucide-react';

// Import sub-pages
import ManageTours from './admin/ManageTours';
import Reports from './admin/Reports';
import UserManagement from './admin/UserManagement';
import BookingMonitor from './admin/BookingMonitor';

// Import your Modal
import AddTourModal from './admin/AddTourModal'; 

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('tours');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stats = [
    { label: "Total Tours", value: "12", icon: MapPin, color: "text-orange-600", bg: "bg-orange-50" },
    { label: "Bookings", value: "48", icon: Calendar, color: "text-[#B95B2A]", bg: "bg-orange-50" },
    { label: "Active Users", value: "1,256", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Revenue", value: "336k ETB", icon: DollarSign, color: "text-green-600", bg: "bg-green-50" },
  ];

  const tabs = [
    { id: 'tours', label: 'Tours' }, // Shortened for mobile space
    { id: 'bookings', label: 'Bookings' },
    { id: 'users', label: 'Users' },
    { id: 'reports', label: 'Reports' },
  ];

  return (
    <div className="space-y-6 md:space-y-10 animate-in fade-in duration-700 pb-10">
      
      {/* 1. HEADER SECTION */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h1 className="text-2xl md:text-4xl font-serif font-bold text-[#2D1B14]">System Overview</h1>
          <p className="text-sm md:text-base text-gray-500 font-medium">Welcome back!</p>
        </div>
        
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-center gap-2 bg-[#B95B2A] text-white px-5 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl font-bold shadow-lg shadow-orange-200 hover:brightness-110 transition active:scale-95 w-full sm:w-auto"
        >
          <Plus size={20} /> <span className="text-sm md:text-base">Add New Tour</span>
        </button>
      </div>

      {/* 2. STATS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((s, i) => (
          <div key={i} className="bg-white p-5 md:p-6 rounded-2xl md:rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-all group">
            <div className="flex items-center justify-between mb-3 md:mb-4">
              <div className={`${s.bg} ${s.color} w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center`}>
                <s.icon size={20} className="md:size-[24px]" />
              </div>
              <span className="text-green-500 bg-green-50 px-2 py-1 rounded-lg text-[9px] md:text-[10px] font-bold flex items-center gap-1">
                <TrendingUp size={10} /> +12%
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2D1B14] mb-1">{s.value}</h2>
            <p className="text-gray-400 font-bold tracking-widest uppercase text-[9px] md:text-[10px]">{s.label}</p>
          </div>
        ))}
      </div>

      {/* 3. MAIN CONTENT MANAGEMENT */}
      <div className="bg-white rounded-2xl md:rounded-[3rem] shadow-sm border border-gray-100 overflow-hidden min-h-[500px]">
        
        {/* Scrollable Tab Bar for Mobile */}
        <div className="flex overflow-x-auto no-scrollbar border-b border-gray-100 bg-gray-50/30 sticky top-0 z-10 backdrop-blur-sm">
          <div className="flex w-full">
            {tabs.map((tab) => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-[100px] md:min-w-0 px-4 md:px-10 py-4 md:py-6 font-bold text-xs md:text-sm whitespace-nowrap transition-all relative
                  ${activeTab === tab.id 
                    ? 'text-[#B95B2A]' 
                    : 'text-gray-400 hover:text-gray-600'}
                `}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#B95B2A] rounded-t-full shadow-[0_-2px_10px_rgba(185,91,42,0.3)]" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Component Display Area */}
        <div className="p-4 md:p-10">
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            {activeTab === 'tours' && <ManageTours />}
            {activeTab === 'bookings' && <BookingMonitor />}
            {activeTab === 'users' && <UserManagement />}
            {activeTab === 'reports' && <Reports />}
          </div>
        </div>
      </div>

      {/* 4. MODAL COMPONENT */}
      <AddTourModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default AdminDashboard;