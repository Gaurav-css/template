// app/vet-insights/page.tsx

"use client";
import React from 'react';
import { Stethoscope, Video, Search, MessageSquare } from 'lucide-react';

const VetCard = ({ name, specialty, location }: { name: string, specialty: string, location: string }) => (
  <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-md border border-zinc-200 dark:border-zinc-700 hover:shadow-lg transition-shadow duration-300">
    <div className="flex items-center gap-4">
      <div className="w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center">
        <Stethoscope className="w-8 h-8 text-orange-500" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{name}</h3>
        <p className="text-orange-600 dark:text-orange-400 font-medium">{specialty}</p>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">{location}</p>
      </div>
    </div>
    <div className="mt-6 flex gap-2">
      <button className="flex-1 bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-600 transition-colors">
        Book Now
      </button>
      <button className="flex-1 bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-zinc-300 dark:hover:bg-zinc-600 transition-colors">
        View Profile
      </button>
    </div>
  </div>
);

export default function VetInsightsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200">
      {/* FIXED: Added padding-top to offset the fixed navbar */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-36 pb-16">
        {/* Header Section */}
        <header className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 dark:bg-orange-900/50 rounded-full mb-6">
            <Stethoscope className="w-8 h-8 text-orange-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Vet Insights
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Access professional advice and services at your fingertips.
          </p>
        </header>

        {/* Search and Filters */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
            <input
              type="text"
              placeholder="Search by name, specialty, or location..."
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-full focus:ring-2 focus:ring-orange-500 focus:outline-none transition-shadow"
            />
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Telehealth Section */}
          <div className="lg:col-span-1 bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-lg border border-zinc-200 dark:border-zinc-700">
            <h2 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-white">Telehealth Services</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">
              Connect with a vet from the comfort of your home for consultations and follow-ups.
            </p>
            <div className="space-y-4">
              <button className="w-full flex items-center gap-3 bg-orange-500 text-white px-5 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors">
                <Video className="w-5 h-5" />
                <span>Start a Video Call</span>
              </button>
              <button className="w-full flex items-center gap-3 bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 px-5 py-3 rounded-xl font-semibold hover:bg-zinc-300 dark:hover:bg-zinc-600 transition-colors">
                <MessageSquare className="w-5 h-5" />
                <span>Chat with a Vet</span>
              </button>
            </div>
          </div>

          {/* Featured Vets Section */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white border-b border-zinc-300 dark:border-zinc-700 pb-3">
              Find a Veterinarian
            </h2>
            <VetCard name="Dr. Evelyn Reed" specialty="Canine Specialist" location="New York, NY" />
            <VetCard name="Dr. Samuel Chen" specialty="Feline Nutritionist" location="San Francisco, CA" />
            <VetCard name="Dr. Olivia Grant" specialty="Exotic Pets & Avian Care" location="Miami, FL" />
          </div>
        </div>
      </main>
    </div>
  );
}