/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "neon-blue": "#4fd1ff",
        "neon-purple": "#a855f7",
        "midnight": "#0b1020"
      },
      boxShadow: {
        glow: "0 0 30px rgba(79, 209, 255, 0.35)"
      },
      backgroundImage: {
        "radial-fade": "radial-gradient(circle at top, rgba(79,209,255,0.25), transparent 55%)"
      }
    }
  },
  plugins: []
};
