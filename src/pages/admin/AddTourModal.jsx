import React from 'react';
import { X, Upload, Save } from 'lucide-react';

const AddTourModal = ({ isOpen, onClose }) => {
  // If the 'isOpen' state is false, don't render anything
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* 1. Backdrop (The dark blurry background) */}
      <div 
        className="absolute inset-0 bg-[#2D1B14]/60 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      ></div>
      
      {/* 2. Modal Content Card */}
      <div className="relative bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <div>
            <h2 className="text-2xl font-serif font-bold text-[#2D1B14]">Add New Tour</h2>
            <p className="text-sm text-gray-400 font-medium">Create a new destination for travelers</p>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-gray-200 rounded-full transition text-gray-400 cursor-pointer"
          >
            <X size={24} />
          </button>
        </div>

        {/* Form Body */}
        <form className="p-8 max-h-[65vh] overflow-y-auto custom-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Tour Name */}
            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Tour Name</label>
              <input 
                type="text" 
                placeholder="e.g. Lalibela Rock-Hewn Churches" 
                className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#B95B2A]/20 outline-none font-medium text-coffee transition" 
              />
            </div>

            {/* Region Selection */}
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Region</label>
              <select className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none font-medium text-coffee appearance-none cursor-pointer">
                <option>Amhara</option>
                <option>Oromia</option>
                <option>Tigray</option>
                <option>Afar</option>
                <option>SNNPR</option>
              </select>
            </div>

            {/* Price */}
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Price (ETB)</label>
              <input 
                type="number" 
                placeholder="45000" 
                className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none font-medium text-coffee" 
              />
            </div>

            {/* Duration */}
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Duration</label>
              <input 
                type="text" 
                placeholder="e.g. 3 Days / 2 Nights" 
                className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none font-medium text-coffee" 
              />
            </div>

            {/* Max People */}
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Max Capacity</label>
              <input 
                type="number" 
                placeholder="15" 
                className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none font-medium text-coffee" 
              />
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Short Description</label>
              <textarea 
                rows="3"
                placeholder="Briefly describe the tour highlights..." 
                className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none font-medium text-coffee resize-none"
              ></textarea>
            </div>

            {/* Image Upload Area */}
            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Tour Featured Image</label>
              <div className="border-2 border-dashed border-gray-200 rounded-3xl p-10 flex flex-col items-center justify-center text-gray-400 hover:border-[#B95B2A] hover:bg-orange-50/30 transition cursor-pointer group">
                <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-orange-100 group-hover:text-[#B95B2A] transition">
                  <Upload size={24} />
                </div>
                <p className="font-bold text-gray-500">Drop your image here</p>
                <p className="text-xs">Supports: JPG, PNG (Max 5MB)</p>
              </div>
            </div>
          </div>
        </form>

        {/* Footer Actions */}
        <div className="p-8 bg-gray-50/50 flex gap-4">
          <button 
            onClick={onClose} 
            className="flex-1 py-4 border border-gray-200 rounded-2xl font-bold text-gray-500 hover:bg-white hover:shadow-sm transition cursor-pointer"
          >
            Discard
          </button>
          <button className="flex-1 py-4 bg-[#B95B2A] text-white rounded-2xl font-bold shadow-lg shadow-[#B95B2A]/30 flex items-center justify-center gap-2 hover:brightness-110 transition cursor-pointer">
            <Save size={20} /> Save Tour
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTourModal;