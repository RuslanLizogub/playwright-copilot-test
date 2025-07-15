module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:playwright/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'playwright',
  ],
  rules: {
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-console': 'warn',
    'playwright/expect-expect': 'error',
    'playwright/no-conditional-in-test': 'error',
    'playwright/no-nested-step': 'error',
    'playwright/valid-expect': 'error',
    'playwright/prefer-web-first-assertions': 'error',
    'playwright/no-page-pause': 'error',
    'playwright/no-element-handle': 'error',
    'playwright/no-eval': 'error',
    'playwright/no-focused-test': 'error',
    'playwright/no-force-option': 'error',
    'playwright/no-skipped-test': 'warn',
    'playwright/no-useless-await': 'error',
    'playwright/no-wait-for-timeout': 'error',
  },
  overrides: [
    {
      files: ['tests/**/*.js'],
      rules: {
        'playwright/missing-playwright-await': 'error',
      },
    },
  ],
};
