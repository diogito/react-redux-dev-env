module.exports = {
  "parser": "babel-eslint",
  "env": {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', "plugin:jest/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module',
  },
  "plugins": [ "react", "jest" ],
  rules: {
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error"
  }
}
