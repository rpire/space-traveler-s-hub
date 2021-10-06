import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { joinMission } from '../redux/missions/missions';

const Missions = () => {
  const state = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  const joiningMission = (e) => {
    e.preventDefault();
    const newState = state.map(join => {
      if(join.mission_id !== join.id) 
          return join;
      return { ...join, reserved: true };
  });
    dispatch(joinMission(newState));
  };

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
            <th scope="col" className=""><small className="visually-hidden">.</small></th>
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
              <td className="w-auto">
                <div className="mt-5 mb-3">
                  <small className="border border-secondary  bg-secondary text-white">Not a Member</small>
                </div>
              </td>
              <td className="w-auto">
                <input className="btn text-danger border border-secondary mt-5 mb-3 " type="button" value="Join Mission" onClick={joiningMission} />
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Missions;
