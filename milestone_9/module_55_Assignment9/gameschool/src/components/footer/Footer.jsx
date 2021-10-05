import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-5">
      <div className="container py-3">
        <p className="text-center text-light fw-bolder fs-6">
          {" "}
          Copyright 2021 by GameSchool. All Rights Reserved. Designed &
          Developed by <a href="https://fb.com/icerahi"target="_blank"> Imran Hasan</a> .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
