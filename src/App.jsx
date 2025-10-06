import React, { useState } from "react";
import AppointmentForm from "./components/AppointmentForm";
import AppointmentList from "./components/AppointmentList";
import "./App.css";

function App() {
  const [appointments, setAppointments] = useState([]);

  const addAppointment = (newAppointment) => {
    setAppointments([...appointments, newAppointment]);
  };

  const removeAppointment = (indexToRemove) => {
    setAppointments(appointments.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="app-container">
      <h1>💇‍♀️ HairDay</h1>
      <p className="subtitle">Gerencie seus agendamentos com facilidade</p>

      <AppointmentForm onAdd={addAppointment} />
      <AppointmentList appointments={appointments} onRemove={removeAppointment} />
    </div>
  );
}

export default App;
