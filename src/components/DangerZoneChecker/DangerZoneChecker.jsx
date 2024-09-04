import React, { useEffect, useState } from 'react';
import dangerZonesData from '../../assets/dangerZonesData';
import { useDangerZone } from '../../ContextProvider';

const DangerZoneChecker = ({ position, visitTime, leaveTime, visitDate }) => {
  const { calculateDistance } = useDangerZone();
  const [activeZones, setActiveZones] = useState([]);

  useEffect(() => {
    const filteredZones = dangerZonesData.filter((zone) => {
      const distance = calculateDistance(
        position[0],
        position[1],
        zone.center[0],
        zone.center[1]
      );

      const [startHour] = zone.startTime.split(":").map(Number);
      const [endHour] = zone.endTime.split(":").map(Number);
      const currentMonth = new Date(visitDate).getMonth() + 1;

      return (
        distance <= zone.radius &&
        startHour <= visitTime.split(":")[0] &&
        endHour >= leaveTime.split(":")[0] &&
        zone.activeMonths.includes(currentMonth)
      );
    });

    setActiveZones(filteredZones);

    if (filteredZones.length > 0) {
      alert('Warning: You are entering a danger zone!');
    } else {
      alert('No danger zones detected in your area and time.');
    }
  }, [position, visitTime, leaveTime, visitDate, calculateDistance]);

  return null;
};

export default DangerZoneChecker;
