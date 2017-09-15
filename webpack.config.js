require("babel-polyfill");
const path = require("path");

module.exports = {
  entry: ["babel-polyfill", "./index.js"],
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
      { test: /\.css$/, loader: "style-loader!css-loader" },
      {
        test: /\.(jpg|png|svg)$/,
        loader: "file-loader"
      }
    ]
  }
};
