import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "scroll-button-effect": {
          "0%": { opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "border-rotate": {
          "0%": { transform: "rotate(0)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "border-move-rotate": {
          "0%": { "offset-distance": "0%" },
          "100%": { "offset-distance": "100%" },
        },
        "infinite-slider": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "scroll-button-effect-animate": "scroll-button-effect 2.5s infinite",
        "border-rotate": "border-rotate 5s linear forwards infinite",
        "border-move-rotate": "border-move-rotate 12s linear infinite",
        "infinite-slider": "infinite-slider 35s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config
