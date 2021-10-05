import React from "react";
import PropTypes from 'prop-types';

const Rocket = (props) => {
  const {
    rocket: {
      rocket_name: name,
      description,
      flickr_images: images,
    },
  } = props;

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
              <button type="button" className="btn btn-primary">Reserve Rocket</button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  describe: PropTypes.string.isRequired,
  images: PropTypes.instanceOf(Array).isRequired,
};

export default Rocket;
