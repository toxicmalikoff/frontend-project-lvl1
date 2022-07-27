module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'no-underscore-dangle':
        [
          2,
          { allow: ['__filename', '__dirname'] },
        ],
    'import/extensions': [
      'off',
    ],
    'no-console': [
      'off',
    ],
  },
};
