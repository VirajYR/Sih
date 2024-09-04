import React, { useState } from 'react';
import '../styles/HotspotMenu.css';

const HotspotMenu = ({ onSubmit, onReset }) => {
  const [visitDate, setVisitDate] = useState('');
  const [visitTime, setVisitTime] = useState('');
  const [leaveTime, setLeaveTime] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ visitDate, visitTime, leaveTime, location });
  };

  const handleReset = () => {
    setVisitDate('');
    setVisitTime('');
    setLeaveTime('');
    setLocation('');
    onReset();
  };

  return (
    <div className="hotspot-menu">
      <h2>Hotspot Details</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Visit Date:
          <input
            type="date"
            value={visitDate}
            onChange={(e) => setVisitDate(e.target.value)}
          />
        </label>
        <label>
          Visit Time:
          <input
            type="time"
            value={visitTime}
            onChange={(e) => setVisitTime(e.target.value)}
          />
        </label>
        <label>
          Leave Time:
          <input
            type="time"
            value={leaveTime}
            onChange={(e) => setLeaveTime(e.target.value)}
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <button type="submit">Check Hotspot</button>
        <button type="button" onClick={handleReset}>Reset</button>
      </form>
    </div>
  );
};

export default HotspotMenu;
