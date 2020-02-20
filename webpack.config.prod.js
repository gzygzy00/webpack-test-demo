const htmlWebpackPlugin = require('html-webpack-plugin');   //导入插件
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path');
const base = require('./webpack.config.base')

module.exports = {
  ...base,
  mode: 'production',
  plugins: [
    ...base.plugins,
    new miniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
      ignoreOrder: false
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [{
          loader: miniCssExtractPlugin.loader,
          options: {
            publicPath: '../',
          },
        },
          'css-loader'
        ],
      },
    ],
  }
};


