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
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.less$/,
        loader: ['style-loader', 'css-loader', 'less-loader'] // 将 Less 编译为 CSS
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          {
            loader: 'sass-loader',
            options: {
              // Prefer `dart-sass`
              implementation: require('dart-sass'),
            },
          }
        ],
      },
      {
        test: /\.styl$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "stylus-loader" // compiles Stylus to CSS
          },
        ],
      },
    ],
  },
};


