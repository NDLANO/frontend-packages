const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    all: path.resolve(__dirname, './src/all.scss'),
  },
  target: 'web',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-aout.js',
  },

  module: {
    loaders: [
      {
        test: /.scss$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader'),
        include: path.resolve(__dirname, 'src'),
      },
    ],
  },

  plugins: [new ExtractTextPlugin('[name].css')],
};
