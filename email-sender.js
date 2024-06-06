const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.example.com",
  port: 587,
  secure: false,
  auth: {
    user: "your-email@example.com",
    pass: "your-password",
  },
});

const mailOptions = {
  from: "your-email@example.com",
  to: "recipient@example.com",
  subject: "Hello from Node.js!",
  text: "Hello from Node.js!",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
