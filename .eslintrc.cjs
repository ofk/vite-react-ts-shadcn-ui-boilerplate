module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: '@ofk/eslint-config-recommend',
  ignorePatterns: ['dist', '.eslintrc.cjs', '*.config.cjs', '*.config.ts'],
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['no-relative-import-paths'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-relative-parent-imports': 'error',
    'import/extensions': [
      'error',
      'ignorePackages',
      { js: 'never', mjs: 'never', jsx: 'never', ts: 'never', tsx: 'never', '': 'never' },
    ],
    'no-relative-import-paths/no-relative-import-paths': ['error', { rootDir: 'src', prefix: '@' }],
  },
};
