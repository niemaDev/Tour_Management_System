import React, { useState, useEffect } from 'react';
import { Users, Loader2 } from 'lucide-react';
import UserManagement from './admin/UserManagement';

const AdminDashboard = () => {
  const [userCount, setUserCount] = useState(0);
  const [loading, setLoading] = useState(true);

  // Fetch the actual count from your backend
  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await fetch('http://localhost/habesha-backend/get_users.php');
        const data = await response.json();
        // Set the count based on the length of the array returned
        setUserCount(data.length);
      } catch (error) {
        console.error("Error fetching user count:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCount();
  }, []);

  return (
    <div className="space-y-6 md:space-y-10 animate-in fade-in duration-700 pb-10">
      
      {/* 1. HEADER SECTION */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h1 className="text-2xl md:text-4xl font-serif font-bold text-[#2D1B14]">System Overview</h1>
          <p className="text-sm md:text-base text-gray-500 font-medium">Welcome back! Managing registered customers.</p>
        </div>
        
        <div className="hidden sm:block">
           <div className="bg-orange-50 px-6 py-4 rounded-2xl border border-orange-100 text-[#B95B2A] font-bold flex items-center gap-3">
             <Users size={24} />
             <span>Customer Database</span>
           </div>
        </div>
      </div>

      {/* 2. DYNAMIC STATS CARD */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl md:rounded-[2rem] border border-gray-100 shadow-sm flex items-center gap-5">
          <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
            <Users size={28} />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2D1B14]">
              {loading ? <Loader2 className="animate-spin" size={20} /> : userCount}
            </h2>
            <p className="text-gray-400 font-bold tracking-widest uppercase text-[10px]">Active Customers</p>
          </div>
        </div>
      </div>

      {/* 3. MAIN TABLE AREA */}
      <div className="bg-white rounded-2xl md:rounded-[3rem] shadow-sm border border-gray-100 overflow-hidden min-h-[500px]">
        <div className="px-8 py-6 border-b border-gray-100 bg-gray-50/30">
          <h2 className="font-bold text-[#2D1B14] flex items-center gap-2">
            <Users size={18} className="text-[#B95B2A]" />
            Customer Directory
          </h2>
        </div>

        <div className="p-4 md:p-10">
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <UserManagement />
          </div>
        </div>
      </div>

    </div>
  );
};

export default AdminDashboard;