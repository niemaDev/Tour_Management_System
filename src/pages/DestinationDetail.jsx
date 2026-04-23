import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { regionsData } from '../data/regionsData';
import { CheckCircle, ArrowLeft, Camera, Compass } from 'lucide-react';

const DestinationDetail = () => {
  const { regionId } = useParams();
  const data = regionsData[regionId];

  if (!data) return <div className="pt-40 text-center font-bold text-2xl">Region Not Found</div>;

  return (
    <div className="bg-white">
      {/* Dynamic Hero */}
      <section className="relative h-[70vh] flex items-end">
        <img src={data.heroImage} className="absolute inset-0 w-full h-full object-cover" alt={data.name} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#4B2E20] via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <Link to="/destinations" className="text-white/70 hover:text-[#D4A017] flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-6">
            <ArrowLeft size={16} /> Back to All Regions
          </Link>
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-white tracking-tighter leading-none mb-4">
            {data.name.split(' ')[0]}<br />
            <span className="text-[#D4A017] italic">{data.name.split(' ')[1]}</span>
          </h1>
          <p className="text-white/90 text-xl font-light italic">{data.tagline}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-3 gap-20">
        <div className="lg:col-span-2 space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-[#4B2E20] mb-6 flex items-center gap-3">
              <Compass className="text-[#D4A017]" /> Overview
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed font-light">{data.longDescription}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#FFF8F1] p-10 rounded-[2.5rem] border border-[#4B2E20]/5">
            <h3 className="col-span-full text-xl font-bold text-[#4B2E20] mb-2 uppercase tracking-widest">Must-Visit Attractions</h3>
            {data.highlights.map((item, index) => (
              <div key={index} className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm">
                <CheckCircle className="text-[#D4A017]" size={20} />
                <span className="font-bold text-[#4B2E20] text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="bg-[#4B2E20] text-white p-10 rounded-[2.5rem] shadow-2xl">
            <h3 className="text-2xl font-serif font-bold mb-4 text-[#D4A017]">Experience Culture</h3>
            <p className="text-sm opacity-80 leading-loose mb-8">{data.culture}</p>
            <Link to="/contact" className="block text-center bg-[#D4A017] text-[#4B2E20] py-4 rounded-xl font-bold hover:bg-white transition">
              Book a Tour Now
            </Link>
          </div>
          
          <div className="border border-gray-100 rounded-[2.5rem] p-8 text-center">
            <Camera className="mx-auto text-[#D4A017] mb-4" size={32} />
            <h4 className="font-bold text-[#4B2E20] mb-2">Share your Journey</h4>
            <p className="text-xs text-gray-400">Tag us in your photos of {data.name} using #HabeshaTour</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationDetail;