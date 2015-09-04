var config = require("./webpack.base.config");
var webpack = require("webpack");
var path = require("path");

config.debug = true;
config.displayErrorDetails = true;

config.entry.app.push(
  'webpack/hot/dev-server'
);

config.output = {
  path: "./build",
  filename: "bundle.js",
  publicPath: '/'
};

config.module.loaders.push(
  { test: /\.css$/, loader: "style!css" },
  { test: /\.scss$/, loader: "style!css!sass?outputStyle=expanded&" +
    "includePaths[]=" +
      path.resolve(__dirname, "./src/style") + '&' +
    "includePaths[]=" +
      path.resolve(__dirname, "./node_modules")
  },

  { test: /\.png$/, loader: "url-loader?limit=100000&mimetype=image/png&"  +
    "includePaths[]=" +
      path.resolve(__dirname, "./src/img")
  },
  { test: /\.jpg$/, loader: "file-loader" },
  { test: /\.gif$/, loader: "file-loader" },

  { test: /\.woff$/,  loader: "url-loader?limit=10000&minetype=application/font-woff" },
  { test: /\.woff2$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
  { test: /\.ttf$/,   loader: "file-loader" },
  { test: /\.eot$/,   loader: "file-loader" },
  { test: /\.svg$/,   loader: "file-loader" },

  // exposing libs to the global Window object ( mainly for material admin theme to be able to use plugins like datetimepicker, etc )
  { test: /\.jsx?$/, exclude: /(node_modules)/, loader: 'babel?optional[]=runtime' },
  { test: /jquery\.js$/, loader: 'expose?$' },
  { test: /jquery\.js$/, loader: 'expose?jQuery' },
  { test: /moment\.js$/, loader: 'expose?moment' },
  { test: /\.csv?$/, loader: 'dsv-loader' }
);

config.plugins.push(
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify("development"),
      'scheme': JSON.stringify("http://"),
      'host': JSON.stringify("localhost:8080")
    }
  })
)

module.exports = config;