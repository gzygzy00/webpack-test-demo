const htmlWebpackPlugin = require('html-webpack-plugin');   //导入插件

var path = require('path');

module.exports = {
  mode: 'development',
  // entry: './foo.js',
  output: {
    // path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
  },
  plugins: [new htmlWebpackPlugin({
    title: 'app',
    template: "src/assets/index.html"
  })],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  }
};


