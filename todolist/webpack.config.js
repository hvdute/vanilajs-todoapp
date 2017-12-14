const path = require('path');
const Webpack = require('webpack');

module.exports = {
  entry: "./js/main.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  devtool: 'inline-source-map',
  plugins: [
    new Webpack.NamedModulesPlugin(),
    new Webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    // contentBase: path.resolve(__dirname),
    // filename: 'bundle.js',
    // publicPath: 'http://localhost:9000/dist/',
    port: 9000,
    hot: true
  }
}