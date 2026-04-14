import React from 'react';
import { Search, MapPin, Clock, Star, ArrowRight, Filter } from 'lucide-react';

const Catalog = () => {
  const tours = [
    { id: 1, title: "Simien Mountains Trek", desc: "Explore Ethiopia's dramatic highland landscapes", location: "Amhara", duration: "7 Days", price: "45,000", tag: "Trekking", rating: 4.9, img: "https://images.unsplash.com/photo-1548231016-16328328706b?q=80&w=800" },
    { id: 2, title: "Omo Valley Safari", desc: "Encounter diverse wildlife and indigenous tribes", location: "Southern Nations", duration: "5 Days", price: "38,000", tag: "Safari", rating: 4.8, img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800" },
    { id: 3, title: "Historic Northern Route", desc: "Visit ancient rock-hewn churches and historical sites", location: "Tigray", duration: "10 Days", price: "52,000", tag: "Cultural", rating: 5.0, img: "https://images.unsplash.com/photo-1615560410406-896f6437d0c3?q=80&w=800" },
    { id: 4, title: "Lalibela Churches Tour", desc: "Marvel at the 12th-century rock-cut churches", location: "Amhara", duration: "4 Days", price: "28,000", tag: "Cultural", rating: 4.9, img: "https://images.unsplash.com/photo-1565022803306-056158d629f6?q=80&w=800" },
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      {/* Brown Header Section */}
      <section className="bg-gradient-to-r from-[#2D1B14] to-[#422a1f] pt-16 pb-24 px-8 md:px-20 text-white">
        <h1 className="text-6xl font-serif font-bold mb-4">Explore Our Tours</h1>
        <p className="text-xl opacity-80">Discover 6 unique experiences across Ethiopia</p>
      </section>

      <div className="container mx-auto px-8 -mt-12 flex flex-col lg:row lg:flex-row gap-10 pb-20">
        {/* Sidebar */}
        <aside className="w-full lg:w-80 space-y-6">
          <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100">
            <h3 className="flex items-center gap-2 font-bold text-[#2D1B14] text-xl mb-6">
              <Filter size={20} className="text-[#B95B2A]" /> Filters
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-widest">Region</label>
                <select className="w-full p-3 bg-gray-50 rounded-xl border-none ring-1 ring-gray-200">
                  <option>All Regions</option>
                  <option>Amhara</option>
                  <option>Tigray</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-widest">Price Range</label>
                <input type="range" className="w-full accent-[#B95B2A]" />
                <div className="flex justify-between text-xs mt-1 text-gray-400"><span>0</span><span>100,000 ETB</span></div>
              </div>
            </div>
          </div>
          <div className="bg-[#F5E6D3] p-8 rounded-[2rem] border border-[#d6c1a8]">
            <h4 className="font-bold text-[#2D1B14] mb-2">Need Help?</h4>
            <p className="text-sm text-gray-600 mb-4">Our travel experts are ready to assist you</p>
            <button className="text-[#B95B2A] font-bold">Contact Support →</button>
          </div>
        </aside>

        {/* Main Grid */}
        <main className="flex-1">
          <div className="relative mb-10 shadow-lg rounded-2xl">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={22} />
            <input type="text" placeholder="Search destinations..." className="w-full p-6 pl-16 rounded-2xl border-none focus:ring-2 focus:ring-[#B95B2A]" />
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {tours.map(tour => (
              <div key={tour.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all group">
                <div className="relative h-64">
                  <img src={tour.img} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" alt="" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 text-[#B95B2A] font-bold text-sm">
                    <Star size={14} fill="#B95B2A" /> {tour.rating}
                  </div>
                  <div className="absolute top-4 right-4 bg-[#B95B2A] text-white px-4 py-1 rounded-full text-xs font-bold uppercase">{tour.tag}</div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#2D1B14] mb-2">{tour.title}</h3>
                  <p className="text-gray-500 text-sm mb-6">{tour.desc}</p>
                  <div className="flex gap-6 text-gray-400 text-sm mb-8">
                    <span className="flex items-center gap-2"><MapPin size={16}/> {tour.location}</span>
                    <span className="flex items-center gap-2"><Clock size={16}/> {tour.duration}</span>
                  </div>
                  <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                    <p className="text-[#B95B2A] text-2xl font-black">{tour.price} <span className="text-sm">ETB</span></p>
                    <button className="bg-[#B95B2A] text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-[#a04a20]">
                      Book Now <ArrowRight size={18} />
                    </button>
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