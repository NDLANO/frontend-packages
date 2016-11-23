const path = require('path');
const postcss = require('../postcss.config.js');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.css$/,
        include: path.resolve(__dirname, '../src/'),
        loader: 'style-loader!css-loader?importLoaders=1!postcss-loader',
      },
      {
        test: /.scss$/,
        loaders: ['style', 'css', 'sass'],
        include: path.resolve(__dirname, '../src/'),
      },
    ],
  },
  postcss,
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
