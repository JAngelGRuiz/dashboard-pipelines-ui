const RULES = {
  WARN: 'warn',
  OFF: 'off',
  ERROR: 'error'
}

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/react-in-jsx-scope': RULES.OFF,
    'no-extra-boolean-cast': RULES.OFF,
    'no-unused-vars': RULES.WARN
  }
}
