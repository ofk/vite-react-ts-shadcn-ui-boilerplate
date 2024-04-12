module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: '@ofk/eslint-config-recommend',
  ignorePatterns: ['dist', '.eslintrc.cjs', '*.config.cjs', '*.config.ts'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
