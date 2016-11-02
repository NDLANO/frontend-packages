const postcss = require('./postcss.config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.css',
  target: 'web',

  output: {
    path: './dist',
    filename: 'aout.js',
  },

  module: {
    loaders: [
      {
        test: /.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader'),
      },
    ],
  },

  plugins: [new ExtractTextPlugin('style.css')],

  postcss,
};
