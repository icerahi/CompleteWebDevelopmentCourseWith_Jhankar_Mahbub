import React, { useEffect, useState } from "react";
import Cart from "../cart/Cart";
import Cast from "../cast/Cast";
import "./Casts.css";
const Casts = () => {
  const [casts, setCasts] = useState([]);
  const [selectedCast, setSelectedCast] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/icerahi1/fakedata/main/missionextreme.json")
      .then((res) => res.json())
      .then((data) => setCasts(data));
  }, []);

  const handleCastSelect = (cast) => {
    const newSelected = [...selectedCast, cast];
    setSelectedCast(newSelected);
  };

  const handleCastRemove=(cast)=>{
    const updateSelect =selectedCast.filter(c => c !==cast)
    setSelectedCast(updateSelect)

  }
  return (
    <div className="container-fluid row ms-2 mx-auto">
      <div className="col-md-10 mx-auto casts-container">
        {casts?.map((cast) => (
          <Cast key={cast.id} handleCastSelect={handleCastSelect} selectedCast={selectedCast} cast={cast} />
        ))}
      </div>
      <div className="col-md-2">
        <Cart selectedCast={selectedCast} handleCastRemove={handleCastRemove} />
      </div>
    </div>
  );
};

export default Casts;
