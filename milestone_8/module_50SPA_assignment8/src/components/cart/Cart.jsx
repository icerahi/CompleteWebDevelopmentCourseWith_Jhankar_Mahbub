import React from "react";
import "./Cart.css";

const Cart = ({ selectedCast,handleCastRemove }) => {
  const totalCost = selectedCast?.reduce(
    (previous, cast) => previous + cast.salary,
    0
  );
  return (
    <div className="cart p-2">
      <h4 className="fw-light">Cast Added : <span className="fw-bold">{selectedCast?.length}</span></h4>
      <h4 className="fw-light">Total Cost : <span className="fw-bold">{totalCost} $</span></h4>
      <hr />
      <h6>Selected</h6>
      {selectedCast?.map((cast, k) => (
        <div key={k} className="selected-cast p-3">
          {cast.name} <i onClick={()=>handleCastRemove(cast)} className="fa fa-lg fa-remove"></i> 
        </div>
      ))}
    </div>
  );
};

export default Cart;
