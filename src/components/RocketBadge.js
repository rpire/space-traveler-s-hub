import React from 'react';
import PropTypes from 'prop-types';

const RocketBadge = (props) => {
 const { reserved } = props;

 if (reserved) {
  return (<span className="badge bg-info me-1">Reserved</span>);
 }
 return (<span />);
};

RocketBadge.defaultProps = {
  reserved: false,
};

RocketBadge.propTypes = {
  reserved: PropTypes.bool,
};

export default RocketBadge;
