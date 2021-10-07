import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from '../components/Rocket';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);

  return (
    <div className="ms-4 me-3">
      <h1>Rockets</h1>
      <ul className="pb-3 ps-0">
        {rockets.map((rocket) => (
          <Rocket
            key={rocket.rocket_id}
            rocket={rocket}
          />
        ))}
      </ul>
    </div>
  );
};

export default Rockets;
