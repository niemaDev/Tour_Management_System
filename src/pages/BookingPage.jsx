import React, { useState } from 'react';
import { 
  User, Mail, Phone, Calendar, 
  Users, MessageSquare, CreditCard, ArrowRight, Check 
} from 'lucide-react';

const BookingPage = () => {
  // 1. Form State Management
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    departureDate: '',
    travelers: '1 Person',
    specialRequests: '',
    agreeToTerms: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // 2. Handle Input Changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // 3. Handle Form Submission (Proceed to Payment)
  const handleProceedToPayment = async (e) => {
    e.preventDefault();
    
    if (!formData.agreeToTerms) {
      alert("Please agree to the terms and conditions to proceed.");
      return;
    }

    setIsSubmitting(true);

    // Simulate Payment Gateway Integration (e.g., Chapa or Stripe)
    setTimeout(() => {
      setIsSubmitting(false);
      console.log("Booking Data Submitted:", formData);
      alert(`Redirecting ${formData.firstName} to Secure Payment Gateway...`);
      // In production: window.location.href = response.data.checkout_url;
    }, 2000);
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen font-sans text-[#2D1B14]">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-12">
        
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-serif font-bold mb-2">Complete Your Booking</h1>
          <p className="text-gray-500">Fill in your details to reserve your spot</p>
        </div>

        <form onSubmit={handleProceedToPayment} className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT: Booking Form Container */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Personal Information Section */}
            <section className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
              <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-8">
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormInput 
                  label="First Name *" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  icon={<User size={18}/>} 
                  placeholder="John" 
                  required
                />
                <FormInput 
                  label="Last Name *" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  icon={<User size={18}/>} 
                  placeholder="Doe" 
                  required
                />
                <FormInput 
                  label="Email Address *" 
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  icon={<Mail size={18}/>} 
                  placeholder="john@example.com" 
                  required
                />
                <FormInput 
                  label="Phone Number *" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  icon={<Phone size={18}/>} 
                  placeholder="+251 911 234567" 
                  required
                />
              </div>
            </section>

            {/* Travel Details Section */}
            <section className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
              <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-8">
                Travel Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormInput 
                  label="Departure Date *" 
                  name="departureDate"
                  type="text"
                  value={formData.departureDate}
                  onChange={handleInputChange}
                  icon={<Calendar size={18}/>} 
                  placeholder="dd/mm/yyyy" 
                  required
                />
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold ml-1">Number of Travelers *</label>
                  <div className="relative">
                    <select 
                      name="travelers"
                      value={formData.travelers}
                      onChange={handleInputChange}
                      className="w-full p-4 bg-gray-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-orange-100 transition-all appearance-none font-medium"
                    >
                      <option>1 Person</option>
                      <option>2 People</option>
                      <option>3 People</option>
                      <option>4+ People</option>
                    </select>
                    <Users size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Special Requests */}
              <div className="mt-8">
                <label className="text-sm font-bold ml-1 mb-3 block">Special Requests (Optional)</label>
                <textarea 
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  className="w-full p-5 h-32 bg-gray-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-orange-100 transition-all resize-none font-medium"
                  placeholder="Any dietary requirements, accessibility needs, or other requests..."
                ></textarea>
              </div>
            </section>

            {/* Terms and Button */}
            <div className="space-y-6">
              <label className="flex items-start gap-4 cursor-pointer group">
                <input 
                  type="checkbox" 
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className="mt-1.5 accent-[#B95B2A] w-5 h-5 rounded border-gray-300" 
                />
                <span className="text-sm text-gray-500 leading-relaxed">
                  I agree to the terms and conditions and privacy policy. I understand that a deposit of 30% is required to confirm the booking.
                </span>
              </label>

              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-6 rounded-2xl font-black text-lg flex items-center justify-center gap-3 shadow-2xl transition-all ${
                  isSubmitting 
                  ? 'bg-gray-300 cursor-not-allowed' 
                  : 'bg-[#B95B2A] text-white hover:bg-[#a04e24] shadow-orange-200'
                }`}
              >
                {isSubmitting ? (
                  "Processing Payment..."
                ) : (
                  <>
                    <CreditCard size={22} />
                    Proceed to Payment
                    <ArrowRight className="ml-2" />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* RIGHT: Booking Summary Sidebar */}
          <aside className="lg:col-span-4">
            <div className="bg-white p-8 rounded-[3rem] border border-gray-50 sticky top-10 shadow-2xl shadow-gray-200/50">
              <h3 className="text-xl font-bold mb-8">Booking Summary</h3>
              
              <div className="rounded-[2rem] overflow-hidden mb-8 h-44 shadow-inner">
                 <img 
                  src="https://images.unsplash.com/photo-1541410965313-d53b3c16ef17?auto=format&fit=crop&q=80" 
                  alt="Simien Mountains" 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-2 pb-8 border-b border-dashed border-gray-100">
                <h4 className="font-serif font-bold text-2xl">Simien Mountains Trek</h4>
                <p className="text-gray-400 font-bold text-sm uppercase tracking-widest">7 Days</p>
              </div>

              <div className="py-8 space-y-5">
                <div className="flex justify-between items-center text-sm font-medium">
                  <span className="text-gray-400">Price per person</span>
                  <span className="text-[#2D1B14] font-black">45,000 ETB</span>
                </div>
                <div className="flex justify-between items-center text-sm font-medium">
                  <span className="text-gray-400">Travelers</span>
                  <span className="text-[#2D1B14] font-black">{formData.travelers.split(' ')[0]}</span>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-3xl font-black text-[#B95B2A]">
                    {(45000 * parseInt(formData.travelers)).toLocaleString()} ETB
                  </span>
                </div>
                <p className="text-xs font-bold text-gray-400 mb-8">
                  Deposit required: {(45000 * parseInt(formData.travelers) * 0.3).toLocaleString()} ETB (30%)
                </p>
                
                <div className="bg-orange-50/50 border border-orange-100 text-[#B95B2A] text-xs font-black p-4 rounded-2xl text-center uppercase tracking-tighter">
                  Free cancellation up to 14 days before departure
                </div>
              </div>
            </div>
          </aside>

        </form>
      </div>
    </div>
  );
};

// Internal Helper Component for Inputs
const FormInput = ({ label, icon, placeholder, name, value, onChange, type = "text", required = false }) => (
  <div className="flex flex-col gap-2">
    <label className="text-sm font-bold ml-1">{label}</label>
    <div className="relative">
      <input 
        required={required}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="w-full p-4 pl-12 bg-gray-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-orange-100 transition-all font-medium text-gray-700"
        placeholder={placeholder}
      />
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B95B2A]">
        {icon}
      </div>
    </div>
  </div>
);

export default BookingPage;