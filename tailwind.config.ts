import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
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

        float: {
          "0%": { transform: "translateY(0)" },
          "25%": { transform: "translateY(-10px)" },
          "50%": { transform: "translateY(-20px)" },
          "75%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" },
        },
        scale: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" },
        },
        move: {
          "0%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(10px, -10px)" },
          "50%": { transform: "translate(-10px, -20px)" },
          "75%": { transform: "translate(-10px, 10px)" },
          "100%": { transform: "translate(0, 0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        scroll: {
          "100%": {
            transform: "translate(calc(-50% - 2rem))",
          },
        },
      },
    },
    animation: {
      "scroll-button-effect-animate": "scroll-button-effect 2.5s infinite",
      "border-rotate": "border-rotate 5s linear forwards infinite",
      "border-move-rotate": "border-move-rotate 12s linear infinite",
      "infinite-slider": "infinite-slider 35s linear infinite",
      "text-stroke": "text-stroke 5s both alternate",
      "infinite-scroll": "scroll 20s linear infinite",

      float: "float 8s ease-in-out infinite",
      scale: "scale 6s ease-in-out infinite",
      move: "move 10s ease-in-out infinite",
      fade: "fadeIn .5s ease-in-out",
    },
  },
  plugins: [],
} satisfies Config;
