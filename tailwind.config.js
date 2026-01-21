export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0F1C2E",   // dark navy-blue background
        card: "#1E2A47",         // slightly lighter navy for cards
        accent: "#F08A5D",       // warm, standout accent
        heroStart: "#0F1C2E",    // start of gradient (matches background)
        heroEnd: "#3AB0FF",      // bright cyan for hero gradient end
        text: "#EAEAEA",         // off-white text for readability
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
