module.exports = {
  stories: ['../stories/index.js', '../../../packages/**/stories/*.stories.tsx'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-controls',
    '@storybook/addon-viewport',
    '@storybook/addon-storysource',
  ],
  webpackFinal: (config) => {
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
