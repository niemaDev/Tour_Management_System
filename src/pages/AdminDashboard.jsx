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
    { id: 'tours', label: 'Tour Management' },
    { id: 'bookings', label: 'Booking Monitor' },
    { id: 'users', label: 'User Management' },
    { id: 'reports', label: 'Reports' },
  ];

  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      
      {/* 1. HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-serif font-bold text-[#2D1B14]">System Overview</h1>
          <p className="text-gray-500 font-medium">Welcome back, Nimet. Here's what's happening today.</p>
        </div>
        
        {/* Functional Add Tour Button */}
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-center gap-2 bg-[#B95B2A] text-white px-6 py-4 rounded-2xl font-bold shadow-lg shadow-orange-100 hover:brightness-110 transition active:scale-95 cursor-pointer"
        >
          <Plus size={20} /> Add New Tour
        </button>
      </div>

      {/* 2. STATS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div key={i} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-all group cursor-default">
            <div className="flex items-center justify-between mb-4">
              <div className={`${s.bg} ${s.color} w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:rotate-12`}>
                <s.icon size={24} />
              </div>
              <span className="text-green-500 bg-green-50 px-2 py-1 rounded-lg text-[10px] font-bold flex items-center gap-1">
                <TrendingUp size={12} /> +12%
              </span>
            </div>
            <h2 className="text-3xl font-bold text-[#2D1B14] mb-1">{s.value}</h2>
            <p className="text-gray-400 font-bold tracking-widest uppercase text-[10px]">{s.label}</p>
          </div>
        ))}
      </div>

      {/* 3. MAIN CONTENT MANAGEMENT */}
      <div className="bg-white rounded-[3rem] shadow-sm border border-gray-100 overflow-hidden min-h-[600px] mb-10">
        
        {/* Scrollable Tab Bar for Mobile */}
        <div className="flex overflow-x-auto no-scrollbar border-b border-gray-100 bg-gray-50/50">
          {tabs.map((tab) => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-10 py-6 font-bold text-sm whitespace-nowrap transition-all relative
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

        {/* Component Display Area */}
        <div className="p-4 md:p-10">
          {activeTab === 'tours' && <ManageTours />}
          {activeTab === 'bookings' && <BookingMonitor />}
          {activeTab === 'users' && <UserManagement />}
          {activeTab === 'reports' && <Reports />}
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