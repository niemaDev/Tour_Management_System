import React, { useState, useEffect } from 'react'; 
import { Search, Filter, Plus, Edit, Trash2 } from 'lucide-react';
import AddTourModal from './AddTourModal';

const ManageTours = () => {
  const [tours, setTours] = useState([]); 
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchTours = async () => {
    try {
      const response = await fetch('http://localhost/habesha-backend/get_tours.php');
      const data = await response.json();
      
      // Since your DB columns now match (name, region, price, etc.), 
      // we just add a default 'status' if it's not in your DB yet.
      const cleanedData = data.map(tour => ({
        ...tour,
        status: tour.status || 'Active',
        // Ensuring maxPeople in the table looks at the 'capacity' column from DB
        maxPeople: tour.capacity || 0 
      }));

      setTours(cleanedData);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching tours:", error);
      setTours([]); // Set to empty array to avoid .map errors
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-pulse text-coffee font-bold text-xl">Loading Ethiopia Tours...</div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <AddTourModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onTourAdded={fetchTours}
      />
      
      <div className="flex justify-between items-center mb-8 gap-4">
        <div className="relative flex-grow max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder="Search tours..." 
            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-orange-200 outline-none" 
          />
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-5 py-3 border border-gray-200 rounded-xl font-bold text-coffee hover:bg-gray-50 transition">
            <Filter size={18}/> Filter
          </button>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-[#B95B2A] text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-orange-100 hover:brightness-110 transition"
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
            {tours.map((t) => (
              <tr key={t.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition">
                <td className="py-5 px-4 font-bold text-coffee">{t.name}</td>
                <td className="py-5 px-4 text-gray-500 font-medium">{t.region}</td>
                <td className="py-5 px-4 text-gray-500 font-medium">{t.duration}</td>
                <td className="py-5 px-4 font-bold text-[#B95B2A]">{t.price} ETB</td>
                <td className="py-5 px-4 text-gray-500 font-medium text-center">{t.maxPeople}</td>
                <td className="py-5 px-4">
                  <span className="bg-green-50 text-green-600 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">
                    {t.status}
                  </span>
                </td>
                <td className="py-5 px-4">
                  <div className="flex justify-center gap-3">
                    <button className="text-[#B95B2A] hover:bg-orange-50 p-2 rounded-lg transition">
                      <Edit size={18}/>
                    </button>
                    <button className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition">
                      <Trash2 size={18}/>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {tours.length === 0 && (
          <div className="py-20 text-center flex flex-col items-center">
            <div className="text-gray-300 mb-2 font-medium">No tours found in your database.</div>
            <button 
               onClick={() => setIsModalOpen(true)}
               className="text-[#B95B2A] font-bold hover:underline"
            >
              Add your first tour
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageTours;