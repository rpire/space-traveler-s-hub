import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookRocket, cancelRocket } from '../redux/rockets/rockets';

const RocketButton = (props) => {
  const { id, reserved } = props;

  const dispatch = useDispatch();

  const handleBooking = () => dispatch(bookRocket(id));
  const handleCancel = () => dispatch(cancelRocket(id));

  if (reserved) {
    return (
      <button
        type="button"
        className="btn btn-light border border-secondary"
        onClick={handleCancel}
      >
        Cancel Reservation
      </button>
    );
  }
  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={handleBooking}
    >
      Reserve Rocket
    </button>
  );
};

RocketButton.defaultProps = {
  reserved: false,
};

RocketButton.propTypes = {
  id: PropTypes.string.isRequired,
  reserved: PropTypes.bool,
};

export default RocketButton;
