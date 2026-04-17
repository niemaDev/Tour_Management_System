import React, { useState } from 'react';
import { MapPin, Calendar, Users, DollarSign } from 'lucide-react';

// Import the specific sub-pages
import ManageTours from './admin/ManageTours';
import Reports from './admin/Reports';
import UserManagement from './admin/UserManagement';
import BookingMonitor from './admin/BookingMonitor';

const AdminDashboard = () => {
  // State to switch between ManageTours and Reports
  const [activeTab, setActiveTab] = useState('tours');

  const stats = [
    { label: "Total Tours", value: "4", icon: MapPin, color: "bg-burnt-orange" },
    { label: "Total Bookings", value: "4", icon: Calendar, color: "bg-[#8B7355]" },
    { label: "Active Users", value: "156", icon: Users, color: "bg-[#C4A484]" },
    { label: "Revenue (ETB)", value: "336,000", icon: DollarSign, color: "bg-gray-400" },
  ];

  return (
    <div className="p-8 md:p-12 max-w-7xl mx-auto">
      <header className="mb-10">
        <h1 className="text-4xl font-serif font-bold text-coffee">Admin Dashboard</h1>
        <p className="text-gray-500 font-medium">Manage tours, bookings, and users</p>
      </header>

      {/* Stats Cards - These stay visible on both tabs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {stats.map((s, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm transition hover:shadow-md">
            <div className={`${s.color} w-12 h-12 rounded-xl flex items-center justify-center text-white mb-6`}>
              <s.icon size={24} />
            </div>
            <h2 className="text-4xl font-bold text-coffee mb-1">{s.value}</h2>
            <p className="text-gray-400 font-medium tracking-wide uppercase text-xs">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Main Content Card */}
      <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
        
        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-100 bg-gray-50/30">
          <button 
            onClick={() => setActiveTab('tours')}
            className={`px-10 py-6 font-bold text-lg transition-all ${
              activeTab === 'tours' ? 'bg-burnt-orange text-white' : 'text-gray-400 hover:text-coffee'
            }`}
          >
            Tour Management
          </button>
          
          <button 
            onClick={() => setActiveTab('bookings')}
            className={`px-10 py-6 font-bold text-lg transition-all ${
              activeTab === 'reports' ? 'bg-burnt-orange text-white' : 'text-gray-400 hover:text-coffee'
            }`}
          >
            Booking Monitor
          </button>

          <button 
          onClick={() =>setActiveTab('users')}
          className="px-10 py-6 text-gray-400 font-bold text-lg hover:text-coffee transition">
            User Management
          </button>
        </div>

        {/* This switches between your ManageTours file and your Reports file */}
        <div className="transition-all">
         {activeTab === 'tours' && <ManageTours />}
  {activeTab === 'bookings' && <BookingMonitor />}
  {activeTab === 'users' && <UserManagement />}
  {activeTab === 'reports' && <Reports />}
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;