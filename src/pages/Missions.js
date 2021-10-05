import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions } from '../redux/missions/missions';

const Missions = () => {
  const state = useSelector((state) => state.missions);
  console.log(state);
  const dispatch = useDispatch();
  useEffect(() => dispatch(getMissions()), [dispatch]);
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
