const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./index.js",
  output: {
    filename: "public/build/bundle.js",
    sourceMapFilename: "public/build/bundle.map"
    // path: path.resolve(__dirname, "dist")
  },
  devtool: "#source-map",
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015"]
        }
      }
      // { test: /\.css$/, loader: "style-loader!css-loader" },
      // {
      //   test: /\.(jpg|png|svg)$/,
      //   loader: "file-loader"
      // }
    ]
  },
  plugins: [new webpack.optimize.UglifyJsPlugin()]
};
