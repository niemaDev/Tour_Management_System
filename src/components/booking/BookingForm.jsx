import React, { useState } from 'react';

const BookingForm = ({ tourPrice, onClose }) => {
  const [people, setPeople] = useState(1);
  const [date, setDate] = useState("");

  const handleBooking = (e) => {
    e.preventDefault();
    alert(`Booking Confirmed for ${people} people! Total: ETB ${people * tourPrice}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <form onSubmit={handleBooking} className="bg-white p-8 rounded-2xl max-w-sm w-full">
        <h2 className="text-xl font-bold mb-4">Finalize Reservation</h2>
        <label className="block text-sm mb-1">Departure Date</label>
        <input type="date" required className="w-full border p-2 rounded mb-4" value={date} onChange={e => setDate(e.target.value)} />
        
        <label className="block text-sm mb-1">Number of Participants</label>
        <input type="number" min="1" className="w-full border p-2 rounded mb-4" value={people} onChange={e => setPeople(e.target.value)} />
        
        <div className="py-3 border-t flex justify-between font-bold">
          <span>Total:</span>
          <span>ETB {people * tourPrice}</span>
        </div>
        <div className="flex gap-2 mt-4">
          <button type="button" onClick={onClose} className="flex-1 py-2 border rounded">Cancel</button>
          <button type="submit" className="flex-1 py-2 bg-blue-900 text-white rounded font-bold">Confirm</button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;