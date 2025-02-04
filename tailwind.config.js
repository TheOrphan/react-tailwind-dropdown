// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./.storybook/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    {
      pattern: /bg-(blue|gray)-(50|100|200|500|600|700|800)/,
    },
    {
      pattern: /text-(blue|gray)-(400|500|600|700|800)/,
    },
    "ring-2",
    "ring-blue-500",
    "border-transparent",
    "border-red-500",
    "rounded-lg",
    "rounded-full",
  ],
};
