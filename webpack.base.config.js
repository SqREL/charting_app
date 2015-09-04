// Common webpack configuration used by other webpack configurations

var path    = require("path");
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: {
    app: ["./src/js/app"]
  },

  resolve: {
    root: [
            path.join(__dirname, "./src/js"),
            path.join(__dirname, "./src/img"),
            path.join(__dirname, "./src/style"),
            path.join(__dirname, "./src/csv")
          ],
    extensions: [
      "",
      ".webpack.js",
      ".web.js",
      ".js",
      ".jsx",
      ".css",
      ".scss",
      ".coffee",
      ".cjsx",
      "config.js"
    ]
  },

  module: {
    loaders: []
  },

  plugins: [
    new webpack.NoErrorsPlugin()
  ],

  // Omit libraries that are not intended to be used inside a browser
  node: {
    net: "empty",
    dns: "empty"
  }
};