const path = require('path');

module.exports = {
  entry: "./js/main.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  devServer: {
    // contentBase: path.resolve(__dirname),
    // filename: 'bundle.js',
    // publicPath: 'http://localhost:9000/dist/',
    port: 9000,
    // hot: true
  }
}