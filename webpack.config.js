"use strict";

/**
 * Reference:
 * http://webpack.github.io/docs/configuration.html
 **/

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'fun-with-motion.js',
    path: 'dist/'
  },
  resolve: {
    extensions: ['', '.js']
  },
  stats: {
    colors: true,
    modules: true,
    reasons: true
  },
  progress: true,
  failOnError: false,
  watch: true,
  keepalive: true
};