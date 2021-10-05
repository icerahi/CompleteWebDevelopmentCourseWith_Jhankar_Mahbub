import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
const About = () => {
  return (
    <div className="container">
      {/* about top part  */}
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1 style={{ fontSize: "50px" }} className="fw-bolder">
            A Global Leader in
            <span className="text-warning">Game Develpment </span>Training{" "}
          </h1>
          <p className="fw-bolder text-secondary">
            We offer value-added digital transformation services and innovations
            across all verticals.
          </p>
          <button className="btn btn-warning py-2 px-4">
            Book A Free Consultation
          </button>
        </div>
        <div className="col-md-6">
          <img
            className="img-fluid"
            src="https://www.zazz.io/assets/images/our-company/a-global-leader-in-mobile-app-development.png"
            alt=""
          />
        </div>
      </div>
      {/* about middle part  */}
      <div className="row  my-5">
        <div className="col-md-6">
          <img
            src="https://www.cubix.co/themes/responsiv-clean/assets/images/game-development/gsection-1/gd-sec-1bg-3.png"
            alt=""
          />
        </div>
        <div className="col-md-6">
          <h1>Ideate, plan, and build purposeful games</h1>
          <p className="fs-4 text-secondary">
            Build games that fulfill a specific purpose. Brainstorm and
            determine what people can do with your dream game. Critique and
            scrutinize your ideas to produce the best plans for building a
            successful game. Leverage various technologies to build your ideal
            game. Partner with experts who help you to choose the right
            database, language, and framework, to build a robust game.
          </p>
        </div>
      </div>
      {/* about bottom part  */}
      <div className="text-center my-5">
        <h1 className="my-2">We can build your story</h1>
        <p className="my-2 fs-5">
          Through the years we have partnered with great companies and
          entrepreneurs all over the world.
        </p>
        <Link to="/contact">
          <button className="btn btn-outline-warning my-2 mx-4">
            GET IN TOUCH
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
