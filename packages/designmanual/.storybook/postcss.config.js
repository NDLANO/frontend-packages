const webpack = require('webpack');

module.exports = () => {
  const plugins = [require('autoprefixer')];

  return {
    plugins: plugins,
  };
};
