const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let config = {
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
      {test: /\.vue$/, use: 'vue-loader'},
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
      {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
      {test: /\.(jpg|png|svg|ttf|woff|woff2|aot)$/, use: 'url-loader?limit=8194'}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html'
    })
  ],
  devtool: 'source-map'
}

module.exports = config;
