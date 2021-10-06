import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions } from '../redux/missions/missions';

const Missions = () => {
  const state = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(() => dispatch(getMissions()), [dispatch]);
  return (
    <div className="container">
      <h1>Missions</h1>
      <p>
        This is the space of the missions page.
      </p>
      <table className="table table-bordered border-secondary table-stripped p-3">
        <thead>
          <tr>
            <th scope="col">Mission</th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
            <th scope="col" className="visually-hidden">.</th>
          </tr>
        </thead>
        {state.map((mission) => (
          <tbody key={mission.mission_id}>
            <tr>
              <td className="">
                {mission.mission_name}
              </td>
              <td className="w-50">
                <small>{mission.description}</small>
              </td>
              <td className="w-auto  d-flex align-items-center heg ">
                <small className="border border-secondary  bg-secondary text-white">Not a Member</small>
              </td>
              <td className="w-auto heg ">
                <input className="btn text-danger border border-secondary " type="button" value="Join Mission" />
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Missions;
