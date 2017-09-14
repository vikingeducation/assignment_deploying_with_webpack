var path = require('path');
var webpack = require('webpack');
const UglifyJS = require('uglify-es')

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react', 'es2015']
        }
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [UglifyJS.minify]
};