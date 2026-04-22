import React from 'react';
import { 
  Clock, Users, MapPin, Check, X, 
  ArrowRight, Calendar, User, Star 
} from 'lucide-react';
import { useNavigate, Link, useParams } from 'react-router-dom';
const TourDetails = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const itinerary = [
    { day: 1, title: "Arrival in Gondar", desc: "Meet your guide and transfer to hotel. Evening briefing and welcome dinner." },
    { day: 2, title: "Gondar to Sankaber Camp", desc: "Drive to Debark and enter Simien Mountains National Park. Trek to Sankaber Camp (3,250m)." },
    { day: 3, title: "Sankaber to Geech Camp", desc: "Trek through stunning landscapes with chances to see Gelada baboons and endemic birds." },
    { day: 4, title: "Geech to Chennek", desc: "Cross the Belegez River and trek to Chennek Camp with panoramic mountain views." },
    { day: 5, title: "Chennek to Ambiko", desc: "Challenging trek with spectacular views. Opportunity to spot the rare Walia ibex." },
    { day: 6, title: "Ambiko to Debark", desc: "Final day of trekking. Return to Debark and transfer to Gondar." },
    { day: 7, title: "Departure", desc: "Morning city tour of Gondar's castles and churches. Transfer to airport." },
  ];
   const tourData = {
    title: "Simien Mountains Trek",
    price: "45,000",
    location: "Amhara Region",
    duration: "7 Days / 6 Nights",
    groupSize: "Max 12 People",
    itinerary: [
      { day: 1, title: "Arrival in Gondar", desc: "Meet your guide and transfer to hotel. Evening briefing and welcome dinner." },
      { day: 2, title: "Gondar to Sankaber Camp", desc: "Drive to Debark and enter Simien Mountains National Park. Trek to Sankaber (3,250m)." }
    ]
  };
  return (
    <div className="bg-[#FAF9F6] min-h-screen font-sans text-[#2D1B14]">
      {/* 1. Hero Section - Matches Screenshot (392) */}
      <section className="bg-[#2D1B14] pt-20 pb-40 px-6 md:px-16 lg:px-24 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1 rounded-full text-xs font-semibold tracking-wide">
              Amhara
            </span>
            <div className="flex items-center gap-1 text-orange-400">
              <Star size={16} fill="currentColor" />
              <span className="text-sm font-bold">4.9 (87 reviews)</span>
            </div>
          </div>
          <span className="bg-white/20 px-3 py-1 rounded-full text-sm mb-4 inline-block">Amhara • 4.9 (87 reviews)</span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
           {tourData.title}
          </h1>
          <p className="max-w-3xl text-lg md:text-xl opacity-80 leading-relaxed font-light">
            Experience the breathtaking beauty of the Simien Mountains, often called the 'Roof of Africa.' 
            This UNESCO World Heritage site offers dramatic landscapes, unique wildlife, and unforgettable trekking experiences.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
      </section>
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 -mt--3 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:w-[calc(66.66%+1.5rem)]">
          {[
            { icon: <Clock className="text-[#B95B2A]" />, label: "Duration", val: "7 Days / 6 Nights" },
            { icon: <Users className="text-[#B95B2A]" />, label: "Group Size", val: "Max 12 People" },
            { icon: <MapPin className="text-[#B95B2A]" />, label: "Location", val: "Amhara Region" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-xl border-b-4 border-orange-100 flex flex-col gap-4 transform transition-transform hover:-translate-y-1">
              <div className="bg-orange-50 w-12 h-12 rounded-2xl flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{item.label}</p>
                <p className="font-bold text-lg">{item.val}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8 space-y-16">
          <section>
            <h2 className="text-3xl font-serif font-bold mb-10 relative inline-block">
              Day by Day Itinerary
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#B95B2A] rounded-full" />
            </h2>
            <div className="space-y-6">
              {itinerary.map((step) => (
                <div key={step.day} className="group bg-white p-8 rounded-[2.5rem] border border-gray-100 flex gap-8 items-start shadow-sm hover:shadow-md transition-all">
                  <div className="bg-[#B95B2A] text-white w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl shrink-0 shadow-lg shadow-orange-100 group-hover:scale-110 transition-transform">
                    {step.day}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-bold text-xl mb-2 group-hover:text-[#B95B2A] transition-colors">{step.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className="grid md:grid-cols-2 gap-10 pt-10">
            <div className="bg-white p-10 rounded-[3rem] border border-gray-100">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                <Check className="text-green-500" /> What's Included
              </h3>
              <ul className="space-y-5">
                {[
                  "Professional English-speaking guide",
                  "All park entrance fees",
                  "Camping equipment and meals during trek",
                  "Transportation in 4WD vehicle",
                  "Accommodation in Gondar (first and last night)",
                  "Scout and cook services"
                ].map((txt, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-600 font-medium leading-tight">
                    <Check className="text-green-500 shrink-0" size={18} /> {txt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-10 rounded-[3rem] border border-gray-100">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                <X className="text-red-500" /> Not Included
              </h3>
              <ul className="space-y-5">
                {[
                  "International flights",
                  "Travel insurance",
                  "Personal expenses and tips",
                  "Alcoholic beverages"
                ].map((txt, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-600 font-medium">
                    <div className="w-5 h-5 rounded-full border-2 border-red-200 flex items-center justify-center shrink-0">
                      <X className="text-red-500" size={12} />
                    </div>
                    {txt}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
        <aside className="lg:col-span-4">
          <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-gray-50 sticky top-28 transform transition-all">
            <div className="mb-10">
              <p className="text-gray-400 text-xs font-black uppercase tracking-widest mb-2">Total Price From</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-4xl font-black text-[#B95B2A]">45,000 ETB</h3>
                <span className="text-sm font-medium text-gray-400">/ person</span>
              </div>
            </div>
            <div className="space-y-8 mb-10">
              <div className="relative">
                <label className="text-[10px] font-black text-gray-400 uppercase flex items-center gap-2 mb-3 tracking-widest">
                  <Calendar size={14} className="text-[#B95B2A]"/> Select Departure Date
                </label>
                <input 
                  type="text" 
                  placeholder="dd/mm/yyyy" 
                  className="w-full p-5 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-orange-100 focus:bg-white transition-all outline-none font-medium text-gray-600" 
                />
              </div>
              <div className="relative">
                <label className="text-[10px] font-black text-gray-400 uppercase flex items-center gap-2 mb-3 tracking-widest">
                  <User size={14} className="text-[#B95B2A]"/> Number of Travelers
                </label>
                <select className="w-full p-5 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-orange-100 focus:bg-white transition-all outline-none font-medium appearance-none cursor-pointer">
                  <option>1 Person</option>
                  <option>2 People</option>
                  <option>4+ People</option>
                </select>
                <div className="absolute right-5 bottom-5 pointer-events-none text-gray-400">
                  <ArrowRight size={18} className="rotate-90" />
                </div>
              </div>
            </div>
            <button 
      onClick={() => navigate('/booking')} 
      className="w-full bg-[#B95B2A] ..."
    > Book This Tour 
      <ArrowRight />
    </button><div className="mt-8 text-center">
              <p className="text-sm text-gray-400 font-medium">
                Have questions? <button className="text-[#B95B2A] font-bold hover:underline">Contact us</button>
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
export default TourDetails;