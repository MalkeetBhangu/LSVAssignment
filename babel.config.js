module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.android.js', '.android.tsx', '.ios.js', '.ios.tsx'],
        alias: {
          '@components': './components',
          '@constants': './constants',
          '@navigation': './navigation',
          '@screens': './screens',
          '@tokens': './tokens',
          '@translations': './translations',
          '@assets': './assets',

        },
      },
    ],
  ],
};
