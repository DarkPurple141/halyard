module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-props-no-spreading': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-indent': 0,
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
  },
  overrides: [
    {
      extends: ['plugin:@typescript-eslint/recommended', 'airbnb-typescript'],
      parser: '@typescript-eslint/parser',
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
      rules: {
        'prettier/prettier': 'error',
        'react/button-has-type': 0,
        'react/jsx-props-no-spreading': 0,
        'react/jsx-one-expression-per-line': 0,
        'react/jsx-indent': 0,
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        '@typescript-eslint/semi': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
      },
      plugins: ['@typescript-eslint'],
    },
  ],
}
