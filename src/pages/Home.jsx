import React, {useState} from 'react';
import { MapPin, ShieldCheck, Star, ArrowRight, Clock } from 'lucide-react';
import {Link, useNavigate} from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  const tours = [
    { id: 1, title: "Simien Mountains Trek", location: "Amhara", duration: "7 Days", price: "45,000", img: "/terr.jpg" },
    { id: 2, title: "Safari Adventure", location: "Omo Valley", duration: "5 Days", price: "38,000", img: "/city.jpg" }, 
    { id: 3, title: "Historic Route", location: "Tigray", duration: "10 Days", price: "52,000", img: "/bdr.jpg" },
    { id: 4, title: "Lalibela Churches", location: "Lalibela", duration: "4 Days", price: "28,000", img: "/camel.jpg" },
  ];
  return (
    <div className="bg-cream font-sans">
      {/* HERO SECTION */}
      <section className="relative min-h-[calc(100vh-214px)] flex items-center  text-white pt-20 pb-40 px-6 md:px-16 lg:px-24 overflow-hidden bg-coffee">
        <div className="absolute inset-0 z-0">
          <div className="bg-[url('/land.jpg')] bg-cover bg-center h-screen">
</div>
          <div className="absolute inset-0 bg-linear-to-r from-coffee/90 via-coffee/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-[1.1] drop-shadow-2xl">
            Discover the Land of Origins
          </h1>
          <p className="text-lg md:text-xl mb-10 opacity-90 font-light max-w-xl">
            Experience authentic Ethiopia adventures with expert guides, from ancient history to breathtaking mountain ranges.
          </p>
        </div>
      </section>
      <section className="py-24 px-8 container mx-auto">
        <div className="grid md:grid-cols-3 gap-16">
          <FeatureCard 
            Icon={MapPin} 
            title="Expert Guides" 
            desc="Local guides with deep knowledge of Ethiopian culture and history." 
          />
          <FeatureCard 
            Icon={ShieldCheck} 
            title="Trusted Service" 
            desc="Over 10 years of experience providing safe and memorable journeys." 
          />
          <FeatureCard 
            Icon={Star} 
            title="Best Value" 
            desc="Competitive pricing with all-inclusive packages and no hidden fees." 
          />
        </div>
      </section>
     <section className="
     py-20 px-8 bg-white/50">
  <div className="text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee mb-4">Featured Destinations</h2>
    <p className="text-gray-500 text-lg">Explore our most popular tour packages</p>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 container mx-auto">
    {tours.map((tour) => (
      <div 
        key={tour.id} 
        className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-gray-100">
        <div className="relative h-60 overflow-hidden
        w-full  mt-[114px] ">
          <img 
            src={tour.img} 
            alt={tour.title}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-700" 
          />
          <span className="absolute top-4 right-4 bg-burnt-orange text-white px-4 py-1 rounded-full text-xs font-bold">
            {tour.location}
          </span>
        </div>
        <div className="p-7">
          <h3 className="text-xl font-bold text-coffee mb-3">{tour.title}</h3>
          <div className="flex items-center text-gray-400 text-sm mb-6">
            <Clock size={16} className="mr-2" /> 
            <span>{tour.duration}</span>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <p className="text-burnt-orange font-extrabold text-xl">
                {tour.price} ETB
              </p>
            </div>
            <Link
              to={`/tour/${tour.id}`}
              className="text-burnt-orange transform group-hover:translate-x-2 transition duration-300 p-2 hover:bg-orange-50 rounded-full cursor-pointer"
            >
              <ArrowRight size={24} />
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>
  <div className="flex justify-center w-full my-12 bg-white/50">
    <Link
      to="/tours"
      className="group flex items-center gap-3 bg-[#B95B2A] text-white px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-all"
    >
      View All Tours
      <ArrowRight
        size={24}
        className="group-hover:translate-x-2 transition-transform duration-300"
      />
    </Link>
  </div>
</section>
      <section className="bg-coffee py-28 px-8 text-center text-white relative">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Ready to Start Your Adventure?</h2>
          <p className="opacity-70 text-lg mb-12 font-light">
            Join thousands of travelers who have experienced the magic of Ethiopia with our expert-guided tours.
          </p>
          <button>
            <Link
            to="/tours"
             className="group flex items-center gap-3 bg-[#B95B2A] text-white px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-all">
              Book Your Journey <ArrowRight size={20} />
            </Link>
            </button>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ Icon, title, desc }) => (
  <div className="flex flex-col items-center text-center group">
    <div className="w-20 h-20 bg-sand rounded-full flex items-center justify-center mb-8 text-burnt-orange group-hover:bg-burnt-orange group-hover:text-white transition-all duration-300">
      <Icon size={32} />
    </div>
    <h3 className="text-2xl font-bold text-coffee mb-4">{title}</h3>
    <p className="text-gray-500 leading-relaxed max-w-xs">{desc}</p>
  </div>
);
export default Home;