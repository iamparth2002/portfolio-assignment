import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json(); // Parse incoming data

    const { name, email, subject, message } = body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ success: false, error: 'All fields are required.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: true,
      },
    });

    // Prepare email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'neenaparth@gmail.com', // Replace with your desired email
      subject: 'New Travel Query Received',
      html: `
        <h2>New Query Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
        
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Example: Sending data somewhere (e.g., database, email)
    // Replace this with actual logic (e.g., saving to database or sending an email)
    console.log('Form submission received:', { name, email, subject, message });

    return NextResponse.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error in contact form API:', error);
    return NextResponse.json({ success: false, error: 'Something went wrong.' }, { status: 500 });
  }
}
