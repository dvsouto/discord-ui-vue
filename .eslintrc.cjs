module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  plugins: ["@typescript-eslint"],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended'
  ],
  ignorePatterns: ['dist', 'public', '.eslintrc.cjs'],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser"
  },
  rules: {
    quotes: ["error", "double"],
    "semi": [2, "always"],
    "vue/multi-word-component-names": 0
  },
}