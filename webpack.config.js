var path = require("path");
var webpack = require("webpack");

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
          presets: ["env"]
        }
      },
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  }
  //plugins: [new webpack.optimize.UglifyJsPlugin()]
};
