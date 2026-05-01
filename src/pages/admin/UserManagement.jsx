import React, { useState, useEffect } from 'react';
import { User, Shield, Mail, Trash2, Calendar, Loader2 } from 'lucide-react';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. Fetch Users from PHP Backend
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost/habesha-backend/get_users.php');
      const data = await response.json();
      console.log("My User Data:", data);
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
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        const response = await fetch(`http://localhost/habesha-backend/delete_user.php?id=${userId}`, {
          method: 'DELETE',
        });
        const result = await response.json();
        
        if (result.success) {
          // Remove from local state to update UI immediately
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
        <p className="text-sm font-medium">Fetching users...</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* --- DESKTOP TABLE VIEW --- */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-400 font-bold border-b border-gray-100 text-sm">
              <th className="pb-4 px-4">User</th>
              <th className="pb-4 px-4">Email</th>
              <th className="pb-4 px-4">Role</th>
              <th className="pb-4 px-4">Joined Date</th>
              <th className="pb-4 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition">
                <td className="py-5 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-[#B95B2A]">
                      <User size={18} />
                    </div>
                    <span className="font-bold text-[#2D1B14]">{u.name || u.fullName}</span>
                  </div>
                </td>
                <td className="py-5 px-4 text-gray-500">
                  <div className="flex items-center gap-2">
                    <Mail size={14} className="text-gray-400" /> {u.email}
                  </div>
                </td>
                <td className="py-5 px-4">
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ${
                    u.role?.toLowerCase() === 'admin' ? 'bg-orange-100 text-[#B95B2A]' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {u.role?.toLowerCase() === 'admin' && <Shield size={12} />} {u.role}
                  </span>
                </td>
                <td className="py-5 px-4 text-gray-400 text-sm">
                  {u.joined_at || u.joined || 'Recent'}
                </td>
                <td className="py-5 px-4 text-right">
                  <button 
                    onClick={() => handleDelete(u.id)}
                    className="text-red-400 hover:text-red-600 transition p-2 hover:bg-red-50 rounded-lg"
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
          <div key={u.id} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm relative">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-[#B95B2A]">
                <User size={20} />
              </div>
              <div>
                <h3 className="font-black text-[#2D1B14]">{u.name || u.fullName}</h3>
                <span className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider ${
                  u.role?.toLowerCase() === 'admin' ? 'text-[#B95B2A]' : 'text-gray-400'
                }`}>
                  {u.role?.toLowerCase() === 'admin' && <Shield size={10} />} {u.role}
                </span>
              </div>
            </div>

            <div className="space-y-3 border-t border-gray-50 pt-4">
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <Mail size={14} className="text-gray-300" />
                {u.email}
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Calendar size={14} className="text-gray-300" />
                Joined {u.joined_at || u.joined || 'Recent'}
              </div>
            </div>

            <button 
              onClick={() => handleDelete(u.id)}
              className="absolute top-4 right-4 text-red-400 p-2 hover:bg-red-50 rounded-xl transition"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>

      {users.length === 0 && !loading && (
        <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-gray-200 mt-4">
          <p className="text-gray-400 font-medium">No users found in the database.</p>
        </div>
      )}
    </div>
  );
};

export default UserManagement;