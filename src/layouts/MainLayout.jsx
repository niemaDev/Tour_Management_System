import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const MainLayout = () => {
  return (
    /* 'overflow-x-hidden' here is a second layer of safety 
       to ensure no page content pushes the width wide.
    */
    <div className="flex flex-col min-h-screen bg-white md:bg-gray-50 overflow-x-hidden">
      
      {/* The Responsive Navbar we updated earlier */}
      <Navbar />

      {/* RESPONSIVE PADDING:
        - pt-[74px]: Padding for mobile (only the main navbar is visible).
        - md:pt-[114px]: Padding for desktop (main navbar + top social bar).
      */}
      <main className="flex-grow pt-[74px] lg:pt-[114px]">
        {/* Container wrapper to ensure content doesn't touch the 
           very edges of the screen on mobile devices.
        */}
        <div className="w-full h-full">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;