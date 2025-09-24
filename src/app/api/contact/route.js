
import { NextResponse } from 'next/server';
import Mailjet from 'node-mailjet';

export async function POST(req) {
  // Pull the form data from the request body
  const { name, email, message } = await req.json();

  // Ensure environment variables are set for Mailjet
  const apiKey = process.env.MAILJET_API_KEY;
  const secretKey = process.env.MAILJET_SECRET_KEY;
  const recipient = process.env.RECIPIENT_EMAIL;

  if (!apiKey || !secretKey || !recipient) {
    console.error('Missing environment variables for Mailjet');
    return NextResponse.json({ message: 'Server configuration error.' }, { status: 500 });
  }
  
  // Initialize the Mailjet client
  const mailjet = new Mailjet({
    apiKey: apiKey,
    apiSecret: secretKey
  });

  // Construct the email request
  const request = mailjet
    .post("send", {'version': 'v3.1'})
    .request({
      "Messages":[
        {
          "From": {
            "Email": recipient, // This must be a verified sender email in Mailjet
            "Name": "Contact Form"
          },
          "To": [
            {
              "Email": recipient,
              "Name": "Hooman Group Support" // The name of the recipient
            }
          ],
          "ReplyTo": {
             "Email": email,
             "Name": name
          },
          "Subject": "New Enquiry: Hooman Group Contact Form",
          "TextPart": `You received a new message from your contact form.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
          "HTMLPart": `<h3>You have a new contact form submission:</h3>
                       <p><strong>Name:</strong> ${name}</p>
                       <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                       <p><strong>Message:</strong></p>
                       <p>${message.replace(/\n/g, '<br>')}</p>`
        }
      ]
    });

  try {
    // Send the email
    await request;
    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Failed to send email:', error.statusCode, error.message);
    return NextResponse.json({ message: 'Failed to send email.' }, { status: 500 });
  }
}

