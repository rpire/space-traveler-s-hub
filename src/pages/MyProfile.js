import React from 'react';
import ReservedRocketList from '../components/ReservedRocketList';

const MyProfile = () => (
  <div className="d-flex justify-content-start ms-4 me-5">
    <div className="col-5">
      <h2>My Rockets</h2>
      <ReservedRocketList />
    </div>
    <div className="col-5 ms-5">
      <h2>My Missions</h2>
      <ul className="list-group">
        <li className="list-group-item">
          Your Missions will be shown here...
        </li>
      </ul>
    </div>
  </div>
);

export default MyProfile;
