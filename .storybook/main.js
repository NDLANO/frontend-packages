module.exports = {
  stories: ['../packages/**/stories/**/*.stories.mdx', '../packages/**/stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: '@storybook/react',
};
