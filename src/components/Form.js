import React from "react";
import { useState } from "react";
import GoalForm from "./GoalForm";
import Goal from "./Goal";

const Form = () => {
  const [newGoal, setNewGoal] = useState([]);
  const [newNameOfGoal, setNewNameOfGoal] = useState("");
  const [newStartDate, setNewStartDate] = useState("");
  const [newMorningReminder, setNewMorningReminder] = useState("");
  const [newAfternoonReminder, setNewAfternoonReminder] = useState("");
  const [newEveningReminder, setNewEveningReminder] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");

  const addGoal = (event) => {
    event.preventDefault();
    const goal = {
      newNameOfGoal,
      newStartDate,
      newMorningReminder,
      newAfternoonReminder,
      newEveningReminder,
      newEmail,
      newPhoneNumber,
    };

    setNewGoal(newGoal.concat(goal));
    console.log("newGoal", newGoal);
    setNewNameOfGoal("");
    setNewStartDate("");
    setNewMorningReminder("");
    setNewAfternoonReminder("");
    setNewEveningReminder("");
    setNewEmail("");
    setNewPhoneNumber("");
  };

  const handleNameOfGoalChange = (event) => {
    setNewNameOfGoal(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setNewStartDate(event.target.value);
  };

  const handleMorningReminderChange = (event) => {
    setNewMorningReminder(event.target.value);
  };

  const handleAfternoonReminderChange = (event) => {
    setNewAfternoonReminder(event.target.value);
  };

  const handleEveningReminderChange = (event) => {
    setNewEveningReminder(event.target.value);
  };

  const handleEmailChange = (event) => {
    setNewEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setNewPhoneNumber(event.target.value);
  };

  return (
    <div>
      <h3>30-day Mini Habit</h3>
      <GoalForm
        addGoal={addGoal}
        newNameOfGoal={newNameOfGoal}
        handleNameOfGoalChange={handleNameOfGoalChange}
        newStartDate={newStartDate}
        handleStartDateChange={handleStartDateChange}
        newMorningReminder={newMorningReminder}
        handleMorningReminderChange={handleMorningReminderChange}
        newAfternoonReminder={newAfternoonReminder}
        handleAfternoonReminderChange={handleAfternoonReminderChange}
        newEveningReminder={newEveningReminder}
        handleEveningReminderChange={handleEveningReminderChange}
        newEmail={newEmail}
        handleEmailChange={handleEmailChange}
        newPhoneNumber={newPhoneNumber}
        handlePhoneNumberChange={handlePhoneNumberChange}
      />
      <Goal newGoal={newGoal} />
    </div>
  );
};

export default Form;
