// ? creates an environment oriented webpack config
module.exports = env => ({
  // use cheap-eval style source maps - aka mostly correct
  devtool: 'cheap-eval-source-map',
  output: {
    filename: 'index.umd.js',
    library: 'styleObjToStr',
    libraryTarget: 'umd',
  },
});
