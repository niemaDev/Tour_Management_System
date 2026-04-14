import React, { useState } from 'react';
import { 
  MapPin, Calendar, Users, DollarSign, 
  Search, Filter, Plus, Edit, Trash2 
} from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('Tour Management');

  const stats = [
    { label: "Total Tours", value: "4", icon: <MapPin className="text-brand-orange" />, color: "bg-orange-50" },
    { label: "Total Bookings", value: "4", icon: <Calendar className="text-[#8B7355]" />, color: "bg-[#F5F2ED]" },
    { label: "Active Users", value: "156", icon: <Users className="text-[#A39171]" />, color: "bg-[#F9F7F2]" },
    { label: "Revenue (ETB)", value: "336,000", icon: <DollarSign className="text-gray-500" />, color: "bg-gray-50" },
  ];

  const tours = [
    { name: "Simien Mountains Trek", region: "Amhara", duration: "7 Days", price: "45,000 ETB", maxPeople: 12, status: "Active" },
    { name: "Omo Valley Safari", region: "Southern Nations", duration: "5 Days", price: "38,000 ETB", maxPeople: 8, status: "Active" },
    { name: "Historic Northern Route", region: "Tigray", duration: "10 Days", price: "52,000 ETB", maxPeople: 15, status: "Active" },
    { name: "Lalibela Churches Tour", region: "Amhara", duration: "4 Days", price: "28,000 ETB", maxPeople: 20, status: "Active" },
  ];

  return (
    <div className="min-h-screen bg-brand-cream p-8 md:p-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-10">
          <h1 className="text-4xl font-serif font-bold text-brand-dark mb-2">Admin Dashboard</h1>
          <p className="text-gray-500">Manage tours, bookings, and users</p>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.color}`}>
                {stat.icon}
              </div>
              <div>
                <p className="text-4xl font-bold text-brand-dark mb-1">{stat.value}</p>
                <p className="text-sm text-gray-400 font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Content Container */}
        <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
          
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-100 bg-gray-50/30">
            {['Tour Management', 'Booking Monitor', 'User Management'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-10 py-5 font-bold text-sm transition-all ${
                  activeTab === tab 
                  ? 'bg-brand-orange text-white shadow-lg relative z-10' 
                  : 'text-gray-400 hover:text-brand-dark'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="p-8">
            {/* Table Controls */}
            <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
              <div className="flex gap-4 flex-grow max-w-2xl">
                <div className="relative flex-grow">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input 
                    type="text" 
                    placeholder="Search tours..." 
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange/20"
                  />
                </div>
                <button className="flex items-center gap-2 px-6 py-3 border border-gray-100 rounded-xl font-bold text-gray-600 hover:bg-gray-50">
                  <Filter size={18} /> Filter
                </button>
              </div>
              <button className="flex items-center gap-2 bg-brand-orange text-white px-8 py-3 rounded-xl font-bold hover:bg-[#a04a20] transition shadow-md">
                <Plus size={20} /> Add Tour
              </button>
            </div>

            {/* Tour Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-gray-400 text-xs uppercase tracking-widest border-b border-gray-50">
                    <th className="pb-4 font-bold">Tour Name</th>
                    <th className="pb-4 font-bold">Region</th>
                    <th className="pb-4 font-bold">Duration</th>
                    <th className="pb-4 font-bold text-center">Price</th>
                    <th className="pb-4 font-bold text-center">Max People</th>
                    <th className="pb-4 font-bold text-center">Status</th>
                    <th className="pb-4 font-bold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {tours.map((tour, idx) => (
                    <tr key={idx} className="group hover:bg-gray-50/50 transition">
                      <td className="py-6 font-bold text-brand-dark">{tour.name}</td>
                      <td className="py-6 text-gray-500">{tour.region}</td>
                      <td className="py-6 text-gray-500 font-medium">{tour.duration}</td>
                      <td className="py-6 text-brand-orange font-black text-center">{tour.price}</td>
                      <td className="py-6 text-gray-500 font-bold text-center">{tour.maxPeople}</td>
                      <td className="py-6 text-center">
                        <span className="px-4 py-1.5 bg-green-50 text-green-600 text-[10px] font-black uppercase tracking-tighter rounded-full">
                          {tour.status}
                        </span>
                      </td>
                      <td className="py-6">
                        <div className="flex justify-end gap-3">
                          <button className="p-2 text-brand-orange hover:bg-brand-orange/10 rounded-lg transition"><Edit size={18} /></button>
                          <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition"><Trash2 size={18} /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;