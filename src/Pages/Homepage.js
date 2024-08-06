
import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import RideForm from '../components/RideForm';
import RideList from '../components/RideList';

const HomePage = () => {
  const [rides, setRides] = useState([]);

  const addRide = (ride) => {
    setRides([...rides, ride]);
  };

  return (
    <div>
      <h1>Book a Ride</h1>
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          //attribution="&copy; OpenStreetMap contributors"
        />
      </MapContainer>
      <RideForm addRide={addRide} />
      <RideList rides={rides} />
    </div>
  );
};

export default HomePage;
