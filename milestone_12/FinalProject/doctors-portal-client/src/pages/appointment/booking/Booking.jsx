import { Grid, Paper, Typography, Button } from "@mui/material";
import React from "react";
import BookingModal from "../bookingModal/BookingModal";

const Booking = ({ booking,date,setBookingSuccess }) => {
  const { name, time, space } = booking;
  const [openBooking, setBookingOpen] = React.useState(false);
  const handleBookingOpen = () => setBookingOpen(true);
  const handleBookingClose = () => setBookingOpen(false);

  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper sx={{ py: 5 }} elevation={3}>
          <Typography sx={{ color: "info.main", fontWeight: 600 }} variant="h5">
            {name}
          </Typography>
          <Typography variant="h6">{time}</Typography>
          <Typography display="block" variant="caption">
            {space} spaces Available
          </Typography>
          <Button onClick={handleBookingOpen} variant="contained">
            BOOK APPOINTMENT
          </Button>
        </Paper>
      </Grid>
      <BookingModal setBookingSuccess={setBookingSuccess} date={date} booking={booking} openBooking={openBooking} handleBookingClose={handleBookingClose} />
    </>
  );
};

export default Booking;
