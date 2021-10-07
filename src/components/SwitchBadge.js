import React from 'react';
import PropTypes from 'prop-types';

const SwitchBadges = (props) => {
  const {
    reserved,
  } = props;

  if (reserved) {
    return (
      <div className="mt-5 mb-3">
        <small className="border border-primary  bg-primary  text-white">Active Member</small>
      </div>

    );
  }
  return (
    <div className="mt-5 mb-3">
      <small className="border border-secondary  bg-secondary text-white">Not a Member</small>
    </div>
  );
};

SwitchBadges.defaultProps = {
  reserved: false,
};
SwitchBadges.propTypes = {
  reserved: PropTypes.bool,
};

export default SwitchBadges;
