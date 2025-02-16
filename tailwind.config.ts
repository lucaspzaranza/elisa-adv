import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#C850D3",
        "primary-darker": "#84099F",
        "primary-lighter": "#EAB1F6",
        "strong-color": "#7f009c",
      },
      backgroundImage: {
        "elisa-1": "url('/elisa-1.png')",
        "elisa-2": "url('/elisa-2.jpg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
