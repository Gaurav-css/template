/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '320px',
      sm: '375px',   // Mobile small
      md: '768px',   // Tablet Portrait
      lg: '1024px',  // Tablet Landscape / Small Laptops
      xl: '1366px',  // Standard Laptop
      '2xl': '1920px', // Desktop / Full HD
      '3xl': '2560px', // Large Monitor / 2K Display
      '4xl': '3840px', // TV / 4K Display
    },
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}
