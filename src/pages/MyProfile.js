import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const state = useSelector((state) => state.missions);
  return (
    <div className="profile-container container">
      <h1>My Profile</h1>
      <p>
        This is the space of my profile page.
      </p>
      <div className="row">
        <div className="col">
          My Missions
          <ul className="list-group">
            {state.filter((mission) => mission.reserved === true).map((filtered) => (
              <li className="list-group-item" key={filtered.mission_id}>
                {filtered.mission_name}
              </li>
            ))}
          </ul>
        </div>
        <div className="col">My Rockets</div>
      </div>
    </div>
  );
};
export default MyProfile;
