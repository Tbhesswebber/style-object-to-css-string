// === import modules ===
const path = require('path');

// ? creates a dev server to use for front-end only development
// remove from 'build' command when moving from webpack-dev-server to just webpack and production server
module.exports = env => ({
  devServer: {
    contentBase: path.join(__dirname, '..', '..', '..', 'coverage', 'lcov-report'),
    watchContentBase: true,
    compress: true,
    port: 9000,
    open: true,
    quiet: true,
  },
});
