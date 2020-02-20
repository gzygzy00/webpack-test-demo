```
1.
npm init -y

2.
npm install webpack webpack-cli --save-dev
yarn add webpack webpack-cli --dev

3.
./node_modules/.bin/webpack --version

npx webpack

webpack.config.js
var path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
  }
};


4.
package.json
"script":
"build": "rm -rf dist (;)&& (npx) webpack"

yarn build


5.引入html
yarn add html-webpack-plugin --dev

const htmlWebpackPlugin = require('html-webpack-plugin');   //导入插件
module.exports = {
    plugins:[   //配置插件的节点
        new htmlWebpackPlugin({   //创建一个在内存中生成html页面的插件
            template:path.join(__dirname,'./src/index.html'),   //指定模板页面
            //将来会根据此页面生成内存中的页面
            filename:'index.html'   //指定生成页面的名称，index.html浏览器才会默认直接打开
        })
    ]
}


6.引入CSS
yarn add css-loader --dev
yarn add style-loader --dev

module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  }

http-server . -c-1
```