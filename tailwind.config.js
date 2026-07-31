/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./projects/**/*.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B1220",
          soft: "#0F1626",
          surface: "#141B2C",
          line: "#232C40",
        },
        copper: {
          DEFAULT: "#C9702E",
          bright: "#E08A44",
          dim: "#8A4E20",
        },
        signal: {
          DEFAULT: "#3DDBD9",
          bright: "#7CEDEB",
          dim: "#1F7A79",
        },
        paper: {
          DEFAULT: "#E7E9EE",
          muted: "#A6ADC0",
          faint: "#6B7285",
        },
      },
      fontFamily: {
        display: ["'Newsreader'", "serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(230,232,238,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(230,232,238,0.035) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "36px 36px",
      },
    },
  },
  plugins: [],
};
