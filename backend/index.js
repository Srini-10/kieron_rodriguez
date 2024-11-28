const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/api/send-email", async (req, res) => {
  const { name, members, response } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      to: "kieronrodriguez23@gmail.com",
      subject: "New RSVP Response",
      text: `
        Response: ${response}
        Name: ${name}
        ${members ? `Members: ${members}` : ""}
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).send({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send({ error: "Failed to send email." });
  }
});

app.listen(5002, () => console.log("Server running on port 5002"));
