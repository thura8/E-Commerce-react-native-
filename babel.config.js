module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@config': './src/config',
          '@screens': './src/screens',
          '@routes': './src/routes',
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@constants': './src/constants',
          '@assets': './src/assets',
          '@api': './src/api',
          '@helper': './src/helper',
          '@store': './src/store',
        },
      },
    ],
  ],
};
