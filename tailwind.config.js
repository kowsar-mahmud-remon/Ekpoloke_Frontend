/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
<<<<<<< HEAD
  plugins: [require("daisyui")],
}
=======
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FF6A00",

          secondary: "#0077EF",

          accent: "#FF9F00",

          neutral: "#c2c2c2",

          "base-100": "#FFFFFF",

          info: "#202136",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
>>>>>>> 0914c4efd390de91edd3f4252e4d27acb906f51d
