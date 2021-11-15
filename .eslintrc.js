// config
module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
//  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:vue/recommended",
    "eslint:recommended",
    "prettier/vue",
  //  "plugin:@typescript-eslint/recommended"
  ],
  plugins: [
   // "@typescript-eslint"
  ],
  rules: {
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  },
  globals: {
    $nuxt: true
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
