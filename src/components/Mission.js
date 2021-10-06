import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/missions';

const Mission = (props) => {
  const {
    mission: {
      mission_name: name,
      description,
      mission_id: id,
    },
  } = props;
  const dispatch = useDispatch();
  const joinHandle = () => {
    dispatch(joinMission(id));
  };
  const leaveHandle = () => {
    dispatch(leaveMission(id));
  };

  return (
    <tbody key={id}>
      <tr>
        <td className="">
          {name}
        </td>
        <td className="w-50">
          <small>{description}</small>
        </td>
        <td className="w-auto">
          <div className="mt-5 mb-3">
            <small className="border border-secondary  bg-secondary text-white">Not a Member</small>
          </div>
        </td>
        <td className="w-auto">
          <input className="btn text-danger border border-secondary mt-5 mb-3 " type="button" value="Join Mission" onClick={joinHandle} />
          <input className="btn text-danger border border-secondary mt-5 mb-3 " type="button" value="Leave Mission" onClick={leaveHandle} />
        </td>
      </tr>
    </tbody>
  );
};

Mission.propTypes = {
  mission: PropTypes.instanceOf(Object).isRequired,
};

export default Mission;
