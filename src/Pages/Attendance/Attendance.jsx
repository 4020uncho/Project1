import React from "react";
import "./Attendance.css";

const Attendance = () => {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
   const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];


  return (
   <div className="container">
      <h2>Attendance for {months[new Date().getMonth()]} {new Date().getFullYear()}</h2>
    <div className="table-wrapper">
      <table className="attendance-table">
        <thead>
          <tr>
            {days.map((day) => (
              <th key={day}>{day}</th>
            ))}
            <th>Present</th>
            <th>Absent</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            {days.map((day) => (
              <td key={day}></td>
            ))}
            <td>0</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
      </div>
      </div>
  );
};

export default Attendance;