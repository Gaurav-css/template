// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // Your other config might be here

//   eslint: {
//     // Warning: This allows production builds to successfully complete even if
//     // your project has ESLint errors.
//     ignoreDuringBuilds: true,
//   },
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Ignore ESLint errors during production build
    ignoreDuringBuilds: true,
  },
  images: {
    // Optional: allow loading external images if you use them
    domains: ["example.com"], 
  },
};

module.exports = nextConfig;
