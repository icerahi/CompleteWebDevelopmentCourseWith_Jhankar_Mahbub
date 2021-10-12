import React, { useEffect, useState } from "react";
import {} from "../../../images/services/1.jpg";
import Service from "../service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
        <h2 className="text-primary">Our Services</h2>
      <div className="service-container container">
        {services.map((service, index) => (
          <Service key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
