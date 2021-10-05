import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Courses from "./components/courses/Courses";
import About from "./components/about/About";
import NotFound from "./components/notfound/NotFound";
import Contact from "./components/contact/Contact";
import { createContext, useEffect, useState } from "react";

//creating context to pass data in global state
export const CourseDataContext = createContext();

function App() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <CourseDataContext.Provider value={courses}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/courses" component={Courses} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="*" component={NotFound} />
        </Switch>

        <Footer />
      </Router>
    </CourseDataContext.Provider>
  );
}

export default App;
