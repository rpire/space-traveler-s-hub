import React from 'react';
import { useSelector } from 'react-redux';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);

  return (
    <div className="rockets-container">
      <h1>Rockets</h1>
      <p>
        This is the space of the rockets page.
      </p>
      <ul>
        {rockets.map((rocket) => (
          <li key={rocket.rocket_id}>
            {rocket.rocket_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rockets;
