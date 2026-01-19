import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create and configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD, 
  },
  tls: {
    rejectUnauthorized: false
  }
});

// HTML email template
const generateEmailTemplate = (name, email, userMessage) => `
  <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #f4f4f4;">
    <div style="max-width: 600px; margin: auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
      <h2 style="color: #16f2b3;">📬 New Message from Portfolio Website</h2>
      <p style="color: #888; font-size: 14px; margin-bottom: 20px;">You have received a new message from your portfolio contact form.</p>
      <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
      <p><strong>👤 Name:</strong> ${name}</p>
      <p><strong>📧 Email:</strong> <a href="mailto:${email}" style="color: #007BFF; text-decoration: none;">${email}</a></p>
      <p><strong>💬 Message:</strong></p>
      <blockquote style="border-left: 4px solid #16f2b3; padding-left: 15px; margin-left: 0; background-color: #f9f9f9; padding: 10px 15px; border-radius: 4px;">
        ${userMessage}
      </blockquote>
      <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
      <p style="font-size: 12px; color: #888;">💡 Tip: Click the reply button to respond directly to the sender.</p>
      <p style="font-size: 12px; color: #888;">📅 Received: ${new Date().toLocaleString()}</p>
    </div>
  </div>
`;

// Helper function to send an email via Nodemailer
async function sendEmail(payload) {
  const { name, email, message: userMessage } = payload;
  
  const mailOptions = {
    from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`, 
    to: process.env.EMAIL_USER, 
    subject: `🌟 New Portfolio Message from ${name}`, 
    text: `New message from Portfolio\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${userMessage}`, 
    html: generateEmailTemplate(name, email, userMessage), 
    replyTo: email, 
  };
  
  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Error while sending email:', error.message);
    return false;
  }
};

export async function POST(request) {
  try {
    const payload = await request.json();
    const { name, email, message: userMessage } = payload;

    // Validate required fields
    if (!name || !email || !userMessage) {
      return NextResponse.json({
        success: false,
        message: 'All fields are required.',
      }, { status: 400 });
    }

    // Send email
    const emailSuccess = await sendEmail(payload);

    if (emailSuccess) {
      return NextResponse.json({
        success: true,
        message: 'Message sent successfully!',
      }, { status: 200 });
    }

    return NextResponse.json({
      success: false,
      message: 'Failed to send email. Please try again later.',
    }, { status: 500 });
  } catch (error) {
    console.error('API Error:', error.message);
    return NextResponse.json({
      success: false,
      message: 'Server error occurred.',
    }, { status: 500 });
  }
};