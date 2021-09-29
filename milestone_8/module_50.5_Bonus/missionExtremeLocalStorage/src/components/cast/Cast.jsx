import React from "react";
import "./Cast.css";
const Cast = ({ cast, handleCastSelect, selectedCast }) => {
  const { name, image, occupation, active_years, age, salary } = cast;

  const displayCastSelect = () => {
    if (selectedCast.includes(cast)) {
      return (
        <button
          className="cast-select-btn btn  btn-light text-dark disabled"
        >
          <i className="fas fa-lg fa-plus-circle"></i> Selected
        </button>
      );
    } else {
      return (
        <button onClick={() => handleCastSelect(cast)} className="cast-select-btn btn btn-warning">
          <i className="fas fa-lg fa-plus-circle"></i> Select Cast
        </button>
      );
    }
  };
  return (
    <div className="cast-card row">
      <div className="col-md-6 p-0">
        <img src={image} className="h-100 w-100 m-0 p-0" alt="..." />
      </div>
      <div className="col-md-6 p-3">
        <h5 className="card-title">{name}</h5>
        <small>Occupation:</small>
        <p className="my-1">-{occupation}</p>
        <small>Active years:</small>
        <p className="my-1">-{active_years}</p>
        <p className="my-1">Age: {age}</p>
        <p>Salary : {salary} $</p>
        {displayCastSelect()}
      </div>
    </div>
  );
};

export default Cast;
