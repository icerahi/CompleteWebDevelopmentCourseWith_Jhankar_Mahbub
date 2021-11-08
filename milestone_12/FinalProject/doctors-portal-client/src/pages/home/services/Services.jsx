import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Service from "../Service/Service";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";
import Typography from "@mui/material/Typography";

const services = [
  {
    name: "Fluroide Treatment",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sequi quisquam officiis et earum unde, facilis eveniet rem aperiam qui ipsa est tempore! Praesentium, dolores dolore. Nam dolor optio itaque!",
    img: fluoride,
  },
  {
    name: "Cavity Filling",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, quod possimus culpa debitis iste repellendus, nulla corporis consectetur non quasi illum esse mollitia reprehenderit enim ipsum, pariatur veniam doloribus dignissimos.",
    img: cavity,
  },
  {
    name: "Teeth Whitening",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, quod possimus culpa debitis iste repellendus, nulla corporis consectetur non quasi illum esse mollitia reprehenderit enim ipsum, pariatur veniam doloribus dignissimos.",
    img: whitening,
  },
];
const Services = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography sx={{color:'success.main',m:2}} variant="h6" component="div">
          OUR SERVICES
        </Typography>
        <Typography sx={{fontWeight:'500',m:2}} variant="h4" component="div">
          Services We Provide
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service, index) => (
            <Service key={index} service={service} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
