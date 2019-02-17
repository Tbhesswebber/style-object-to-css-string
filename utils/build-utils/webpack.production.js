// ? creates an environment-oriented webpack config
module.exports = env => ({
  output: {
    filename: 'index.min.js',
    library: 'styleToCss',
    libraryTarget: 'umd',
  },
});
