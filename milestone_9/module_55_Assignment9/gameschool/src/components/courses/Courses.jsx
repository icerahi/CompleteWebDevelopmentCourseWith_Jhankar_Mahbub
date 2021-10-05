import React, { useContext } from "react";
import { CourseDataContext } from "../../App";
import Course from "../course/Course";

const Courses = () => {
  const courses = useContext(CourseDataContext); //getting courses data from global state

  return (
    <div className="container my-5">
      <h3 className="text-center my-4">Our All Courses</h3>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {courses?.map((course) => (
          <Course course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
