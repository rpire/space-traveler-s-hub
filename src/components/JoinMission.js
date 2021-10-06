import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { joinMission, leaveMission } from '../redux/missions/missions';

const JoinMissionButton = (props) => {
  const {
    id,
    reserved,
  } = props;
  const dispatch = useDispatch();
  const joinHandle = () => {
    dispatch(joinMission(id));
  };
  const leaveHandle = () => {
    dispatch(leaveMission(id));
  };

  if (reserved) {
    return (
      <input className="btn text-danger border border-secondary mt-5 mb-3 " type="button" value="Leave Mission" onClick={leaveHandle} />
    );
  }
  return (
    <input className="btn text-danger border border-secondary mt-5 mb-3 " type="button" value="Join Mission" onClick={joinHandle} />
  );
};

JoinMissionButton.defaultProps = {
  reserved: false,
};
JoinMissionButton.propTypes = {
  reserved: PropTypes.bool,
  id: PropTypes.string.isRequired,
};

export default JoinMissionButton;
