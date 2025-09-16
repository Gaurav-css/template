import { NextResponse } from "next/server";
import Airtable from "airtable";
import mailjet from "node-mailjet";

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    // Airtable setup
    const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
      .base(process.env.AIRTABLE_BASE_ID);

    await base(process.env.AIRTABLE_TABLE_NAME).create([
      { fields: { Email: email } } // 👈 Must match Airtable column name
    ]);

    // Mailjet setup
    const mailjetClient = mailjet.apiConnect(
      process.env.MAILJET_API_KEY,
      process.env.MAILJET_SECRET_KEY
    );

    await mailjetClient.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: process.env.MAILJET_SENDER_EMAIL,
            Name: process.env.MAILJET_SENDER_NAME,
          },
          To: [{ Email: email }],
          Subject: "🎉 You're on the waitlist!",
          HTMLPart: `<h2>Welcome 🐾</h2><p>Thanks for joining our waitlist!</p>`,
        },
      ],
    });

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (err) {
    console.error("join-waitlist error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
