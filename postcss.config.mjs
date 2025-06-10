/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}, // Automatically adds vendor prefixes to CSS rules
  },
};

export default config;