const path = require('path');
const postcss = require('./postcss.config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/main.scss',
  target: 'web',

  output: {
    path: './dist',
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

  postcss,
};
