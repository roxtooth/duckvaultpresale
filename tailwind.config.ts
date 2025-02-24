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
        sparkle: "var(--sparkle-color)",
      },
      animation: {
        shimmer: "shimmer 3s infinite",
        sparkle: "sparkle 2s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { filter: "brightness(1)" },
          "50%": { filter: "brightness(1.2)" },
          "100%": { filter: "brightness(1)" },
        },
        sparkle: {
          "0%": { opacity: "0.7", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.2)" },
          "100%": { opacity: "0.7", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
