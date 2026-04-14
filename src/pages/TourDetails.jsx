import React, { useState } from 'react';
import BookingForm from '../components/booking/BookingForm';

const TourDetails = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const tour = { id: 1, title: "Highlands Explorer", price: 899, itinerary: ["Day 1: Arrival", "Day 2: Trekking"] };

  return (
    <div className="container mx-auto p-8 max-w-5xl">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="h-96 bg-blue-900 flex items-center justify-center text-white text-4xl font-bold">
          {tour.title}
        </div>
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-4">Detailed Itinerary</h2>
          <ul className="space-y-4">
            {tour.itinerary.map((step, i) => (
              <li key={i} className="flex items-center gap-4 text-gray-700">
                <span className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full font-bold">{i+1}</span>
                {step}
              </li>
            ))}
          </ul>
          <button 
            onClick={() => setIsBookingOpen(true)}
            className="mt-10 w-full bg-blue-900 text-white py-4 rounded-xl font-bold text-xl hover:bg-blue-800"
          >
            Book This Adventure
          </button>
        </div>
      </div>
      {isBookingOpen && <BookingForm tour={tour} onClose={() => setIsBookingOpen(false)} />}
    </div>
  );
};

export default TourDetails;