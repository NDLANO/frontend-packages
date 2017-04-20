const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/main.scss'),
  target: 'web',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'aout.js',
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

  plugins: [new ExtractTextPlugin('style.css')],
};
