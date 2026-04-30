import React, { useState, useEffect } from 'react';
import { 
  Calendar, MapPin, Clock, Star, PlusCircle, 
  User, Settings, LogOut, ChevronRight, Briefcase 
} from 'lucide-react'; 
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('bookings');
  const [myBookings, setMyBookings] = useState([]);
  const [availableTours, setAvailableTours] = useState([]); // Tours set by Admin
  const [loading, setLoading] = useState(true);

  const userName = localStorage.getItem('userName') || 'Traveler';
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') !== 'true') {
      navigate('/login');
    }
  }, [navigate]);

  // Fetch Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch User Bookings
        const resBookings = await fetch(`http://localhost/habesha-backend/get_bookings.php?user_id=${userId}`);
        const dataBookings = await resBookings.json();
        setMyBookings(Array.isArray(dataBookings) ? dataBookings : []);

        // Fetch Tours available for booking (Admin sets these)
        const resTours = await fetch(`http://localhost/habesha-backend/get_tours.php`);
        const dataTours = await resTours.json();
        setAvailableTours(Array.isArray(dataTours) ? dataTours : []);

      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    if (userId) fetchData();
  }, [userId]);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-[#FDFBF9] pt-[100px] pb-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* SIDE NAV */}
        <aside className="lg:col-span-1 space-y-2">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 mb-6">
             <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-[#B95B2A] font-bold text-2xl mb-4">
                {userName.charAt(0)}
             </div>
             <h2 className="font-bold text-xl text-[#2D1B14]">{userName}</h2>
             <p className="text-sm text-gray-500">Explorer Account</p>
          </div>

          <nav className="space-y-2">
            {[
              { id: 'bookings', label: 'My Bookings', icon: Calendar },
              { id: 'book-now', label: 'Book a Tour', icon: PlusCircle },
              { id: 'profile', label: 'Profile Settings', icon: User },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 p-4 rounded-2xl font-bold transition-all ${
                  activeTab === tab.id 
                  ? 'bg-[#B95B2A] text-white shadow-lg' 
                  : 'bg-white text-gray-500 hover:bg-orange-50'
                }`}
              >
                <tab.icon size={20} /> {tab.label}
              </button>
            ))}
            <button 
              onClick={handleLogout}
              className="w-full flex items-center gap-3 p-4 rounded-2xl font-bold text-red-500 hover:bg-red-50 transition-all"
            >
              <LogOut size={20} /> Sign Out
            </button>
          </nav>
        </aside>

        {/* MAIN CONTENT AREA */}
        <main className="lg:col-span-3">
          {loading ? (
            <div className="h-64 flex items-center justify-center">
               <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-[#B95B2A]"></div>
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              
              {/* TAB: MY BOOKINGS */}
              {activeTab === 'bookings' && (
                <section>
                  <h1 className="text-2xl font-bold mb-6">Your Upcoming Adventures</h1>
                  {myBookings.length === 0 ? (
                    <div className="bg-white rounded-[2.5rem] p-12 text-center border-2 border-dashed border-gray-100">
                      <p className="text-gray-400 mb-4">No bookings found.</p>
                      <button onClick={() => setActiveTab('book-now')} className="text-[#B95B2A] font-bold">Start exploring now →</button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {myBookings.map(b => (
                        <div key={b.id} className="bg-white p-5 rounded-3xl flex flex-wrap md:flex-nowrap gap-4 items-center shadow-sm border border-gray-50">
                          <img src={b.image_url || 'https://images.unsplash.com/photo-1523805009345-7448845a9e13?q=80&w=2070&auto=format&fit=crop'} className="w-20 h-20 rounded-2xl object-cover" alt="" />
                          <div className="flex-grow">
                            <h4 className="font-bold text-[#2D1B14]">{b.tour_name}</h4>
                            <p className="text-sm text-gray-400 flex items-center gap-1"><Clock size={14}/> {b.tour_date}</p>
                          </div>
                          <div className="text-right px-4">
                            <span className="block font-black text-[#B95B2A]">{b.price} ETB</span>
                            <span className="text-[10px] uppercase font-bold text-green-500 bg-green-50 px-2 py-1 rounded-md">{b.status}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              )}

              {/* TAB: BOOK NEW TOUR (The Form) */}
              {activeTab === 'book-now' && (
                <section className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
                  <h1 className="text-2xl font-bold mb-2">Book a New Journey</h1>
                  <p className="text-gray-500 mb-8">Select from our expert-curated Ethiopian tours.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {availableTours.map(tour => (
                      <div key={tour.id} className="group border border-gray-100 rounded-3xl p-4 hover:border-orange-200 transition-all cursor-pointer bg-gray-50">
                        <div className="relative h-40 mb-4 overflow-hidden rounded-2xl">
                          <img src={tour.image_url} alt="" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                          <div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-[#B95B2A]">
                            {tour.price} ETB
                          </div>
                        </div>
                        <h3 className="font-bold text-lg mb-1">{tour.name}</h3>
                        <p className="text-gray-500 text-sm mb-4 line-clamp-2">{tour.description}</p>
                        <button 
                          onClick={() => navigate(`/tour/${tour.id}`)}
                          className="w-full py-3 bg-white border border-[#B95B2A] text-[#B95B2A] rounded-xl font-bold hover:bg-[#B95B2A] hover:text-white transition-colors"
                        >
                          Select This Tour
                        </button>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* TAB: PROFILE */}
              {activeTab === 'profile' && (
                <section className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
                  <h1 className="text-2xl font-bold mb-6">Profile Settings</h1>
                  <div className="space-y-6 max-w-md">
                    <div>
                      <label className="text-sm font-bold text-gray-400 block mb-2 uppercase tracking-wider">Full Name</label>
                      <input type="text" defaultValue={userName} className="w-full p-4 bg-gray-50 rounded-2xl outline-none border border-transparent focus:border-orange-200" />
                    </div>
                    <div>
                      <label className="text-sm font-bold text-gray-400 block mb-2 uppercase tracking-wider">Email Address</label>
                      <input type="email" placeholder="email@example.com" className="w-full p-4 bg-gray-50 rounded-2xl outline-none border border-transparent focus:border-orange-200" />
                    </div>
                    <button className="bg-[#2D1B14] text-white px-8 py-4 rounded-2xl font-bold hover:bg-black transition-all">
                      Update Profile
                    </button>
                  </div>
                </section>
              )}

            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;