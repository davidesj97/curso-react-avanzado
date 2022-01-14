const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  output: {
    filename: 'app.bundler.js'
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}