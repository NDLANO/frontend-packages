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
    ],
  },
  postcss,
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
