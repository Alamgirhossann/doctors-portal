import React, { useState, useEffect } from 'react';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import Calender from '../Calender/Calender';
import Sidebar from '../Sidebar/Sidebar';

const Dahsboard = () => {
    const [appointments, setAppointments] = useState([])
    const [selectedDate, setSelectedDate] = useState(new Date())
    const handleDateChange =date =>{
        setSelectedDate(date);

    }

    useEffect(() => {
            fetch('http://localhost:5000/appointmentsByDate', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({date: selectedDate})
        })
        .then(res => res.json())
        .then(appointment => {
            setAppointments(appointment)
        })
        },[selectedDate])
    return (
        <div className="container-fluid row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-5">
                <Calender handleDateChange={handleDateChange}></Calender>
            </div>
            <div className="col-md-5">
                <AppointmentsByDate appointments={appointments}></AppointmentsByDate>
            </div>
        </div>
    );
};

export default Dahsboard;