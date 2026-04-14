import React from 'react';

const Reports = () => {
  const stats = [
    { label: "Total Bookings", value: "124" },
    { label: "Top Destination", value: "Highlands" },
    { label: "Revenue (ETB)", value: "112,400" }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">System Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow border-l-4 border-blue-900">
            <p className="text-gray-500 text-sm uppercase font-semibold">{stat.label}</p>
            <p className="text-3xl font-bold mt-1">{stat.value}</p>
          </div>
        ))}
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-bold mb-4">Recent Reservation Activity</h3>
        <div className="h-40 bg-gray-50 flex items-center justify-center text-gray-400 border-2 border-dashed rounded-lg">
          Activity Chart Placeholder
        </div>
      </div>
    </div>
  );
};

export default Reports;