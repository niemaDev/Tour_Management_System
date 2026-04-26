import React, { useState } from 'react';
import { 
  User, Mail, Phone, Calendar, 
  Users, CreditCard, ArrowRight, ArrowLeft
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BookingPage = () => {
  const navigate = useNavigate(); // Hook for navigation
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    departureDate: '',
    travelers: '1',
    specialRequests: '',
    agreeToTerms: false
  });

  const PRICE_PER_PERSON = 45000;
  const total = PRICE_PER_PERSON * parseInt(formData.travelers);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleProceedToPayment = async (e) => {
    if (e) e.preventDefault();

    if (!formData.firstName || !formData.email || !formData.departureDate) {
      alert("Please fill in the required details.");
      return;
    }
    if (!formData.agreeToTerms) {
      alert("Please agree to the terms.");
      return;
    }

    setIsSubmitting(true);
    try {
      console.log("Processing Booking...", formData);
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert(`Success! Redirecting ${formData.firstName} to Payment...`);
    } catch (error) {
      alert("Error processing booking.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen font-sans text-[#2D1B14] pb-32 lg:pb-12">
      {/* Top Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-16 lg:px-24 pt-8">
        <button 
          onClick={() => navigate(-1)} // Goes back to previous page
          className="flex items-center gap-2 text-gray-400 hover:text-[#B95B2A] transition font-bold text-sm"
        >
          <ArrowLeft size={16} /> Back to Tours
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-16 lg:px-24 py-8">
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">Complete Your Booking</h1>
          <p className="text-gray-500 text-sm md:text-base">Fill in your details to reserve your spot</p>
        </div>

        <form onSubmit={handleProceedToPayment} className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          
          {/* Mobile Header Summary */}
          <div className="lg:hidden bg-white p-4 rounded-3xl border border-gray-100 flex items-center gap-4">
            <img 
              src="https://images.unsplash.com/photo-1541410965313-d53b3c16ef17?auto=format&fit=crop&q=80" 
              className="w-16 h-16 rounded-2xl object-cover" alt="Tour" 
            />
            <div>
              <h4 className="font-bold text-[#2D1B14]">Simien Mountains Trek</h4>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-widest text-[10px]">7 Days</p>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6 md:space-y-10">
            {/* Personal Info Section */}
            <section className="bg-white p-6 md:p-8 rounded-3xl md:rounded-[2.5rem] border border-gray-100 shadow-sm">
              <h3 className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-widest mb-6 md:mb-8">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
                <FormInput label="First Name *" name="firstName" value={formData.firstName} onChange={handleInputChange} icon={<User size={18}/>} placeholder="John" required />
                <FormInput label="Last Name *" name="lastName" value={formData.lastName} onChange={handleInputChange} icon={<User size={18}/>} placeholder="Doe" required />
                <FormInput label="Email Address *" name="email" type="email" value={formData.email} onChange={handleInputChange} icon={<Mail size={18}/>} placeholder="john@example.com" required />
                <FormInput label="Phone Number *" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} icon={<Phone size={18}/>} placeholder="+251..." required />
              </div>
            </section>

            {/* Travel Details Section */}
            <section className="bg-white p-6 md:p-8 rounded-3xl md:rounded-[2.5rem] border border-gray-100 shadow-sm">
              <h3 className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-widest mb-6 md:mb-8">Travel Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
                <FormInput label="Departure Date *" name="departureDate" type="date" value={formData.departureDate} onChange={handleInputChange} icon={<Calendar size={18}/>} required />
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold ml-1">Travelers *</label>
                  <div className="relative">
                    <select 
                      name="travelers" value={formData.travelers} onChange={handleInputChange}
                      className="w-full p-4 bg-gray-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-orange-100 appearance-none font-medium text-gray-700"
                    >
                      {[1, 2, 3, 4, 5, 6].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Person' : 'People'}</option>)}
                    </select>
                    <Users size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>
            </section>

            <div className="space-y-6">
              <label className="flex items-start gap-4 cursor-pointer">
                <input type="checkbox" name="agreeToTerms" checked={formData.agreeToTerms} onChange={handleInputChange} className="mt-1 accent-[#B95B2A] w-5 h-5 rounded" />
                <span className="text-xs md:text-sm text-gray-500 leading-relaxed">I agree to the terms and 30% deposit requirement.</span>
              </label>

              <button 
                type="submit" disabled={isSubmitting}
                className={`hidden lg:flex w-full py-6 rounded-2xl font-black text-lg items-center justify-center gap-3 shadow-2xl transition-all ${
                  isSubmitting ? 'bg-gray-300' : 'bg-[#B95B2A] text-white hover:bg-[#a04e24]'
                }`}
              >
                {isSubmitting ? "Processing..." : <><CreditCard size={22} /> Proceed to Payment <ArrowRight /></>}
              </button>
            </div>
          </div>

          {/* Desktop Sidebar */}
          <aside className="hidden lg:block lg:col-span-4">
            <div className="bg-white p-8 rounded-[3rem] border border-gray-50 sticky top-10 shadow-2xl shadow-gray-200/50">
              <h3 className="text-xl font-bold mb-6">Booking Summary</h3>
              <div className="rounded-3xl overflow-hidden mb-6 h-40">
                <img src="https://images.unsplash.com/photo-1541410965313-d53b3c16ef17?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Simien" />
              </div>
              <div className="flex justify-between text-sm font-medium mb-4">
                <span className="text-gray-400">Total Price</span>
                <span className="text-[#2D1B14] font-black text-xl">{total.toLocaleString()} ETB</span>
              </div>
              <div className="bg-orange-50/50 p-4 rounded-2xl text-[#B95B2A] text-[10px] font-black uppercase text-center">Free cancellation up to 14 days before</div>
            </div>
          </aside>

          {/* Mobile Sticky Bar */}
          <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 z-[100] flex items-center justify-between shadow-2xl">
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase">Total Amount</p>
              <p className="text-xl font-black text-[#B95B2A]">{total.toLocaleString()} ETB</p>
            </div>
            <button 
              type="button" onClick={handleProceedToPayment} disabled={isSubmitting}
              className="bg-[#B95B2A] text-white px-8 py-4 rounded-2xl font-bold text-sm active:scale-95 transition-transform"
            >
              {isSubmitting ? "Wait..." : "Pay Now"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const FormInput = ({ label, icon, placeholder, name, value, onChange, type = "text", required }) => (
  <div className="flex flex-col gap-2">
    <label className="text-sm font-bold ml-1">{label}</label>
    <div className="relative">
      <input 
        required={required} name={name} type={type} value={value} onChange={onChange}
        className="w-full p-4 pl-12 bg-gray-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-orange-100 transition-all font-medium text-gray-700"
        placeholder={placeholder}
      />
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B95B2A]">{icon}</div>
    </div>
  </div>
);

export default BookingPage;