import React from 'react';
import { 
  Clock, Users, MapPin, Check, X, 
  ArrowRight, Calendar, User, Star 
} from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const TourDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // ==========================================
  // 1. DATA & CONTENT
  // ==========================================
  const tourData = {
    title: "Simien Mountains Trek",
    price: "45,000",
    location: "Amhara Region",
    duration: "7 Days / 6 Nights",
    groupSize: "Max 12 People",
    rating: "4.9",
    reviews: "87",
    bgImage: "/nature.jpg", // Use your actual image path
    description: "Embark on an epic journey to the 'Roof of Africa.' This trek takes you through the heart of the Simien Mountains National Park, a UNESCO World Heritage site famous for its jagged peaks, deep valleys, and rare wildlife like the Gelada baboon. Experience rugged beauty by day and starlit African skies by night."
  };

  const itinerary = [
    { day: 1, title: "Arrival in Gondar", desc: "Meet your guide and transfer to hotel. Evening briefing and welcome dinner." },
    { day: 2, title: "Gondar to Sankaber Camp", desc: "Drive to Debark and enter Simien Mountains National Park. Trek to Sankaber (3,250m)." },
    { day: 3, title: "Sankaber to Geech Camp", desc: "Trek through stunning landscapes with chances to see Gelada baboons and endemic birds." },
    { day: 4, title: "Geech to Chennek", desc: "Cross the Belegez River and trek to Chennek Camp with panoramic mountain views." },
    { day: 5, title: "Chennek to Ambiko", desc: "Challenging trek with spectacular views. Opportunity to spot the rare Walia ibex." },
    { day: 6, title: "Ambiko to Debark", desc: "Final day of trekking. Return to Debark and transfer to Gondar." },
    { day: 7, title: "Departure", desc: "Morning city tour of Gondar's castles and churches. Transfer to airport." },
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen font-sans text-[#2D1B14]">
      
      <section className="relative h-[60vh] min-h-[500px] flex items-center text-white overflow-hidden">
        
        <img 
          src={tourData.bgImage} 
          alt={tourData.title}
          className="absolute inset-0 w-full h-full object-cover"
        /> 
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 relative z-20 w-full">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-[#B95B2A] px-4 py-1 rounded-full text-xs font-semibold tracking-wide">
              {tourData.location}
            </span>
            <div className="flex items-center gap-1 text-orange-400">
              <Star size={16} fill="currentColor" />
              <span className="text-sm font-bold">{tourData.rating} ({tourData.reviews} reviews)</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight drop-shadow-xl ">
            {tourData.title}
          </h1>
          <p className="max-w-3xl text-lg md:text-xl opacity-90 leading-relaxed font-light drop-shadow-md">
            {tourData.description}
          </p>
        </div>
      </section>

      {/* ==========================================
          3. KEY STATS 
      ========================================== */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 -mt-16 relative z-30 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:w-[calc(66.66%+1.5rem)]">
          {[
            { icon: <Clock className="text-[#B95B2A]" />, label: "Duration", val: tourData.duration },
            { icon: <Users className="text-[#B95B2A]" />, label: "Group Size", val: tourData.groupSize },
            { icon: <MapPin className="text-[#B95B2A]" />, label: "Location", val: tourData.location }
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

      {/* ==========================================
          4. MAIN CONTENT AREA (Itinerary & Booking)
      ========================================== */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* LEFT COLUMN: ITINERARY & INFO */}
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

          {/* INCLUSIONS / EXCLUSIONS */}
          <section className="grid md:grid-cols-2 gap-10 pt-10">
            <div className="bg-white p-10 rounded-[3rem] border border-gray-100">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                <Check className="text-green-500" /> What's Included
              </h3>
              <ul className="space-y-5">
                {["Professional guide", "All park entrance fees", "Camping equipment & meals", "4WD Transportation"].map((txt, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-600 font-medium">
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
                {["International flights", "Travel insurance", "Personal tips", "Alcoholic beverages"].map((txt, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-600 font-medium">
                    <X className="text-red-500 shrink-0" size={18} /> {txt}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN: BOOKING ASIDE */}
        <aside className="lg:col-span-4">
          <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-gray-50 sticky top-28">
            <div className="mb-10">
              <p className="text-gray-400 text-xs font-black uppercase tracking-widest mb-2">Total Price From</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-4xl font-black text-[#B95B2A]">{tourData.price} ETB</h3>
                <span className="text-sm font-medium text-gray-400">/ person</span>
              </div>
            </div>

            <div className="space-y-8 mb-10">
              <div className="relative">
                <label className="text-[10px] font-black text-gray-400 uppercase flex items-center gap-2 mb-3 tracking-widest">
                  <Calendar size={14} className="text-[#B95B2A]"/> Select Date
                </label>
                <input type="date" className="w-full p-5 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-orange-100 outline-none font-medium" />
              </div>

              <div className="relative">
                <label className="text-[10px] font-black text-gray-400 uppercase flex items-center gap-2 mb-3 tracking-widest">
                  <User size={14} className="text-[#B95B2A]"/> Travelers
                </label>
                <select className="w-full p-5 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-orange-100 outline-none font-medium">
                  <option>1 Person</option>
                  <option>2 People</option>
                  <option>4+ People</option>
                </select>
              </div>
            </div>

            <button 
              onClick={() => navigate('/booking')} 
              className="w-full bg-[#B95B2A] text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:brightness-110 transition active:scale-95 shadow-xl shadow-orange-100"
            > 
              Book This Tour <ArrowRight size={20} />
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default TourDetails;