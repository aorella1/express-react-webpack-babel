const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: "development",
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].bundle.js'
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./src/template.html"
  })],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          //style-loader: Inject CSS into DOM via <style> tag
          //css-loader: load CSS assets
          'style-loader',
          'css-loader'
        ]
      },
    ]
  },
  // Show original Javascript in debug instead of minified code
  devtool: 'cheap-module-eval-source-map',
  //hot reload server options
  devServer: {
    port: 3002
  }
});
