const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /.scss$/,
        loaders: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: './.storybook/postcss.config.js',
              },
            },
          },
          'sass-loader',
        ],
        include: path.resolve(__dirname, '../../ndla-ui/src/'),
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: 'file-loader',
      },
    ],
  },
};
