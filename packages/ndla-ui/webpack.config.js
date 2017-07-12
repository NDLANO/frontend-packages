const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src/main.scss'),
    editor: path.resolve(__dirname, 'src/editor.scss'),
    imageSearch: path.resolve(__dirname, 'src/imageSearch.scss'),
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
