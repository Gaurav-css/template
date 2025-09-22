"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";

import Navbar from "./Navbar";


interface Price {
  monthly: number;
  yearly: number;
}

interface Plan {
  name: string;
  description: string;
  price: Price;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
}

interface PricingCardProps {
  plan: Plan;
  isYearly: boolean;
  isPopular: boolean; // For the text badge only
  isActive: boolean; // For the ring/scale highlight
  onMouseEnter: () => void; // Handler for hover
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, isYearly, isPopular, isActive, onMouseEnter }) => {
  const price = isYearly ? plan.price.yearly : plan.price.monthly;
  const billingCycle = isYearly ? "/year" : "/month";

  return (
    <div
      id="pricing"
      onMouseEnter={onMouseEnter}
      className={`relative bg-white dark:bg-[#1A1A1A] rounded-2xl p-8 transition-all duration-300 ${
        isActive
          ? "ring-2 ring-orange-500 shadow-lg scale-105"
          : "border border-gray-200 dark:border-gray-700 shadow-md"
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
            MOST POPULAR
          </div>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {plan.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">{plan.description}</p>
      </div>

      <div className="text-center mb-8">
        {price === 0 ? (
          <div className="text-4xl font-bold text-gray-900 dark:text-white">Free</div>
        ) : (
          <div className="flex items-baseline justify-center">
            <span className="text-5xl font-bold text-gray-900 dark:text-white">${price}</span>
            <span className="text-gray-600 dark:text-gray-400 ml-1 text-lg">{billingCycle}</span>
          </div>
        )}
      </div>

      <div className="mb-8">
        <p className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
          What's included:
        </p>
        <ul className="space-y-3">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        className={`w-full py-4 rounded-xl font-semibold text-sm transition-all duration-200 ${
          isActive
            ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105"
            : "bg-gray-100 hover:bg-gray-200 dark:bg-[#1A1A1A] dark:hover:bg-[#2B2B2B] text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600"
        }`}
      >
        {plan.buttonText}
      </button>
    </div>
  );
};

const App: React.FC = () => {
  const [isYearly, setIsYearly] = useState<boolean>(false);
  // State to track the currently active/hovered plan, defaults to "Pro"
  const [activePlan, setActivePlan] = useState<string>("Pro");

  const plans: Plan[] = [
    {
      name: "Basic",
      description: "For individuals and small teams getting started.",
      price: { monthly: 0, yearly: 0 },
      features: [
        "Task management essentials",
        "Team messaging & file sharing",
        "Activity feed & project overview",
        "Mobile & desktop access",
        "Email support",
      ],
      buttonText: "Start for Basic",
    },
    {
      name: "Plus",
      description: "For growing teams that need smarter workflows.",
      price: { monthly: 9.99, yearly: 119.98 },
      features: [
        "Time tracking & workload management",
        "Advanced reporting & filters",
        "Custom labels, priorities & checklists",
        "Project insights & team analytics",
        "Billing & usage tracking",
        "Priority support",
      ],
      isPopular: true,
      buttonText: "Start with Plus",
    },
    {
      name: "Pro",
      description: "For large organizations with advanced needs.",
      price: { monthly: 16.99, yearly: 203.88 },
      features: [
        "Dedicated account manager",
        "Custom integrations & automation",
        "SSO & role-based access control",
        "Unlimited projects & users",
        "KPI dashboards & reporting tools",
        "Onboarding support",
      ],
      buttonText: "Start with Pro",
    },
  ];

  // Find the default popular plan name
  const defaultPopularPlan = plans.find(p => p.isPopular)?.name || plans[1].name;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#1A1A1A] transition-colors duration-300 -mb-20">
      <Navbar />

      <div id="pricing" className="container mx-auto px-4 py-32 lg:py-40">
        {/* Header Section */}
        <div className="text-center mb-12 -mt-28">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Choose Your Plan
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Affordable and adaptable pricing to suit your goals.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center mb-12">
          <div className="bg-white dark:bg-[#1A1A1A] rounded-full p-1 border border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="flex items-center">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  !isYearly
                    ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-sm transform scale-105"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                Bill monthly
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center ${
                  isYearly
                    ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-sm transform scale-105"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                Bill annually
                <span
                  className={`ml-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-1 rounded text-xs font-semibold transition-all duration-300 ${
                    isYearly ? "opacity-100 scale-100" : "opacity-70 scale-95"
                  }`}
                >
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-center"
          onMouseLeave={() => setActivePlan(defaultPopularPlan)} // Reset to default when mouse leaves the grid
        >
          {plans.map((plan) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              isYearly={isYearly}
              isPopular={plan.isPopular || false} // For the badge
              isActive={activePlan === plan.name} // For the highlight
              onMouseEnter={() => setActivePlan(plan.name)} // Set active on hover
            />
          ))}
        </div>

        {/* Footer */}
        <div id="contact" className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400">
            Need more?{" "}
            <a href="#" className="text-blue-500 hover:text-blue-600 font-medium hover:underline">
              Contact us
            </a>{" "}
            for a custom plan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;