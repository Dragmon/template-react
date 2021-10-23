const RULES = {
  OFF: 'off',
  WARN: 'warn',
  ERROR: 'error',
};
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'standard',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-console': RULES.WARN,
    'jsx-quotes': [RULES.ERROR, 'prefer-single'],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
  },
};
