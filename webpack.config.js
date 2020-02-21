const htmlWebpackPlugin = require('html-webpack-plugin');   //导入插件
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path');
const base = require('./webpack.config.base')

module.exports = {
  ...base,  // 引入base的所有属性
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  }
};


