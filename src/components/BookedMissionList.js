import React from 'react';
import { useSelector } from 'react-redux';

const MissionList = () => {
  const state = useSelector((state) => state.missions);
  const filtered = state.filter((mission) => mission.reserved === true);

  if (filtered.length > 1) {
    return (
      <ul className="list-group">
        {filtered.map((mission) => (
          <li className="list-group-item" key={mission.mission_id}>
            {mission.mission_name}
          </li>
        ))}
      </ul>
    );
  }
  return (
    <ul className="list-group">
      <li className="list-group-item">
        No Mission Joined... Yet!
      </li>
    </ul>
  );
};

export default MissionList;
