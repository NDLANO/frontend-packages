const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: {
    all: path.resolve(__dirname, './src/all.css'),
  },
  target: 'web',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-aout.js',
  },

  module: {
    rules: [
      {
        test: /.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};
