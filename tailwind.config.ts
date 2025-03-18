import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "rethink-sans": "rethink-sans",
        "rounded-mplus": "rounded-mplus1c",
      },
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
        "text-stroke": {
          "0%": {
            fill: "rgba(72, 138, 20, 0)",
            stroke: "rgba(54, 95, 160, 1)",
            strokeDashoffset: "25%",
            strokeDasharray: "0 50%",
            strokeWidth: "2",
          },
          "70%": {
            fill: "rgba(72, 138, 20, 0)",
            stroke: "rgba(54, 95, 160, 1)",
          },
          "80%": {
            fill: "rgba(72, 138, 20, 0)",
            stroke: "rgba(54, 95, 160, 1)",
            strokeWidth: "3",
          },
          "100%": {
            fill: "#1C68F8",
            stroke: "rgba(54, 95, 160, 0)",
            strokeDashoffset: "-25%",
            strokeDasharray: "50% 0",
            strokeWidth: "3",
          },
        },
        scroll: {
          "100%": {
            transform: "translate(calc(-50% - 2rem))",
          },
        },
      },
    },
    animation: {
      "border-rotate": "border-rotate 5s linear forwards infinite",
      "infinite-scroll": "scroll 20s linear infinite",
      "text-stroke": "text-stroke 5s both alternate",
      "border-move-rotate": "border-move-rotate 12s linear infinite",
      "scroll-button-effect-animate": "scroll-button-effect 2.5s infinite",
    },
  },
  plugins: [],
} satisfies Config;
