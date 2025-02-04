import("tailwindcss").Config,
  (module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
      "./node_modules/flowbite/**/*.js",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#f59e0b",
          secondary: "#ec4899",
        },
      },
    },
    plugins: [require("flowbite/plugin")],
  });
