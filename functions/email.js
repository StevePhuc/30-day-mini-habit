const formattedReturn = require("./helpers/formattedReturn");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event) => {
  if (event.httpMethod === "GET") {
    return formattedReturn(200, { text: "Email" });
  } else if (event.httpMethod === "POST") {
    const fields = JSON.parse(event.body);

    if (!fields.to || !fields.from) {
      return formattedReturn(400, {});
    }

    const msg = {
      to: fields.to,
      from: fields.from,
      subject: fields.subject || "Sending with SendGrid is Fun",
      html: fields.html || "and easy to do anywhere, even with Node.js",
    };
    sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent");
        return formattedReturn(200, { text: "Email sent" });
      })
      .catch((error) => {
        console.error(error);
      });
  } else if (event.httpMethod === "PUT") {
    // TODO:
    // return await updateMiniHabit(event);
  } else if (event.httpMethod === "DELETE") {
    // TODO:
    // return await deleteMiniHabit(event);
  } else {
    return formattedReturn(405, {});
  }
};
