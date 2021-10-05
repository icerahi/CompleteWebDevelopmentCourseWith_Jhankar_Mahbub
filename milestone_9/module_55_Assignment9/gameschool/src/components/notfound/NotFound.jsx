import React from "react";
import { Link } from "react-router-dom";
import img_404 from "../../assets/404.jpg";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="text-center">
      <img className="img_404" src={img_404} alt="" />
    </div>
  );
};

export default NotFound;
