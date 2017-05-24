var path = require("path");
var webpack = require("webpack");
var CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react"]
        }
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      {
        test: /\.(jpg|png|svg)$/,
        loader: "file-loader"
      }
    ]
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin(),
    new CopyWebpackPlugin([{ from: "index.html", to: "index.html" }])
  ]
};
