module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'comma-dangle': 'off',
    'react-native/no-inline-styles': 'off',
    'no-unused-vars': 1,
    semi: 0,
    'react/no-string-refs': 'off',
    'next-line': 'off',
    'prettier/prettier': 'off',
    'react/prop-types': 2,
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 2 // Checks effect dependencies
  }
}
