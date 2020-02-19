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
```