import React from 'react';
import { User, Shield, Mail, Trash2 } from 'lucide-react';

const UserManagement = () => {
  const users = [
    { id: 1, name: "Nimet Eyayu", email: "nimet@example.com", role: "Admin", joined: "June 2025" },
    { id: 2, name: "Yayu Alamu", email: "yayu@example.com", role: "User", joined: "July 2025" },
    { id: 3, name: "Guest Traveler", email: "guest@example.com", role: "User", joined: "August 2025" },
  ];

  return (
    <div className="p-8">
      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-400 font-bold border-b border-gray-50 text-sm">
            <th className="pb-4 px-4">User</th>
            <th className="pb-4 px-4">Email</th>
            <th className="pb-4 px-4">Role</th>
            <th className="pb-4 px-4">Joined Date</th>
            <th className="pb-4 px-4 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition">
              <td className="py-5 px-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-burnt-orange">
                    <User size={18} />
                  </div>
                  <span className="font-bold text-coffee">{u.name}</span>
                </div>
              </td>
              <td className="py-5 px-4 text-gray-500 flex items-center gap-2">
                <Mail size={14} /> {u.email}
              </td>
              <td className="py-5 px-4">
                <span className={`flex items-center gap-1 font-bold ${u.role === 'Admin' ? 'text-burnt-orange' : 'text-gray-400'}`}>
                  {u.role === 'Admin' && <Shield size={14} />} {u.role}
                </span>
              </td>
              <td className="py-5 px-4 text-gray-400">{u.joined}</td>
              <td className="py-5 px-4 text-center">
                <button className="text-red-400 hover:text-red-600 transition cursor-pointer p-2">
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;