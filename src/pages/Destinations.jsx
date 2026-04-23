import React from 'react';
import { Link } from 'react-router-dom';
import { regionsData } from '../data/regionsData';
import { MapPin, ArrowRight } from 'lucide-react';

const Destinations = () => {
  const regions = Object.entries(regionsData);

  return (
    <div className="pt-32 pb-20 bg-[#FFF8F1]">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold text-[#4B2E20] mb-4">Discover Ethiopia</h1>
          <p className="text-[#D4A017] italic text-lg">Explore the regions of the Land of Origins</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {regions.map(([id, region]) => (
            <Link key={id} to={`/destinations/${id}`} className="group relative bg-white rounded-[2rem] overflow-hidden shadow-xl hover:-translate-y-2 transition-all duration-500">
              <div className="h-72 overflow-hidden">
                <img src={region.heroImage} alt={region.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-[10px] text-white font-bold tracking-widest border border-white/30">
                  {id.toUpperCase()}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#4B2E20] mb-2 group-hover:text-[#D4A017] transition">{region.name}</h3>
                <p className="text-gray-500 text-sm mb-6 line-clamp-2">{region.description}</p>
                <div className="flex items-center text-[#D4A017] font-bold text-xs tracking-widest uppercase">
                  Explore Now <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;