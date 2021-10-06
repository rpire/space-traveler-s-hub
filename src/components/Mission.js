import React from 'react';
import PropTypes from 'prop-types';
import JoinMissionButton from './JoinMission';

const Mission = (props) => {
  const {
    mission: {
      mission_name: name,
      description,
      mission_id: id,
      reserved,
    },
  } = props;

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
          <JoinMissionButton reserved={reserved} id={id} />
        </td>
      </tr>
    </tbody>
  );
};

Mission.propTypes = {
  mission: PropTypes.instanceOf(Object).isRequired,
};

export default Mission;
