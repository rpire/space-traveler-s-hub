import React from 'react';
import { useSelector } from 'react-redux';

const ReservedRocketList = () => {
  const rockets = useSelector((state) => state.rockets);
  const filteredRockets = rockets.filter((rocket) => rocket.reserved === true);

  if (filteredRockets.length < 1) {
    return (
      <ul className="list-group">
        <li className="list-group-item">
          No reserved rockets... Yet!
        </li>
      </ul>
    );
  }
  return (
    <ul className="list-group">
      {filteredRockets.map((rocket) => (
        <li key={rocket.rocket_id} className="list-group-item">
          {rocket.rocket_name}
        </li>
      ))}
    </ul>
  );
};

export default ReservedRocketList;
