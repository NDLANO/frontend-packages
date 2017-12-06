const webpack = require('webpack');

module.exports = () => {
  const plugins = [
    require('autoprefixer')({ browsers: ['last 3 versions'] }),
  ];

  return {
    plugins: plugins,
  };
};
