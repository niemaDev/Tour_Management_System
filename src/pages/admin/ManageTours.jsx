import React from 'react';

const ManageTours = () => (
  <div className="bg-white p-6 rounded-lg shadow">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold">Admin: Inventory Management</h2>
      <button className="bg-green-600 text-white px-4 py-2 rounded">+ New Package</button>
    </div>
    <table className="w-full text-left">
      <thead>
        <tr className="bg-gray-50 border-b">
          <th className="p-3">Tour Name</th>
          <th className="p-3">Price</th>
          <th className="p-3">Status</th>
          <th className="p-3">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b">
          <td className="p-3">Highlands Explorer</td>
          <td className="p-3">ETB 899</td>
          <td className="p-3"><span className="text-green-600 text-xs font-bold uppercase">Active</span></td>
          <td className="p-3">
            <button className="text-blue-600 mr-3">Edit</button>
            <button className="text-red-600">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default ManageTours;