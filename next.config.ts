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
//** @type {import('next').NextConfig} */
const nextConfig = {
  // ... any other config you might have

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;