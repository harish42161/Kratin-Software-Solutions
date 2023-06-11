import React, { useState } from 'react';

const ReminderForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [dosage, setDosage] = useState('');
  const [schedule, setSchedule] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form inputs
    if (!name || !dosage || !schedule) {
      alert('Please fill in all fields');
      return;
    }

    onSubmit({ name, dosage, schedule });
    setName('');
    setDosage('');
    setSchedule('');
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Medication Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Dosage"
        value={dosage}
        onChange={(e) => setDosage(e.target.value)}
      />
      <input
        type="text"
        placeholder="Schedule"
        value={schedule}
        onChange={(e) => setSchedule(e.target.value)}
      />
      <button type="submit">Add Reminder</button>
    </form>
  );
};

export default ReminderForm;
