import React from 'react';
import { User, Shield, Mail, Trash2, Calendar } from 'lucide-react';

const UserManagement = () => {
  const users = [
    { id: 1, name: "Nimet Eyayu", email: "nimet@example.com", role: "Admin", joined: "June 2025" },
    { id: 2, name: "Yayu Alamu", email: "yayu@example.com", role: "User", joined: "July 2025" },
    { id: 3, name: "Guest Traveler", email: "guest@example.com", role: "User", joined: "August 2025" },
  ];

  return (
    <div className="w-full">
      {/* --- DESKTOP TABLE VIEW (Visible on md and up) --- */}
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
                    <span className="font-bold text-[#2D1B14]">{u.name}</span>
                  </div>
                </td>
                <td className="py-5 px-4 text-gray-500">
                  <div className="flex items-center gap-2">
                    <Mail size={14} className="text-gray-400" /> {u.email}
                  </div>
                </td>
                <td className="py-5 px-4">
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ${
                    u.role === 'Admin' ? 'bg-orange-100 text-[#B95B2A]' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {u.role === 'Admin' && <Shield size={12} />} {u.role}
                  </span>
                </td>
                <td className="py-5 px-4 text-gray-400 text-sm">{u.joined}</td>
                <td className="py-5 px-4 text-right">
                  <button className="text-red-400 hover:text-red-600 transition p-2 hover:bg-red-50 rounded-lg">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* --- MOBILE CARD VIEW (Visible on small screens only) --- */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {users.map((u) => (
          <div key={u.id} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm relative">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-[#B95B2A]">
                <User size={20} />
              </div>
              <div>
                <h3 className="font-black text-[#2D1B14]">{u.name}</h3>
                <span className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider ${
                  u.role === 'Admin' ? 'text-[#B95B2A]' : 'text-gray-400'
                }`}>
                  {u.role === 'Admin' && <Shield size={10} />} {u.role}
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
                Joined {u.joined}
              </div>
            </div>

            {/* Absolute positioned action for mobile */}
            <button className="absolute top-4 right-4 text-red-400 p-2 hover:bg-red-50 rounded-xl transition">
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserManagement;