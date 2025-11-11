module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { 
    ecmaVersion: 'latest', 
    sourceType: 'module' 
  },
  settings: { react: { version: 'detect' } },
  plugins: ['react-refresh'],
  rules: {
    // General code quality rules
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // Disable prop-types checking (modern React often uses TypeScript or is less strict)
    'react/prop-types': 'off', 
    // Enforce consistency in function component definition
    'react/function-component-definition': [
      'warn',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    // Allow the use of the @ alias for absolute imports
    'import/no-unresolved': ['error', { ignore: ['^@/'] }], 
  },
};