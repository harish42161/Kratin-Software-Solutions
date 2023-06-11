import React, { useState } from 'react';
import ReminderForm from './ReminderForm';
import ReminderList from './ReminderList';

const Home = () => {
  const [reminders, setReminders] = useState([]);

  const handleAddReminder = (newReminder) => {
    setReminders([...reminders, newReminder]);
  };

  return (
    <div>
      <h1>Medication Manager</h1>
      <ReminderForm onSubmit={handleAddReminder} />
      <ReminderList reminders={reminders} />
    </div>
  );
};

export default Home;



