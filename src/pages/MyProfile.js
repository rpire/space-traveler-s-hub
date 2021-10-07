import React from 'react';
import ReservedRocketList from '../components/ReservedRocketList';
import MissionList from '../components/BookedMissionList';

const MyProfile = () => (
  <div className="d-flex justify-content-start ms-4 me-5">
    <div className="col-5">
      <h2>My Rockets</h2>
      <ReservedRocketList />
    </div>
    <div className="col-5 ms-5">
      <h2>My Missions</h2>
      <MissionList />
    </div>
  </div>
);

export default MyProfile;
