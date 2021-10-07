import React from 'react';
import PropTypes from 'prop-types';
import RocketButton from './RocketButton';
import RocketBadge from './RocketBadge';

const Rocket = (props) => {
  const {
    rocket: {
      rocket_name: name,
      rocket_id: id,
      description,
      flickr_images: images,
      reserved,
    },
  } = props;

  return (
    <li>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-3">
            <img src={images[0]} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">{name}</h3>
              <p className="card-text">
                <RocketBadge reserved={reserved} />
                {description}
              </p>
              <RocketButton
                id={id}
                reserved={reserved}
              />
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
