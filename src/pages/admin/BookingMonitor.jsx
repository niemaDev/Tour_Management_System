import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';

const BookingMonitor = () => {
  // 1. State for filters
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [searchQuery, setSearchQuery] = useState('');

  const bookings = [
    { id: "BK-101", user: "Abebe Kebede", tour: "Simien Mountains", date: "Oct 12, 2025", status: "Confirmed", amount: "45,000 ETB" },
    { id: "BK-102", user: "Sara Tesfaye", tour: "Lalibela Tour", date: "Oct 15, 2025", status: "Pending", amount: "28,000 ETB" },
    { id: "BK-103", user: "Samuel Alamu", tour: "Omo Valley", date: "Oct 20, 2025", status: "Completed", amount: "38,000 ETB" },
    { id: "BK-104", user: "Nimet Eyayu", tour: "Bale Mountains", date: "Oct 25, 2025", status: "Cancelled", amount: "32,000 ETB" },
  ];

  // 2. Status styling (Added 'Completed')
  const statusStyles = {
    Confirmed: "bg-green-50 text-green-600",
    Pending: "bg-yellow-50 text-yellow-600",
    Completed: "bg-blue-50 text-blue-600",
    Cancelled: "bg-red-50 text-red-600",
  };

  // 3. Filter Logic
  const filteredBookings = bookings.filter(b => {
    const matchesStatus = statusFilter === 'All Status' || b.status === statusFilter;
    const matchesSearch = b.user.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          b.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="p-8">
      {/* Search and Dropdown Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        
        {/* Search Bar */}
        <div className="relative flex-grow max-w-md w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder="Search by ID or customer..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-burnt-orange/10 font-medium text-coffee transition" 
          />
        </div>

        {/* Status Dropdown */}
        <div className="relative w-full md:w-64">
          <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full pl-5 pr-10 py-3 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-burnt-orange/10 font-bold text-coffee appearance-none cursor-pointer transition"
          >
            <option>All Status</option>
            <option>Confirmed</option>
            <option>Pending</option>
            <option>Completed</option>
            <option>Cancelled</option>
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
            <ChevronDown size={18} />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-400 font-bold border-b border-gray-50 text-sm">
              <th className="pb-4 px-4">Booking ID</th>
              <th className="pb-4 px-4">Customer</th>
              <th className="pb-4 px-4">Tour</th>
              <th className="pb-4 px-4">Date</th>
              <th className="pb-4 px-4">Amount</th>
              <th className="pb-4 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map((b) => (
              <tr key={b.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition">
                <td className="py-5 px-4 font-mono font-bold text-coffee">{b.id}</td>
                <td className="py-5 px-4 text-gray-600 font-medium">{b.user}</td>
                <td className="py-5 px-4 text-gray-500">{b.tour}</td>
                <td className="py-5 px-4 text-gray-500">{b.date}</td>
                <td className="py-5 px-4 font-bold text-coffee">{b.amount}</td>
                <td className="py-5 px-4">
                  <span className={`px-3 py-1 rounded-lg text-xs font-bold ${statusStyles[b.status]}`}>
                    {b.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {/* Simple "Not Found" message */}
        {filteredBookings.length === 0 && (
          <div className="py-10 text-center text-gray-400 font-medium">
            No bookings found for "{statusFilter}"
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingMonitor;