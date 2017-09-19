const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "bundle.js",
    sourceMapFilename: "bundle.map",
    path: path.resolve(__dirname, "public/build/")
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
    ]
  },
  plugins:
    process.env.NODE_ENV === "production"
      ? [
          new webpack.DefinePlugin({
            "process.env": {
              NODE_ENV: JSON.stringify("production")
            }
          }),
          new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
              warnings: true
            }
          })
        ]
      : [],
  devServer: {
    hot: true,
    contentBase: "./views",
    compress: true
  }
};
