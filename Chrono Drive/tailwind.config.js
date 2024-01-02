const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('/home/hamad/Chrono Drive Website/Chrono Drive/src/assets/Garage Background Wallpapers for Computer GsFDcY.jpg')",
      },
    },
  },
  plugins: [],
});
