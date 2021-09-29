import React from "react";

const Header = () => {
  const titleStyle = { fontSize: "40px",color:'orange' };
  return (
    <div className="container mb-4 text-center">
      <h3>
        Find <span style={titleStyle}>"Mission Extreme"</span> casts
      </h3>
      <p>
        'Mission Extreme' will be a Bangladeshi Police Action Thriller Film
        produce by COP Creation and Mime Multimedia
      </p>
      <h3>Total Budget: 100 Million</h3>
    </div>
  );
};

export default Header;
