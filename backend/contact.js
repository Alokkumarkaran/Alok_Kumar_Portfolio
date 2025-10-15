const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

router.post('/send', async (req, res) => {
  console.log(req.body);  // debug: should log {name, email, subject, message}
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) return res.status(400).json({ error: 'Missing required fields' });

  try {
    await transporter.sendMail({
      from: process.env.APP_FROM,
      to: process.env.SMTP_USER, // your email
      subject: subject || `New message from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'No subject'}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });
    res.json({ success: true, message: 'Email sent successfully ✅' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Failed to send email ❌' });
  }
});

module.exports = router;
