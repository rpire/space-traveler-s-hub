import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookRocket } from '../redux/rockets/rockets';

const Rocket = (props) => {
  const {
    rocket: {
      rocket_name: name,
      rocket_id: id,
      description,
      flickr_images: images,
    },
  } = props;

  const dispatch = useDispatch();

  const handleBooking = () => dispatch(bookRocket(id));

  return (
    <li>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={images[0]} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">{name}</h3>
              <p className="card-text">{description}</p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleBooking}
              >
                Reserve Rocket
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.instanceOf(Object).isRequired,
};

export default Rocket;
