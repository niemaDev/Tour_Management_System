import React, { useState, useEffect } from 'react';
import { User, Mail, Trash2, Calendar, Loader2, Users } from 'lucide-react';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. Fetch ONLY Customer Users from PHP Backend
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost/habesha-backend/get_users.php');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // 2. Delete User Function
  const handleDelete = async (userId) => {
    if (window.confirm("Are you sure you want to delete this customer?")) {
      try {
        const response = await fetch(`http://localhost/habesha-backend/delete_user.php?id=${userId}`, {
          method: 'DELETE',
        });
        const result = await response.json();
        
        if (result.success) {
          setUsers(users.filter(u => u.id !== userId));
        } else {
          alert(result.error || "Failed to delete user");
        }
      } catch (error) {
        console.error("Delete error:", error);
      }
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-gray-400">
        <Loader2 className="animate-spin mb-2" size={32} />
        <p className="text-sm font-medium uppercase tracking-widest">Loading Customers...</p>
      </div>
    );
  }

  return (
    <div className="w-full space-y-6">
      {/* Header Info */}
      <div className="flex items-center justify-between mb-2">
        <div>
          <h1 className="text-2xl font-black text-[#2D1B14]">Customer Directory</h1>
          <p className="text-sm text-gray-500">Manage your registered travelers and account access.</p>
        </div>
        <div className="bg-orange-50 px-4 py-2 rounded-xl border border-orange-100">
           <span className="text-[#B95B2A] font-bold text-sm flex items-center gap-2">
             <Users size={16} /> {users.length} Total Customers
           </span>
        </div>
      </div>

      {/* --- DESKTOP TABLE VIEW --- */}
      <div className="hidden md:block bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50/50 text-gray-400 font-bold text-[10px] uppercase tracking-[0.1em]">
              <th className="py-4 px-6">User Details</th>
              <th className="py-4 px-6">Contact Info</th>
              <th className="py-4 px-6">Account Status</th>
              <th className="py-4 px-6">Registration</th>
              <th className="py-4 px-6 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-b border-gray-50 hover:bg-gray-50/30 transition">
                <td className="py-5 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-[#B95B2A]">
                      <User size={18} />
                    </div>
                    <span className="font-bold text-[#2D1B14]">{u.fullName || u.name}</span>
                  </div>
                </td>
                <td className="py-5 px-6 text-gray-500">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail size={14} className="text-gray-400" /> {u.email}
                  </div>
                </td>
                <td className="py-5 px-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider bg-green-50 text-green-600 border border-green-100">
                    Active Customer
                  </span>
                </td>
                <td className="py-5 px-6 text-gray-400 text-xs font-medium">
                  {u.joined || 'Recent'}
                </td>
                <td className="py-5 px-6 text-right">
                  <button 
                    onClick={() => handleDelete(u.id)}
                    className="text-red-300 hover:text-red-600 transition p-2.5 hover:bg-red-50 rounded-xl"
                    title="Delete Customer"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* --- MOBILE CARD VIEW --- */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {users.map((u) => (
          <div key={u.id} className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm relative">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-[#B95B2A]">
                <User size={20} />
              </div>
              <div>
                <h3 className="font-black text-[#2D1B14]">{u.fullName || u.name}</h3>
                <span className="text-[10px] font-bold uppercase tracking-widest text-green-600">
                  Customer
                </span>
              </div>
            </div>

            <div className="space-y-3 border-t border-gray-50 pt-4">
              <div className="flex items-center gap-3 text-sm text-gray-500 font-medium">
                <Mail size={14} className="text-gray-300" />
                {u.email}
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-400">
                <Calendar size={14} className="text-gray-300" />
                Joined {u.joined || 'Recent'}
              </div>
            </div>

            <button 
              onClick={() => handleDelete(u.id)}
              className="absolute top-4 right-4 text-red-300 p-2.5 hover:bg-red-50 rounded-2xl transition"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>

      {users.length === 0 && !loading && (
        <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-100">
          <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
             <User size={32} className="text-gray-300" />
          </div>
          <h3 className="text-[#2D1B14] font-bold">No customers found</h3>
          <p className="text-gray-400 text-sm mt-1">There are no registered customers in the database.</p>
        </div>
      )}
    </div>
  );
};

export default UserManagement;