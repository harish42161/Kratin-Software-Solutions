import React from 'react';

const ReminderList = ({ reminders }) => {
  return (
    <table border={"1"} className="table table-bordered">
    <thead className="thead-dark">
    <tr>
      <th>Medication Name</th>
      <th>Dosage</th>
      <th>Schedule</th>
    </tr>
  </thead>
  <tbody>

    
      {reminders.map((reminder, index) => (
         <tr key={index}>
            <td>{reminder.name}</td>
            <td>{reminder.dosage}</td>
            <td>{reminder.schedule}</td>
          </tr>
      ))}

      </tbody>
      </table>
  );
};

export default ReminderList;
