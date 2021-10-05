import React from "react";
import Aunty from "../aunty/Aunty";
import Father from "../father/Father";
import Uncle from "../uncle/Uncle";

const GrandFather = ({house}) => {
  return (
    <div>
      <h2>GrandFather, house:{house}</h2>
      <div style={{display:'flex'}}>
        <Father house={house} />
        <Uncle house={house} />
        <Aunty house={house} />
      </div>
    </div>
  );
};

export default GrandFather;
