import React from "react";

const Facalities = () => {
  return (
    <div className="container my-5 bg-light p-5 border-15">
      {/* home page Facalities section  */}
      <div className="row justify-content-center g-5">
        <div className="col-md-6">
          <h1>Get more close with your courses</h1>
          <p>
            {" "}
            We provide a wide range of courses for the different sectors you can
            choose from,which suits you perfectly
          </p>
          <ul>
            <li>Detail Description of each course</li>
            <li>Easy to understand language</li>
            <li>Simple and easy to learn course</li>
          </ul>
          <button className="btn btn-outline-danger">
            {" "}
            Start Learning Now
          </button>
        </div>
        <div className="col-md-6">
          <img
            className="h-100"
            src="https://media.istockphoto.com/photos/smiling-black-teen-girl-in-vr-goggles-picture-id1134468908?k=20&m=1134468908&s=170667a&w=0&h=zwkJ-rdgaRrsLBQ8Hke3sedpGkliK36lIGFJdzFTS7w="
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Facalities;
