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
      <p>
        This is the initial state of the page: 
          {rockets}
        .
      </p>
    </div>
  );
};

export default Rockets;
