module.exports = {
  stories: ['../stories/index.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-a11y', '@storybook/addon-links'],
  webpackFinal: config => {
    config.module.rules.push({
      test: /\.scss$/,
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
    });
    return config;
  },
};
