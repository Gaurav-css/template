import { NextResponse } from "next/server";

// --- Helper function for robust email validation ---
const isEmailValid = (email: string) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailRegex.test(email);
};

export async function POST(req: Request) {
  const {
    AIRTABLE_API_KEY,
    AIRTABLE_BASE_ID,
    AIRTABLE_TABLE_NAME,
    BREVO_API_KEY,
    BREVO_SENDER_EMAIL,
    BREVO_SENDER_NAME,
  } = process.env;

  if (
    !AIRTABLE_API_KEY ||
    !AIRTABLE_BASE_ID ||
    !AIRTABLE_TABLE_NAME ||
    !BREVO_API_KEY ||
    !BREVO_SENDER_EMAIL ||
    !BREVO_SENDER_NAME
  ) {
    console.error("❌ Missing environment variables.");
    return NextResponse.json(
      { error: "Internal Server Error. Missing config." },
      { status: 500 }
    );
  }

  try {
    const { email } = await req.json();

    // --- 1. Input Validation ---
    if (!email || !isEmailValid(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // --- 2. Check for Duplicate in Airtable ---
    const checkRes = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}?filterByFormula=${encodeURIComponent(
        `{Email} = "${email}"`
      )}&maxRecords=1`,
      {
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        },
      }
    );

    const checkData = await checkRes.json();
    if (checkData.records && checkData.records.length > 0) {
      return NextResponse.json(
        { message: "You're already on the list!" },
        { status: 200 }
      );
    }

    // --- 3. Add to Airtable ---
    const createRes = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: { Email: email },
        }),
      }
    );

    const createData = await createRes.json();
    if (!createRes.ok) {
      console.error("❌ Airtable error:", createData);
      return NextResponse.json(
        { error: "Failed to save email to Airtable." },
        { status: 500 }
      );
    }

    // --- 4. Send Welcome Email via Brevo ---
    const brevoRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": BREVO_API_KEY!,
      },
      body: JSON.stringify({
        sender: { name: BREVO_SENDER_NAME, email: BREVO_SENDER_EMAIL },
        to: [{ email }],
        subject: "🎉 You're on the waitlist!",
        htmlContent: `
          <div style="font-family: sans-serif; text-align: center; padding: 20px;">
            <h1 style="color: #333;">Welcome to the Pack! 🐾</h1>
            <p style="font-size: 16px; color: #555;">
              Thanks for joining the waitlist. You're all set! 
              We'll be in touch soon with updates and early access.
            </p>
          </div>
        `,
        textContent:
          "Welcome to the Pack! Thanks for joining the waitlist. You're all set! We'll be in touch soon with updates and early access.",
      }),
    });

    if (!brevoRes.ok) {
      const errorData = await brevoRes.json();
      console.error("❌ Brevo error:", errorData);
      return NextResponse.json(
        { error: "Failed to send welcome email." },
        { status: 500 }
      );
    }

    // --- 5. Success Response ---
    return NextResponse.json(
      { message: "🎉 Congratulations! You're on the waitlist. 🐾" },
      { status: 200 }
    );
  } catch (err) {
    console.error("❌ Error in /api/join-waitlist:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
