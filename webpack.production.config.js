var config = require("./webpack.base.config");
var webpack = require("webpack");
var path = require("path");

config.output = {
  path: "./build",
  filename: "bundle.js",
};

config.module.loaders.push(
  { test: /\.css$/, loader: "style!css" },
  { test: /\.coffee$/, loaders: ["coffee"] },
  { test: /\.scss$/, loader: "style!css!sass?outputStyle=expanded&includePaths[]=" + path.resolve(__dirname, "./style")},

  { test: /\.png$/, loader: "url-loader?limit=100000&mimetype=image/png" },
  { test: /\.jpg$/, loader: "file-loader" },
  { test: /\.gif$/, loader: "file-loader" },

  { test: /\.woff$/,  loader: "url-loader?limit=10000&minetype=application/font-woff" },
  { test: /\.woff2$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
  { test: /\.ttf$/,   loader: "file-loader" },
  { test: /\.eot$/,   loader: "file-loader" },
  { test: /\.svg$/,   loader: "file-loader" },

  // exposing libs to the global Window object ( mainly for material admin theme to be able to use plugins like datetimepicker, etc )
  { test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loader: 'babel' },
  { test: /jquery\.js$/, loader: 'expose?$' },
  { test: /jquery\.js$/, loader: 'expose?jQuery' },
  { test: /moment\.js$/, loader: 'expose?moment' },
  { test: /\.csv?$/, loader: 'dsv-loader' }
);

config.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify("production"),
      'scheme': JSON.stringify("http://"),
      'host': JSON.stringify("localhost:8080")
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
  new webpack.optimize.OccurenceOrderPlugin()
)

module.exports = config;