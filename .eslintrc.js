module.exports = {
  extends: [
    '@antfu',
    // 'eslint:recommended',
    // "plugin:vue/vue3-strongly-recommended",
    // 'plugin:vue/vue3-recommended',
    // 'plugin:vue/recommended', // Use this if you are using Vue.js 2.x.
    // "prettier"
    // Make sure "prettier" is the last element in this list
  ],
  ignorePatterns: [
    'node_modules/',
    'dist/',
    'coverage/',
    'pnpm-lock.yaml',
    'package-lock.json',
    // '*.js'
  ],
  rules: {
    // "object-curly-spacing": ['off'],
  },
}
