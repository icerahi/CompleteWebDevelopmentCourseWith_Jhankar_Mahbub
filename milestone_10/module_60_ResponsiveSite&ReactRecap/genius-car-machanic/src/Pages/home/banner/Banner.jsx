import React from "react";
import { Carousel } from "react-bootstrap";
const Banner = () => {
  return (
    <>
      <Carousel className="container my-5">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/photos/auto-mechanic-hands-using-wrench-to-repair-a-car-engine-concepts-of-picture-id1225528533?b=1&k=20&m=1225528533&s=170667a&w=0&h=uw7JUPmw2Ag1EiIrSzpf4XwBxqI_H-HP5oYFpY6nEGk="
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/photos/mechanic-using-a-ratchet-wrench-picture-id1165311626?b=1&k=20&m=1165311626&s=170667a&w=0&h=Nx2YNwbzmakhnqXZpaA8E0-ty0dXSG8n1ImRAtwDMqM="
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/photos/mechanic-checks-exhaust-picture-id599908982?b=1&k=20&m=599908982&s=170667a&w=0&h=CqPb9fJVMCluiDgXh4dxzh9k2F5ZN3w8BuOuhJRCZyg="
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
