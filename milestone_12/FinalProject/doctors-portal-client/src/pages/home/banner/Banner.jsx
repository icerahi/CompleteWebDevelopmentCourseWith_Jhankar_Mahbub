import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";
import { Button, Typography, Container } from "@mui/material";

const bannerBg = {
  background: `url(${bg})`,
};
const verticalCenter = {
  display: "flex",
  alignItems: "center",
  height: 400,
};
const Banner = () => {
  return (
    <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid style={{ ...verticalCenter,textAlign: "left" }} item xs={12} md={6}>
          <Box>
            <Typography variant="h3">
              Your New Smile <br />
              Starts here
            </Typography>
            <Typography
              variant="h6"
              sx={{ my:3,fontSize: 13, color: "gray", fontWeight: 300 }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
              mollitia, non dignissimos doloremque porro ipsa voluptate possimus
              quibusdam voluptas aut.
            </Typography>
            <Button
              variant="contained"
              style={{ backgroundColor: "powderblue" }}
            >
              Get Appointment
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} style={verticalCenter}>
          <img style={{ width: "350px" }} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
