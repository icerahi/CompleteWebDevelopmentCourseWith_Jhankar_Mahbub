import * as React from "react";
import { Grid } from "@mui/material";
import Appointments from "../appointments/Appointments";
import Calender from '../../shared/calender/Calender'
const DashboardHome = () => {
  const [date, setDate] = React.useState(new Date());

  return (
    <Grid container spacing={2}>
      <Grid item xs={8} sm={5}>
        <Calender date={date} setDate={setDate} />
      </Grid>
      <Grid item xs={12} sm={7}>
        <Appointments date={date} />
      </Grid>
    </Grid>
  );
};

export default DashboardHome;
