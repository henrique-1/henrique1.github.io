const withMT = require("@material-tailwind/html/utils/withMT");
module.exports = withMT({
  content: ["./index.html", "./views/**/*.html"],
  theme: {
    extend: {
      colors: {},
      fontFamily: {},
      screens: {
        cellphone: "320px",
        // => @media (min-width: 320px) { ... }

        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        projetor: "1280px",
        // => @media (min-width: 1280px) { ... }

        desktop: "1360px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
});
