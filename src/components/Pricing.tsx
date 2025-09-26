"use client";
import React, { useState } from "react";
import { Check, DollarSign } from "lucide-react";

// The Navbar component import has been removed as it's not defined in this file.

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
  isPopular: boolean;
  isActive: boolean;
  onMouseEnter: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, isYearly, isPopular, isActive, onMouseEnter }) => {
  const price = isYearly ? plan.price.yearly : plan.price.monthly;
  const billingCycle = isYearly ? "/year" : "/month";

  return (
    <div
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
        className={`w-full py-3 rounded-xl font-semibold text-base transition-all duration-200 ${
          isActive
            ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105"
            : "bg-gray-100 hover:bg-gray-200 dark:bg-[#2B2B2B] dark:hover:bg-[#3C3C3C] text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600"
        }`}
      >
        {plan.buttonText}
      </button>
    </div>
  );
};

const PricingPage: React.FC = () => {
  const [isYearly, setIsYearly] = useState<boolean>(false);

  const plans: Plan[] = [
    {
      name: "Basic",
      description: "For individuals and small teams getting started.",
      price: { monthly: 0, yearly: 0 },
      features: [
        "Single pet profile management",
        "Activity tracking features",
        "Limited AI-powered insights",
        "Starter Ezra AI access",
        "Basic health tracking",
        "Limited access to documents vault",
        "Limited product recommendation",
        "Limited access to nutritional goals"
      ],
      buttonText: "Comming Soon",
    },
    {
      name: "Pro",
      description: "For large organisations with advanced needs.",
      price: { monthly: 14.99, yearly: 179.88 },
      features: [
        "All features from the free plan",
        "Multiple pet profiles",
        "Extended AI-powered insights access",
        "Extended Ezra AI insights access",
        "Unlimited access to health tracking",
        "Multi user sharing with vets, dog sitters etc.",
        "Unlimited product recommendations",
        "Unlimited access to nutritional goals",
        "Early access to new features"
      ],
      isPopular: true, // "Pro" is now the popular plan
      buttonText: "Coming Soon",
    },
  ];

  const defaultPopularPlan = plans.find(p => p.isPopular)?.name || plans[0].name;
  const [activePlan, setActivePlan] = useState<string>(defaultPopularPlan);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#121212] transition-colors duration-300">
      {/* <Navbar /> */}

      <div id="pricing" className="container mx-auto px-4 py-24 sm:py-32">
        <div className="text-center mb-16 -mt-14">
          <div className="inline-flex items-center gap-x-2 bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-full px-4 py-1 text-sm font-medium text-orange-600 dark:text-orange-400 mb-16 animate-fade-in-up">
                    <DollarSign className="w-4 h-4 text-orange-500 dark:text-orange-400" />
                        <span>Pricing</span>
                    </div>
          <h1 className="text-4xl lg:text-[48px] font-bold text-gray-900 dark:text-white mb-4 -mt-10">
            Choose Your Plan
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Affordable and adaptable pricing to suit your goals.
          </p>
        </div>

        <div className="flex items-center justify-center mb-16">
          <div className="bg-white dark:bg-[#1A1A1A] rounded-full p-1.5 border border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="flex items-center space-x-1">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-sm font-medium transition-colors duration-300 ${
                  !isYearly
                    ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/50"
                }`}
              >
                Bill monthly
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-sm font-medium transition-colors duration-300 flex items-center ${
                  isYearly
                    ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/50"
                }`}
              >
                Bill annually
                <span className="ml-2 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 px-2 py-1 rounded-md text-xs font-semibold">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto items-center" // Adjusted max-width and columns
          onMouseLeave={() => setActivePlan(defaultPopularPlan)}
        >
          {plans.map((plan) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              isYearly={isYearly}
              isPopular={plan.isPopular || false}
              isActive={activePlan === plan.name}
              onMouseEnter={() => setActivePlan(plan.name)}
            />
          ))}
        </div>

        <div id="contact" className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-400">
            Need more?{" "}
            <a href="/Contact-Us" className="text-orange-500 hover:text-orange-600 font-medium hover:underline">
              Contact us
            </a>{" "}
            for a custom plan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
