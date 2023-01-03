/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      "sm-large": [
        "2em",
        {
          fontWeight: "500",
          lineHeight: "1.3",
        },
      ],
      "sm-medium": [
        "1.5em",
        {
          fontWeight: "500",
          lineHeight: "1.4",
        },
      ],
      "lg-large": [
        "4em",
        {
          fontWeight: "500",
          lineHeight: "1.3",
        },
      ],
      "lg-medium": [
        "2em",
        {
          fontWeight: "500",
          lineHeight: "1.4",
        },
      ],
      "lg-small": [
        "1em",
        {
          fontWeight: "500",
          lineHeight: "1.4",
        },
      ],
      "sm-menu": [
        "16px",
        {
          fontWeight: "400",
          lineHeight: "1.5",
        },
      ],
    },
    extend: {
      colors: {
        "athinia-dark": "#172337",
        "athinia-blue": "#5F82FF",
        "athinia-green": "#67C3A6",
        "athinia-purple": "#7959B8",
        "athinia-gray": "#F5F5F5",
      },
      backgroundImage: {
        "hero-home": "url('/images/Athinia-background-pattern-06.png')",
        "hero2-image": "url('/images/Athinia-background-pattern-03.png')",
        "cta-image":
          "url('/images/future-of-computing-lies-at-the-intersection-of-man-and-machine-1024x1024.webp')",
        "benefits-image":
          "url('/images/Benefits-for-individual-companies-and-the-entire-industry-1024x1024.webp')",
        "ecosystem-image": "url('/images/athinia-key-graphic-ecosystem.png')",
        "before-after-image":
          "url('/images/Before-After-Athinia-Graphic-2022.png')",
        "before-after-mobile":
          "url('/images/Before-After-Athinia-Graphic-2022-mobile-02-1016x1024.png')",
        "david-anderson": "url('/images/david_anderson.jpg')",
        "career-image": "url('/images/AthiniaCareersImage-1024x1024.webp')",
        "offering-image": "url('/images/offerings-title.webp')",
        "pattern-5": "url('/images/Athinia-background-pattern-05.png')",
      },
      keyframes: {
        fadeInRight: {
          "0%": { transform: "translate3d(100%,0,0)", opacity: "0" },
          "100%": { transform: "none", opacity: "1" },
        },
        fadeInRightLow: {
          "0%": { transform: "translateX(5%)", opacity: "0" },
          "50%": { transform: "none", opacity: "1" },
        },
        fadeInRight500: {
          "0%": { transform: "none", opacity: "0" },
          "20%": { transform: "translate3d(100%,0,0)", opacity: "0" },
          "100%": { transform: "none", opacity: "1" },
        },
        fadeInLeft500: {
         
          "0%": { transform: "translate3d(-50%, 0, 0)", opacity: "1" },
          "100%": { transform: "none", opacity: "1" },
        },
        fadeIn: {
          "0%": { transform: "scale(0.7)", opacity: "0" },
          "50%": { transform: "none", opacity: "0.5" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        fadeInLeft: {
          "0%": { transform: "translate3d(-50%, 0, 0)", opacity: "1" },
          "100%": { transform: "translate3d(0)", opacity: "1" },
        },
      },
      animation: {
        "fade-in-right": "fadeInRight 1.25s ease-in-out",
        "fade-in-right-low": "fadeInRightLow 1.25s ease-in-out",
        "fade-in-right-500": "fadeInRight500 1.35s ease-in-out",
        "fade-in-left": "fadeInLeft500 1s ease-in-out",
        "fade-in": "fadeIn 0.3s ease",
        "fade-in-left-500": "fadeInLeft 1s ease",
      },
    },
  },
  plugins: [],
};