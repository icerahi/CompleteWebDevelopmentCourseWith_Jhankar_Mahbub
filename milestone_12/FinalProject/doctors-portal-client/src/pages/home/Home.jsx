import React from "react";
import useAuth from "../../hooks/useAuth";
import Navigation from "../shared/navigation/Navigation";
import AppointmentBanner from "./appointmentBanner/AppointmentBanner";
import Banner from "./banner/Banner";
import Services from "./services/Services";

const Home = () => {
  const {user} = useAuth()
 
  return (
    <div>
      <Navigation />
      <Banner />
      <Services />
      <AppointmentBanner />
    </div>
  );
};

export default Home;
