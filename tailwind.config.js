/** @type {import('tailwindcss').Config} */ /* what this does is tell VSCode that this is a tailwind config file, so it can give us intellisense */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], /* this line tells tailwind where to look for the classes to purge */
  theme: {
    extend: {},
  },
  plugins: [

    require('@tailwindcss/aspect-ratio'),
  ],
};
