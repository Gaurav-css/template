'use client'

import React, { useState } from 'react';

const faqData = [
  {
    category: 'General',
    questions: [
      {
        question: 'What is Hooman and how does it work?',
        answer:
          "Hooman is an AI-powered mobile app designed to help pet parents manage their pets' health and routines. It offers features like health tracking, vet insights, and personalised care reminders. With Hooman, you can ensure your furry friends receive the best care possible.",
      },
      {
        question: 'Is Hooman suitable for both dogs and cats?',
        answer:
          'Yes, Hooman is designed to cater to the needs of both dogs and cats, providing customized health tracking and care routines for each.',
      },
      {
        question: 'What makes Hooman different from other pet apps?',
        answer:
          'Hooman uses advanced AI to provide proactive health insights and personalized recommendations, going beyond simple tracking to become a comprehensive health partner for your pet.',
      },
    ],
  },
  {
    category: 'AI Technology',
    questions: [
      {
        question: "How does Ezra AI monitor my pet's health?",
        answer:
          "Ezra AI, our proprietary technology, analyzes data points from your pet's activity, diet, and reported symptoms to identify patterns and potential health issues before they become serious.",
      },
      {
        question: 'Can Hooman detect serious health issues?',
        answer:
          "Hooman's AI can flag potential health concerns based on the data you provide. However, it is not a substitute for professional veterinary diagnosis. We always recommend consulting your vet for any serious issues.",
      },
    ],
  },
  {
    category: 'Health & Care',
    questions: [
      {
        question: 'Can I sync with vets?',
        answer:
          "Yes, Hooman allows you to connect with your vet directly through the app. You can share health data and receive professional insights seamlessly. This feature enhances communication and ensures your pet's health is monitored effectively.",
      },
    ],
  },
  {
    category: 'Pricing',
    questions: [
      {
        question: 'Is it free to use?',
        answer:
          'Hooman offers a free version with essential features. For advanced functionalities and personalised services, a subscription is required. You can explore the app to see which plan suits you and your pet best.',
      },
      {
        question: "What's included in the Hooman platform?",
        answer:
          'The platform includes health and activity tracking, AI-powered insights, appointment reminders, and the ability to share data with your vet. Premium features unlock more in-depth analysis and telehealth options.',
      },
    ],
  },
  {
    category: 'Privacy & Security',
    questions: [
      {
        question: "How secure is my pet's data?",
        answer:
          "We take data privacy very seriously. All your pet's information is encrypted and stored securely. We do not share your data with third parties without your explicit consent.",
      },
    ],
  },
];

const allQuestions = faqData.flatMap((category) => category.questions);
const categories = ['All Questions', ...faqData.map((item) => item.category)];

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState('All Questions');
  const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(0);

  const questionsToShow =
    activeCategory === 'All Questions'
      ? allQuestions
      : faqData.find((cat) => cat.category === activeCategory)?.questions || [];

  return (
    <div className="bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white min-h-screen w-full flex items-center justify-center p-4 transition-colors duration-300">
      <div className="w-full max-w-4xl mx-auto p-4 md:p-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Find answers to your questions about Hooman.
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setOpenQuestionIndex(0);
              }}
              className={`px-4 py-2 text-sm md:text-base font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-[#1a1a1a] focus:ring-orange-500
                ${
                  activeCategory === category
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-[#2b2b2b] dark:text-gray-300 dark:hover:bg-[#3a3a3a]'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Questions */}
        <div className="space-y-4">
          {questionsToShow.map((qa, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#1a1a1a] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              <button
                onClick={() =>
                  setOpenQuestionIndex(
                    openQuestionIndex === index ? null : index
                  )
                }
                className="w-full text-left p-5 flex justify-between items-center transition-colors duration-300 hover:bg-gray-50 dark:hover:bg-[#2b2b2b]"
              >
                <h3 className="font-medium text-lg">{qa.question}</h3>
                <div className="text-xl text-orange-500 flex-shrink-0 ml-4">
                  {openQuestionIndex === index ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18 12H6"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v12m6-6H6"
                      />
                    </svg>
                  )}
                </div>
              </button>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openQuestionIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 pt-0 text-gray-600 dark:text-gray-400">
                  <p>{qa.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
