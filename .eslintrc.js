module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'react/react-in-jsx-scope': 'error',
    'react/prop-types': 'off',
    'react-native/no-inline-styles': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        'no-inline-styles': false,
      },
    ],
  },
};
