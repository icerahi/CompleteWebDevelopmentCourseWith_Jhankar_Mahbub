import { Grid, Container, Typography, Alert } from "@mui/material";
import React, { useState } from "react";
import Booking from "../booking/Booking";

const bookings = [
  { id: 4, name: "Cavity Protection", time: "11.00 AM - 12.00 PM", space: 5 },
  { id: 4, name: "Cavity Protection", time: "11.00 AM - 12.00 PM", space: 5 },
  { id: 4, name: "Cavity Protection", time: "11.00 AM - 12.00 PM", space: 5 },
  { id: 4, name: "Cavity Protection", time: "11.00 AM - 12.00 PM", space: 5 },
  { id: 4, name: "Cavity Protection", time: "11.00 AM - 12.00 PM", space: 5 },
  { id: 4, name: "Cavity Protection", time: "11.00 AM - 12.00 PM", space: 5 },
];

const AvailableAppointments = ({ date }) => {
  const [bookingSuccess, setBookingSuccess] = useState(false);
  return (
    <Container>
      <Typography sx={{ color: "info.main", my: 3 }} variant="h4">
        Available Appointments on {date.toDateString()}
      </Typography>
      {bookingSuccess && <Alert severity="success">Appointment booked successfully!</Alert>}

      <Grid container spacing={2}>
        {bookings.map((booking, index) => (
          <Booking
            setBookingSuccess={setBookingSuccess}
            date={date}
            key={index}
            booking={booking}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default AvailableAppointments;
