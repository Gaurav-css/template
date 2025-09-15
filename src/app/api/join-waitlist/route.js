// This file should be placed in your project's API directory.
// For Next.js, this would be `pages/api/join-waitlist.js` or `app/api/join-waitlist/route.js`.

// Import the necessary packages. You'll need to install them:
// npm install airtable node-mailjet
const Airtable = require('airtable');
const mailjet = require('node-mailjet');

// Initialize Airtable
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);

// Initialize Mailjet
const mailjetClient = mailjet.apiConnect(
    process.env.MAILJET_API_KEY,
    process.env.MAILJET_SECRET_KEY
);

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }

    const { email } = req.body;

    // Basic email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        return res.status(400).json({ error: 'A valid email is required.' });
    }

    try {
        // --- Step 1: Add email to Airtable ---
        await base(process.env.AIRTABLE_TABLE_NAME).create([
            {
                fields: {
                    'Email': email,
                    'Status': 'Subscribed', // You can add custom fields
                    'Signup Date': new Date().toISOString(),
                },
            },
        ]);

        // --- Step 2: Add contact to Mailjet list ---
        // This adds the contact to a specific list for your waitlist.
        // You must create this list in your Mailjet account first and get its ID.
        await mailjetClient
            .post('contactslist', { 'id': process.env.MAILJET_CONTACT_LIST_ID })
            .action('managecontact')
            .request({
                Action: "addnoforce", // Adds the contact if they don't exist, doesn't update if they do
                Email: email,
            });

        // --- Step 3: Send success response ---
        return res.status(200).json({ message: 'Successfully joined the waitlist!' });

    } catch (error) {
        // Log the error for debugging
        console.error('Waitlist API Error:', error);

        // Handle potential errors from the APIs
        const errorMessage = error.message || 'An internal server error occurred.';
        return res.status(500).json({ error: errorMessage });
    }
}
