// my-app/prettier.config.js
module.exports = {
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindConfig: './tailwind.config.js', // This is relative to THIS file
  semi: true,
  singleQuote: true,
}