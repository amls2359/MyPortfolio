const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_ADDRESS, // your Gmail
    pass: process.env.EMAIL_PASSWORD    // 16-char app password
  },
});

router.post("/send-email", async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

const mailOptions = {
  from: `"${name} via Portfolio Contact" <${process.env.EMAIL_ADDRESS}>`,
  to: process.env.EMAIL_ADDRESS, // You receive it
  replyTo: email, // User’s email (so you can reply directly)
  subject: `📩 New Contact Form Submission: ${subject}`,
  text: `
    Name: ${name}
    Email: ${email}
    Phone: ${phone}
    Subject: ${subject}
    Message: ${message}
  `,
};

    await transporter.sendMail(mailOptions);

    res.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    res.json({ success: false, error: error.message });
  }
});


module.exports = router