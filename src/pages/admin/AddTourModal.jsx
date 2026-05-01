import React, { useState } from 'react';
import { X, Save, Loader2 } from 'lucide-react';

const AddTourModal = ({ isOpen, onClose, onTourAdded }) => {
  const initialState = {
    name: '',
    region: 'Amhara',
    price: '',
    duration: '',
    capacity: '',
    description: '',
  };

  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost/habesha-backend/add_tour.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert(result.message || "Tour Saved!");
        setFormData(initialState);

    onTourAdded(); // Refresh table in ManageTours
        onClose();
      } else {
        alert("Error: " + (result.error || "Failed to save tour."));
      }
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Server error. Please check if XAMPP is running.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-[#2D1B14]/60 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <div>
            <h2 className="text-2xl font-serif font-bold text-[#2D1B14]">Add New Tour</h2>
            <p className="text-sm text-gray-400 font-medium">Create a new destination for travelers</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full transition text-gray-400">
            <X size={24} />
          </button>
        </div>

        <form id="tourForm" onSubmit={handleSubmit} className="p-8 max-h-[65vh] overflow-y-auto custom-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Tour Name</label>
              <input 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                type="text" 
                placeholder="e.g. Lalibela Rock-Hewn Churches" 
                className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none font-medium text-[#2D1B14] transition focus:border-[#B95B2A]/30" 
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Region</label>
              <select 
                name="region"
                value={formData.region}
                onChange={handleChange}
                className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none font-medium text-[#2D1B14] cursor-pointer"
              >
                <option>Amhara</option>
                <option>Oromia</option>
                <option>Tigray</option>
                <option>Afar</option>
                <option>SNNPR</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Price (ETB)</label>
              <input 
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                type="number" 
                placeholder="45000" 
                className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none font-medium text-[#2D1B14]" 
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Duration</label>
              <input 
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                required
                type="text" 
                placeholder="e.g. 3 Days / 2 Nights" 
                className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none font-medium text-[#2D1B14]" 
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Max Capacity</label>
              <input 
                name="capacity"
                value={formData.capacity}
                onChange={handleChange}
                required
                type="number" 
                placeholder="15" 
                className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none font-medium text-[#2D1B14]" 
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Short Description</label>
              <textarea 
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="3"
                placeholder="Briefly describe the tour highlights..." 
                className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none font-medium text-[#2D1B14] resize-none"
              ></textarea>
            </div>
          </div>
        </form>

        <div className="p-8 bg-gray-50/50 flex gap-4">
          <button 
            type="button"
            onClick={onClose} 
            className="flex-1 py-4 border border-gray-200 rounded-2xl font-bold text-gray-500 hover:bg-white transition"
          >
            Discard
          </button>
          <button 
            form="tourForm"
            type="submit"
            disabled={loading}
            className="flex-1 py-4 bg-[#B95B2A] text-white rounded-2xl font-bold shadow-lg shadow-[#B95B2A]/30 flex items-center justify-center gap-2 hover:brightness-110 transition disabled:opacity-50"
          >
            {loading ? <Loader2 className="animate-spin" size={20} /> : <Save size={20} />}
            {loading ? "Saving..." : "Save Tour"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTourModal;