/** @type {import("prettier").Config} */
module.exports = {
  printWidth: 100,
  singleQuote: true,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['cn'],
};
