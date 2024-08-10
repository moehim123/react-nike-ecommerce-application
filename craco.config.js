module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.ignoreWarnings = [
        /Failed to parse source map/, // Example of suppressing warnings
      ];
      return webpackConfig;
    },
  },
};
