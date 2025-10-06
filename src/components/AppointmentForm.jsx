import React, { useState } from "react";
import "./AppointmentForm.css";

function AppointmentForm({ onAdd }) {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !service || !date || !time) return alert("Preencha todos os campos!");
    onAdd({ name, service, date, time });
    setName("");
    setService("");
    setDate("");
    setTime("");
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome do cliente"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Serviço"
        value={service}
        onChange={(e) => setService(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default AppointmentForm;
