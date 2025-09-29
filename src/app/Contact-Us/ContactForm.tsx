import type { Metadata } from 'next';
import ContactForm from './ContactForm'; // Import the new client component

// This is the Server Component. It handles the metadata for SEO.
// It does NOT have 'use client' at the top.
export const metadata: Metadata = {
  title: 'Contact Us', // This will become "Contact Us | Hooman Group"
  description: 'Get in touch with the Hooman Group team. We are here to help with any questions about our pet care platform.',
  openGraph: {
      // You can override specific OG tags here if needed
      title: 'Contact Us | Hooman Group',
  }
};

// The page component is now very simple. It just renders the client component.
export default function ContactPage() {
  return (
    <>
      <ContactForm />
    </>
  );
}

