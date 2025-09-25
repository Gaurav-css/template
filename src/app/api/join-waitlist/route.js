import { NextResponse } from "next/server";
import Airtable from "airtable";
import mailjet from "node-mailjet";

// Helper function for more robust email validation
const isEmailValid = (email) => {
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
  );
  return emailRegex.test(email);
};

export async function POST(req) {
  // --- 1. Validate Environment Variables ---
  // Fail fast if the server isn't configured correctly.
  const {
    AIRTABLE_API_KEY,
    AIRTABLE_BASE_ID,
    AIRTABLE_TABLE_NAME,
    MAILJET_API_KEY,
    MAILJET_SECRET_KEY,
    MAILJET_SENDER_EMAIL,
    MAILJET_SENDER_NAME,
  } = process.env;

  if (
    !AIRTABLE_API_KEY || !AIRTABLE_BASE_ID || !AIRTABLE_TABLE_NAME ||
    !MAILJET_API_KEY || !MAILJET_SECRET_KEY || !MAILJET_SENDER_EMAIL ||
    !MAILJET_SENDER_NAME
  ) {
    console.error("Server configuration error: Missing environment variables.");
    return NextResponse.json(
      { error: "Internal Server Error." },
      { status: 500 }
    );
  }
  
  try {
    const { email } = await req.json();

    // --- 2. Better Input Validation ---
    if (!email || !isEmailValid(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }
    
    const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID);
    const table = base(AIRTABLE_TABLE_NAME);

    // --- 3. Check for Duplicate Emails ---
    // Search Airtable to see if the email is already on the list.
    const existingRecords = await table.select({
        maxRecords: 1,
        filterByFormula: `{Email} = "${email}"`, // Ensure your Airtable column is named "Email"
      }).firstPage();

    if (existingRecords.length > 0) {
      // If the email exists, return a friendly message without creating a new record.
      return NextResponse.json(
        { message: "You're already on the list! We'll keep you posted." },
        { status: 200 }
      );
    }

    // --- 4. Add to Airtable (if new) ---
    // If the email is new, create the record.
    await table.create([{ fields: { Email: email } }]);

    // --- 5. Send Welcome Email ---
    const mailjetClient = mailjet.apiConnect(
      MAILJET_API_KEY,
      MAILJET_SECRET_KEY
    );

    await mailjetClient.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: MAILJET_SENDER_EMAIL,
            Name: MAILJET_SENDER_NAME,
          },
          To: [{ Email: email }],
          Subject: "🎉 You're on the waitlist!",
          HTMLPart: `
            <div style="font-family: sans-serif; text-align: center; padding: 20px;">
              <h1 style="color: #333;">Welcome to the Pack! 🐾</h1>
              <p style="font-size: 16px; color: #555;">
                Thanks for joining the waitlist. You're all set! 
                We'll be in touch soon with updates and early access.
              </p>
            </div>
          `,
          TextPart: "Welcome to the Pack! Thanks for joining the waitlist. You're all set! We'll be in touch soon with updates and early access.",
        },
      ],
    });

    return NextResponse.json(
      { message: "Success! Check your inbox for a confirmation." },
      { status: 200 }
    );
  } catch (err) {
    // --- 6. Improved Error Logging ---
    // Log the detailed error on the server for debugging.
    console.error("Error in /api/join-waitlist:", err);
    
    // Return a generic error to the client for security.
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}