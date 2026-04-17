import React, { useState } from 'react';
import { Search, Filter, Plus, Edit, Trash2 } from 'lucide-react';
import AddTourModal from './AddTourModal';

const ManageTours = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tours = [
    { id: 1, name: "Simien Mountains Trek", region: "Amhara", duration: "7 Days", price: "45,000 ETB", maxPeople: 12, status: "Active" },
    { id: 2, name: "Omo Valley Safari", region: "Southern Nations", duration: "5 Days", price: "38,000 ETB", maxPeople: 8, status: "Active" },
    { id: 3, name: "Historic Northern Route", region: "Tigray", duration: "10 Days", price: "52,000 ETB", maxPeople: 15, status: "Active" },
    { id: 4, name: "Lalibela Churches Tour", region: "Amhara", duration: "4 Days", price: "28,000 ETB", maxPeople: 20, status: "Active" },
  ];

  return (
    <div className="p-8">
      <AddTourModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      <div className="flex justify-between items-center mb-8 gap-4">
        <div className="relative flex-grow max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input type="text" placeholder="Search tours..." className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-burnt-orange/10 outline-none" />
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-5 py-3 border border-gray-200 rounded-xl font-bold text-coffee hover:bg-gray-50 transition">
            <Filter size={18}/> Filter
          </button>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-burnt-orange text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-burnt-orange/20 hover:brightness-110 transition"
          >
            <Plus size={18}/> Add Tour
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-400 font-bold border-b border-gray-50 text-sm">
              <th className="pb-4 px-4">Tour Name</th>
              <th className="pb-4 px-4">Region</th>
              <th className="pb-4 px-4">Duration</th>
              <th className="pb-4 px-4">Price</th>
              <th className="pb-4 px-4 text-center">Max People</th>
              <th className="pb-4 px-4">Status</th>
              <th className="pb-4 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tours.map(t => (
              <tr key={t.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition">
                <td className="py-5 px-4 font-bold text-coffee">{t.name}</td>
                <td className="py-5 px-4 text-gray-500 font-medium">{t.region}</td>
                <td className="py-5 px-4 text-gray-500 font-medium">{t.duration}</td>
                <td className="py-5 px-4 font-bold text-burnt-orange">{t.price}</td>
                <td className="py-5 px-4 text-gray-500 font-medium text-center">{t.maxPeople}</td>
                <td className="py-5 px-4">
                  <span className="bg-green-50 text-green-600 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">{t.status}</span>
                </td>
                <td className="py-5 px-4">
                  <div className="flex justify-center gap-3">
                    <button className="text-burnt-orange hover:bg-burnt-orange/10 p-2 rounded-lg transition"><Edit size={18}/></button>
                    <button className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition"><Trash2 size={18}/></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageTours;