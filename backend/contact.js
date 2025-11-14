const express = require("express");
const multer = require("multer");
const nodemailer = require("nodemailer");
require("dotenv").config();

const router = express.Router();

// === Multer setup (store file in memory) ===
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowed = [
      "application/pdf",
      "image/png",
      "image/jpeg",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    allowed.includes(file.mimetype)
      ? cb(null, true)
      : cb(new Error("❌ Unsupported file type"));
  },
});

// === POST /api/contact/send ===
router.post("/send", upload.single("file"), async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !message)
      return res
        .status(400)
        .json({ message: "Name, Email, and Message are required." });

    // === Setup transporter ===
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // === Beautiful Responsive Email Template ===
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Portfolio Message</title>
      <style>
        body {
          margin: 0;
          font-family: 'Segoe UI', Roboto, sans-serif;
          background-color: #f4f6f8;
          padding: 0;
        }
        .email-wrapper {
          width: 100%;
          background: #f4f6f8;
          padding: 30px 10px;
        }
        .email-container {
          max-width: 700px;
          background: #ffffff;
          margin: 0 auto;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        }
        .email-header {
          background: linear-gradient(135deg, #3b82f6, #06b6d4);
          color: white;
          padding: 30px 20px;
          text-align: center;
        }
        .email-header h2 {
          margin: 0;
          font-size: 24px;
          font-weight: 600;
        }
        .email-body {
          padding: 30px;
          color: #333;
        }
        .info-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
        }
        .info-table td {
          padding: 8px 0;
          vertical-align: top;
        }
        .info-label {
          font-weight: 600;
          color: #0f172a;
          width: 120px;
        }
        .message-box {
          background: #f9fafb;
          border-left: 4px solid #3b82f6;
          padding: 18px;
          border-radius: 8px;
          font-size: 15px;
          line-height: 1.7;
          color: #334155;
        }
        .attachment {
          margin-top: 15px;
          font-size: 14px;
          color: #555;
        }
        .email-footer {
          text-align: center;
          background: #f1f5f9;
          color: #475569;
          font-size: 13px;
          padding: 15px;
        }

        /* Responsive */
        @media screen and (max-width: 600px) {
          .email-body {
            padding: 20px;
          }
          .email-header h2 {
            font-size: 20px;
          }
          .info-label {
            width: 100px;
          }
        }
      </style>
    </head>
    <body>
      <div class="email-wrapper">
        <div class="email-container">
          <div class="email-header">
            <h2>📨 New Message from Portfolio</h2>
            <p style="margin-top:8px; font-size:14px; opacity:0.9;">A visitor reached out through your portfolio contact form</p>
          </div>
          <div class="email-body">
            <table class="info-table">
              <tr><td class="info-label">👤 Name:</td><td>${name}</td></tr>
              <tr><td class="info-label">📧 Email:</td><td>${email}</td></tr>
              ${
                phone
                  ? `<tr><td class="info-label">📞 Phone:</td><td>${phone}</td></tr>`
                  : ""
              }
              <tr><td class="info-label">📝 Subject:</td><td>${
                subject || "No subject"
              }</td></tr>
            </table>
            <div class="message-box">
              ${message}
            </div>
            ${
              req.file
                ? `<p class="attachment">📎 Attachment included: <strong>${req.file.originalname}</strong></p>`
                : ""
            }
          </div>
          <div class="email-footer">
            <p>This email was sent via your <strong>Alok Kumar Portfolio</strong>.</p>
            <p>© ${new Date().getFullYear()} Alok Kumar — All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </body>
    </html>
    `;

    // === Attachments ===
    const attachments = req.file
      ? [{ filename: req.file.originalname, content: req.file.buffer }]
      : [];

    // === Send Email ===
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER,
      subject: subject || `Message from ${name}`,
      html: htmlContent,
      attachments,
    });

    res.json({ success: true, message: "✅ Message sent successfully!" });
  } catch (err) {
    console.error("❌ Email Send Error:", err);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
});

module.exports = router;
