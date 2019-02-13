const path = require('path');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//   .BundleAnalyzerPlugin;

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
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          context: '',
        },
      },
    ],
  },
  // plugins: [
  //   new BundleAnalyzerPlugin()
  // ]
};
