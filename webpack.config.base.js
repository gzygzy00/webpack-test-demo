const htmlWebpackPlugin = require('html-webpack-plugin');   //导入插件
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    // path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
  },
  plugins: [
    new htmlWebpackPlugin({
      title: 'app',
      template: "src/assets/index.html"
    }),
  ],
};


