
import React, { useState } from 'react';

const RideForm = ({ addRide }) => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addRide({ pickup, destination });
    setPickup('');
    setDestination('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Pickup location" 
        value={pickup} 
        onChange={(e) => setPickup(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Destination" 
        value={destination} 
        onChange={(e) => setDestination(e.target.value)} 
      />
      <button type="submit">Book Ride</button>
    </form>
  );
};

export default RideForm;
