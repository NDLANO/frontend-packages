module.exports = {
  stories: ['../stories/index.ts', '../stories/**/*.stories.@(tsx)'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-essentials', '@storybook/addon-links'],
  framework: '@storybook/react',

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
