import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import useAuth from "../../../hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({ setBookingSuccess,date, openBooking, handleBookingClose, booking }) => {
  const { name, time } = booking;
  const { user } = useAuth();
  const initialInfo= {patientName:user.displayName,email:user.email,phone:''}
  const [bookingInfo,setBookingInfo]=useState(initialInfo)

  const handleOnBlur=(e)=>{
    const field = e.target.name 
    const value = e.target.value 
    const newInfo ={...bookingInfo}
    newInfo[field]=value 
    setBookingInfo(newInfo)
  }

  const handleBookingSubmit = (e) => {
    alert("Subming");
    //collect data
    const appointment ={
      ...bookingInfo,
      time,
      serviceName:name,
      date:date.toLocaleDateString()
    }
    // send to the server
    fetch('http://localhost:5000/appointments',{
      method:'post',
      headers:{'content-type':'application/json'},
      body:JSON.stringify(appointment)
    })
    .then(res => res.json())
    .then(data => {
      if(data.insertedId){
        setBookingSuccess(true)
        handleBookingClose();
      }
    })

    e.preventDefault();
  };
  return (
    <Modal
      keepMounted
      open={openBooking}
      onClose={handleBookingClose}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <Box sx={style}>
        <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
          {name}
        </Typography>
      
        <form onSubmit={handleBookingSubmit}>
          <TextField
            sx={{ width: "90%", m: 1 }}
            disabled
            defaultValue={time}
            id="outlined-basic"
            variant="outlined"
          />
          <TextField
            name="patientName"
            sx={{ width: "90%", m: 1 }}
            onBlur={handleOnBlur}
            defaultValue={user.displayName}
            id="outlined-basic"
            variant="outlined"
          />
          <TextField
            sx={{ width: "90%", m: 1 }}
            onBlur={handleOnBlur}
            name="email"
            defaultValue={user.email}
            id="outlined-basic"
            variant="outlined"
          />
          <TextField
            sx={{ width: "90%", m: 1 }}
            onBlur={handleOnBlur}
            name="phone"
            defaultValue="Phone Number"
            id="outlined-basic"
            variant="outlined"
          />
          <TextField
            sx={{ width: "90%", m: 1 }}
            disabled
            defaultValue={date.toDateString()}
            id="outlined-basic"
            variant="outlined"
          />
          <Button type="submit" variant="contained">
            {" "}
            Submit{" "}
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default BookingModal;
