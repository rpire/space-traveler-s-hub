import React from 'react';
import { useSelector } from 'react-redux';

const Missions = () => {
  const state = useSelector((state) => state.missions);
  return (
    <div className="missions-container">
      <h1>Missions</h1>
      <p>
        {state}
      </p>
      <p>
        This is the space of the missions page.
      </p>
    </div>
  );
};

export default Missions;
