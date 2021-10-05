import React from 'react';
import { useSelector } from 'react-redux';

const Missions = () => {
  const state = useSelector((state) => state.missions);
  return (
    <div className="missions-container">
      <h1>Missions</h1>
      <p>
        This is the space of the missions page.
      </p>
      <ul>
        {state.map((mission) => (
          <li key={mission.mission_id}>
            {mission.mission_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Missions;
