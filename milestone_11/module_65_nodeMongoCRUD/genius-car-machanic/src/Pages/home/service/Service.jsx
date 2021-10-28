import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";
const Service = ({ service }) => {
  const { _id, name, price, time, img } = service;
  return (
    <div className="service p-3">
      <img className="img-fluid" src={img} alt="" />
      <h3>{name}</h3>
      <h5>Price: {price}</h5>
      <p>Require Time: {time} hour</p>
      <Link to={`/book/${_id}`}>
        <button className="btn btn-warning py-2 px-3">Book {name}</button>
      </Link>
    </div>
  );
};

export default Service;
