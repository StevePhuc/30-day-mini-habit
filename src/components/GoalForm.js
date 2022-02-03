import React from "react";

const GoalForm = ({
  addGoal,
  newNameOfGoal,
  handleNameOfGoalChange,
  newStartDate,
  handleStartDateChange,
  newMorningReminder,
  handleMorningReminderChange,
  newAfternoonReminder,
  handleAfternoonReminderChange,
  newEveningReminder,
  handleEveningReminderChange,
  newEmail,
  handleEmailChange,
  newPhoneNumber,
  handlePhoneNumberChange,
}) => {
  return (
    <div>
      <form onSubmit={addGoal}>
        <div>
          <p>
            GOAL:
            <input value={newNameOfGoal} onChange={handleNameOfGoalChange} />
          </p>
          <p>
            date:
            <input value={newStartDate} onChange={handleStartDateChange} />
          </p>
          <p>
            Morning reminder:
            <input value={newMorningReminder} onChange={handleMorningReminderChange} />
          </p>
          <p>
            Afternoon reminder:
            <input value={newAfternoonReminder} onChange={handleAfternoonReminderChange} />
          </p>
          <p>
            Evening reminder:
            <input value={newEveningReminder} onChange={handleEveningReminderChange} />
          </p>
          <p>
            E-mail: <input value={newEmail} onChange={handleEmailChange} />
          </p>
          <p>
            Phone number: <input value={newPhoneNumber} onChange={handlePhoneNumberChange} />
          </p>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default GoalForm;
