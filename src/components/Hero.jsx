import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    /* added bg-coffee as a fallback so the section isn't white if the image fails */
    <section
     className="relative h-[80vh] flex items-center px-8 md:px-20 text-white overflow-hidden ">
      
      {/* Background Container */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1635503408832-898f0f62b94d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxhbmRpbmd8ZW58MHx8MHx8fDA%3D" 
          className="w-full h-full object-cover opacity-60"
          alt="Ethiopian Landscape"
          /* If image fails, this ensures the background stays dark coffee */
          onError={(e) => e.target.style.display='none'} 
        />
        {/* V4 syntax for a dark gradient overlay to make text pop */}
        <div className="absolute inset-0 bg-linear-to-r from-coffee/90 via-coffee/40 to-transparent" />
      </div>
      
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-6xl md:text-7xl font-serif font-bold mb-6 leading-tight drop-shadow-lg">
          Discover the Land of Origins
        </h1>
        <p className="text-xl opacity-90 mb-10 leading-relaxed max-w-2xl drop-shadow-md">
          Experience authentic Ethiopian adventures with expert guides, from ancient 
          churches to breathtaking mountain ranges.
        </p>
        <div className="flex gap-4">
          {/* Ensure this matches your --color-burnt-orange in index.css */}
          <button className="bg-burnt-orange hover:brightness-110 px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all shadow-xl cursor-pointer">
            Explore Tours <ArrowRight size={20} />
          </button>
          <button className="bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all cursor-pointer">
            Sign In
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;