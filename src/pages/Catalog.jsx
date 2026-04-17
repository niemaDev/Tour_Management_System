import React, { useState } from 'react';
import { Search, MapPin, Clock, Star, ArrowRight, Filter, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Catalog = () => {
  const [region, setRegion] = useState('All Regions');
  const [activity, setActivity] = useState('All Activities');
  const [priceRange, setPriceRange] = useState(100000);
  const [searchQuery, setSearchQuery] = useState('');

  const tours = [
    { id: 1, title: "Simien Mountains Trek", desc: "Explore Ethiopia's dramatic highland landscapes", location: "Amhara", duration: "7 Days", price: "45,000", tag: "Trekking", rating: 4.9, img: "https://images.unsplash.com/photo-1548231016-16328328706b?q=80&w=800" },
    { id: 2, title: "Omo Valley Safari", desc: "Encounter diverse wildlife and indigenous tribes", location: "Southern Nations", duration: "5 Days", price: "38,000", tag: "Safari", rating: 4.8, img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800" },
    { id: 3, title: "Historic Northern Route", desc: "Visit ancient rock-hewn churches and historical sites", location: "Tigray", duration: "10 Days", price: "52,000", tag: "Cultural", rating: 5.0, img: "https://images.unsplash.com/photo-1615560410406-896f6437d0c3?q=80&w=800" },
    { id: 4, title: "Lalibela Churches Tour", desc: "Marvel at the 12th-century rock-cut churches", location: "Amhara", duration: "4 Days", price: "28,000", tag: "Cultural", rating: 4.9, img: "https://images.unsplash.com/photo-1565022803306-056158d629f6?q=80&w=800" },
  ];

  const filteredTours = tours.filter(tour => {
    const matchesRegion = region === 'All Regions' || tour.location === region;
    const matchesActivity = activity === 'All Activities' || tour.tag === activity;
    const matchesSearch = tour.title.toLowerCase().includes(searchQuery.toLowerCase());
    const numericPrice = parseInt(tour.price.replace(',', ''));
    return matchesRegion && matchesActivity && matchesSearch && numericPrice <= priceRange;
  });

  return (
    <div className="bg-[#FAF9F6] min-h-screen font-sans">
      
      {/* Header Section */}
      <section className="bg-[#3D2B1F] pt-24 pb-48 px-8 md:px-20 text-white">
        <div className="container mx-auto px-8 -mt-24 relative z-10">
          <h1 className="text-6xl font-serif font-bold mb-4">Explore Our Tours</h1>
          <p className="text-xl opacity-80">Discover unique experiences across Ethiopia</p>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="container mx-auto px-8 -mt-24 relative z-10 flex flex-col lg:flex-row gap-8 pb-20">
        
        {/* Sidebar (Filter Card) */}
        <aside className="w-full lg:w-80">
          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 h-fit">
            <h3 className="flex items-center gap-3 font-bold text-[#2D1B14] text-xl mb-8">
              <Filter size={22} className="text-[#B95B2A]" /> Filters
            </h3>
            
            {/* Region Selection */}
            <div className="mb-6">
              <label className="block text-sm font-bold text-gray-400 mb-3 uppercase tracking-wider font-sans">Region</label>
              <div className="relative">
                <select 
                  value={region} 
                  onChange={(e) => setRegion(e.target.value)}
                  className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none appearance-none font-medium focus:ring-2 focus:ring-[#B95B2A]/20"
                >
                  <option>All Regions</option>
                  <option>Amhara</option>
                  <option>Oromia</option>
                  <option>Tigray</option>
                  <option>Afar</option>
                  <option>Southern Nations</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
              </div>
            </div>

            {/* Activity Type Selection */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-gray-400 mb-3 uppercase tracking-wider font-sans">Activity Type</label>
              <div className="relative">
                <select 
                  value={activity} 
                  onChange={(e) => setActivity(e.target.value)}
                  className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none appearance-none font-medium focus:ring-2 focus:ring-[#B95B2A]/20"
                >
                  <option>All Activities</option>
                  <option>Trekking</option>
                  <option>Safari</option>
                  <option>Cultural</option>
                  <option>Wildlife</option>
                  <option>Adventure</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
              </div>
            </div>

            {/* Price Slider */}
            <div className="mb-10">
              <label className="block text-sm font-bold text-gray-400 mb-3 uppercase tracking-widest font-sans">Price Range</label>
              <input 
                type="range" min="0" max="100000" step="1000"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#B95B2A]" 
              />
              <div className="flex justify-between text-xs mt-4 font-bold text-gray-500">
                <span>0</span>
                <span className="text-[#B95B2A]">{Number(priceRange).toLocaleString()} ETB</span>
              </div>
            </div>
           
            <div className="bg-[#FDF6ED] p-6 rounded-3xl border border-[#F5E6D3]">
              <h4 className="font-bold text-[#2D1B14] mb-1 font-serif">Need Help?</h4>
              <p className="text-[11px] text-gray-500 mb-4 leading-relaxed font-sans">Our experts are ready to assist you.</p>
              <button className="text-[#B95B2A] text-xs font-bold hover:underline font-sans">Contact Support →</button>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1">
          {/* Search Bar */}
          <div className="relative mb-6 shadow-2xl rounded-3xl overflow-hidden">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
            <input 
              type="text" 
              placeholder="Search destinations..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-7 pl-16 border-none text-gray-900 outline-none bg-white text-lg focus:ring-0 font-sans" 
            />
          </div>

          {/* Result Count */}
          <div className="mb-8 px-2">
            <h2 className="text-2xl font-bold text-[#2D1B14] font-serif">Showing {filteredTours.length} tours</h2>
          </div>

          {/* Tours Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredTours.map(tour => (
              <div key={tour.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col border border-gray-50">
                <div className="relative h-64 overflow-hidden">
                  <img src={tour.img} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt={tour.title} />
                  <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1.5 text-[#B95B2A] font-bold text-sm shadow-sm">
                    <Star size={14} fill="#B95B2A" /> {tour.rating}
                  </div>
                  <div className="absolute top-5 right-5 bg-[#B95B2A] text-white px-5 py-1 rounded-full text-xs font-bold uppercase tracking-widest font-sans">{tour.tag}</div>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-[#2D1B14] mb-3 font-serif">{tour.title}</h3>
                  <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed font-sans">{tour.desc}</p>
                  
                  <div className="flex gap-6 text-gray-400 text-sm mb-8 mt-auto font-sans">
                    <span className="flex items-center gap-2 font-medium"><MapPin size={18} className="text-[#B95B2A]"/> {tour.location}</span>
                    <span className="flex items-center gap-2 font-medium"><Clock size={18} className="text-[#B95B2A]"/> {tour.duration}</span>
                  </div>

                  <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                    <div>
                      <span className="text-[10px] text-gray-400 font-bold block mb-1 font-sans">STARTING AT</span>
                      <p className="text-[#B95B2A] text-2xl font-black font-sans">{tour.price} <span className="text-sm font-medium">ETB</span></p>
                    </div>
                    
                    {/* Fixed Navigation Link */}
                    <Link 
                      to={`/tour/${tour.id}`}
                      className="bg-[#B95B2A] text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-[#9c4c23] shadow-lg shadow-orange-100 transition-all active:scale-95 font-sans"
                    >
                      Book Now <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Catalog;