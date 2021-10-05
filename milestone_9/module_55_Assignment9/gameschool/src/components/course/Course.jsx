import React from "react";
import "./Course.css";
const Course = ({ course }) => {
  const { title, author, duration, image, price } = course;

  return (
    <div className="col">
      <div className="card shadow-lg border-15 border-0">
        <img src={image} className="card-img-top p-2 border-15" alt="..." />
        <div className="card-body">
          <div>
            <h5 className="card-title">{title}</h5>
            <small>
              Instructor: <strong>{author}</strong>{" "}
            </small>
            <p className="card-text">
              Duration: <strong>{duration}</strong>
            </p>
          </div>
          <button className="price-button border-0">price ${price}</button>
        </div>
      </div>
    </div>
  );
};

export default Course;
