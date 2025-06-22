module.exports = {
  env: {
    browser: true,
    es2024: true, // Updated to latest ECMAScript version
    node: true // Added for Node.js environment support
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime', // Added for new JSX transform
    'plugin:react-hooks/recommended', // Added hooks linting
    'standard',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  plugins: [
    'react',
    'react-hooks', // Added React Hooks plugin
    '@typescript-eslint'
  ],
  rules: {
    'react/jsx-curly-brace-presence': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true
      }
    ],
    'react/jsx-boolean-value': 'error',
    'prefer-template': 'error',
    'jsx-quotes': ['error', 'prefer-double'],
    'react/jsx-tag-spacing': 'error',
    'space-before-function-paren': 'off',
    // Additional recommended rules
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
  }
};