const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src/main.scss'),
    audioSearch: path.resolve(__dirname, 'src/audioSearch.scss'),
    imageSearch: path.resolve(__dirname, 'src/imageSearch.scss'),
    videoSearch: path.resolve(__dirname, 'src/videoSearch.scss'),
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
