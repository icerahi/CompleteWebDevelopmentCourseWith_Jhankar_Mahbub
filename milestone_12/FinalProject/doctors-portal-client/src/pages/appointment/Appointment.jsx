import React from 'react'
import Navigation from '../shared/navigation/Navigation'
import AppointmentHeader from './appointmentHeader/AppointmentHeader'
import AvailableAppointments from './availableAppointments/AvailableAppointments'

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());

    return (
        <div>
            <Navigation/>
            <AppointmentHeader date={date} setDate={setDate}/>
            <AvailableAppointments date={date}/>
        </div>
    )
}

export default Appointment
