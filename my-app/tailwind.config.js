/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        // The "Table" and UI structure
        mainbackground: "#121F1F", // Deep Spruce
        primary: {
          DEFAULT: "#2D5A47", // Jungle Green
          hover: "#3A735B",
          active: "#1E3D30",
        },
        secondary: {
          DEFAULT: "#A67C52", // Cognac Brown
          hover: "#C19669",
          active: "#825E3B",
        },
        // The "Cards" (Muted Jewel Tones)
        uno: {
          red: "#C24141",
          blue: "#4176C2",
          yellow: "#D9A036", // Blends with your Brown theme
          green: "#5A9167",  // Blends with your Green theme
          black: "#1A1A1A",
        },
        text: {
          main: "#F4F1ED", // Off-White
          muted: "#A19E9A",
        },
        input: {
        bg: "#0E1818",      // Slightly darker than your background for a "sunken" look
        border: "#243A31",  // Subtle green border
        focus: "#A67C52",   // Cognac Brown for the focus ring
        placeholder: "#5A6B63", // Muted sage green text
      }
      },
      boxShadow: {
        // That "Glow" effect from your reference image
        'glow-green': '0 0 15px rgba(45, 90, 71, 0.4)',
        'glow-brown': '0 0 15px rgba(166, 124, 82, 0.4)',
      }
    },
  },
  plugins: [],
}