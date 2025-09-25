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
    const existingRecords = await table.select({
        maxRecords: 1,
        filterByFormula: `{Email} = "${email}"`,
      }).firstPage();

    if (existingRecords.length > 0) {
      return NextResponse.json(
        { message: "You're already on the list!" },
        { status: 200 }
      );
    }

    // --- 4. Add to Airtable (if new) ---
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

    // --- UPDATED SUCCESS MESSAGE ---
    return NextResponse.json(
      { message: "Congratulations! You're on the waitlist. 🐾" },
      { status: 200 }
    );

  } catch (err) {
    // --- 6. Improved Error Logging ---
    console.error("Error in /api/join-waitlist:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}