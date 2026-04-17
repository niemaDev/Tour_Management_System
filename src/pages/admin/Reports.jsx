import React from 'react';
import { TrendingUp, Download, PieChart, ArrowUpRight } from 'lucide-react';

const Reports = () => {
  const stats = [
    { label: "Growth", value: "+12.5%", icon: TrendingUp, color: "text-green-500" },
    { label: "Bookings", value: "124", icon: ArrowUpRight, color: "text-burnt-orange" },
    { label: "Avg. Price", value: "42k ETB", icon: PieChart, color: "text-coffee" }
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-10">
        <h3 className="text-2xl font-bold text-coffee">System Analytics</h3>
        <button className="flex items-center gap-2 bg-coffee text-white px-6 py-3 rounded-xl font-bold hover:brightness-125 transition">
          <Download size={18} /> Export Data
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <p className="text-gray-400 text-xs uppercase font-bold tracking-widest">{stat.label}</p>
              <stat.icon className={stat.color} size={20} />
            </div>
            <p className="text-3xl font-bold text-coffee">{stat.value}</p>
          </div>
        ))}
      </div>
      
      <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-[2rem] h-64 flex flex-col items-center justify-center text-gray-400">
        <TrendingUp size={48} className="mb-4 opacity-10" />
        <p className="font-bold">Reservation Activity Chart</p>
        <p className="text-sm">Waiting for real-time booking data...</p>
      </div>
    </div>
  );
};

export default Reports;