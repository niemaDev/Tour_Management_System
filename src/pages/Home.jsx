import React from 'react';
import { MapPin, ShieldCheck, Star, ArrowRight, Clock, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const tours = [
    { id: 1, title: "Simien Mountains Trek", location: "Amhara", duration: "7 Days", price: "45,000", img: "/terr.jpg" },
    { id: 2, title: "Safari Adventure", location: "Omo Valley", duration: "5 Days", price: "38,000", img: "/city.jpg" }, 
    { id: 3, title: "Historic Route", location: "Tigray", duration: "10 Days", price: "52,000", img: "/bdr.jpg" },
    { id: 4, title: "Lalibela Churches", location: "Lalibela", duration: "4 Days", price: "28,000", img: "/camel.jpg" },
  ];

  return (
    <div className="bg-white font-sans">
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/land.jpg" alt="Ethiopian Landscape" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay for readability */}
        </div>
        
        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-8xl font-serif font-bold mb-6 leading-tight">
              Discover the <span className="text-[#D4A017]">Land of Origins</span>
            </h1>
            <p className="text-lg md:text-2xl mb-10 opacity-90 font-light max-w-2xl leading-relaxed">
              Experience authentic Ethiopian adventures with expert guides, from ancient history to breathtaking mountain ranges.
            </p>
            <div className="flex gap-4">
              <Link to="/tours" className="bg-[#D4A017] hover:bg-white hover:text-[#4B2E20] text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg">
                Explore Tours
              </Link>
              <Link to="/contact" className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white hover:text-[#4B2E20] text-white px-8 py-4 rounded-xl font-bold transition-all duration-300">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURE SECTION (3 CARDS) --- */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <FeatureCard 
              Icon={Users} 
              title="Expert Local Guides" 
              desc="Our guides are born and raised in Ethiopia, offering deep cultural insights you won't find anywhere else." 
            />
            <FeatureCard 
              Icon={Globe} 
              title="Seamless Travel" 
              desc="From hotel bookings to domestic flights, we handle every detail so you can focus on the adventure." 
            />
            <FeatureCard 
              Icon={ShieldCheck} 
              title="Trusted & Secure" 
              desc="Your safety is our priority. We use top-rated transportation and verified luxury accommodations." 
            />
          </div>
        </div>
      </section>

      {/* --- TOURS SECTION --- */}
      <section className="py-24 px-6 container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#4B2E20] mb-4">
              Popular <span className="text-[#D4A017]">Destinations</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl">
              Carefully curated tour packages designed to give you the most authentic Ethiopian experience.
            </p>
          </div>
          <Link to="/tours" className="text-[#D4A017] font-bold flex items-center gap-2 hover:underline">
            View All Tours <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {tours.map((tour) => (
            <div key={tour.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-gray-100">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={tour.img} 
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700" 
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#4B2E20] px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                  {tour.location}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-bold text-[#4B2E20] mb-2 group-hover:text-[#D4A017] transition">{tour.title}</h3>
                <div className="flex items-center text-gray-400 text-xs mb-6 gap-4">
                  <span className="flex items-center gap-1"><Clock size={14} className="text-[#D4A017]" /> {tour.duration}</span>
                  <span className="flex items-center gap-1"><Star size={14} className="text-[#D4A017]" /> 4.9</span>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-50">
                  <p className="text-[#4B2E20] font-black text-lg">
                    {tour.price} <span className="text-[10px] text-gray-400 font-normal">ETB / person</span>
                  </p>
                  <Link to={`/tour/${tour.id}`} className="bg-[#4B2E20] text-white p-3 rounded-xl group-hover:bg-[#D4A017] transition-colors">
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto bg-[#4B2E20] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4A017] opacity-10 rounded-full -mr-32 -mt-32" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">Ready for an Unforgettable Trip?</h2>
            <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto font-light">
              Don't just see Ethiopia. Experience it. Book your custom adventure with the region's most trusted tour operators.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-3 bg-[#D4A017] text-white px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-all shadow-xl shadow-black/20">
              Get Started Now <ArrowRight size={24} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

/* --- REUSABLE FEATURE CARD --- */
const FeatureCard = ({ Icon, title, desc }) => (
  <div className="flex flex-col items-start p-8 bg-white rounded-3xl shadow-sm border border-gray-50 hover:shadow-md transition-all">
    <div className="w-16 h-16 bg-[#FFF8F1] rounded-2xl flex items-center justify-center mb-8 text-[#D4A017]">
      <Icon size={32} />
    </div>
    <h3 className="text-2xl font-bold text-[#4B2E20] mb-4">{title}</h3>
    <p className="text-gray-500 leading-relaxed text-sm">{desc}</p>
  </div>
);

export default Home;