const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = (fields) => {
  const msg = {
    to: fields.to,
    from: fields.from || process.env.EMAIL_FROM,
    subject: fields.subject || "Sending with SendGrid is Fun",
    html: fields.html || "and easy to do anywhere, even with Node.js",
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent to", fields.to, fields.subject);
    })
    .catch((error) => {
      console.error(error);
    });
};
