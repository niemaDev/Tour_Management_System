import React from 'react';
import { useNavigate } from 'react-router-dom'; // Add this for navigation
import { Mail, Phone, Calendar, LogOut, CreditCard, Clock, User, Settings, ArrowUpRight } from 'lucide-react';

// Reusable Stat Component
const StatItem = ({ label, value }) => (
  <div className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
    <span className="text-gray-500 text-sm font-medium">{label}</span>
    <span className="text-[#B95B2A] font-black text-lg">{value}</span>
  </div>
);

const DetailBlock = ({ label, value }) => (
  <div>
    <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-1">{label}</p>
    <p className="text-[#2D1B14] font-bold text-sm">{value}</p>
  </div>
);

const StatusBadge = ({ status }) => {
  const styles = {
    "Confirmed": "bg-green-50 text-green-600 border-green-100",
    "Completed": "bg-blue-50 text-blue-600 border-blue-100",
    "Pending Payment": "bg-orange-50 text-[#B95B2A] border-orange-100",
  };
  return (
    <span className={`px-4 py-1.5 rounded-full text-xs font-bold border ${styles[status] || styles["Confirmed"]}`}>
      {status}
    </span>
  );
};

const Dashboard = () => {
  const navigate = useNavigate();

  const bookings = [
    {
      id: "ETH12345",
      title: "Simien Mountains Trek",
      location: "Ethiopia",
      duration: "7 Days",
      departureDate: "May 15, 2026",
      travelers: "2 People",
      totalPrice: "90,000 ETB",
      status: "Confirmed", // This is an "Upcoming" tour
      img: "https://images.unsplash.com/photo-1548231016-16328328706b?q=80&w=400"
    },
    {
      id: "ETH12347",
      title: "Omo Valley Safari",
      location: "Ethiopia",
      duration: "5 Days",
      departureDate: "Jul 10, 2026",
      travelers: "3 People",
      totalPrice: "114,000 ETB",
      status: "Pending Payment",
      img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=400"
    },
    {
      id: "ETH12001",
      title: "Lalibela Heritage Tour",
      location: "Ethiopia",
      duration: "3 Days",
      departureDate: "Jan 12, 2026",
      travelers: "1 Person",
      totalPrice: "25,000 ETB",
      status: "Completed",
      img: "https://images.unsplash.com/photo-1541410965313-d53b3c16ef17?q=80&w=400"
    }
  ];

  // Logic to calculate stats based on the array
  const totalBookings = bookings.length;
  const completedTours = bookings.filter(b => b.status === "Completed").length;
  const upcomingTours = bookings.filter(b => b.status === "Confirmed" || b.status === "Pending Payment").length;

  return (
    <div className="bg-[#FAF9F6] min-h-screen p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-[#2D1B14] mb-12">My Dashboard</h1>

        <div className="grid lg:grid-cols-4 gap-10 items-start">
          {/* SIDEBAR */}
          <div className="lg:col-span-1 space-y-8">
            {/* User Profile Card */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-[#B95B2A] rounded-full flex items-center justify-center text-white text-2xl font-bold">JD</div>
                <div>
                  <h2 className="text-xl font-bold text-[#2D1B14]">John Doe</h2>
                  <p className="text-gray-400 text-sm">Member</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-gray-500 mb-10">
                <div className="flex items-center gap-3"><Mail size={16}/> john@example.com</div>
                <div className="flex items-center gap-3"><Phone size={16}/> +251 911 234567</div>
              </div>

              <div className="pt-8 border-t border-gray-50 space-y-2">
                <button className="flex items-center gap-3 w-full p-3 hover:bg-gray-50 rounded-xl transition text-[#2D1B14] font-medium"><Settings size={18} /> Settings</button>
                <button className="flex items-center gap-3 w-full p-3 text-red-500 font-medium hover:bg-red-50 rounded-xl transition"><LogOut size={18} /> Logout</button>
              </div>
            </div>
            
            {/* TRAVEL STATISTICS CARD - Updated as requested */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
              <h3 className="font-bold text-[#2D1B14] mb-6">Travel Statistics</h3>
              <div className="space-y-2">
                <StatItem label="Total Bookings" value={totalBookings} />
                <StatItem label="Completed Tours" value={completedTours} />
                <StatItem label="Upcoming Tours" value={upcomingTours} />
              </div>
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="lg:col-span-3 space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-[#2D1B14]">My Bookings</h2>
              {/* BROWSE TOURS BUTTON - Aligned right */}
              <button 
                onClick={() => navigate('/destinations')} 
                className="flex items-center gap-2 bg-[#B95B2A] text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg shadow-orange-100 hover:bg-[#a04e24] transition-all group"
              >
                Browse Tours <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            <div className="space-y-6">
              {bookings.map((booking) => (
                <div key={booking.id} className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-center">
                  <img src={booking.img} alt="" className="w-48 h-48 rounded-2xl object-cover shrink-0" />
                  <div className="flex-grow space-y-4 w-full">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-bold text-[#2D1B14]">{booking.title}</h3>
                      <StatusBadge status={booking.status} />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <DetailBlock label="Booking ID" value={booking.id} />
                      <DetailBlock label="Departure" value={booking.departureDate} />
                      <DetailBlock label="Travelers" value={booking.travelers} />
                      <div>
                        <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-1">Total Price</p>
                        <p className="text-[#B95B2A] font-black">{booking.totalPrice}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;