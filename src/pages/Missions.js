import React from 'react';
import { useSelector } from 'react-redux';
import Mission from '../components/Mission';

const Missions = () => {
  const state = useSelector((state) => state.missions);
  return (
    <div className="container">
      <h1>Missions</h1>
      <p>
        This is the space of the missions page.
      </p>
      <table className="table table-bordered border-secondary table-striped p-3">
        <thead>
          <tr>
            <th scope="col">Mission</th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
            <th scope="col" className=""><small className="visually-hidden">.</small></th>
          </tr>
        </thead>
        <tbody>
          {state.map((mission) => (
            <Mission key={mission.mission_id} mission={mission} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
