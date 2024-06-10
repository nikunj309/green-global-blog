import nodemailer from 'nodemailer';

export async function POST(req: any, res:any) {
  const body = await req.json();
    const { name, email, subject, message } = body;

    // Create a Nodemailer transporter using SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can use any email service
      auth: {
        user: process.env.SENDER_EMAIL, // Your email address
        pass: process.env.PASSWORD,// Your email password
      },
    });

    try {
      // Send email
      await transporter.sendMail({
        from: email,
        to: process.env.SENDER_EMAIL,
        subject: `New message from ${name}: ${subject}`,
        text: message,
        html: `<p>You have a new contact form submission</p>
               <p><strong>Name: </strong> ${name}</p>
               <p><strong>Email: </strong> ${email}</p>
               <p><strong>Subject: </strong> ${subject}</p>
               <p><strong>Message: </strong> ${message}</p>`,
      });

      // return res.status(200).json({ success: true });
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      console.error('Error sending email:', error);
      // return res.status(500).json({ success: false, error: 'Failed to send email' });
      return new Response(JSON.stringify({ success: false, error: 'Failed to send email' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } 