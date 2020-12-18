module.exports = {
  root: true,

  env: {
    browser: true,
    node: true,
  },

  parserOptions: {
    parser: 'babel-eslint',
  },

  // required to lint *.vue files
  plugins: ['vue'],

  // add your custom rules here
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-unused-vars': 'off',
    'comma-dangle': 'off', // ["error", "always-multiline"],
    'vue/max-attributes-per-line': 'off',
    'vue/html-indent': 'off',
    'vue/attributes-order': 'off',
    'vue/html-self-closing': 'off',
    'vue/no-unused-components': 'off',
    'vue/no-use-v-if-with-v-for': 'off',
    'no-useless-escape': 'off',
  },

  extends: ['plugin:vue/recommended', 'plugin:vue/essential'],
}
