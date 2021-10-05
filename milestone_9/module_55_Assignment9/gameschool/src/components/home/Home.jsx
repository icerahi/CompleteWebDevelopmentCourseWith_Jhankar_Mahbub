import React, { useContext } from "react";
import "./Home.css";
import intro_img from "../../assets/intro_cover.jpg";
import Course from "../course/Course";
import Facalities from "../facalities/Facalities";
import { useHistory } from "react-router-dom";
import { CourseDataContext } from "../../App";

const Home = () => {
  const history = useHistory();
  const courses = useContext(CourseDataContext);
  console.log(courses);
  const handleSeeAll = () => {
    history.push("/courses");
  };
  return (
    <div>
      {/* home intro section  */}
      <div className="intro">
        <div className="row w-100 justify-content-end">
          <div className="col-md-6 mt-5 pt-5">
            <h1 className="text-uppercase fw-bolder">
              <span className="text-secondary">We Develop Game</span>
              <span className="text-dark">
                {" "}
                With Creative GamePlay <br /> and stories
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* top courses section  */}
      <div className="container my-5">
        <h3 className="text-center my-4">Popular Courses</h3>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {courses.slice(0, 4).map((course) => (
            <Course course={course} />
          ))}
          <button
            onClick={handleSeeAll}
            className="btn btn-outline-dark mx-auto m-4"
          >
            See All
          </button>
        </div>
      </div>
      {/* facalities section  */}
      <Facalities />
    </div>
  );
};

export default Home;
