// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        keyframes: {
          marquee: {
            "0%": { transform: "translateX(0%)" },
            "100%": { transform: "translateX(-50%)" }, // shift only half since duplicated
          },
        },
        animation: {
          marquee: "marquee 20s linear infinite",
        },
      },
    },
    plugins: [],
  };
  