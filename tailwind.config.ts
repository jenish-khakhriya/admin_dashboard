import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff0000", // Example custom color
        secondary: "#9333EA",
      },
       backgroundImage: {
        "custom-gradient": "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
      },
        boxShadow: {
        "custom": "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      },
       fontFamily: {
        urbanist: ['Urbanist', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
