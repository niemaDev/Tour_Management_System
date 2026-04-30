import React, { useState } from 'react';
import { User, Lock, Mail, Save, AlertCircle, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  
  // Get current user info from localStorage
  const userId = localStorage.getItem('userId');
  const initialName = localStorage.getItem('userName') || '';
  
  const [fullName, setFullName] = useState(initialName);
  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: ''
  });

  const [message, setMessage] = useState({ type: '', text: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ type: '', text: '' });

    // Validation
    if (passwords.new && passwords.new !== passwords.confirm) {
      setMessage({ type: 'error', text: 'New passwords do not match!' });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('http://localhost/habesha-backend/update_profile.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId,
          fullName,
          currentPassword: passwords.current,
          newPassword: passwords.new
        })
      });

      const result = await response.json();

      if (result.success) {
        setMessage({ type: 'success', text: 'Profile updated successfully!' });
        localStorage.setItem('userName', fullName); // Update local storage
        setPasswords({ current: '', new: '', confirm: '' }); // Clear password fields
      } else {
        setMessage({ type: 'error', text: result.message || 'Update failed.' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Server error. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF9] pt-[120px] pb-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold text-[#2D1B14]">Account Settings</h1>
          <p className="text-gray-500">Update your personal information and security</p>
        </div>

        {message.text && (
          <div className={`mb-6 p-4 rounded-2xl flex items-center gap-3 ${
            message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
          }`}>
            {message.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
            <span className="font-medium text-sm">{message.text}</span>
          </div>
        )}

        <form onSubmit={handleUpdateProfile} className="space-y-6">
          {/* Basic Info */}
          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
            <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-6">General Information</h3>
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold ml-1">Full Name</label>
                <div className="relative">
                  <input 
                    type="text" 
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full p-4 pl-12 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-orange-100 font-medium"
                  />
                  <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B95B2A]" />
                </div>
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
            <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-6">Security & Password</h3>
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold ml-1">Current Password</label>
                <div className="relative">
                  <input 
                    type="password" 
                    placeholder="Enter current password to make changes"
                    value={passwords.current}
                    onChange={(e) => setPasswords({...passwords, current: e.target.value})}
                    className="w-full p-4 pl-12 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-orange-100 font-medium"
                    required
                  />
                  <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B95B2A]" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold ml-1">New Password (Optional)</label>
                  <input 
                    type="password" 
                    value={passwords.new}
                    onChange={(e) => setPasswords({...passwords, new: e.target.value})}
                    className="w-full p-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-orange-100 font-medium"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold ml-1">Confirm New Password</label>
                  <input 
                    type="password" 
                    value={passwords.confirm}
                    onChange={(e) => setPasswords({...passwords, confirm: e.target.value})}
                    className="w-full p-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-orange-100 font-medium"
                  />
                </div>
              </div>
            </div>
          </div>

          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#B95B2A] text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:brightness-110 transition shadow-xl shadow-orange-100 disabled:bg-gray-300"
          >
            {isSubmitting ? "Saving Changes..." : <><Save size={20} /> Save All Changes</>}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;