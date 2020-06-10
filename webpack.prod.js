const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'js/[name].[contentHash].bundle.js',
    //Non-entry dynamic chunk file
    chunkFilename: 'js/[name].[contentHash].bundle.js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    runtimeChunk: true,
    minimizer: [
      //minimize css
      new OptimizeCssAssetsPlugin(),
      //minimize js
      new TerserPlugin()
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({filename: "css/[name].[contentHash].css"}), 
    //Clean build files
    new CleanWebpackPlugin(),
    //minify html
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      minify: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        //mini-css: Create CSS files and attach to DOM
        //css=-loader: load CSS assets
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader']
      }, 
    ]
  }
});
