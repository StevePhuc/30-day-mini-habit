const formattedReturn = require("./helpers/formattedReturn");
const sendNotification = require("./helpers/sendNotification");
// see https://github.com/jamesqquick/Build-a-JAMstack-Course-Tracker-with-React-Serverless-and-Airtable/blob/master/functions/courses.js
exports.handler = async (event) => {
  if (event.httpMethod === "GET") {
    return formattedReturn(200, { text: "Hello World!" });
  } else if (event.httpMethod === "POST") {
    return await sendNotification(event);
  } else if (event.httpMethod === "PUT") {
    // TODO:
  } else if (event.httpMethod === "DELETE") {
    // TODO:
    // return await deleteMiniHabit(event);
  } else {
    return formattedReturn(405, {});
  }
};
