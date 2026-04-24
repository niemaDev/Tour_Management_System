import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, ChevronRight, MapPin, Clock, ArrowRight, 
  Star, ShieldCheck, Globe, Users, Calendar, Compass, 
  Award, Plane, Camera
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const slides = [
    {
      id: 1,
      image: "/land.jpg", 
      welcome: "Welcome to Ethiopia",
      title: "Discover the Land of Origins",
      subtitle: "Journey through the ancient rock-hewn churches of Lalibela."
    },
    {
      id: 2,
      image: "/terara.jpg", 
      welcome: "Adventure Awaits",
      title: "Explore the Majestic Simien",
      subtitle: "Trek the rooftop of Africa and see wildlife found nowhere else."
    },
    {
      id: 3,
      image: "/nature.jpg", 
      welcome: "Cultural Heritage",
      title: "The Spirit of Omo Valley",
      subtitle: "Meet the vibrant tribes and traditions of Southern Ethiopia."
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

  return (
    <div className="bg-white font-sans overflow-x-hidden">
      
      {/* --- HERO SECTION: TEXT ON TOP OF IMAGE --- */}
      <section className="relative h-[90vh] w-full bg-neutral-900">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img src={slide.image} className="w-full h-full object-cover" alt="Hero" />
            
            {/* The Dark Overlay (Ensures text is readable) */}
            <div className="absolute inset-0 bg-black/40 z-20" />
            
            {/* THE TEXT CONTENT (Centered perfectly over image) */}
            <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center px-4">
              <span className="bg-[#D4A017] text-white px-6 py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-[0.3em] mb-6 shadow-xl">
                {slide.welcome}
              </span>
              
              <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 max-w-5xl leading-[1.1] drop-shadow-2xl">
                {slide.title}
              </h1>
              
              <p className="text-lg md:text-2xl text-neutral-100 mb-10 max-w-2xl font-light italic drop-shadow-lg">
                {slide.subtitle}
              </p>
              
             
            </div>
          </div>
        ))}
        
        {/* Navigation Arrows */}
        <button onClick={prevSlide} className="absolute left-8 top-1/2 -translate-y-1/2 z-40 p-4 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-[#D4A017] transition-all">
          <ChevronLeft size={32} />
        </button>
        <button onClick={nextSlide} className="absolute right-8 top-1/2 -translate-y-1/2 z-40 p-4 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-[#D4A017] transition-all">
          <ChevronRight size={32} />
        </button>
      </section>

      {/* --- PLAN YOUR TRIP SECTION --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#4B2E20] mb-4">Plan Your <span className="text-[#D4A017]">Perfect Trip</span></h2>
          <div className="w-24 h-1 bg-[#D4A017] mx-auto mb-4"></div>
          <p className="text-neutral-500 italic">Experience Ethiopia exactly how you imagined</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <StepCard icon={<Compass size={40}/>} title="Choose Destination" desc="Select from the high peaks of Simien to the low Danakil Depression." />
          <StepCard icon={<Calendar size={40}/>} title="Book Your Date" desc="Pick a season that fits your desired cultural festival experience." />
          <StepCard icon={<Plane size={40}/>} title="Fly & Explore" desc="Relax as we handle your logistics from arrival to departure." />
        </div>
      </section>

      {/* --- EXPLORE TOP PLACES SECTION --- */}
      <section className="py-24 bg-neutral-50 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="text-left">
            <h2 className="text-4xl font-serif font-bold text-[#4B2E20]">Explore <span className="text-[#D4A017]">Top Places</span></h2>
            <p className="text-neutral-500 mt-2">Discover the most breathtaking destinations</p>
          </div>
          <Link to="/destinations" className="text-[#D4A017] font-bold flex items-center gap-2 hover:translate-x-2 transition-transform">
            See All Places <ArrowRight size={20} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          <TopPlaceCard img="/lalibela.jpg" name="Lalibela" tours="12 Tours" />
          <TopPlaceCard img="/terara.jpg" name="Simien Mountains" tours="8 Tours" />
          <TopPlaceCard img="/geter.jpg" name="Geter" tours="15 Tours" />
        </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          <TopPlaceCard img="/tissabay.jpg" name="TissAbay " tours="12 Tours" />
          <TopPlaceCard img="/gonder.jpg" name="Gonder" tours="8 Tours" />
          <TopPlaceCard img="/camel.jpg" name="Afar" tours="15 Tours" />
        </div>
      </section>

      {/* --- WHY CHOOSE US (UNIQUE SECTION) --- */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative group">
          {/* Reduced image height to h-[400px] to fit the screen better */}
          <img 
            src="/bdr.jpg" 
            className="rounded-[2.5rem] shadow-xl relative z-10 w-full h-[400px] object-cover" 
            alt="Unique" 
          />
          {/* Smaller badge */}
          <div className="absolute -bottom-4 -right-4 bg-[#4B2E20] p-6 rounded-[2rem] text-white shadow-xl z-20 border-4 border-white hidden lg:block">
            <p className="text-3xl font-bold text-[#D4A017]">100%</p>
            <p className="text-[10px] uppercase tracking-widest font-bold">Authentic</p>
          </div>
        </div>

        <div className="text-left">
          <span className="text-[#D4A017] font-bold tracking-widest uppercase text-xs">Our Excellence</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#4B2E20] mt-2 mb-6 leading-tight">
            What Makes Us <br/><span className="text-[#D4A017]">Truly Unique?</span>
          </h2>
          
          {/* Reduced spacing between items from space-y-10 to space-y-6 */}
          <div className="space-y-6">
            <ReasonItem 
              icon={<Award size={22}/>} 
              title="Expert Guides" 
              desc="Licensed historians with deep local knowledge." 
            />
            <ReasonItem 
              icon={<Users size={22}/>} 
              title="Cultural Integrity" 
              desc="Direct partnerships with local tribes for respect." 
            />
            <ReasonItem 
              icon={<ShieldCheck size={22}/>} 
              title="Safety & Comfort" 
              desc="Modern transport and hand-picked premium stays." 
            />
          </div>
        </div>
      </section>

      {/* --- GET STARTED SECTION --- */}
      <section className="py-28 px-6 text-center bg-[#4B2E20] text-white relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-5xl font-serif font-bold mb-8 leading-tight">Get Started with <br/><span className="text-[#D4A017]">Habesha Tour</span></h2>
          <p className="text-neutral-300 text-xl mb-12 leading-relaxed font-light">
            Don't just travel—discover. Let us craft a journey that connects you with the heart and soul of Ethiopia.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="bg-[#D4A017] text-white px-14 py-5 rounded-2xl font-bold uppercase hover:scale-105 transition-all shadow-2xl">Contact Expert</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

/* --- SUB-COMPONENTS --- */

const StepCard = ({ icon, title, desc }) => (
  <div className="p-12 text-center bg-white rounded-[3rem] border border-neutral-100 shadow-sm hover:shadow-xl transition-all group">
    <div className="bg-neutral-50 text-[#D4A017] w-24 h-24 flex items-center justify-center rounded-[2rem] mx-auto mb-8 group-hover:bg-[#D4A017] group-hover:text-white transition-all duration-500 shadow-inner">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-[#4B2E20] mb-4">{title}</h3>
    <p className="text-neutral-500 leading-relaxed">{desc}</p>
  </div>
);

const TopPlaceCard = ({ img, name, tours }) => (
  <div className="group relative h-[450px] rounded-[3rem] overflow-hidden shadow-lg border-8 border-white">
    <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt={name} />
    <div className="absolute inset-0 bg-gradient-to-t from-[#4B2E20]/90 via-transparent to-transparent" />
    <div className="absolute bottom-10 left-10 text-white text-left">
      <h4 className="text-3xl font-bold mb-2">{name}</h4>
      <p className="text-[#D4A017] flex items-center gap-2 font-bold tracking-widest text-xs uppercase font-sans"><Camera size={16}/> {tours}</p>
    </div>
  </div>
);

const ReasonItem = ({ icon, title, desc }) => (
  <div className="flex gap-8 group">
    <div className="bg-neutral-50 p-5 rounded-2xl text-[#D4A017] h-fit group-hover:bg-[#D4A017] group-hover:text-white transition-colors duration-300 shadow-sm">
      {icon}
    </div>
    <div className="text-left">
      <h4 className="text-2xl font-bold text-[#4B2E20] mb-2">{title}</h4>
      <p className="text-neutral-500 leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default Home;