import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  // const state = useSelector((state) => state.missions);
   return (
    <div className="profile-container">
    <h1>My Profile</h1>
    <p>
      This is the space of my profile page.
    </p>
    <div className="row">
      <div className="col">My Missions</div>
      <div className="col">My Rockets</div>
    </div>
  </div>
   ) 
   };

export default MyProfile;
