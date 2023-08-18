import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, img, title } = service;
  return (
    <Link to={`/checkout/${_id}`}>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Service" />
        </figure>
        <div className="card-body">
          <h2 className="card-title justify-center">{title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
