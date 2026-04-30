import React, { useState } from 'react';
import { Mail, Lock, User, Eye, EyeOff, ArrowLeft, ArrowRight, XCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors(prev => ({ ...prev, [e.target.name]: "" }));
    }
  };

  const handleClear = () => {
    setFormData({ fullName: '', email: '', password: '', confirmPassword: '' });
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Write your full name";
    if (!formData.email.includes('@')) newErrors.email = "Write your correct gmail form";
    if (formData.password.length < 6) newErrors.password = "Minimum 6 characters";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match!";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('http://localhost/habesha-backend/register.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password
        }),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message);
        navigate('/login');
      } else {
        setErrors({ email: result.error || "Registration failed" });
      }
    } catch (error) {
      alert("Server connection failed. Is XAMPP running?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#B95B2A] flex justify-center items-start px-4 pt-[114px] pb-20 relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#2D1B14 1px, transparent 1px)`, backgroundSize: '30px 30px' }}></div>

      <div className="relative z-10 bg-white w-full max-w-[440px] rounded-[2.5rem] shadow-2xl p-8 flex flex-col mt-6">
        
        <button onClick={() => navigate('/login')} className="flex items-center gap-1.5 text-gray-400 font-bold hover:text-[#B95B2A] transition mb-4 text-[10px] uppercase tracking-wider">
          <ArrowLeft size={14} /> Back to Login
        </button>

        <div className="text-center mb-6">
          <h1 className="text-3xl font-black tracking-tight text-[#2D1B14] mb-1 uppercase">Join HabeshaTour</h1>
          <p className="text-gray-400 text-xs font-medium px-6">Create your account to start exploring Ethiopia</p>
        </div>

        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <div className="space-y-1">
            <label className="block text-[10px] font-bold text-[#2D1B14] ml-1 uppercase tracking-[0.15em]">Full Name</label>
            <div className="relative">
              <User className={`absolute left-4 top-1/2 -translate-y-1/2 ${errors.fullName ? 'text-red-500' : 'text-[#B95B2A]'}`} size={16} />
              <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter your name" className={`w-full pl-11 pr-4 py-3 bg-gray-50 border rounded-xl outline-none text-sm ${errors.fullName ? 'border-red-500' : 'border-gray-100 focus:ring-2 focus:ring-[#B95B2A]/20'}`} />
            </div>
            {errors.fullName && <p className="text-[10px] text-red-500 font-bold ml-1 italic">{errors.fullName}</p>}
          </div>

          <div className="space-y-1">
            <label className="block text-[10px] font-bold text-[#2D1B14] ml-1 uppercase tracking-[0.15em]">Email Address</label>
            <div className="relative">
              <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 ${errors.email ? 'text-red-500' : 'text-[#B95B2A]'}`} size={16} />
              <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" className={`w-full pl-11 pr-4 py-3 bg-gray-50 border rounded-xl outline-none text-sm ${errors.email ? 'border-red-500' : 'border-gray-100 focus:ring-2 focus:ring-[#B95B2A]/20'}`} />
            </div>
            {errors.email && <p className="text-[10px] text-red-500 font-bold ml-1 italic">{errors.email}</p>}
          </div>

          <div className="space-y-1">
            <label className="block text-[10px] font-bold text-[#2D1B14] ml-1 uppercase tracking-[0.15em]">Password</label>
            <div className="relative">
              <Lock className={`absolute left-4 top-1/2 -translate-y-1/2 ${errors.password ? 'text-red-500' : 'text-[#B95B2A]'}`} size={16} />
              <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} placeholder="Create Password" className={`w-full pl-11 pr-12 py-3 bg-gray-50 border rounded-xl outline-none text-sm ${errors.password ? 'border-red-500' : 'border-gray-100 focus:ring-2 focus:ring-[#B95B2A]/20'}`} />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <div className="space-y-1">
            <label className="block text-[10px] font-bold text-[#2D1B14] ml-1 uppercase tracking-[0.15em]">Confirm Password</label>
            <div className="relative">
              <Lock className={`absolute left-4 top-1/2 -translate-y-1/2 ${errors.confirmPassword ? 'text-red-500' : 'text-[#B95B2A]'}`} size={16} />
              <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Repeat Password" className={`w-full pl-11 pr-12 py-3 bg-gray-50 border rounded-xl outline-none text-sm ${errors.confirmPassword ? 'border-red-500' : 'border-gray-100 focus:ring-2 focus:ring-[#B95B2A]/20'}`} />
              <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {errors.confirmPassword && <p className="text-[10px] text-red-500 font-bold ml-1 italic">{errors.confirmPassword}</p>}
          </div>

          <div className="flex gap-3 mt-8">
            <button type="submit" disabled={loading} className="flex-[2] bg-[#B95B2A] text-white py-4 rounded-xl font-bold text-xs shadow-lg hover:brightness-110 transition flex items-center justify-center gap-2 uppercase tracking-widest">
              {loading ? "Creating..." : "Create Account"} <ArrowRight size={16} />
            </button>

            <button type="button" onClick={handleClear} className="flex-1 bg-gray-100 text-gray-500 py-4 rounded-xl font-bold text-xs hover:bg-gray-200 transition flex items-center justify-center gap-2 uppercase tracking-widest">
              <XCircle size={16} /> Clear
            </button>
          </div>
        </form>

        <div className="mt-8 pt-5 border-t border-gray-50 text-center text-xs text-gray-500 font-medium">
          Already have an account? <Link to="/login" className="text-[#B95B2A] font-bold hover:underline">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;