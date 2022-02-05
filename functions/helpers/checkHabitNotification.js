const { isAfter, isBefore, format } = require("date-fns");
const sendEmail = require("./sendEmail");

module.exports = (habit) => {
  console.log("checkHabit");

  const now = new Date();
  console.log("now", now);

  // for to check each habit
  habit.forEach((item) => {
    console.log("----- check habit id", item.id);
    if (isAfter(now, new Date(item.start_date)) && isBefore(now, new Date(item.end_date))) {
      const isDone = item.habit_track.find(
        (_item) => _item.date === format(now, "yyyy-MM-dd")
      )?.done;
      console.log("check done", isDone);
      if (!isDone) {
        const timeNow = now.toISOString().substring(11, 16);
        console.log("send reminder", timeNow);

        const isReminderMorning = timeNow === item.reminder_time.morningReminder.substring(0, 5);
        const isReminderAfternoon =
          timeNow === item.reminder_time.afternoonReminder.substring(0, 5);
        const isReminderEvening = timeNow === item.reminder_time.eveningReminder.substring(0, 5);

        const toEmail = item.reminder_type.email;
        const habitName = item.habit_name;
        if (isReminderMorning) {
          console.log("send morning reminder");
          sendEmail({
            to: toEmail,
            subject: "Morning Reminder: " + habitName,
            html: "click here to mark as done",
          });
        }
        if (isReminderAfternoon) {
          console.log("send afternoon reminder");
          sendEmail({
            to: toEmail,
            subject: "Afternoon Reminder: " + habitName,
            html: "click here to mark as done",
          });
        }
        if (isReminderEvening) {
          console.log("send evening reminder");
          sendEmail({
            to: toEmail,
            subject: "Evening Reminder: " + habitName,
            html: "click here to mark as done",
          });
        }
      }
    }
    console.log("done habit id----", item.id);
  });
};
