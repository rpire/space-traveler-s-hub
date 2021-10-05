import React from "react";

const Rocket = (props) => (
    <li>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={props.rocket.flickr_images[0]} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">{props.rocket.rocket_name}</h3>
              <p className="card-text">{props.rocket.description}</p>
              <button type="button" className="btn btn-primary">Reserve Rocket</button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );


export default Rocket;
