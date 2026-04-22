import React from 'react';
import { Calendar, MapPin, Clock, Star } from 'lucide-react';

const Dashboard = () => {
  // Mock data for the user's bookings
  const myBookings = [
    {
      id: 1,
      tour: "Simien Mountains Trekking",
      date: "Oct 15, 2026",
      status: "Confirmed",
      price: "12,000 ETB",
      image: "/images/simien.jpg"
    },
    {
      id: 2,
      tour: "Lalibela Rock-Hewn Churches",
      date: "Dec 05, 2026",
      status: "Pending",
      price: "8,500 ETB",
      image: "/images/lalibela.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-[120px] pb-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Welcome Header */}
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-[#2D1B14]">Hello, Nimet! 👋</h1>
          <p className="text-gray-500">Ready for your next Ethiopian adventure?</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT COLUMN: Bookings List */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-xl font-bold text-[#2D1B14] flex items-center gap-2">
              <Calendar className="text-[#B95B2A]" size={22} />
              My Upcoming Trips
            </h2>

            {myBookings.map((booking) => (
              <div key={booking.id} className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 hover:shadow-md transition">
                <div className="w-full md:w-32 h-32 rounded-2xl overflow-hidden bg-gray-200">
                  <img src={booking.image} alt={booking.tour} className="w-full h-full object-cover" />
                </div>
                
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-[#2D1B14]">{booking.tour}</h3>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                      booking.status === 'Confirmed' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                    }`}>
                      {booking.status}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <Clock size={16} /> {booking.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} /> Ethiopia
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center border-t pt-4">
                    <span className="font-bold text-[#B95B2A]">{booking.price}</span>
                    <button className="text-sm font-bold text-[#2D1B14] hover:underline">View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN: Sidebar Stats/Profile */}
          <div className="space-y-6">
            <div className="bg-[#2D1B14] rounded-3xl p-8 text-white shadow-xl">
              <h3 className="text-lg font-bold mb-4">Travel Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Total Trips</span>
                  <span className="font-bold text-xl">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Points Earned</span>
                  <span className="font-bold text-xl text-[#B95B2A]">2,450</span>
                </div>
                <hr className="border-white/10" />
                <button className="w-full bg-[#B95B2A] py-3 rounded-xl font-bold text-sm hover:bg-[#a34f25] transition">
                  Book New Tour
                </button>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-[#2D1B14] mb-4 flex items-center gap-2">
                <Star className="text-yellow-400" size={18} /> Review Recent Trip
              </h3>
              <p className="text-sm text-gray-500 mb-4">How was your visit to the Blue Nile Falls?</p>
              <button className="text-xs font-bold text-[#B95B2A] uppercase tracking-wider hover:underline">
                Write Review
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;