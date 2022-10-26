module.exports = {
  stories: ['../stories/index.ts', '../../**/*.stories.@(tsx)'],
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
  babel: async (options) => {
    return {
      ...options,
      presets: [
        ['@babel/preset-env', { modules: false }],
        '@babel/preset-typescript',
        ['@babel/preset-react', { runtime: 'automatic', importSource: '@emotion/react' }],
      ],
      plugins: [
        ['@emotion', { autoLabel: 'always' }],
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-optional-chaining',
      ],
    };
  },
};
