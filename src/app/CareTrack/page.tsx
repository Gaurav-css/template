"use client";

import Link from 'next/link';

// FIXED: Defined a type for the Icon component's props to resolve TypeScript errors.
type IconProps = {
  path: string;
  className?: string;
};

// Helper for icons
const Icon = ({ path, className = "w-6 h-6" }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d={path} />
  </svg>
);

const SearchIcon = () => (
  <Icon path="M10 2a8 8 0 016.32 12.905l4.387 4.386a1 1 0 01-1.414 1.414l-4.386-4.387A8 8 0 1110 2zm0 2a6 6 0 100 12A6 6 0 0010 4z" />
);

const MoreIcon = () => (
  <Icon path="M12 5a2 2 0 100-4 2 2 0 000 4zm0 6a2 2 0 100-4 2 2 0 000 4zm0 6a2 2 0 100-4 2 2 0 000 4z" />
);


export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 transition-colors duration-500 dark:bg-[#1c1c1e] dark:text-white">
      {/* Header / Navigation */}
      <header className="mx-auto max-w-6xl px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-[#ED6C35]">Hooman Group</span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
              {/* FIXED: Replaced <a> with <Link> for internal navigation */}
              <Link href="/" className="hover:text-[#ED6C35]">Home</Link>
              <Link href="/pricing" className="hover:text-[#ED6C35]">Pricing</Link>
              <Link href="/blog" className="hover:text-[#ED6C35]">Blog</Link>
              <Link href="/products" className="hover:text-[#ED6C35]">Products</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4 text-sm font-medium text-gray-600 dark:text-gray-300">
             <button className="p-2 hover:text-[#ED6C35]">
                <SearchIcon />
            </button>
             <button className="p-2 hover:text-[#ED6C35]">
                <MoreIcon />
            </button>
            <Link href="/login" className="hover:text-[#ED6C35]">Login / Signup</Link>
          </div>
        </div>
      </header>
      
      {/* Container */}
      <main className="mx-auto max-w-6xl px-4 py-8">
        {/* Hero Section */}
        <section
          className="relative mb-8 overflow-hidden rounded-2xl bg-white p-8 shadow-xl dark:bg-[#262626]"
        >
          <h1 className="text-4xl font-bold text-[#ED6C35]">
            Smart Pet Care Tracking
          </h1>
          {/* FIXED: Escaped the apostrophe in "pet's" to "pet&apos;s" */}
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            Powered by Ezra AI - Monitor your pet&apos;s health, activities, and
            well-being in real-time with advanced AI analytics.
          </p>
        </section>

        {/* Dashboard Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Pet Card */}
          <div className="rounded-xl bg-[#ED6C35] p-6 text-white shadow-lg">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-lg font-semibold">Max</span>
              <span className="rounded-full bg-white/20 px-3 py-1 text-sm">
                ● Active
              </span>
            </div>
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-2xl">
                🐕
              </div>
              <div>
                <h3 className="text-lg font-semibold">Golden Retriever</h3>
                <p className="text-sm opacity-80">3 years old • 65 lbs</p>
              </div>
            </div>
            {/* Updated Trackers */}
            <div className="mt-6 space-y-4">
              {/* Feeding Tracker */}
              <div>
                <div className="mb-1 flex justify-between items-center text-sm">
                  <span className="opacity-80">Feeding</span>
                  <span className="font-semibold">2 / 2</span>
                </div>
                <div className="w-full rounded-full bg-white/30 h-2">
                  <div className="bg-white h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              {/* Weekly Care Tracker */}
              <div>
                <div className="mb-1 flex justify-between items-center text-sm">
                  <span className="opacity-80">Weekly Care</span>
                  <span className="font-semibold">3 / 4</span>
                </div>
                <div className="w-full rounded-full bg-white/30 h-2">
                  <div className="bg-white h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              {/* Grooming & Vaccinations */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="rounded-lg bg-white/20 p-3 backdrop-blur">
                  <p className="text-xs opacity-80">Grooming</p>
                  <p className="text-lg font-bold">Oct 5</p>
                </div>
                <div className="rounded-lg bg-white/20 p-3 backdrop-blur">
                  <p className="text-xs opacity-80">Vaccinations</p>
                  <p className="text-lg font-bold">Up to Date</p>
                </div>
              </div>
            </div>
          </div>

          {/* Health Overview */}
          <div
            className="rounded-xl bg-white p-6 shadow-lg dark:bg-[#262626]"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="text-lg font-semibold">Health Overview</span>
              <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700 dark:bg-green-500/20 dark:text-green-300">
                Excellent
              </span>
            </div>
            <div className="flex h-40 items-end gap-2">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                (day, i) => (
                  <div key={day} className="flex flex-1 flex-col items-center">
                    <div
                      className="w-6 rounded-t bg-[#ED6C35]"
                      style={{ height: `${70 + i * 5}%` }}
                    ></div>
                    <span className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      {day}
                    </span>
                  </div>
                )
              )}
            </div>
            <div
              className="mt-4 rounded-lg border-l-4 border-[#ED6C35] bg-orange-50 p-3 dark:bg-[#333]"
            >
              {/* FIXED: Escaped the apostrophe in "Max's" to "Max&apos;s" */}
              ✨ Max&apos;s activity levels are 15% higher than average. Consider
              adjusting meal portions.
            </div>
          </div>

          {/* Predictions */}
          <div
            className="rounded-xl bg-white p-6 shadow-lg dark:bg-[#262626]"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="text-lg font-semibold">AI Predictions</span>
              <span className="rounded-full bg-[#ED6C35] px-3 py-1 text-xs text-white">
                Machine Learning
              </span>
            </div>
            <ul className="space-y-2">
              <Prediction
                label="Next Meal Time"
                value="5:30 PM"
                color="text-[#ED6C35]"
              />
              <Prediction
                label="Exercise Needed"
                value="30 min walk"
                color="text-green-500"
              />
              <Prediction
                label="Hydration Alert"
                value="In 2 hours"
                color="text-amber-500"
              />
              <Prediction label="Vet Checkup" value="In 15 days" />
            </ul>
            <button className="mt-4 w-full rounded-lg bg-[#ED6C35] px-4 py-2 text-white shadow transition hover:scale-105">
              View Detailed Analysis
            </button>
          </div>
        </div>

        {/* Blog Section */}
        <section
          className="mt-10 rounded-2xl bg-white p-8 shadow-lg dark:bg-[#262626]"
        >
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Pet Care Insights & Blog</h2>
            <button className="rounded-lg bg-[#ED6C35] px-4 py-2 text-white shadow transition hover:scale-105">
              View All Articles
            </button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <BlogCard
              icon="🏥"
              title="How AI Detects Early Signs of Pet Illness"
              meta="AI Health Tips • 5 min read"
              excerpt="Discover how Ezra AI's advanced algorithms can identify subtle changes in your pet's behavior..."
            />
            <BlogCard
              icon="🥗"
              title="Personalized Diet Plans Using AI Analytics"
              meta="Nutrition • 3 min read"
              excerpt="Learn how machine learning creates custom nutrition plans based on your pet's breed and age..."
            />
            <BlogCard
              icon="🏃"
              title="Optimal Exercise Routines by Breed"
              meta="Exercise • 4 min read"
              excerpt="AI-powered recommendations for exercise schedules tailored to breed characteristics..."
            />
          </div>
        </section>
      </main>
    </div>
  );
}

/* Subcomponents */
function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-white/20 p-3 backdrop-blur">
      <p className="text-xs opacity-80">{label}</p>
      <p className="text-lg font-bold">{value}</p>
    </div>
  );
}

function Prediction({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color?: string;
}) {
  return (
    <li className="flex justify-between text-sm">
      <span>{label}</span>
      <strong className={color || ""}>{value}</strong>
    </li>
  );
}

function BlogCard({
  icon,
  title,
  meta,
  excerpt,
}: {
  icon: string;
  title: string;
  meta: string;
  excerpt: string;
}) {
  return (
    <article className="cursor-pointer overflow-hidden rounded-xl bg-gray-50/50 shadow transition hover:scale-105 dark:bg-[#333]">
      <div className="flex h-40 items-center justify-center bg-[#ED6C35] text-4xl text-white">
        {icon}
      </div>
      <div className="p-4">
        <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">{meta}</p>
        <h3 className="mb-1 text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">{excerpt}</p>
      </div>
    </article>
  );
}