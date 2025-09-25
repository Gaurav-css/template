'use client';
import React from 'react';
import Footer from '@/components/Footer';
import "@/app/globals.css";
import Navbar from '@/components/Navbar';

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 dark:bg-[#1a1a1a] text-gray-800 dark:text-zinc-300 antialiased">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-4xl mx-auto bg-white dark:bg-zinc-900 p-8 sm:p-10 rounded-2xl shadow-lg dark:border dark:border-zinc-800">
            
            <header className="mb-10 text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-zinc-100 tracking-tight">
                Hooman Group Ltd – Privacy Policy
              </h1>
              <div className="mt-4 text-lg text-gray-600 dark:text-zinc-400 space-y-1">
                <p><strong>Effective Date:</strong> 14 August 2025</p>
                <p><strong>Last Updated:</strong> 14 August 2025</p>
              </div>
            </header>
            
            <div className="prose prose-lg max-w-none text-gray-700 dark:text-zinc-300 space-y-6">
              
              <Section title="1. Introduction">
                <p>
                  <strong>1.1.</strong> Hooman Group Ltd (“Hooman Group”, “we”, “our”, or “us”) is committed to safeguarding the privacy and personal data of our users, customers, partners, and visitors (“you” or “your”). As a company dedicated to providing innovative pet care solutions, including AI-powered tools like Ezra AI, we prioritise transparency, security, and compliance in all our data handling practices.
                </p>
                <p>
                  <strong>1.2.</strong> This Privacy Policy describes how we collect, use, disclose, store, and protect personal data when you access our websites, mobile applications, platforms, and services (collectively, the “Services”). It applies to all interactions with our Services, whether through our website at www.hoomanpets.com, our mobile app, or any integrated third-party features.
                </p>
                <p>
                  <strong>1.3.</strong> We comply with applicable data protection laws, including but not limited to the UK General Data Protection Regulation (UK GDPR), the EU General Data Protection Regulation (EU GDPR), the Data Protection Act 2018 (UK), the California Consumer Privacy Act as amended by the California Privacy Rights Act (CCPA/CPRA), the California Online Privacy Protection Act (CalOPPA), the Children's Online Privacy Protection Act (COPPA), and other relevant international data protection frameworks such as those under the Asia-Pacific Economic Cooperation (APEC) Privacy Framework where applicable.
                </p>
                <p>
                  <strong>1.4.</strong> By accessing or using our Services, you acknowledge that you have read, understood, and consent to the practices described in this Privacy Policy. If you do not agree with any part of this Policy, please do not use our Services. For users in certain jurisdictions, continued use may also imply consent where legally permissible, but we will seek explicit consent where required.
                </p>
                <p>
                  <strong>1.5.</strong> This Policy does not apply to information collected by third-party websites, applications, or services that may link to or be accessible from our Services, unless explicitly stated otherwise. We encourage you to review the privacy policies of those third parties.
                </p>
              </Section>

              <Section title="2. Data Controller & Contact Information">
                <p>
                  <strong>2.1.</strong> The data controller responsible for your personal data is:<br/>
                  Hooman Group Ltd<br/>
                  Registered Address: [Your Address Here]<br/>
                  Company Registration Number: [Insert Company Number if available]<br/>
                  Email: <a href="mailto:privacy@hoomanpets.com" className="text-blue-600 dark:text-blue-400 hover:underline">privacy@hoomanpets.com</a>
                </p>
                <p>
                  <strong>2.2.</strong> We have appointed a Data Protection Officer (DPO) to oversee compliance with data protection laws. You can contact our DPO at:<br/>
                  Email: <a href="mailto:dpo@hoomanpets.com" className="text-blue-600 dark:text-blue-400 hover:underline">dpo@hoomanpets.com</a><br/>
                  Postal Address: As above.
                </p>
                <p>
                  <strong>2.3.</strong> For any inquiries, complaints, or requests related to this Privacy Policy or your personal data, please contact us using the details provided above. We aim to respond to all legitimate requests within one month, or sooner if required by law.
                </p>
              </Section>

              <Section title="3. Information We Collect">
                  <p>We collect various types of information to provide, improve, and secure our Services. This may include:</p>
                  <p><strong>3.1. Personal Data:</strong> Such as your full name, email address, phone number, username and password (account credentials), billing information (e.g., credit card details processed via secure gateways), and delivery or postal addresses.</p>
                  <p><strong>3.2. Pet-Related Data:</strong> Information about your pets, including name, breed, species, age, weight, gender, vaccination status, dietary preferences, exercise routines, and care records. This data helps us deliver personalised pet care recommendations.</p>
                  <p><strong>3.3. Health & Care Data:</strong> Non-human health information, such as wellness logs, medication reminders, behavioral notes, or grooming schedules. Where this data is linked to identifiable individuals (e.g., owners of service animals or in cases where pet data reveals sensitive human information), it may be treated as special category data under GDPR, requiring additional safeguards.</p>
                  <p><strong>3.4. AI Interaction Data:</strong> User prompts, queries, responses, and feedback provided during interactions with Ezra AI or other AI features. This may include text, voice inputs, or preferences to enhance AI accuracy.</p>
                  <p><strong>3.5. Device & Usage Data:</strong> Technical information such as IP address, device identifiers (e.g., UDID, IMEI), operating system version, browser type, app usage logs, cookies, web beacons, browsing history, session data, and approximate geolocation (derived from IP or with consent via device settings).</p>
                  {/* FIXED: Escaped the apostrophe in "Children's" */}
                  <p><strong>3.6. Children's Data:</strong> We do not knowingly collect personal data from children under 16 years of age in the UK/EU or under 13 years of age in the US (as per COPPA). If we become aware of such collection without verifiable parental consent, we will delete the data promptly. Parental consent must be obtained and verified for any underage use of our Services.</p>
                  <p><strong>3.7. Other Data:</strong> Any additional information you voluntarily provide, such as survey responses, feedback, or communications with our support team.</p>
                  <p>We collect this information directly from you (e.g., during registration or use), automatically via our Services (e.g., through cookies), or from third parties (e.g., partners with your consent).</p>
              </Section>

              <Section title="4. Purposes of Processing">
                <p>We process your personal data only for specified, explicit, and legitimate purposes. These include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Providing, maintaining, and improving the Services, including troubleshooting and updates.</li>
                  <li>Generating AI-powered insights, recommendations, reminders, and personalised content (e.g., pet care tips via Ezra AI).</li>
                  <li>Personalizing your user experience based on preferences and usage patterns.</li>
                  <li>Facilitating transactions, processing payments, and managing subscriptions or orders.</li>
                  <li>Enabling integrations with veterinary partners, third-party APIs (e.g., for mapping or device syncing), and external services.</li>
                  <li>Communicating with you, including sending service alerts, reminders, newsletters, updates, or promotional materials (with consent where required).</li>
                  <li>Conducting analytics, research, and product development to enhance features and user satisfaction.</li>
                  <li>Complying with legal obligations, resolving disputes, and enforcing our Terms of Service.</li>
                  <li>Detecting, preventing, and addressing fraud, security breaches, or technical issues.</li>
                  <li>Aggregating anonymised data for statistical purposes or AI model training.</li>
                </ul>
                <p>We will not use your data for incompatible purposes without notifying you and, where necessary, obtaining your consent.</p>
              </Section>

              <Section title="10. Your Rights">
                  <p>Depending on your jurisdiction and applicable laws, you may exercise the following rights regarding your personal data:</p>
                  <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Access:</strong> Request a copy of the data we hold about you.</li>
                      <li><strong>Rectification:</strong> Correct inaccurate or incomplete data.</li>
                      <li><strong>Erasure (Right to be Forgotten):</strong> Request deletion where no longer necessary or where consent is withdrawn.</li>
                      <li><strong>Restriction:</strong> Limit processing in certain circumstances (e.g., during verification).</li>
                      <li><strong>Objection:</strong> Object to processing based on legitimate interests or for direct marketing.</li>
                      <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format.</li>
                      <li><strong>Withdraw Consent:</strong> At any time, without affecting prior processing.</li>
                      <li><strong>Opt-Out:</strong> From marketing communications, automated decision-making, or data sharing/sales (e.g., under CCPA via "Do Not Sell/Share My Personal Information" link on our website).</li>
                      <li><strong>Non-Discrimination:</strong> We will not discriminate against you for exercising these rights.</li>
                  </ul>
                  {/* FIXED: Escaped the apostrophe in "Commissioner's" */}
                  <p>To exercise rights, contact us at <a href="mailto:privacy@hoomanpets.com" className="text-blue-600 dark:text-blue-400 hover:underline">privacy@hoomanpets.com</a>. We may verify your identity for security. For complaints, contact the UK Information Commissioner's Office (ICO) at www.ico.org.uk, or your local supervisory authority.</p>
                  <p>California residents: Under CCPA/CPRA, you have additional rights, including knowing categories of data collected/shared, and opting out of sales/sharing. We respond to verified requests within 45 days (extendable).</p>
              </Section>
            </div>
          </div>
        </div>
      </div>
      {/* FIXED: Added the Footer component to complete the page layout */}
      <Footer />
    </>
  );
};

// This helper component structures the main sections
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="space-y-4 pt-6">
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-zinc-100 border-b border-gray-200 dark:border-zinc-800 pb-2 mb-4">
      {title}
    </h2>
    <div className="space-y-4">{children}</div>
  </section>
);

export default PrivacyPolicy;