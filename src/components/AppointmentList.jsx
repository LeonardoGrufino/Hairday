import React from "react";
import "./AppointmentList.css";

function AppointmentList({ appointments, onRemove }) {
  if (appointments.length === 0) {
    return <p className="empty">Nenhum agendamento ainda 😅</p>;
  }

  return (
    <ul className="list-container">
      {appointments.map((a, index) => (
        <li key={index} className="list-item">
          <div>
            <strong>{a.name}</strong> — {a.service}<br />
            <span>{a.date} às {a.time}</span>
          </div>
          <button onClick={() => onRemove(index)}>Remover</button>
        </li>
      ))}
    </ul>
  );
}

export default AppointmentList;
