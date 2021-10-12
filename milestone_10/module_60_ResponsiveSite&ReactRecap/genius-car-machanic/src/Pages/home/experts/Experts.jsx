import React from "react";
import Expert from "../Expert/Expert";
const experts = [
  {
    img: "https://avatars.githubusercontent.com/u/32910469?v=4",
    name: "Rhai",
    expertize: "Engine Expert",
  },
  {
    img: "https://avatars.githubusercontent.com/u/32910469?v=4",
    name: "Rhai",
    expertize: "Engine Expert",
  },
  {
    img: "https://avatars.githubusercontent.com/u/32910469?v=4",
    name: "Rhai",
    expertize: "Engine Expert",
  },
  {
    img: "https://avatars.githubusercontent.com/u/32910469?v=4",
    name: "Rhai",
    expertize: "Engine Expert",
  },
];
const Experts = () => {
  return (
    <div className="container">
      <h2 className="text-primary">Our Experts</h2>
      <div className="row">
          {experts.map((expert,index) => <Expert key={index} expert={expert}/>)}
      </div>
    </div>
  );
};

export default Experts;
